'use server';

import { chatbotOrchestrator } from "@/ai/flows/chatbot-orchestrator";
import { ContactFormSchema } from "@/lib/schemas";
import type { ChatMessage } from "@/lib/types";
import type { z } from "zod";

export async function submitContactForm(data: z.infer<typeof ContactFormSchema>) {
  const parsedData = ContactFormSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, message: "Invalid data." };
  }

  try {
    // This is a fire-and-forget call. We don't need the response for the contact form.
    // The lead will be captured by the orchestrator flow.
    await chatbotOrchestrator({
        history: [],
        userInput: `A new contact form submission was received. Name: ${parsedData.data.name}, Email: ${parsedData.data.email}, Message: ${parsedData.data.message}`
    })
    
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