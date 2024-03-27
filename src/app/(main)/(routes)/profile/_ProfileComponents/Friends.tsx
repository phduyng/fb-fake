"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shared/ui/avatar";
import { Friend } from "@prisma/client";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { count } from "console";
import { FC } from "react";

interface FriendsProps {
  friends: Friend[];
  count: number;
}

const Friends: FC<FriendsProps> = ({ friends, count }) => {
  const users = useQueries({
    queries: (friends ?? []).map((friend) => {
      return {
        queryKey: ["friend", friend.id],
        queryFn: async () => {
          const res = await axios.get(`/api/user/${friend.email}`);
          return res.data;
        },
      };
    }),
  });

  return (
    <div className="w-[424px] rounded-lg bg-bg-2 px-4">
      <div className="flex-between ">
        <div className="flex translate-y-[12px] flex-col space-y-1">
          <span className="text-[20px] font-bold text-text-2 ">Followers</span>
          <span className="block text-[15px] font-semibold text-text-2 ">
            {count} followers
          </span>
        </div>
        <span className="text-[18px] font-medium text-[#5aa7ff] ">
          See all follower
        </span>
      </div>
      <div className="mt-5 grid grid-cols-3 grid-rows-3">
        {(users ?? []).map((item) => (
          <div key={item?.data?.id}>
            <Avatar className="h-[124px] w-[124px] rounded-lg">
              <AvatarImage src={item?.data?.image} />
              <AvatarFallback className="rounded-lg" />
            </Avatar>
            <span className="text-[13px] font-semibold text-text-2 ">
              {item?.data?.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
