import Public from "@/components/shared/svgs/Public";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import UserAvatar from "@/components/shared/UserAvatar";

const BornPost = () => {
  return (
    <div className="w-[590px] rounded-lg bg-bg-2">
      <div className="flex-between">
        <div className="flex-center w-auto space-x-2 px-4 py-3">
          <UserAvatar />
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
        <div className="flex-center px-4">
          <div className="flex-center h-9 w-9 rounded-full text-text-2 hover:bg-bg-3">
            <BsThreeDots size={22} />
          </div>
          <div className="flex-center h-9 w-9 rounded-full text-text-2 hover:bg-bg-3">
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
        <span className="text-[20px] font-normal text-text-1 ">
          Born on 10 December 2004
        </span>
      </div>
    </div>
  );
};

export default BornPost;
