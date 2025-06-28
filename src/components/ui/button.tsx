import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold uppercase ring-offset-background transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 before:content-[''] before:absolute before:z-[-1] before:top-0 before:bottom-0 before:right-0 before:h-full before:w-0 before:transition-all before:duration-500 before:ease-out hover:before:w-full hover:before:right-0 [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>i]:pointer-events-none [&>i]:leading-none [&>i]:shrink-0",
  {
    variants: {
      variant: {
        "filled-light": "bg-white text-black before:bg-secondary hover:text-black",
        "filled-dark": "bg-black text-white before:bg-secondary hover:text-white",
        "outline-light": "border-2 border-white bg-transparent text-white before:bg-white hover:text-black",
        "outline-dark": "border-2 border-black bg-transparent text-black before:bg-black hover:text-white",
        // Keep existing variants for backward compatibility
        filled: "bg-primary text-primary-foreground before:bg-primary/90 hover:text-primary-foreground",
        ghost: "text-foreground bg-transparent hover:text-secondary-foreground before:bg-transparent",
        link: "text-primary underline-offset-4 hover:underline before:hidden",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "filled-light",
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
    const roundedStyles = size !== 'icon' &&
      (variant === 'filled-light' || variant === 'filled-dark' || variant === 'outline-light' || variant === 'outline-dark' || variant === 'filled') &&
      !className?.includes('rounded')
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
        <span className="relative z-10">{children}</span>
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
