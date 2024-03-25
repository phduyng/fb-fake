import UserAvatar from "@/components/shared/UserAvatar";
import AddFriend from "@/components/shared/icons/AddFriend";
import Camera from "@/components/shared/icons/Camera";
import Camera16 from "@/components/shared/icons/Camera16";
import HahaCreate from "@/components/shared/icons/HahaCreate";
import { Button } from "@/components/shared/ui/button";
import { ChevronUp, Pencil, X } from "lucide-react";
import { FC } from "react";
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
import { getUserById } from "@/data/user";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shared/ui/avatar";
import { currentUser } from "@/lib/auth";
import { FaPenToSquare } from "react-icons/fa6";
import EditDialog from "../_ProfileComponents/EditDialog";

interface ProfilePageProps {
  params: {
    id: string;
  };
}

const ProfilePage: FC<ProfilePageProps> = async ({ params }) => {
  const user = await getUserById(params.id);

  const userSession = await currentUser();

  const yourProfile = user?.email === userSession?.email;

  const A1 = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex-center absolute top-14 w-full flex-col bg-bg-2">
      {/* First */}
      <div className="flex h-[405.55px] w-[1095px] items-end justify-between rounded-lg bg-bg-1">
        <div className="relative flex h-max w-max translate-x-[32px] translate-y-24">
          <Avatar className="h-[168px] w-[168px]">
            <AvatarImage src={user?.image || ""} alt="avt" />
            <AvatarFallback />
          </Avatar>
          <div className="flex-center absolute bottom-2 right-2 h-9 w-9 rounded-full bg-bg-3">
            <Camera />
          </div>
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
      <div className="flex-between mx-8 mb-3 h-[100.99px] w-[1031px] bg-bg-2 pl-48">
        <div className="flex flex-col self-center">
          <span className="block text-[32px] font-bold">Phuong Duy</span>
          <span className="block text-[15px] font-semibold text-text-2 ">
            32 friends
          </span>
        </div>
        <div className="flex space-x-1 self-end">
          {yourProfile ? (
            <EditDialog />
          ) : (
            <Button className="flex-center text-text-1">
              <AddFriend />
              <span className="font-semibold">Add Friend</span>
            </Button>
          )}
          <Button className="bg-bg-3 text-white">
            <ChevronUp strokeWidth={2} size={20} />
          </Button>
        </div>
      </div>
      {/* People you know */}
      <div className="mx-8 w-[1031px] overflow-hidden rounded-lg border border-neutral-700 bg-bg-2 px-4 py-3">
        <div className="flex-between w-full pb-2">
          <span className="text-[17px] font-semibold">People you may know</span>
          <span className="text-[15px] font-semibold text-[#0866ff] ">
            See all
          </span>
        </div>
        <div className="flex space-x-2">
          {A1.map((x) => (
            <div
              key={x}
              className="h-[262px] min-w-[150px] overflow-hidden rounded-lg border border-neutral-700 bg-bg-2"
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
              <div className="flex h-[112px] w-full flex-col items-center space-y-1 px-3 py-2">
                <span className="translate-x-0.5 self-start text-[17px] font-semibold">
                  Gia Thinh
                </span>
                <div className="flex-start space-x-1">
                  <div className="block h-4 w-4 rounded-full bg-yellow-300"></div>
                  <span className="text-[15px] font-normal text-text-2">
                    1 mutual friend
                  </span>
                </div>
                <Button variant="addfr" className="h-9 space-x-1">
                  <AddFriend />
                  <span>Add friend</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProfileNav />
      {/* TODO: Pagination @@@@@@@@@@*/}
      <div className="grid w-full grid-cols-1 gap-4 bg-bg-1 pt-4 900:grid-cols-2">
        {/* =========================*********** FLEX SIDE LEFT *********====================== */}
        <div className="flex flex-col items-center space-y-4 900:-translate-x-[88px] 900:items-end">
          <Intro />
          <Photo />
          <Friends />
          <footer className="h-auto w-[424px] text-[13px] font-normal text-secondary-text">
            Privacy · Terms · Advertising · Ad choices{" "}
            {<AdLogo className="translate-y-[2px]" />} · Cookies · More · Meta
            © 2024
          </footer>
        </div>
        {/* =========================*********** FLEX SIDE RIGHT *********====================== */}
        <div className="flex flex-col items-center space-y-4 900:-translate-x-[88px] 900:items-start">
          {yourProfile ? <HomeCenter2 /> : <></>}

          <PostSetting />

          {/* {posts?.map((item: Post) => (
              <ImagePost
                key={item.postId}
                postId={item.postId}
                cap={item.caption}
                image={item.imageUrl}
              />
            ))} */}

          <PostAvt />
          <BornPost />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
