
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

const getAI = () => new GoogleGenAI({ apiKey: API_KEY });

/**
 * Optimizes a delivery note to be more professional and clear in Korean.
 */
export const optimizeDeliveryNote = async (note: string): Promise<string> => {
  if (!note || !API_KEY) return note;

  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `다음 배송 요청사항을 배송 기사님이 읽기 편하도록 아주 친절하고 명확한 한국어 문장으로 다듬어줘. 원래 의미는 유지해야 해. 입력: "${note}"`,
      config: { thinkingConfig: { thinkingBudget: 0 } }
    });
    return response.text?.replace(/^["']|["']$/g, '') || note;
  } catch (error) {
    console.error("Gemini optimization error:", error);
    return note;
  }
};

/**
 * Analyzes the item description to provide safety handling tips.
 */
export const analyzeItemSafety = async (description: string): Promise<string> => {
  if (!description || !API_KEY) return "";

  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `사용자가 배송하려는 물품이 "${description}"이야. 이 물품을 안전하게 배송하기 위해 기사님이 주의해야 할 점 1가지를 아주 짧게(20자 이내) 알려줘. 예: "파손 주의, 눕히지 마세요"`,
      config: { thinkingConfig: { thinkingBudget: 0 } }
    });
    return response.text?.replace(/^["']|["']$/g, '') || "";
  } catch (error) {
    return "";
  }
};

/**
 * Provides context-aware answers for a delivery support chat.
 */
export const getSupportAnswer = async (question: string, context: string): Promise<string> => {
  if (!question || !API_KEY) return "죄송합니다. 현재 상담이 어렵습니다.";

  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `당신은 '당근배송'의 친절한 AI 상담원입니다. 다음 상황을 바탕으로 사용자의 질문에 답변하세요.\n상황: ${context}\n질문: ${question}\n답변은 부드러운 존댓말로, 짧고 명확하게 하세요.`,
      config: { thinkingConfig: { thinkingBudget: 0 } }
    });
    return response.text || "상담원에게 연결해 드릴까요?";
  } catch (error) {
    return "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};

/**
 * Refines a user review to be more constructive and polite.
 */
export const refineReview = async (text: string): Promise<string> => {
  if (!text || !API_KEY) return text;

  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `사용자가 작성한 배송 후기야: "${text}". 이 내용을 더 정중하고 읽기 좋은 감사 인사가 포함된 후기로 다듬어줘. 핵심 내용은 유지해.`,
      config: { thinkingConfig: { thinkingBudget: 0 } }
    });
    return response.text?.replace(/^["']|["']$/g, '') || text;
  } catch (error) {
    return text;
  }
};
