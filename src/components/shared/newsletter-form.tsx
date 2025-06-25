'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert("Thank you for subscribing!");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h3 className="text-lg font-headline font-semibold text-primary-foreground">Stay in the loop</h3>
      <p className="text-muted-foreground">
        Sign up for our newsletter to receive updates on new products, promotions, and tea-related content.
      </p>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input 
          type="email" 
          placeholder="your.email@example.com" 
          required 
          className="bg-background border-border focus:border-accent"
          aria-label="Email for newsletter"
        />
        <Button type="submit" variant="accent">
          Subscribe
        </Button>
      </div>
    </form>
  )
}
