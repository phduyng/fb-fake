import { Separator } from "@/components/shared/ui/separator";
import { GrMenu } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { PiSlidersHorizontal } from "react-icons/pi";

const PostSetting = () => {
  return (
    <div className="w-[590px] rounded-lg bg-bg-2 px-4 ">
      <div className="flex-between my-2 w-full">
        <span className="text-[20px] font-semibold text-text-1 ">Posts</span>
        <div className="flex space-x-2 ">
          <div className="flex-center h-10 space-x-2 rounded-lg bg-bg-3 px-2 ">
            <PiSlidersHorizontal size={20} />
            <span className="text-[16px] font-semibold text-text-1 ">
              Filters
            </span>
          </div>
          <div className="flex-center h-10 space-x-2 rounded-lg bg-bg-3 px-2 ">
            <IoMdSettings size={20} />
            <span className="text-[16px] font-semibold text-text-1 ">
              Manage posts
            </span>
          </div>
        </div>
      </div>
      <Separator className="bg-gray-500" />
      <div className="flex w-full py-3">
        <div className="flex w-1/2 items-center justify-center space-x-2 ">
          <GrMenu />
          <span className="text-[15px] font-semibold text-text-2">
            List view
          </span>
        </div>
        <div className="flex w-1/2 items-center justify-center space-x-2 ">
          <IoGrid />
          <span className="text-[15px] font-semibold text-text-2">
            Grid view
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostSetting;
