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
  prompt: `You are a sales support AI for Rishabh, a web and app developer.\n
  The user has provided the following input: {{{userInput}}}\n
  Determine whether the user is expressing interest in Rishabh's services or a specific technology related to web or app development. If so, you should offer a sales pitch.

  Your response should contain two fields:
  - shouldPitch: true if the user is expressing interest, false otherwise.
  - pitchMessage: A brief sales pitch if shouldPitch is true. This message should highlight Rishabh's expertise and encourage the user to explore hiring options.\n  If shouldPitch is false, pitchMessage should be omitted.\n
  Example when shouldPitch is true:\n  {
    "shouldPitch": true,
    "pitchMessage": "I noticed you\'re interested in web development. Rishabh has extensive experience in building high-quality web applications. Would you like to explore how Rishabh can help with your project?"
  }

  Example when shouldPitch is false:\n  {
    "shouldPitch": false
  }`,
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
