
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold uppercase ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>i]:pointer-events-none [&>i]:leading-none [&>i]:shrink-0",
  {
    variants: {
      variant: {
        filled: "bg-primary text-primary-foreground hover:bg-primary/90",
        'outline-light': "border-2 border-white bg-transparent text-white hover:bg-white hover:text-black",
        'outline-dark': "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
        ghost: "text-foreground bg-transparent hover:text-secondary-foreground hover:bg-secondary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const baseStyles = buttonVariants({ variant, size });

    // Special rounded styles for specific variants.
    const roundedStyles = (variant === 'filled' || variant === 'outline-light' || variant === 'outline-dark') && !className?.includes('rounded')
      ? "rounded-tl-[40px] rounded-tr-[12px] rounded-br-[40px] rounded-bl-[40px]"
      : "";

    // Specific styles for icon size to ensure it's a circle.
    const iconStyles = size === 'icon' ? "rounded-full" : "";

    return (
      <Comp
        className={cn(baseStyles, roundedStyles, iconStyles, className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
