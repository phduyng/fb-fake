"use client";

import UserAvt from "@/components/shared/UserAvatar";
import Like from "@/components/shared/icons/Like";
import Share from "@/components/shared/icons/Share";
import Public from "@/components/shared/svgs/Public";
import { Separator } from "@/components/shared/ui/separator";
import { BsThreeDots } from "react-icons/bs";
import Comment from "@/components/shared/icons/Comment";
import Image from "next/image";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const PostAvt = () => {
  const user = useCurrentUser();

  return (
    <div className="w-[590px] rounded-lg bg-bg-2 pb-3">
      {/* Avatar row 1 */}
      <div className="my-2.5 flex w-full justify-between px-4">
        <div className="flex space-x-2">
          <div className="relative">
            <UserAvt />
            <span className="absolute bottom-[2px] right-[2px] z-50 h-2 w-2 rounded-full bg-green-600 outline outline-[2px] outline-bg-1"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold text-text-2">
              Phuong Duy
            </span>
            <div className="flex-start space-x-1 text-text-2">
              <span className="text-[12px] font-semibold ">11h ·</span>
              <Public />
            </div>
          </div>
        </div>
        <div className="flex-center h-9 w-9 rounded-full text-text-2 hover:bg-bg-3">
          <BsThreeDots size={22} />
        </div>
      </div>
      {/* Avatar row 2 */}
      <div className="relative mb-7 flex justify-center">
        <div className="absolute top-0 z-20 h-[218px] w-full bg-sky-400"></div>
        <div className="relative z-30 mt-6 h-[388px] w-[388px] overflow-hidden rounded-full border-[6px] border-black bg-white">
          <Image
            src={user?.image || ""}
            alt="avt"
            fill={true}
            objectFit="cover"
          />
        </div>
      </div>
      {/* Avatar row 3 */}
      {/* <div className="flex w-full flex-col">
        <Separator className="h-[1.5px] w-full bg-bg-3" />
        <div className="flex-center w-full px-4 py-1 text-text-2">
          <div className="flex-center w-full cursor-pointer select-none space-x-2 rounded-sm p-[6px] hover:bg-bg-3">
            <Like />
            <span className="text-[15px] font-semibold">Like</span>
          </div>
          <div className="flex-center w-full cursor-pointer select-none space-x-2 rounded-sm p-[6px] hover:bg-bg-3">
            <Comment />
            <span className="text-[15px] font-semibold">Comment</span>
          </div>
          <div className="flex-center w-full cursor-pointer select-none space-x-2 rounded-sm p-[6px] hover:bg-bg-3">
            <Share />
            <span className="text-[15px] font-semibold">Share</span>
          </div>
        </div>
        <Separator className="mx-auto h-[1.5px] w-[540px] bg-bg-3 px-6" />
      </div> */}
    </div>
  );
};

export default PostAvt;
