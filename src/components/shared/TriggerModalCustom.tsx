"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { RxCaretRight } from "react-icons/rx";

const triggerModalCustomVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        secondary: "flex-center bg-background-3 rounded-full text-icon",
      },
      size: {
        default: "",
        icon: "h-9 w-9",
      },
      text: {
        default: "font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      text: "default",
    },
  },
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof triggerModalCustomVariants> {
  asChild?: boolean;
  modalContent?: React.ReactNode;
  icon: React.ReactNode;
  name: string;
  caret?: boolean;
  modal?: boolean;
}

const TriggerModalCustom = React.forwardRef<HTMLDivElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      text,
      asChild = false,
      modalContent,
      icon,
      name,
      caret = false,
      modal = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "div";
    return (
      // <Comp
      //   className={cn(triggerModalCustomVariants({ variant, size, className }))}
      //   ref={ref}
      //   {...props}
      // />
      <Dialog modal={modal}>
        <DialogTrigger>
          <div
            className={cn(
              "flex-between hover:bg-hover-xl mx-2 h-[52px] w-[344px] pl-2",
              className,
            )}
          >
            <div className="flex-center space-x-3">
              <div
                className={cn(triggerModalCustomVariants({ variant, size }))}
              >
                {icon}
              </div>
              <span
                className={cn(
                  triggerModalCustomVariants({ text }),
                  "text-[15px]",
                )}
              >
                {name}
              </span>
            </div>
            {caret && <RxCaretRight size={40} />}
          </div>
        </DialogTrigger>
        {modalContent}
      </Dialog>
    );
  },
);
TriggerModalCustom.displayName = "TriggerModalCustom";

export { TriggerModalCustom, triggerModalCustomVariants };
