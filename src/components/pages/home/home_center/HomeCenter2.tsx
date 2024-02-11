import { options } from "@/app/api/auth/[...nextauth]/options";
import CreatePost from "@/components/modals/home/CreatePost";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shared/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/shared/ui/dialog";
import { Separator } from "@/components/shared/ui/separator";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

const HomeCenter2 = async () => {
  const session = await getServerSession(options);

  return (
    <div className="flex h-[122.8px] w-[590px] flex-col items-center rounded-lg bg-background shadow">
      <div className="flex w-full space-x-2 px-4 py-3">
        <Link href="/profile">
          <Avatar className="h-10 w-10 cursor-pointer">
            <AvatarImage src={session?.user?.image || ""} alt="avt" />
            <AvatarFallback />
          </Avatar>
        </Link>
        <CreatePost />
      </div>
      <Separator className="h-[2px] w-[540px] bg-background-3" />
      <div className="flex-center w-full px-5 py-2">
        <div className="flex-center py- w-1/3 cursor-pointer space-x-2 rounded-lg py-2  hover:bg-hover-menu">
          <Image
            height={24}
            width={24}
            alt="Live video"
            src="/images/camera.png"
          />
          <span className=" text-[15px] font-semibold text-secondary-text">
            Live video
          </span>
        </div>
        <div className="flex-center w-1/3 cursor-pointer space-x-2 rounded-lg py-2  hover:bg-hover-menu">
          <Image
            height={24}
            width={24}
            alt="Live video"
            src="/images/picture.png"
          />
          <span className=" text-[15px] font-semibold text-secondary-text">
            Photo/video
          </span>
        </div>
        <div className="flex-center w-1/3 cursor-pointer space-x-2 rounded-lg py-2  hover:bg-hover-menu">
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
