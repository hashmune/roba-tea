'use server';

import { getTeaPairingSuggestions } from '@/ai/flows/tea-pairing-suggestions';
import { z } from 'zod';

const formSchema = z.object({
  foodPreferences: z.string().min(10, 'Please describe your food preferences in a bit more detail.'),
  flavorProfiles: z.string().min(10, 'Please describe your desired flavor profiles in a bit more detail.'),
});

export type FormState = {
  message: string;
  data?: {
    teaSuggestions: string[];
    reasoning: string;
  };
  errors?: {
    foodPreferences?: string[];
    flavorProfiles?: string[];
  };
};

export async function suggestPairing(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    foodPreferences: formData.get('foodPreferences'),
    flavorProfiles: formData.get('flavorProfiles'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Please correct the errors below.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await getTeaPairingSuggestions(validatedFields.data);
    return {
      message: 'Here are your personalized tea pairing suggestions.',
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred with the AI service. Please try again later.',
    };
  }
}
