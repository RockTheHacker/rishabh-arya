"use server";

import { z } from "zod";
import { chatbotAnswersResumeQuestions } from "@/ai/flows/chatbot-answers-resume-questions";
import { chatbotPitchesServices } from "@/ai/flows/chatbot-pitches-services";
import { chatbotCapturesQualifiedLeads } from "@/ai/flows/chatbot-captures-qualified-leads";
import { ContactFormSchema } from "@/lib/schemas";
import type { ChatMessage } from "@/lib/types";

export async function submitContactForm(data: z.infer<typeof ContactFormSchema>) {
  const parsedData = ContactFormSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, message: "Invalid data." };
  }

  try {
    // In a real application, you would save this to a database or send an email.
    await chatbotCapturesQualifiedLeads({ userInput: `Name: ${parsedData.data.name}, Email: ${parsedData.data.email}, Message: ${parsedData.data.message}` });
    
    return { success: true, message: "Thank you for your message! I'll get back to you soon." };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

export async function handleChatMessage(history: ChatMessage[], userInput: string): Promise<string> {
  try {
    // 1. Check for lead capture intent
    const leadCapture = await chatbotCapturesQualifiedLeads({ userInput });
    if (leadCapture.leadCaptured) {
      return leadCapture.response;
    }

    // 2. Determine if a sales pitch is appropriate
    const pitchDecision = await chatbotPitchesServices({ userInput });

    // 3. Get a factual answer based on resume context
    const resumeAnswer = await chatbotAnswersResumeQuestions({ question: userInput });

    let botResponse = resumeAnswer.answer;

    if (pitchDecision.shouldPitch && pitchDecision.pitchMessage) {
        botResponse += `\n\n${pitchDecision.pitchMessage}`;
    }

    return botResponse;
  } catch (error) {
    console.error("Error handling chat message:", error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again in a moment.";
  }
}
