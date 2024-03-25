"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FC } from "react";

interface UserAvatarProps {
  className?: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ className }) => {
  const user = useCurrentUser();

  return (
    <Avatar className={className}>
      <AvatarImage src={user?.image || ""} alt="avt" />
      <AvatarFallback />
    </Avatar>
  );
};

export default UserAvatar;
