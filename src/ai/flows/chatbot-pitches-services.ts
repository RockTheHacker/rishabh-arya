'use server';

/**
 * @fileOverview A Genkit flow that determines when and how to pitch Rishabh's development services based on user interest.
 *
 * - chatbotPitchesServices - A function that processes user input and determines if a sales pitch is appropriate.
 * - ChatbotPitchesServicesInput - The input type for the chatbotPitchesServices function.
 * - ChatbotPitchesServicesOutput - The return type for the chatbotPitchesServices function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotPitchesServicesInputSchema = z.object({
  userInput: z.string().describe('The user input to be processed.'),
});
export type ChatbotPitchesServicesInput = z.infer<typeof ChatbotPitchesServicesInputSchema>;

const ChatbotPitchesServicesOutputSchema = z.object({
  shouldPitch: z.boolean().describe('A boolean indicating whether a sales pitch should be made.'),
  pitchMessage: z.string().optional().describe('The sales pitch message to display to the user.'),
});
export type ChatbotPitchesServicesOutput = z.infer<typeof ChatbotPitchesServicesOutputSchema>;

export async function chatbotPitchesServices(input: ChatbotPitchesServicesInput): Promise<ChatbotPitchesServicesOutput> {
  return chatbotPitchesServicesFlow(input);
}

const pitchDecisionPrompt = ai.definePrompt({
  name: 'pitchDecisionPrompt',
  input: {schema: ChatbotPitchesServicesInputSchema},
  output: {schema: ChatbotPitchesServicesOutputSchema},
  prompt: `You are a sales support AI for Rishabh, a web and app developer.
  The user has provided the following input: {{{userInput}}}
  
  Your task is to determine if the user's input suggests they might be interested in hiring a developer or discussing a project.
  
  - If the input mentions things like "hiring", "project", "build an app", "need a website", "MERN developer needed", or asks about Rishabh's availability or rates, you should make a pitch.
  - If the user is just asking for information about Rishabh's skills or past projects, do NOT make a pitch.
  
  Your response must be a JSON object with two fields:
  - \`shouldPitch\`: Set to \`true\` if a pitch is appropriate, otherwise \`false\`.
  - \`pitchMessage\`: If \`shouldPitch\` is true, provide a friendly and relevant message. Example: "It looks like you might be looking for a developer. Rishabh has deep expertise in the MERN stack and building scalable applications. Would you be interested in discussing your project?" If \`shouldPitch\` is false, omit this field.
  `,
});

const chatbotPitchesServicesFlow = ai.defineFlow(
  {
    name: 'chatbotPitchesServicesFlow',
    inputSchema: ChatbotPitchesServicesInputSchema,
    outputSchema: ChatbotPitchesServicesOutputSchema,
  },
  async input => {
    const {output} = await pitchDecisionPrompt(input);
    return output!;
  }
);
