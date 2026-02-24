import { openrouter } from "@/src/lib/openrouter";
import { MyPortfolioData } from "./data";

export async function generateAIResponse(message: string): Promise<string> {
  const systemPrompt = `
    You are a professional assistant for ${MyPortfolioData.fullName.firstName}. 
    Use the following portfolio data to answer the user:
    ${JSON.stringify(MyPortfolioData)}

    RULES:
    1. ONLY answer questions related to the portfolio data provided.
    2. If the user asks something NOT in the data, politely say: "I'm sorry, I am only programmed to answer questions about ${MyPortfolioData.fullName.firstName}'s work."
    3. Keep answers concise and friendly.
  `;

  const completion = await openrouter.chat.completions.create({
    model: "arcee-ai/trinity-large-preview:free",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: message },
    ],
  });

  // Extract content safely and return a string
  return completion.choices[0]?.message?.content || "No response generated.";
}
