import { openrouter } from "@/src/lib/openrouter";

export async function generateAIResponse(message: string) {
  const completion = await openrouter.chat.completions.create({
    model: "arcee-ai/trinity-large-preview:free",
    messages: [
      {
        role: "system",
        content: "You are an AI assistant for a facility management dashboard.",
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return completion.choices[0].message.content;
}
