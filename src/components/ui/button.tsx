import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-l-full rounded-br-full rounded-tr-[4px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden z-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_i]:pointer-events-none [&_i]:leading-none [&_i]:shrink-0",
  {
    variants: {
      variant: {
        outline: "border border-foreground bg-transparent text-foreground hover:text-secondary-foreground hover:bg-secondary",
        primary: "bg-primary text-primary-foreground hover:text-secondary-foreground hover:bg-secondary",
        destructive:
          "bg-destructive text-destructive-foreground hover:text-secondary-foreground hover:bg-secondary",
        secondary:
          "bg-secondary text-secondary-foreground hover:text-secondary-foreground",
        ghost: "text-foreground bg-transparent hover:text-secondary-foreground hover:bg-secondary",
        accent: "bg-accent text-accent-foreground hover:text-secondary-foreground hover:bg-secondary",
        link: "text-primary underline-offset-4 hover:underline !overflow-visible",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "outline",
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
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    if (variant === "link" || variant === "ghost") {
      return (
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 transition-colors duration-300 ease-in-out">
          {children}
        </span>
        <span className="absolute inset-0 z-0 h-full w-full translate-x-full transform bg-secondary transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
