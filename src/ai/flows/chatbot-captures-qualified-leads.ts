'use server';

/**
 * @fileOverview A chatbot flow that captures contact information from visitors who are interested in Rishabh's services.
 *
 * - chatbotCapturesQualifiedLeads - A function that handles the chatbot interaction and captures lead information.
 * - ChatbotCapturesQualifiedLeadsInput - The input type for the chatbotCapturesQualifiedLeads function.
 * - ChatbotCapturesQualifiedLeadsOutput - The return type for the chatbotCapturesQualifiedLeads function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotCapturesQualifiedLeadsInputSchema = z.object({
  userInput: z.string().describe('The user input to the chatbot.'),
});
export type ChatbotCapturesQualifiedLeadsInput = z.infer<typeof ChatbotCapturesQualifiedLeadsInputSchema>;

const ChatbotCapturesQualifiedLeadsOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user.'),
  leadCaptured: z.boolean().describe('Whether or not the chatbot captured lead information.'),
});
export type ChatbotCapturesQualifiedLeadsOutput = z.infer<typeof ChatbotCapturesQualifiedLeadsOutputSchema>;

export async function chatbotCapturesQualifiedLeads(input: ChatbotCapturesQualifiedLeadsInput): Promise<ChatbotCapturesQualifiedLeadsOutput> {
  return chatbotCapturesQualifiedLeadsFlow(input);
}

const captureLeadTool = ai.defineTool({
  name: 'captureLead',
  description: 'Captures the user contact information when the user expresses interest in Rishabh\'s services.',
  inputSchema: z.object({
    name: z.string().describe('The user\'s name.'),
    email: z.string().email().describe('The user\'s email address.'),
    message: z.string().describe('Additional message from the user describing their needs.'),
  }),
  outputSchema: z.boolean().describe('Returns true if the lead was successfully captured.'),
}, async (input) => {
  // TODO: Implement the logic to save the lead information to a database or send it via email.
  console.log('Lead captured:', input);
  return true;
});

const prompt = ai.definePrompt({
  name: 'chatbotCapturesQualifiedLeadsPrompt',
  input: {schema: ChatbotCapturesQualifiedLeadsInputSchema},
  output: {schema: ChatbotCapturesQualifiedLeadsOutputSchema},
  tools: [captureLeadTool],
  prompt: `You are a chatbot assisting visitors to Rishabh's portfolio website. Your primary goal is to answer questions about Rishabh's skills, experience, and projects, and to identify and capture qualified leads.

  If a user expresses interest in Rishabh's web/app development services, use the captureLead tool to collect their name, email, and a message describing their needs. Be polite and professional.

  User input: {{{userInput}}}
  `,
});

const chatbotCapturesQualifiedLeadsFlow = ai.defineFlow(
  {
    name: 'chatbotCapturesQualifiedLeadsFlow',
    inputSchema: ChatbotCapturesQualifiedLeadsInputSchema,
    outputSchema: ChatbotCapturesQualifiedLeadsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
