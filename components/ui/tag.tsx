'use client';

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center rounded-full px-sm py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        skill: "bg-accent/20 text-accent hover:bg-accent/30",
        location: "bg-secondary/50 text-secondary-foreground",
        default: "bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        className={cn(tagVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Tag.displayName = "Tag"

export { Tag, tagVariants }
