"use client";

import Like from "@/components/shared/icons/Like";
import Share from "@/components/shared/icons/Share";
import Comment from "@/components/shared/icons/Comment";
import Public from "@/components/shared/svgs/Public";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shared/ui/avatar";
import { Separator } from "@/components/shared/ui/separator";
import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { getUserById } from "@/data/user";

interface ImagePostProps {
  authorId?: string;
  cap?: string;
  image?: string;
  postId?: string;
}

const ImagePost: React.FC<ImagePostProps> = ({
  cap,
  image,
  postId,
  authorId,
}) => {
  const router = useRouter();

  const { mutate: deletePost } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/posts/${postId}`);
    },
    onError: (e) => {
      console.log(e);
    },
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <div className="w-[590px]  rounded-lg bg-background shadow">
      {/* ====================================== Detail ================================================== */}
      <div className="flex-between w-full">
        <div className="flex-center w-auto space-x-2 px-4 py-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/images/duck.jpg" alt="Duck" />
            <AvatarFallback />
          </Avatar>
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold text-tertiary-text">
              Phuong Duy
            </span>
            <div className="flex-start space-x-1 text-secondary-text">
              <span className="text-[12px] font-semibold ">11h ·</span>
              <Public />
            </div>
          </div>
        </div>
        <div className="flex-center px-4">
          <div className="flex-center h-9 w-9 rounded-full text-secondary-text hover:bg-background-3">
            <BsThreeDots size={22} />
          </div>
          <div
            onClick={() => deletePost()}
            className="flex-center h-9 w-9 rounded-full text-secondary-text hover:bg-background-3"
          >
            <MdOutlineClose size={28} />
          </div>
        </div>
      </div>
      <div className="w-full px-4 pb-3 text-[15px] font-normal text-tertiary-text">
        {cap}
      </div>
      {/* ========================================= Image =========================================== */}
      <Image
        className="h-[500px] w-full object-cover"
        height={1000}
        width={1000}
        quality={100}
        alt="Japan"
        src={image || ""}
      />
      <div className="flex-center w-full flex-col">
        <div className="flex-between w-full px-4 py-2 text-[15px] font-normal text-secondary-text">
          <div>Like</div>
          <div className="flex-center space-x-4 ">
            <div>199 comments</div>
            <div>38 shares</div>
          </div>
        </div>
        <Separator className="h-[1.5px] w-[560px] bg-background-3" />
        <div className="flex-center w-full px-4 py-1 text-secondary-text">
          <div className="flex-center w-full cursor-pointer select-none space-x-2 rounded-sm p-[6px] hover:bg-background-3">
            <Like />
            <span className="text-[15px] font-semibold">Like</span>
          </div>
          <div className="flex-center w-full cursor-pointer select-none space-x-2 rounded-sm p-[6px] hover:bg-background-3">
            <Comment />
            <span className="text-[15px] font-semibold">Comment</span>
          </div>
          <div className="flex-center w-full cursor-pointer select-none space-x-2 rounded-sm p-[6px] hover:bg-background-3">
            <Share />
            <span className="text-[15px] font-semibold">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePost;
