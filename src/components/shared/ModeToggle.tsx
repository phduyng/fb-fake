"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Label } from "@/components/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/shared/ui/radio-group";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <RadioGroup
        defaultValue="system"
        onValueChange={(value) => setTheme(value)}
      >
        <Label
          htmlFor="r1"
          className="flex-between h-11 w-full p-3 rounded-xl hover:bg-background-3"
        >
          <span className="font-semibold text-[17px] text-tertiary-text">
            Off
          </span>
          <RadioGroupItem
            value="light"
            id="r1"
            className="border-secondary-text data-[state=checked]:border-radio-checked data-[state=checked]:text-radio-checked"
          />
        </Label>
        <Label
          htmlFor="r2"
          className="flex-between h-11 w-full p-3 rounded-xl hover:bg-background-3"
        >
          <span className="font-semibold text-[17px] text-tertiary-text">
            On
          </span>
          <RadioGroupItem
            value="dark"
            id="r2"
            className="border-secondary-text data-[state=checked]:border-radio-checked data-[state=checked]:text-radio-checked"
          />
        </Label>
        <Label
          htmlFor="r3"
          className="flex-between h-11 w-full p-3 rounded-xl hover:bg-background-3"
        >
          <span className="font-semibold text-[17px] text-tertiary-text">
            Automatic
          </span>
          <RadioGroupItem
            value="system"
            id="r3"
            className="border-secondary-text data-[state=checked]:border-radio-checked data-[state=checked]:text-radio-checked"
          />
        </Label>
      </RadioGroup>
    </div>
  );
}
