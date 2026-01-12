
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const optimizeDeliveryNote = async (note: string): Promise<string> => {
  if (!note || !API_KEY) return note;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Translate or reformat this delivery instruction into a clear, professional, and polite Korean note for a delivery driver. Keep it concise. Input: "${note}"`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text || note;
  } catch (error) {
    console.error("Gemini optimization error:", error);
    return note;
  }
};
