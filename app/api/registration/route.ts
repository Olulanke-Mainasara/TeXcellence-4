import { NextResponse } from "next/server";
import { z } from "zod";

const registrationSchema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  country: z.string(),
  companyName: z.string(),
  jobDescription: z.string(),
  industry: z.string(),
  contactSource: z.string(),
  attendance: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = registrationSchema.parse(body);

    // Example: Save to DB or send confirmation email
    console.log("New Registration:", validated);

    return NextResponse.json(
      { message: "Registered successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }
}
