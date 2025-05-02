import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * @component Button
 * @description
 *   A versatile button component that can be customized with different variants and sizes.
 *   This component is built using `class-variance-authority` for easy styling and Radix UI's `Slot` component for flexible rendering.
 *
 *   @usage
 *     Use this component whenever you need a button in your application.
 *     It's suitable for forms, navigation, or any interactive element that triggers an action.
 *
 */
const buttonVariants = cva(
  /**Base styles for all button variants.*/
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        /**
         * @description
         *  Default button size.
         */
        default: "h-10 px-4 py-2", 
        /**
         * @description
         *  Small button size.
         */
        sm: "h-9 rounded-md px-3",
        /**
         * @description
         *  Large button size.
         */
        lg: "h-11 rounded-md px-8",
        /**
         * @description
         *  Icon button size.
         *  Only the icon is showed.
         */
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * @interface ButtonProps
 * @description
 *  Defines the props for the Button component.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  /**
   * @property {boolean} asChild
   * @description
   *   If true, the button will render as a `Slot` component.
   *   This is useful when you want to customize the underlying HTML element of the button.
   *   @default false
   *   @see https://www.radix-ui.com/docs/primitives/utilities/slot
   */
  asChild?: boolean;
  /**
  * @property {string} className
  * @description
  *    Custom class name for the component.
  */
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
      />
    )
  }
)
Button.displayName = "Button";

export { Button, buttonVariants };
