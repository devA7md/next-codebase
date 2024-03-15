"use client";

import { clsx } from "clsx";
import { forwardRef, InputHTMLAttributes } from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import ShowErrors from "./show-errors";

export interface InputProps
  extends Partial<Merge<InputHTMLAttributes<HTMLInputElement>, { label: string; error?: string | string[] }>> {}

const LabeledInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, error, required = false, ...props }, ref) => {
    return (
      <div className={clsx("flex flex-col gap-1 text-sm w-full", { "text-destructive": error })}>
        <label htmlFor={id ?? props.name}>
          {label}
          <span className="text-destructive"> {required ? "*" : ""}</span>
        </label>
        <Input
          className={cn(error ? "border-destructive focus-visible:ring-destructive" : "", className)}
          ref={ref}
          {...props}
        />
        <ShowErrors error={error} />
      </div>
    );
  },
);
LabeledInput.displayName = "RHFLabeledInput";

export { LabeledInput };
