"use client";

import Public from "@/components/shared/svgs/Public";
import { BsThreeDots } from "react-icons/bs";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import UserAvatar from "@/components/shared/UserAvatar";

const PostAvt = () => {
  const user = useCurrentUser();

  return (
    <div className="w-[590px] rounded-lg bg-bg-2 pb-3">
      {/* Avatar row 1 */}
      <div className="my-2.5 flex w-full justify-between px-4">
        <div className="flex space-x-2">
          <div className="relative">
            <UserAvatar />
            <span className="absolute bottom-[2px] right-[2px] z-50 h-2 w-2 rounded-full bg-green-600 outline outline-[2px] outline-bg-1"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold text-text-2">
              {user?.name}
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

        <Avatar className="z-30 mt-6 h-[388px] w-[388px] overflow-hidden rounded-full border-[6px] border-black bg-white">
          <AvatarImage src={user?.image ?? ""} />
          <AvatarFallback className="rounded-lg" />
        </Avatar>
      </div>
    </div>
  );
};

export default PostAvt;
