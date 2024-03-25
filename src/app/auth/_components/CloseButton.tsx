"use client";

import { Button } from "@/components/shared/ui/button";
import { useRouter } from "next/navigation";

interface CloseButtonProps {
  label: string;
}

export const CloseButton = ({ label }: CloseButtonProps) => {

  return (
    <Button
      variant="link"
      className="w-full font-normal"
      size="sm"
    >
      {label}
    </Button>
  );
};

export default CloseButton;
