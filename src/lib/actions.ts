"use server";

import { z } from "zod";
import { chatbotOrchestrator } from "@/ai/flows/chatbot-orchestrator";
import { ContactFormSchema } from "@/lib/schemas";
import type { ChatMessage } from "@/lib/types";

export async function submitContactForm(data: z.infer<typeof ContactFormSchema>) {
  const parsedData = ContactFormSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, message: "Invalid data." };
  }

  try {
    // In a real application, you would save this to a database or send an email.
    // For now, we can log it or use a simple lead capture flow if we want.
    console.log("New contact form submission:", parsedData.data);
    
    return { success: true, message: "Thank you for your message! I'll get back to you soon." };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}

export async function handleChatMessage(history: ChatMessage[], userInput: string): Promise<string> {
  try {
    const result = await chatbotOrchestrator({ history, userInput });
    return result.response;
  } catch (error) {
    console.error("Error handling chat message:", error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again in a moment.";
  }
}
