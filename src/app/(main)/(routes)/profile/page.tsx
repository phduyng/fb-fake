import { options } from "@/app/api/auth/[...nextauth]/options";
import AddFriend from "@/components/shared/icons/AddFriend";
import Camera from "@/components/shared/icons/Camera";
import { BsThreeDots } from "react-icons/bs";
import Comment from "@/components/shared/icons/Comment";
import { PiSlidersHorizontal } from "react-icons/pi";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shared/ui/avatar";
import { Button } from "@/components/shared/ui/button";
import { Separator } from "@/components/shared/ui/separator";
import { ChevronUp, Pencil, Plus, X } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import HahaCreate from "@/components/shared/icons/HahaCreate";
import Camera16 from "@/components/shared/icons/Camera16";
import Public from "@/components/shared/svgs/Public";
import { MdOutlineClose } from "react-icons/md";
import Like from "@/components/shared/icons/Like";

const page = async () => {
  const A1 = [1, 2, 3, 4, 5, 6, 7];
  const A2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const session = await getServerSession(options);

  return (
    <div className="flex-center absolute top-14 w-full flex-col bg-[#242526]">
      {/* First */}
      <div className="flex h-[405.55px] w-[1095px] items-end justify-between rounded-lg bg-[#18191a]">
        <div className="relative flex h-max w-max translate-x-[32px] translate-y-24">
          <Avatar className="h-[168px] w-[168px]  ">
            {/* <AvatarImage src={session?.user?.image || ""} alt="avt" /> */}
            <AvatarImage src="/images/duck.jpg" alt="avt" />
          </Avatar>
          <div className="flex-center absolute bottom-2 right-2 h-9 w-9 rounded-full bg-[#3a3b3c]">
            <Camera />
          </div>
        </div>
        <div className="flex -translate-x-8 -translate-y-4 flex-col space-y-2 ">
          <div className="flex-center h-9 w-max space-x-1.5 rounded-lg bg-[#0c0d0d] px-3 hover:bg-gray-800">
            <HahaCreate />
            <span className="text-[15px] font-semibold">
              Create with avatar
            </span>
          </div>
          <div className="flex-center h-9 w-max space-x-2 rounded-lg bg-[#0c0d0d] px-3.5">
            <Camera16 />
            <span className="text-[15px] font-semibold">Add Cover Photo</span>
          </div>
        </div>
      </div>
      {/* Second */}
      <div className="flex-between mx-8 mb-3 h-[100.99px] w-[1031px] bg-[#242526] pl-48">
        {/* <Avatar className="absolute bottom-0 left-8 translate-y-[60%] h-[168px] w-[168px] ">
            <AvatarImage src={session?.user?.image || ""} alt="avt" />
          </Avatar>
          <div className="absolute flex-center h-9 w-9 rounded-full">
            <Camera />
          </div> */}
        <div className="flex flex-col self-center">
          <span className="block text-[32px] font-bold">Phuong Duy</span>
          <span className="block text-[15px] font-semibold text-[#B0B3B8] ">
            32 friends
          </span>
        </div>
        <div className="flex space-x-1 self-end">
          <Button className="flex-center text-[#e4e6eb]">
            <Plus className="translate-y-[0.5px]" fontSize={300} size={15} />
            <span className="font-semibold">Add to story</span>
          </Button>
          <Button className="bg-[#3a3b3c] text-[#e4e6eb]">
            <Pencil
              className="translate-y-[1.5px]"
              strokeWidth={1}
              width={22}
              height={16}
              fill="white"
              stroke="#3a3b3c"
            />
            <span className="text-[15px] font-semibold">Edit profile</span>
          </Button>
          <Button className="bg-[#3a3b3c] text-white">
            <ChevronUp strokeWidth={2} size={20} />
          </Button>
        </div>
      </div>
      {/* People you know */}
      <div className="mx-8 w-[1031px] overflow-hidden rounded-lg border border-neutral-700 bg-[#242526] px-4 py-3">
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
              className="h-[262px] min-w-[150px] overflow-hidden rounded-lg border border-neutral-700 bg-[#242526]"
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
                  <span className="text-[15px] font-normal text-[#B0B3B8]">
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
      {/* Profile Detail */}
      <Separator
        orientation="horizontal"
        className="mx-8 mt-4 w-[1031px] bg-neutral-700"
      />
      <div className="flex-between mx-8 w-[1031px]">
        <div className="flex">
          <span className="flex-center h-[60px] px-4 text-[15px] font-semibold text-primary hover:bg-sky-300">
            Posts
          </span>
          <span className="flex-center h-[60px] px-4 text-[15px] font-semibold hover:bg-sky-300">
            About
          </span>
          <span className="flex-center h-[60px] px-4 text-[15px] font-semibold hover:bg-sky-300">
            Friends
          </span>
          <span className="flex-center h-[60px] px-4 text-[15px] font-semibold hover:bg-sky-300">
            Photos
          </span>
          <span className="flex-center h-[60px] px-4 text-[15px] font-semibold hover:bg-sky-300">
            Videos
          </span>
          <span className="flex-center h-[60px] px-4 text-[15px] font-semibold hover:bg-sky-300">
            Check-ins
          </span>
          <div className="flex-center h-[60px] space-x-1 px-4 hover:bg-sky-300">
            <span className="text-[15px] font-semibold ">More</span>
            <FaChevronDown className="text-[#b0b3b8]" size={12} />
          </div>
        </div>
        <div className="flex-center h-9 w-12 rounded-lg bg-[#3a3b3c]">
          <BsThreeDots className="" size={16} />
        </div>
      </div>
      {/* TODO: Pagination @@@@@@@@@@*/}
      <div className="flex-center w-full flex-col bg-[#18191a]">
        {/* Part Name: Intro */}
        <div className="flex h-[228px] w-[424px] flex-col items-center justify-evenly rounded-lg bg-[#242526]">
          <span className="translate-x-4 self-start text-[20px] font-bold text-[#e4e6eb]">
            Intro
          </span>
          <div className="flex-center h-9 w-[392px] rounded-lg bg-[#3a3b3c]">
            <span className="text-[15px] font-semibold text-[#e4e6eb]">
              Add Bio
            </span>
          </div>
          <div className="flex-center h-9 w-[392px] rounded-lg bg-[#3a3b3c]">
            <span className="text-[15px] font-semibold text-[#e4e6eb]">
              Edit details
            </span>
          </div>
          <div className="flex-center h-9 w-[392px] rounded-lg bg-[#3a3b3c]">
            <span className="text-[15px] font-semibold text-[#e4e6eb]">
              Add Featured
            </span>
          </div>
        </div>
        {/* Part Name: Photo */}
        <div className="flex-between h-[60px] w-[424px] rounded-lg bg-[#242526] px-4">
          <span className="text-[20px] font-bold text-[#e4e6eb] ">Photo</span>
          <span className="text-[18px] font-medium text-[#5aa7ff] ">
            See All Photos
          </span>
        </div>
        {/* Part Name: Friends */}
        <div className="w-[424px] rounded-lg bg-[#242526] px-4">
          <div className="flex-between ">
            <div className="flex flex-col ">
              <span className="text-[20px] font-bold text-[#e4e6eb] ">
                Friends
              </span>
              <span className="block text-[15px] font-semibold text-[#B0B3B8] ">
                32 friends
              </span>
            </div>
            <span className="text-[18px] font-medium text-[#5aa7ff] ">
              See all friends
            </span>
          </div>
          <div className="grid grid-cols-3 grid-rows-3">
            {A2.map((item) => (
              <div key={item}>
                <div className="h-[124px] w-[124px] rounded-lg bg-white"></div>
                <span className="text-[13px] font-semibold text-[#e4e6eb] ">
                  Photo
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Part Name Born */}
        <div className="w-[590px] rounded-lg bg-bg-secondary">
          <div className="flex-between">
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
              <div className="flex-center h-9 w-9 rounded-full text-secondary-text hover:bg-background-3">
                <MdOutlineClose size={28} />
              </div>
            </div>
          </div>
          <div className="flex w-full -translate-y-4 flex-col items-center pb-10">
            <div className="flex-center h-11 w-11 rounded-full bg-primary outline outline-4 outline-neutral-300/20">
              <Image
                height={24}
                width={24}
                alt="bear"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/3g9F3UOPitA.png"
              />
            </div>
            <span className="text-[20px] font-normal text-text-primary ">
              Born on 10 December 2004
            </span>
          </div>
          {/* Like Cm */}
          <div className="flex w-full flex-col">
            <Separator
              orientation="horizontal"
              className="h-[1px] bg-text-secondary"
            />
            <div className="flex-center h-11">
              <div className="flex-center w-full cursor-pointer select-none space-x-2 rounded-sm p-[6px] hover:bg-background-3">
                <Like />
                <span className="text-[15px] font-semibold">Like</span>
              </div>
              <div className="flex-center w-full cursor-pointer select-none space-x-2 rounded-sm p-[6px] hover:bg-background-3">
                <Comment />
                <span className="text-[15px] font-semibold">Comment</span>
              </div>
            </div>
            <Separator
              orientation="horizontal"
              className="h-[1px] bg-text-secondary"
            />
          </div>
        </div>
        {/* Part Nameee Posts Opt */}
        <div className="bg w-[590px] rounded-lg bg-bg-secondary px-4 ">
          <div className="flex-between w-full ">
            <span className="text-[20px] font-semibold text-text-primary ">
              Posts
            </span>
            <div className="flex space-x-2 ">
              <div className="flex-center h-10 space-x-2 rounded-lg bg-bg-tertiary px-2 ">
                <PiSlidersHorizontal size={20} />
                <span className="text-[16px] font-semibold text-text-primary ">
                  Filter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
