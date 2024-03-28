"use client";

import { Button } from "@/components/shared/ui/button";
import { FC } from "react";
import AddFriend from "@/components/shared/icons/AddFriend";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Friend, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { FriendWithoutId } from "@/types/type";

interface FlowButtonButtonProps {
  id: string;
  email: string
}

const FlowButtonButton: FC<FlowButtonButtonProps> = ({ id, email }) => {
  const router = useRouter();

  const { data: dataUser } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const res = await axios.get(`/api/user/id/${id}`);
      return res.data;
    },
  });

  const { mutate: createFriend } = useMutation({
    mutationFn: (params: FriendWithoutId) => {
      return axios.post("/api/friend", params);
    },
    onError: (e) => {
      console.log(e);
    },
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <Button
      onClick={() =>
        createFriend({ email: email, emailUser: dataUser?.email })
      }
      className="flex-center text-text-1"
    >
      <AddFriend />
      <span className="font-semibold">Add Friend</span>
    </Button>
  );
};

export default FlowButtonButton;
