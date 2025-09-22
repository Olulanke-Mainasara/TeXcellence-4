import { NextResponse } from "next/server";
import { z } from "zod";

const sponsorSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  organisation: z.string(),
  phone: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = sponsorSchema.parse(body);

    // Example: Save to DB or send email
    console.log("New Sponsor:", validated);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }
}
