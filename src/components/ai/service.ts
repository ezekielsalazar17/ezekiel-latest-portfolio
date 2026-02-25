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
    4. Keep your answer not longer than 100 words.
    5. You can answer in english if english is the user input.
    6. You can answer in tagalog if tagalog is the user input.
  `;

  const completion = await openrouter.chat.completions.create({
    model: "arcee-ai/trinity-large-preview:free",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: message },
    ],
  });

  return completion.choices[0]?.message?.content || "No response generated.";
}
