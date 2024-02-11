import { ScrollArea } from "@/components/shared/ui/scroll-area";
import { TriggerModalCustom } from "@/components/shared/TriggerModalCustom";
import { Avatar, AvatarImage } from "@/components/shared/ui/avatar";
import UserFriends from "@/components/shared/icons/UserFriends";
import BookMark from "@/components/shared/icons/BookMark";
import Clock from "@/components/shared/icons/Clock";
import Groups2 from "@/components/shared/icons/Groups";
import Video from "@/components/shared/icons/Video";
import Store from "@/components/shared/icons/Store";
import Feeds from "@/components/shared/svgs/Feeds";
import Calendar from "@/components/shared/icons/Calendar";
import Love from "@/components/shared/icons/Love";
import AdLogo from "@/components/shared/icons/AdLogo";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export async function HomeLeft() {
  const session = await getServerSession(options);

  return (
    <div className="flex flex-col ">
      <TriggerModalCustom
        name="Phuong Duy"
        icon={
          <Avatar>
            <AvatarImage
              height={36}
              width={36}
              src={session?.user?.image || ""}
              alt="avt"
            />
          </Avatar>
        }
      />
      <TriggerModalCustom name="Find friends" icon={<UserFriends />} />
      <TriggerModalCustom name="Saved" icon={<BookMark />} />
      <TriggerModalCustom name="Memories" icon={<Clock />} />
      <TriggerModalCustom name="Groups" icon={<Groups2 />} />
      <TriggerModalCustom name="Video" icon={<Video />} />
      <TriggerModalCustom name="Marketplace" icon={<Store />} />
      <TriggerModalCustom name="Feeds" icon={<Feeds />} />
      <TriggerModalCustom name="Events" icon={<Calendar />} />
      <TriggerModalCustom name="Foundraisers" icon={<Love />} />
      <TriggerModalCustom name="Find friends" icon={<UserFriends />} />
      <TriggerModalCustom name="Find friends" icon={<UserFriends />} />
      <TriggerModalCustom name="Find friends" icon={<UserFriends />} />
      <footer className="mx-4 w-auto text-[13px] font-normal text-secondary-text">
        Privacy · Terms · Advertising · Ad choices {<AdLogo />} · Cookies · More
        · Meta © 2023
      </footer>
    </div>
  );
}
