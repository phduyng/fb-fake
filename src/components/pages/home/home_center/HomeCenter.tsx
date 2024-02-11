import React from "react";
import { cn } from "@/lib/utils";
import ImagePost from "./post/ImagePost";
import HomeCenter1 from "./HomeCenter1";
import HomeCenter2 from "./HomeCenter2";
import { Post } from "@prisma/client";
import axios from "axios";
import db from "@/lib/db";

interface HomeCenterProps {
  children: React.ReactNode;
  className?: string;
}

async function getPosts() {
  const res = await db.post.findMany({
    select: {
      postId: true,
      caption: true,
      imageUrl: true,
    },
    // orderBy: {
    //   createAt: "desc",
    // },
  });
  return res;
}

const HomeCenter: React.FC<HomeCenterProps> = async ({ children, className }) => {
  

  const posts = await getPosts();

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center space-y-[18px]",
        className,
      )}
    >
      <HomeCenter1>{children}</HomeCenter1>
      <HomeCenter2 />

      {posts.map((item) => (
        <ImagePost key={item.postId} postId={item.postId} cap={item.caption} image={item.imageUrl} />
      ))}
    </div>
  );
};

export default HomeCenter;
