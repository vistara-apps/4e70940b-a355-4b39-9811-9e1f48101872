'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    src?: string;
    alt?: string;
    size?: 'default' | 'sm' | 'lg';
  }
>(({ className, src, alt, size = 'default', ...props }, ref) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    default: 'h-10 w-10',
    lg: 'h-16 w-16'
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full bg-muted",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img
          className="aspect-square h-full w-full object-cover"
          src={src}
          alt={alt || "Avatar"}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-accent/20 text-accent">
          <span className="text-xs font-medium">
            {alt?.charAt(0).toUpperCase() || '?'}
          </span>
        </div>
      )}
    </div>
  )
})
Avatar.displayName = "Avatar"

export { Avatar }
