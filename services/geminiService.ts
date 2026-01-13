
import { GoogleGenAI } from "@google/genai";

export const getDigitalStrategy = async (industry: string, goals: string, currentStatus: string) => {
  // Always initialize GoogleGenAI with { apiKey: process.env.API_KEY } directly
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Using gemini-3-pro-preview for complex reasoning tasks like business strategy
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: `Industry: ${industry}\nBusiness Goals: ${goals}\nCurrent Status: ${currentStatus}`,
    config: {
      systemInstruction: "You are the Lead Strategist at OptiScale Digital, a premier UK agency. Provide a professional, concise, and high-impact digital strategy recommendation. Focus your advice around our 6 core pillars: Website Design & Development, SEO, Social Media Marketing, PPC, Content & Lead Generation, and AI Automation. Tailor recommendations specifically for a UK-based business context. Format the output with clear headings and bullet points.",
      temperature: 0.7,
      thinkingConfig: { thinkingBudget: 0 } // Standard response for strategy
    }
  });

  return response.text;
};
