
import { GoogleGenAI } from "@google/genai";

const CONTEXT = `
You are the Altrex Prime AI Assistant. Use the following company details to answer questions:
Company: Altrex Prime (Integrated Facilities Management & Security Services based in Dubai).
Location: Sajaya 01 B block Office NO 412 Al Qasis Dubai.
Experience: Over a decade in the industry.
Vision: To be a leading integrated partner in UAE recognized for reliability and innovation.
Mission: Deliver safe, efficient, and sustainable environments.
Services:
1. Integrated Facilities Management (Hard/Soft services, Civil works, Hospitality).
2. Elite Security Solutions (Manned guarding, Executive protection, Technical security).
3. Technical Works (Facade cleaning, IT infrastructure, Perimeter security, Aquatics).
Differentiator: Uniquely licensed for both Security Guarding and Total Facility Management.
Tone: Professional, helpful, modern, and secure.
`;

export async function askAltrexAssistant(prompt: string): Promise<string> {
  try {
    // Fixed: Initializing GoogleGenAI using process.env.API_KEY directly as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: CONTEXT,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Please contact us directly at our Dubai office.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our systems are experiencing a heavy load. Please try again or reach out to our team via the contact form.";
  }
}
