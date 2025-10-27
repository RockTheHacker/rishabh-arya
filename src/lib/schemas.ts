import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ChatMessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string(),
});

export const ChatbotOrchestratorInputSchema = z.object({
  history: z.array(ChatMessageSchema).describe("The conversation history."),
  userInput: z.string().describe('The latest question or message from the user.'),
});

export const ChatbotOrchestratorOutputSchema = z.object({
  response: z.string().describe('The final response to be sent to the user.'),
});