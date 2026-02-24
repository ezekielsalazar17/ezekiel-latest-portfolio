import { generateAIResponse } from "@/src/components/ai/service";
import { NextResponse } from "next/server";

interface ChatRequestBody {
  message: string;
}

export async function POST(req: Request) {
  try {
    const { message }: ChatRequestBody = await req.json();

    const reply = await generateAIResponse(message);

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    console.error("API Route Error:", errorMessage);

    return NextResponse.json({ error: "Failed to get reply" }, { status: 500 });
  }
}
