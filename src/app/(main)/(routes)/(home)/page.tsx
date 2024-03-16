import { options } from "@/app/api/auth/[...nextauth]/options";
import Plus from "@/components/shared/svgs/Plus";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Page() {
  const session = await getServerSession(options);
  return (
    <div className="h-[200px] w-[112.5px] overflow-hidden rounded-lg shadow-md">
      <Image
        className="h-[151px] w-full object-cover"
        height={100}
        width={100}
        src={session?.user?.image || ""}
        alt="avt"
      />

      <div className="flex-center relative h-[49px] w-full space-y-4">
        <div className="flex-center absolute top-0 h-10 w-10 translate-y-[-50%] rounded-full border-4 border-background bg-primary">
          <Plus className="text-white" height="25" width="25" />
        </div>
        <span className="text-[12px] font-semibold">Create story</span>
      </div>
    </div>
  );
}
