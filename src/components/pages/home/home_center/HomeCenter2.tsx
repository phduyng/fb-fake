import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shared/ui/avatar";
import { Separator } from "@/components/shared/ui/separator";
import Image from "next/image";

const HomeCenter2 = () => {
  return (
    <div className="flex h-[122.8px] w-[590px] flex-col items-center rounded-lg bg-background shadow">
      <div className="flex w-full space-x-2 px-4 py-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/images/duck.jpg" alt="Duck" />
          <AvatarFallback />
        </Avatar>
        <div className="search-lg w-full text-[17px] font-medium hover:bg-hover-1">
          What&apos;s on your mind, LoL?
        </div>
      </div>
      <Separator className="h-[2px] w-[540px] bg-background-3" />
      <div className="flex-center space-x-14 p-4">
        <div className="flex-center space-x-2">
          <Image
            height={24}
            width={24}
            alt="Live video"
            src="/images/camera.png"
          />
          <span className="text-[15px] font-semibold text-secondary-text">
            Live video
          </span>
        </div>
        <div className="flex-center space-x-2">
          <Image
            height={24}
            width={24}
            alt="Live video"
            src="/images/picture.png"
          />
          <span className="text-[15px] font-semibold text-secondary-text">
            Photo/video
          </span>
        </div>
        <div className="flex-center space-x-2">
          <Image
            height={24}
            width={24}
            alt="Live video"
            src="/images/emoji.png"
          />
          <span className="text-[15px] font-semibold text-secondary-text">
            Feeling/activity
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeCenter2;
