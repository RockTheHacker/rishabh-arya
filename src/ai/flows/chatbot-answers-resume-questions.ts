'use server';
/**
 * @fileOverview This file defines a Genkit flow for a chatbot that answers questions about Rishabh's resume.
 *
 * - chatbotAnswersResumeQuestions - A function that takes a user's question and returns an answer based on Rishabh's resume information.
 * - ChatbotAnswersResumeQuestionsInput - The input type for the chatbotAnswersResumeQuestions function.
 * - ChatbotAnswersResumeQuestionsOutput - The return type for the chatbotAnswersResumeQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotAnswersResumeQuestionsInputSchema = z.object({
  question: z.string().describe('The question the user asks about Rishabh.'),
});
export type ChatbotAnswersResumeQuestionsInput = z.infer<typeof ChatbotAnswersResumeQuestionsInputSchema>;

const ChatbotAnswersResumeQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question, based on Rishabhs resume.'),
});
export type ChatbotAnswersResumeQuestionsOutput = z.infer<typeof ChatbotAnswersResumeQuestionsOutputSchema>;

export async function chatbotAnswersResumeQuestions(input: ChatbotAnswersResumeQuestionsInput): Promise<ChatbotAnswersResumeQuestionsOutput> {
  return chatbotAnswersResumeQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotAnswersResumeQuestionsPrompt',
  input: {schema: ChatbotAnswersResumeQuestionsInputSchema},
  output: {schema: ChatbotAnswersResumeQuestionsOutputSchema},
  prompt: `You are a chatbot answering questions about Rishabh Arya's resume. Use the following information to answer the question.

Summary: Results-driven full stack developer and project manager with over four years’ experience architecting, building, and maintaining robust web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Expert at leading technical teams, designing scalable modules, delivering enterprise-grade projects, and translating business needs into high-performance digital solutions. Strong mentor and communicator, skilled in client-facing work, agile delivery, and end-to-end execution.

Experience:
- Lead Full Stack Developer & Project Manager at GenMantra Corp (Feb 2025 – Present): Designed, built, and launched scalable web apps for B2B/B2C clients. Led, mentored, and managed full-stack engineering teams. Oversaw Agile practices, CI/CD pipeline integration, and technical review.
- Senior MERN Developer & Team Lead at SkillOnTime (May 2023 – Nov 2024): Architected EdTech/SaaS products with modular dashboards, authentication, and cloud deployment. Led cloud API development and technical best practices adoption.
- Full Stack Project Manager at Techidata Solutions (Apr 2022 – May 2023): Delivered multiple multi-module applications and managed backend integrations, reporting, and optimization.
- Freelance MERN Consultant for Various Startups (Jun 2021 – Present): Created SaaS, e-commerce, and education platforms. Specialized in rapid MVP delivery, technical mentoring, and reusable codebase setup.

Skills:
- Frontend: React.js (Hooks, Context, Redux), Tailwind CSS, Material-UI, Responsive Design
- Backend: Node.js, Express.js, RESTful APIs, Socket.IO, Authentication/OAuth
- Database: MongoDB, Mongoose, Aggregations
- DevOps/Cloud: Git, GitHub, Docker, AWS, Firebase Hosting, CI/CD
- Testing: Jest, Enzyme, Postman
- Project Leadership: Agile Scrum, Team Mentoring, Client Communication
- Soft Skills: Technical communication, Problem solving, Collaboration, Mentoring, Stakeholder Engagement

Projects:
- Vinkap Enterprise Platform: Supply chain for bakeries and QSRs.
- Manasvini – Spandana Classical Arts Portal: Portal for classical dance registration and video galleries.
- Exaministry EdTech Platform: Education portal for UPSC/exam prep.
- Dr. Raja Rawal B2B Dashboard: Appointment and consultation management dashboard.

Education: Bachelor of Science in Physics, Chemistry, Math

Question: {{{question}}}`,
});

const chatbotAnswersResumeQuestionsFlow = ai.defineFlow(
  {
    name: 'chatbotAnswersResumeQuestionsFlow',
    inputSchema: ChatbotAnswersResumeQuestionsInputSchema,
    outputSchema: ChatbotAnswersResumeQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
