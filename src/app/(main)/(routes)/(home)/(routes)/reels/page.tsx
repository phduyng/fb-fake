import Reels from "@/components/shared/icons/Reels";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <div className="flex-start space-x-2">
      <div
        className="flex-center relative h-[200px] w-[112.5px] flex-col overflow-hidden rounded-lg shadow-md"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgb(255, 165, 69), rgb(237, 65, 165))",
        }}
      >
        <div className="flex-center relative h-[60px] w-[60px] rounded-full bg-white">
          <Reels />
          <div className="flex-center absolute bottom-[-2px] right-[-2px] h-[23.2px] w-[23.2px] rounded-full border-2 border-pink-500 bg-white">
            <Plus className=" text-sky-500" height="12" width="12" />
          </div>
        </div>
        <span className="absolute bottom-0 p-2 text-[13px] font-semibold text-white">
          Create reel
        </span>
      </div>
      <div className="relative h-[200px] w-[112.5px] overflow-hidden rounded-lg bg-gray-500 shadow-md"></div>
      <div className="relative h-[200px] w-[112.5px] overflow-hidden rounded-lg bg-gray-500 shadow-md"></div>
      <div className="relative h-[200px] w-[112.5px] overflow-hidden rounded-lg bg-gray-500 shadow-md"></div>
    </div>
  );
}
