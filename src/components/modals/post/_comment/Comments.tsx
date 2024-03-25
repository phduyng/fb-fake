"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shared/ui/avatar";
import { Comment, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";

interface CommentsProps {
  data: Comment;
}

const Comments: FC<CommentsProps> = ({ data }) => {
  const { data: dataUser } = useQuery({
    queryKey: ["user", data.email],
    queryFn: async () => {
      const res = await axios.get(`/api/user/${data.email}`);
      return res.data;
    },
  });

  console.log(dataUser);

  return (
    <div className="flex items-center justify-start space-x-3">
      <Avatar>
        <AvatarImage src={dataUser?.image || ""} alt="avt" />
        <AvatarFallback />
      </Avatar>
      <div className="text-wrap flex min-h-[40px] w-fit max-w-[590px] items-center justify-start rounded-2xl bg-bg-3 px-4 text-text-1">
        <span className="max-w-[580px] break-all">{data.body}</span>
      </div>
    </div>
  );
};

export default Comments;
