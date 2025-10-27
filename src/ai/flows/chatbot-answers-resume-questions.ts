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
  prompt: `You are a chatbot answering questions about Rishabh's resume. Use the following information to answer the question.\n\nSkills: Web Development, App Development, AI/ML, Typescript, Javascript, React, NextJS, Firebase, Genkit\nExperience: 5 years of experience in web and app development. Created multiple web applications and mobile applications for clients in various industries. Specializes in AI/ML projects.\nProjects: Created a plant diagnosis application, a chatbot application, and a resume application. \n\nQuestion: {{{question}}}`,
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
