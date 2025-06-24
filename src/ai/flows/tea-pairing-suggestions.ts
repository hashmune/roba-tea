// src/ai/flows/tea-pairing-suggestions.ts
'use server';

/**
 * @fileOverview Provides tea pairing suggestions based on food preferences and desired flavor profiles.
 *
 * - getTeaPairingSuggestions - A function that returns personalized tea pairing suggestions.
 * - TeaPairingInput - The input type for the getTeaPairingSuggestions function.
 * - TeaPairingOutput - The return type for the getTeaPairingSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TeaPairingInputSchema = z.object({
  foodPreferences: z
    .string()
    .describe('The user food preferences, e.g., spicy, sweet, savory.'),
  flavorProfiles: z
    .string()
    .describe('Desired flavor profiles, e.g., fruity, floral, earthy.'),
});
export type TeaPairingInput = z.infer<typeof TeaPairingInputSchema>;

const TeaPairingOutputSchema = z.object({
  teaSuggestions: z
    .array(z.string())
    .describe('A list of suggested tea pairings based on the input.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the tea pairing suggestions.'),
});
export type TeaPairingOutput = z.infer<typeof TeaPairingOutputSchema>;

export async function getTeaPairingSuggestions(
  input: TeaPairingInput
): Promise<TeaPairingOutput> {
  return teaPairingSuggestionsFlow(input);
}

const teaPairingPrompt = ai.definePrompt({
  name: 'teaPairingPrompt',
  input: {schema: TeaPairingInputSchema},
  output: {schema: TeaPairingOutputSchema},
  prompt: `You are an expert tea sommelier. A user will provide their food preferences and desired flavor profiles, and you will return tea pairing suggestions.

Food Preferences: {{{foodPreferences}}}
Flavor Profiles: {{{flavorProfiles}}}

Based on these preferences, suggest tea pairings, considering the origin, flavor profiles, and ideal brewing methods of different tea varieties. Provide a brief reasoning for each suggestion.
`,
});

const teaPairingSuggestionsFlow = ai.defineFlow(
  {
    name: 'teaPairingSuggestionsFlow',
    inputSchema: TeaPairingInputSchema,
    outputSchema: TeaPairingOutputSchema,
  },
  async input => {
    const {output} = await teaPairingPrompt(input);
    return output!;
  }
);
