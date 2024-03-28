"use client";

import { FC } from "react";
import { useEffect, useState } from "react";
import EditDialog from "./EditDialog";
import FlowButtonButton from "./FollowButton";
import { Button } from "@/components/shared/ui/button";
import { ChevronUp } from "lucide-react";
import { TriggerConfig } from "react-hook-form";
import dynamic from "next/dynamic";

interface SecondProps {
  friendCount: number;
  yourProfile: boolean;
  userName: string;
  userEmail: string;
  id: string;
}

const Second: FC<SecondProps> = ({
  yourProfile,
  friendCount,
  userEmail,
  userName,
  id,
}) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {screenWidth >= 900 ? (
        <div className="flex-between mx-8 mb-3 flex h-[100.99px] w-[940px] pl-[210px]">
          <div className="flex flex-col self-center">
            <span className="block text-[32px] font-bold">{userName}</span>
            <span className="block text-[15px] font-semibold text-text-2 ">
              {friendCount} follower
            </span>
          </div>
          <div className="flex space-x-1 self-end">
            {yourProfile ? (
              <EditDialog />
            ) : (
              <FlowButtonButton email={userEmail ?? ""} id={id} />
            )}
            <Button className="bg-bg-3 text-white">
              <ChevronUp strokeWidth={2} size={20} />
            </Button>
          </div>
        </div>
      ) : (
        <div className="mx-8 mb-3 flex w-[940px] flex-col items-center justify-center space-y-2 pt-24">
          <div className="flex flex-col items-center">
            <span className="block text-[32px] font-bold">{userName}</span>
            <span className="block text-[15px] font-semibold text-text-2 ">
              {friendCount} follower
            </span>
          </div>
          <div className="flex space-x-2">
            {yourProfile ? (
              <EditDialog />
            ) : (
              <FlowButtonButton email={userEmail ?? ""} id={id} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Second;
