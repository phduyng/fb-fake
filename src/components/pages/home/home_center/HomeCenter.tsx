import React from "react";
import { cn } from "@/lib/utils";
import ImagePost from "./post/ImagePost";
import HomeCenter1 from "./HomeCenter1";
import HomeCenter2 from "./HomeCenter2";

interface HomeCenterProps {
  children: React.ReactNode;
  className?: string;
}

const HomeCenter: React.FC<HomeCenterProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mt-6 flex w-full flex-col items-center space-y-[18px]",
        className,
      )}
    >
      <HomeCenter1>{children}</HomeCenter1>
      <HomeCenter2 />
      <ImagePost />
      <div></div>
    </div>
  );
};

export default HomeCenter;
