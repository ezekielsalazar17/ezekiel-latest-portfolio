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
    console.error("API Route Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
