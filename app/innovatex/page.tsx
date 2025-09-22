"use client";

import { InnovateXForm } from "@/components/Home-Page/Forms/InnovateX";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/components/staticData";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const InnovateX = () => {
  const [value, setValue] = useState<string>();

  return (
    <>
      <section className="pt-20">
        <section className="w-full max-w-(--breakpoint-xl) flex flex-col-reverse lg:flex-row lg:justify-between gap-8 lg:gap-0 p-4 md:px-6 xl:px-0 items-center">
          <InnovateXForm />
          <div className="bg-muted rounded-lg p-6 lg:w-1/2">
            <div className="h-full flex flex-col gap-14 justify-around">
              <div>
                <p className="max-w-lg">
                  InnovateX is a structured startup pitch competition designed
                  to discover, showcase, and accelerate the most promising tech
                  innovation across the African continent.
                </p>
              </div>

              <h1 className="text-7xl md:text-8xl text-center">
                Innovate
                <span className="text-blue-900 dark:text-blue-700">X</span>
              </h1>

              <div className="flex justify-end">
                <p className="text-right max-w-[480px]">
                  By leveraging the Texcellence Conference to provide a global
                  platform, substantial financial support, and mentorship from
                  industry leaders, InnovateX aims to bridge the gap between
                  African startups with promising ideas into scalable businesses
                  with global impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="w-full max-w-(--breakpoint-xl) mx-auto px-4 md:px-6 xl:px-0 flex flex-col-reverse gap-6 md:gap-0 md:flex-row my-24">
            <div className="p-8 rounded-lg bg-muted w-full">
              <h2 className="text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-tighter">
                Eligibility Criteria
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Startups must meet all of the following requirements before
                applying:
              </p>
              <div className="mt-4">
                <ul className="list-disc space-y-2 text-lg">
                  <li>Must not have received seed funding</li>
                  <li>Employ under 10 team members, founders included.</li>
                  <li>Have been in operation for 3 years or less</li>
                  <li>
                    Present at least a working prototype or Minimum Viable
                    Product (MVP)
                  </li>
                  <li>
                    Offer a tech-driven solution with potential for scaling
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-center md:items-center lg:w-full">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">
                Benefits
              </h2>
              <div className="mt-4 pl-4 md:pl-9">
                <ul className="list-disc text-lg space-y-2 max-w-sm">
                  <li>
                    Equity-free cash prizes for first, second, and third place
                    winners
                  </li>
                  <li>Media coverage package</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6 items-center justify-center px-4 md:px-6 xl:px-0 mt-24 mb-16">
          <div className="w-full max-w-(--breakpoint-xl)">
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-tighter">
              Frequently Asked Questions
            </h2>
            <div className="mt-4 w-full grid md:grid-cols-2 gap-x-10">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                value={value}
                onValueChange={setValue}
              >
                {faqs.slice(0, 5).map(({ question, answer }, index) => (
                  <AccordionItem key={question} value={`question-${index}`}>
                    <div className="flex">
                      <AccordionTrigger
                        className={cn(
                          "flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                          "text-start text-lg"
                        )}
                      >
                        {question}
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="text-base text-muted-foreground text-pretty">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Accordion
                type="single"
                collapsible
                className="w-full"
                value={value}
                onValueChange={setValue}
              >
                {faqs.slice(5, 10).map(({ question, answer }, index) => (
                  <AccordionItem key={question} value={`question-${index + 5}`}>
                    <div className="flex">
                      <AccordionTrigger
                        className={cn(
                          "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                          "text-start text-lg"
                        )}
                      >
                        {question}
                      </AccordionTrigger>
                    </div>
                    <AccordionContent className="text-base text-muted-foreground text-pretty">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <Link href="/faqs" className="mx-auto">
            <Button className="cursor-pointer py-6 text-lg">
              <MessageCircle className="size-6 text-blue-700" />
              See more questions
            </Button>
          </Link>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default InnovateX;
