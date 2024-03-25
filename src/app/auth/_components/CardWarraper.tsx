"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/shared/ui/card";
import { Header } from "./Header";
import Social from "./Social";
import { BackButton } from "./BackButton";
import { useRouter } from "next/navigation";
import CloseButton from "./CloseButton";
import { DialogClose } from "@/components/shared/ui/dialog";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  close?: boolean;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  close,
}) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}

      <CardFooter>
        {close && (
          <DialogClose className="flex w-full justify-center">
            <CloseButton label={backButtonLabel} />
          </DialogClose>
        )}
        {!close && <BackButton label={backButtonLabel} href={backButtonHref} />}
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
