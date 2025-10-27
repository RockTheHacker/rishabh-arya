'use server';
/**
 * @fileOverview This file defines a master Genkit flow that orchestrates the chatbot's behavior.
 * It determines whether to answer a question, pitch services, or capture a lead.
 *
 * - chatbotOrchestrator - The main function that processes user input and conversation history.
 * - ChatbotOrchestratorInput - The input type for the flow.
 * - ChatbotOrchestratorOutput - The output type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {
  ChatbotOrchestratorInputSchema,
  ChatbotOrchestratorOutputSchema
} from '@/lib/schemas';


export type ChatbotOrchestratorInput = z.infer<typeof ChatbotOrchestratorInputSchema>;
export type ChatbotOrchestratorOutput = z.infer<typeof ChatbotOrchestratorOutputSchema>;

export async function chatbotOrchestrator(input: ChatbotOrchestratorInput): Promise<ChatbotOrchestratorOutput> {
  return chatbotOrchestratorFlow(input);
}

const captureLeadTool = ai.defineTool({
  name: 'captureLead',
  description: "Use this tool to save a user's contact information ONLY when they have provided their name, email, and a message about their project needs. Do not make up information.",
  inputSchema: z.object({
    name: z.string().describe("The user's full name."),
    email: z.string().email().describe("The user's email address."),
    message: z.string().describe('The message from the user describing their project or needs.'),
  }),
  outputSchema: z.boolean(),
}, async (input) => {
  console.log('LEAD CAPTURED:', input);
  // In a real app, you would save this to a database (e.g., Firestore).
  return true;
});

const prompt = ai.definePrompt({
  name: 'chatbotOrchestratorPrompt',
  input: {schema: ChatbotOrchestratorInputSchema},
  output: {schema: ChatbotOrchestratorOutputSchema},
  tools: [captureLeadTool],
  prompt: `You are an AI assistant for Rishabh Arya, a Full Stack MERN Developer. Your goal is to be helpful, professional, and to identify potential clients.

You have three main tasks:
1.  **Answer Questions:** Answer questions about Rishabh's skills, experience, and projects based on his resume below. Be concise and professional.
2.  **Pitch Services:** If a user expresses interest in hiring a developer, starting a project, or asks about rates/availability, subtly pitch Rishabh's services. Example: "It sounds like you have a project in mind. Rishabh specializes in building scalable web applications with the MERN stack. He'd be happy to discuss your needs."
3.  **Capture Leads:** If a user provides their name, email, and a message about what they need, use the \`captureLead\` tool to save their information. After using the tool, confirm with a message like: "Thank you! I've passed your details to Rishabh. He'll be in touch shortly." If they show interest but don't provide all details, gently ask for the missing information.

**Conversation History:**
{{#each history}}
  **{{role}}**: {{content}}
{{/each}}

**User's Latest Message:** {{{userInput}}}

**Rishabh's Resume:**
---
**Summary:** Results-driven full stack developer and project manager with over four years’ experience architecting, building, and maintaining robust web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Expert at leading technical teams, designing scalable modules, delivering enterprise-grade projects, and translating business needs into high-performance digital solutions. Strong mentor and communicator, skilled in client-facing work, agile delivery, and end-to-end execution.

**Experience:**
- Lead Full Stack Developer & Project Manager at GenMantra Corp (Feb 2025 – Present): Designed, built, and launched scalable web apps for B2B/B2C clients. Led, mentored, and managed full-stack engineering teams. Oversaw Agile practices, CI/CD pipeline integration, and technical review.
- Senior MERN Developer & Team Lead at SkillOnTime (May 2023 – Nov 2024): Architected EdTech/SaaS products with modular dashboards, authentication, and cloud deployment. Led cloud API development and technical best practices adoption.
- Full Stack Project Manager at Techidata Solutions (Apr 2022 – May 2023): Delivered multiple multi-module applications and managed backend integrations, reporting, and optimization.
- Freelance MERN Consultant for Various Startups (Jun 2021 – Present): Created SaaS, e-commerce, and education platforms. Specialized in rapid MVP delivery, technical mentoring, and reusable codebase setup.

**Skills:**
- Frontend: React.js (Hooks, Context, Redux), Tailwind CSS, Material-UI, Responsive Design
- Backend: Node.js, Express.js, RESTful APIs, Socket.IO, Authentication/OAuth
- Database: MongoDB, Mongoose, Aggregations
- DevOps/Cloud: Git, GitHub, Docker, AWS, Firebase Hosting, CI/CD
- Testing: Jest, Enzyme, Postman
- Project Leadership: Agile Scrum, Team Mentoring, Client Communication
- Soft Skills: Technical communication, Problem solving, Collaboration, Mentoring, Stakeholder Engagement
---

Based on the conversation and the user's latest message, generate the most appropriate response.
`,
});

const chatbotOrchestratorFlow = ai.defineFlow(
  {
    name: 'chatbotOrchestratorFlow',
    inputSchema: ChatbotOrchestratorInputSchema,
    outputSchema: ChatbotOrchestratorOutputSchema,
  },
  async (input) => {
    const llmResponse = await prompt(input);

    const toolCalls = llmResponse.toolCalls();
    if (toolCalls.length > 0) {
      // If the model decides to use the captureLead tool, we override the response
      // to give a standard confirmation message.
      // In a real app you might want to wait for the tool output using llmResponse.toolRequest()
      return { response: "Thank you! Rishabh has received your details and will get in touch with you shortly." };
    }
    
    const output = llmResponse.output();
    if (!output) {
      throw new Error("Flow failed to generate valid output.");
    }

    return output;
  }
);
