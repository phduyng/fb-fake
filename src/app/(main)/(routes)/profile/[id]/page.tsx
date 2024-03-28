import AddFriend from "@/components/shared/icons/AddFriend";
import Camera from "@/components/shared/icons/Camera";
import Camera16 from "@/components/shared/icons/Camera16";
import HahaCreate from "@/components/shared/icons/HahaCreate";
import { Button } from "@/components/shared/ui/button";
import { ChevronUp, X } from "lucide-react";
import { FC, useEffect, useState } from "react";
import ProfileNav from "../_ProfileComponents/ProfileNav";
import Intro from "../_ProfileComponents/Intro";
import Photo from "../_ProfileComponents/Photo";
import Friends from "../_ProfileComponents/Friends";
import HomeCenter2 from "@/components/pages/home/home_center/HomeCenter2";
import PostSetting from "../_ProfileComponents/PostSetting";
import BornPost from "../_ProfileComponents/BornPost";
import PostAvt from "@/components/shared/post/PostAvt";
import AdLogo from "@/components/shared/icons/AdLogo";
import Image from "next/image";
import { getUserByEmail, getUserById } from "@/data/user";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shared/ui/avatar";
import { currentUser } from "@/lib/auth";
import EditDialog from "../_ProfileComponents/EditDialog";
import { FriendCount, getAllFriends } from "@/data/friend";
import FlowButtonButton from "../_ProfileComponents/FollowButton";
import Second from "../_ProfileComponents/Second";
import { emojiUnitCount, getAllPosts } from "@/data/post";
import { emailExist } from "@/data/emoji";
import ImagePost from "@/components/shared/post/ImagePost";
import UploadAvt from "../_ProfileComponents/UploadAvt";

interface ProfilePageProps {
  params: {
    id: string;
  };
}

const ProfilePage: FC<ProfilePageProps> = async ({ params }) => {
  const user = await getUserById(params.id);

  const friendCount = await FriendCount(user?.email ?? "");

  const userSession = await currentUser();

  const yourProfile = user?.email === userSession?.email;

  const friends = await getAllFriends(user?.email ?? "");

  const count = await FriendCount(user?.email ?? "");

  const posts = await getAllPosts();

  return (
    <div className="flex-center absolute top-14 w-full flex-col bg-bg-2">
      {/* First */}
      <div className="flex h-[405.55px] w-[940px] items-end justify-between rounded-lg bg-bg-1">
        <div className="flex h-max w-max translate-x-[470px] translate-y-24 900:translate-x-[32px]">
          <Avatar className="relative h-[168px] w-[168px] -translate-x-1/2 900:translate-x-0">
            <AvatarImage src={user?.image || ""} alt="avt" />
            <AvatarFallback />
          </Avatar>
          {yourProfile ? (
            <UploadAvt emailUser={userSession?.email ?? ""} />
          ) : (
            <></>
          )}
        </div>
        <div className="flex -translate-x-8 -translate-y-4 flex-col space-y-2 ">
          <div className="flex-center h-9 w-max space-x-1.5 rounded-lg bg-bg-1 px-3 hover:bg-bg-3">
            <HahaCreate />
            <span className="text-[15px] font-semibold">
              Create with avatar
            </span>
          </div>
          <div className="flex-center h-9 w-max space-x-2 rounded-lg bg-bg-1 px-3.5">
            <Camera16 />
            <span className="text-[15px] font-semibold">Add Cover Photo</span>
          </div>
        </div>
      </div>
      {/* Second */}
      <Second
        userEmail={userSession?.email ?? ""}
        userName={user?.name ?? ""}
        friendCount={friendCount}
        yourProfile={yourProfile}
        id={params.id}
      />
      {/* People you know */}
      {/* <div className="mx-8 w-[1031px] rounded-lg border border-neutral-700 bg-bg-2 px-4 py-3">
        <div className="flex-between w-full pb-2">
          <span className="text-[17px] font-semibold">People you may know</span>
          <span className="text-[15px] font-semibold text-[#0866ff] ">
            See all
          </span>
        </div>
        <div className="flex space-x-2 overflow-x-scroll">
          {A1.map((x) => (
            <div
              key={x}
              className="h-auto min-w-[150px] overflow-hidden rounded-lg border border-neutral-700 bg-bg-2"
            >
              <div className="relative h-[150px] w-[150px] bg-sky-400">
                <Image
                  src="/images/jp.jpg"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  alt="tétt"
                />
                <div className="flex-center absolute right-3 top-3 h-8 w-8 rounded-full bg-black/50">
                  <X size={22} strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex h-[112px] w-full flex-col items-center space-y-4 px-3 py-2">
                <span className="translate-x-0.5 self-start text-[17px] font-semibold">
                  Gia Thinh
                </span>
                <Button variant="addfr" className="h-9 space-x-1">
                  <AddFriend />
                  <span>Add friend</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      {/* <ProfileNav /> */}
      {/* TODO: Pagination @@@@@@@@@@*/}
      <div className="grid w-full grid-cols-1 gap-4 bg-bg-1 pt-4 900:grid-cols-2">
        {/* =========================*********** FLEX SIDE LEFT *********====================== */}

        <div className="flex flex-col items-center space-y-4 900:-translate-x-[88px] 900:items-end">
          <Intro />
          <Photo />
          <Friends count={count} friends={friends} />
          <footer className="h-auto w-[424px] text-[13px] font-normal text-secondary-text">
            Privacy · Terms · Advertising · Ad choices{" "}
            {<AdLogo className="translate-y-[2px]" />} · Cookies · More · Meta
            © 2024
          </footer>
        </div>
        {/* =========================*********** FLEX SIDE RIGHT *********======================pnpm */}

        <div className="flex flex-col items-center space-y-4 900:-translate-x-[88px] 900:items-start">
          {yourProfile ? <HomeCenter2 /> : <></>}

          <PostSetting />

          {posts?.map(async (item) => {
            const emojiCount = await emojiUnitCount(item.postId);

            const userPost = await getUserByEmail(item.email);

            const exist = await emailExist({
              email: user?.email ?? "",
              postId: item?.postId,
            });

            return (
              <>
                <ImagePost
                  avt={userPost?.image ?? ""}
                  author={userPost?.name ?? ""}
                  email={userPost?.email ?? ""}
                  emailExist={exist}
                  emojiCount={emojiCount}
                  key={item.postId}
                  postId={item.postId}
                  cap={item.caption}
                  image={item.imageUrl}
                  createAt={item?.createdAt}
                />
              </>
            );
          })}

          {/* <PostAvt />
          <BornPost /> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
