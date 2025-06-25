
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden z-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_i]:pointer-events-none [&_i]:leading-none [&_i]:shrink-0",
  {
    variants: {
      variant: {
        filled: "bg-white text-black group-hover:text-secondary-foreground rounded-tl-[40px] rounded-tr-[6px] rounded-br-[20px] rounded-bl-[40px]",
        'outline-light': "border-2 border-white bg-transparent text-white group-hover:text-black rounded-tl-[40px] rounded-tr-[6px] rounded-br-[20px] rounded-bl-[40px]",
        'outline-dark': "border-2 border-black bg-transparent text-black group-hover:text-white rounded-tl-[40px] rounded-tr-[6px] rounded-br-[20px] rounded-bl-[40px]",
        ghost: "text-foreground bg-transparent hover:text-secondary-foreground hover:bg-secondary",
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
    const Comp = asChild ? Slot : "button"

    // Simple variants (link, ghost) and asChild usage have a simpler structure
    if (asChild || variant === "link" || variant === "ghost") {
      // For asChild, we must pass a single child to Slot, so we can't use the span animation.
      // The hover:bg will be handled by a simple transition if we add it.
      // For now, this fixes the crash. Text color will still change on hover.
       const hoverBgClass = asChild ? (variant === "filled" ? "hover:bg-secondary" : variant === "outline-light" ? "hover:bg-white" : variant === "outline-dark" ? "hover:bg-black" : "") : ""
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }), hoverBgClass)}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      )
    }
    
    // Default buttons with the slide animation
    const hoverBgClass =
      variant === "filled"
        ? "bg-secondary"
        : variant === "outline-light"
        ? "bg-white"
        : variant === "outline-dark"
        ? "bg-black"
        : "bg-secondary";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 transition-colors duration-300 ease-in-out">
          {children}
        </span>
        <span
          className={cn(
            "absolute inset-0 z-0 h-full w-full translate-x-full transform transition-transform duration-300 ease-in-out group-hover:translate-x-0",
            hoverBgClass
          )}
        />
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

