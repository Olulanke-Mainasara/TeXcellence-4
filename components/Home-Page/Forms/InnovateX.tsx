"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const sponsorSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  organisation: z.string().min(2, "Organisation name is required"),
  phone: z
    .string()
    .min(6, "Enter a valid phone number")
    .regex(/^[0-9+\-()\s]+$/, "Invalid phone number"),
});

type SponsorFormValues = z.infer<typeof sponsorSchema>;

export function InnovateXForm() {
  const form = useForm<SponsorFormValues>({
    resolver: zodResolver(sponsorSchema),
    defaultValues: {
      name: "",
      email: "",
      organisation: "",
      phone: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: SponsorFormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/innovatex", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        toast.success("Thank you for registering as a participant!");
        form.reset();
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } catch {
      toast.error("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md rounded-l flex flex-col border h-fit xl:mx-auto justify-center p-6">
      <h2 className="text-4xl text-center font-bold mb-4">Become a sponsor</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="organisation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organisation Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Company / Organisation" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input placeholder="+234 812 345 6789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full text-lg cursor-pointer"
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>
      </Form>
      <p className="mt-3 text-xs text-center text-neutral-600">
        Note: It is our responsibility to protect your privacy and we guarantee
        that your data will be completely confidential.
      </p>
    </div>
  );
}
