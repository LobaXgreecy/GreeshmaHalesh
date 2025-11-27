import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PROFILE, EXPERIENCE, PROJECTS, SKILLS, EDUCATION } from '../constants';

// Construct a system prompt that gives the AI context about the portfolio owner
const SYSTEM_INSTRUCTION = `
You are an AI assistant living inside ${PROFILE.name}'s portfolio website.
Your goal is to answer questions about ${PROFILE.name}'s professional background, skills, and projects in a friendly, professional, and slightly witty manner.

Here is the context about ${PROFILE.name}:
- Title: ${PROFILE.title}
- Bio: ${PROFILE.bio}
- Location: ${PROFILE.location}
- Skills: ${SKILLS.join(', ')}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.institution} (${e.period}). GPA: ${e.gpa}`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.technologies.join(', ')})`).join('\n')}

Rules:
1. Keep answers concise (under 3 sentences) unless asked for details.
2. If asked about contact info, provide: ${PROFILE.email} or ${PROFILE.phone}.
3. If asked about something not in the resume, say you don't have that info but suggest checking the Resume section.
4. Be enthusiastic about the projects, especially the AI and Blockchain ones.
`;

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  // We initialize the client here to ensure we grab the latest key if it changes (though usually static env)
  if (!genAI) {
    // Safety check for API Key
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables.");
      throw new Error("API Key missing");
    }
    genAI = new GoogleGenAI({ apiKey });
  }

  chatSession = genAI.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm having trouble thinking right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I couldn't connect to the AI brain. Please check your API key configuration.";
  }
};