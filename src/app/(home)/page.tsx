import Plus from "@/components/shared/svgs/Plus";
import Image from "next/image";

export default function Page() {
  return (
    <div className="h-[200px] w-[112.5px] overflow-hidden rounded-lg shadow-md">
      <Image
        className="h-[151px] w-full object-cover"
        height={1000}
        width={1000}
        src="/images/duck.jpg"
        alt="Duck"
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
