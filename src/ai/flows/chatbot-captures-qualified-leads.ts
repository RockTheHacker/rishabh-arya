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
  response: z
    .string()
    .describe(
      'The chatbot response to the user. This may be a request for more information or a confirmation that their details have been received.'
    ),
  leadCaptured: z
    .boolean()
    .describe(
      'Whether or not the chatbot has successfully captured all required lead information (name, email, and a message/need).'
    ),
});
export type ChatbotCapturesQualifiedLeadsOutput = z.infer<typeof ChatbotCapturesQualifiedLeadsOutputSchema>;

export async function chatbotCapturesQualifiedLeads(input: ChatbotCapturesQualifiedLeadsInput): Promise<ChatbotCapturesQualifiedLeadsOutput> {
  return chatbotCapturesQualifiedLeadsFlow(input);
}

const captureLeadTool = ai.defineTool({
  name: 'captureLead',
  description: 'Use this tool to save a user\'s contact information when they have provided their name, email, and a reason for contacting. Do not use it if any of this information is missing.',
  inputSchema: z.object({
    name: z.string().describe("The user's full name."),
    email: z.string().email().describe("The user's email address."),
    message: z.string().describe('A message from the user describing their needs or project.'),
  }),
  outputSchema: z.boolean(),
}, async (input) => {
  console.log('Lead captured:', input);
  // In a real app, you would save this to a database (e.g., Firestore).
  return true;
});


const prompt = ai.definePrompt({
  name: 'chatbotCapturesQualifiedLeadsPrompt',
  input: {schema: ChatbotCapturesQualifiedLeadsInputSchema},
  output: {schema: ChatbotCapturesQualifiedLeadsOutputSchema},
  tools: [captureLeadTool],
  prompt: `You are a chatbot on Rishabh Arya's portfolio. Your goal is to capture leads.

Analyze the user input to see if they are expressing interest in hiring Rishabh or starting a project.

- If the user provides their name, email, and a message about their needs, use the \`captureLead\` tool to save their information. Then, respond with a confirmation message like, "Thanks! I've received your details. Rishabh will get in touch shortly." and set \`leadCaptured\` to true.
- If the user expresses interest but does NOT provide all the necessary information (name, email, message), ask for the missing details. For example: "That's great! To get started, could you please provide your name, email, and a brief description of your project?" In this case, set \`leadCaptured\` to false.
- If the user is just asking general questions, do not try to capture a lead. Respond naturally to their question, and set \`leadCaptured\` to false.

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
    const response = await ai.generate({
      prompt: prompt.prompt,
      model: ai.lookupModel('googleai/gemini-2.5-flash'),
      tools: [captureLeadTool],
      input: { userInput: input.userInput },
      output: { schema: ChatbotCapturesQualifiedLeadsOutputSchema },
    });

    const output = response.output();
    if (!output) {
      throw new Error("Flow failed to generate valid output.");
    }
    
    // Check if the tool was called
    const toolCalls = response.toolCalls();
    if (toolCalls.length > 0) {
      // Assuming lead is captured if tool is called.
      return {
        ...output,
        response: "Thanks for your interest! Rishabh will get back to you soon.",
        leadCaptured: true
      };
    }
    
    return output;
  }
);
