"use client";

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
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Liked from "../icons/Liked";
import Like from "../icons/Like";
import LikeEmoji from "../svgs/LikeEmoji";
import {
  EmojiUnitOnlyEmail,
  EmojiUnitWithoutId,
  createLike,
} from "@/actions/post";
import CommentDialog from "@/components/modals/post/CommentDialog";
import Link from "next/link";

interface ImagePostProps {
  author?: string;
  avt: string;
  cap?: string;
  image?: string;
  postId: string;
  emojiCount?: number;
  emailExist: string;
  email: string;
}

const ImagePost: React.FC<ImagePostProps> = ({
  cap,
  image,
  postId,
  author,
  avt,
  emojiCount,
  emailExist,
  email,
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
      router.push("/");
      router.refresh();
    },
  });

  const { mutate: createLike } = useMutation({
    mutationFn: (newEmoji: EmojiUnitWithoutId) => {
      return axios.post("/api/emoji", newEmoji);
    },
    onError: (e) => {
      console.log(e);
    },
    onSuccess: () => {
      router.refresh();
    },
  });

  const { mutate: returnLike } = useMutation({
    mutationFn: (param: EmojiUnitOnlyEmail) => {
      return axios.patch("/api/emoji", param);
    },
    onError: (e) => {
      console.log(e);
    },
    onSuccess: () => {
      router.refresh();
    },
  });

  const { data: dataUser } = useQuery({
    queryKey: ["user", email],
    queryFn: async () => {
      const res = await axios.get(`/api/user/${email}`);
      return res.data;
    },
  });

  return (
    <div className="w-[590px]  rounded-lg bg-background shadow">
      {/* ====================================== Detail ================================================== */}
      <div className="flex-between w-full">
        <div className="flex-center w-auto space-x-2 px-4 py-3">
          <Link href={`/profile/${dataUser?.id}`}>
            <Avatar>
              <AvatarImage src={avt} alt="avt" />
              <AvatarFallback />
            </Avatar>
          </Link>
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold text-tertiary-text">
              {author}
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
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src={image || ""}
          alt="a post img"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="flex-center w-full flex-col">
        <div className="flex-between w-full px-4 py-2 text-[15px] font-normal text-secondary-text">
          <div className="flex-center space-x-1">
            {emojiCount ? (
              <>
                <LikeEmoji />
                <span>{emojiCount}</span>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="flex-center space-x-4 ">
            <div>199 comments</div>
            <div>38 shares</div>
          </div>
        </div>
        <Separator className="h-[1.5px] w-[560px] bg-background-3" />
        <div className="flex-center w-full px-4 py-1 text-secondary-text">
          <div className="flex-center w-full cursor-pointer select-none space-x-2 rounded-sm p-[6px] hover:bg-background-3">
            {emailExist ? (
              <>
                <div
                  onClick={() => returnLike({ email: email })}
                  className="flex-center w-full cursor-pointer select-none space-x-2 rounded-sm p-[6px] hover:bg-background-3"
                >
                  <Liked />{" "}
                  <span className="text-[15px] font-semibold text-primary">
                    Like
                  </span>
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={() =>
                    createLike({ postId: postId, email: email, emoji: "Like" })
                  }
                  className="flex-center w-full cursor-pointer select-none space-x-2 rounded-sm p-[6px] hover:bg-background-3"
                >
                  <Like />{" "}
                  <span className="text-[15px] font-semibold">Like</span>
                </div>
              </>
            )}
          </div>
          <div className="flex-center w-full cursor-pointer select-none space-x-2 rounded-sm p-[6px] hover:bg-background-3">
            <CommentDialog email={email} postId={postId} />
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
