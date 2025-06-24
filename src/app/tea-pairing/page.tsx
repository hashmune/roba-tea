'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { suggestPairing, FormState } from './actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

const initialState: FormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending} className="w-full bg-accent text-background hover:bg-accent/90">
      {pending ? 'Getting Suggestions...' : <> <Sparkles className="mr-2 h-4 w-4"/> Find My Tea Pairing </>}
    </Button>
  );
}

export default function TeaPairingPage() {
  const [state, formAction] = useFormState(suggestPairing, initialState);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.data) {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state.data]);

  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="mx-auto h-12 w-12 text-accent mb-4"/>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">AI Tea Pairing Tool</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Discover the perfect tea to complement your meal. Let our AI sommelier guide you to your next favorite pairing.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <Card className="bg-card border-border">
          <form action={formAction}>
            <CardHeader>
              <CardTitle className='font-headline text-2xl'>Describe Your Tastes</CardTitle>
              <CardDescription>The more detail you provide, the better the recommendation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="foodPreferences" className="text-lg">What kind of food are you eating?</Label>
                <Textarea
                  id="foodPreferences"
                  name="foodPreferences"
                  placeholder="e.g., Spicy Thai curry, a rich chocolate cake, grilled salmon with lemon..."
                  className="min-h-[100px] bg-secondary"
                  required
                />
                 {state.errors?.foodPreferences && <p className="text-sm text-destructive">{state.errors.foodPreferences[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="flavorProfiles" className="text-lg">What flavors are you looking for in a tea?</Label>
                <Textarea
                  id="flavorProfiles"
                  name="flavorProfiles"
                  placeholder="e.g., Something fruity and light, a bold and earthy flavor, a floral and aromatic tea..."
                  className="min-h-[100px] bg-secondary"
                  required
                />
                {state.errors?.flavorProfiles && <p className="text-sm text-destructive">{state.errors.flavorProfiles[0]}</p>}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <SubmitButton />
              {state.message && !state.data && <p className="text-sm text-center text-destructive">{state.message}</p>}
            </CardFooter>
          </form>
        </Card>

        {state.data && (
          <div ref={resultsRef} className="mt-12 animate-in fade-in duration-500">
            <Card className="bg-secondary border-accent/50">
              <CardHeader>
                <CardTitle className="text-3xl font-headline text-accent flex items-center gap-2">
                  <Leaf /> Your Tea Pairings
                </CardTitle>
                <CardDescription>{state.message}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-2">Suggestions:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {state.data.teaSuggestions.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Reasoning:</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{state.data.reasoning}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
