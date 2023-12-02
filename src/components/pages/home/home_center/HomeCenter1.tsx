"use client";

import Reels from "@/components/shared/svgs/Reels";
import Stories from "@/components/shared/svgs/Stories";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HomeCenterProps {
  children: React.ReactNode;
  className?: string;
}

const HomeCenter1: React.FC<HomeCenterProps> = ({ children, className }) => {
  const pathname = usePathname();

  return (
    <div className="h-[292px] w-[590px] rounded-lg bg-background shadow">
      <div className="shadow-menubar2">
        <div className="mx-4 flex h-[60px] w-auto space-x-1 p-1 ">
          <Link
            className={cn(
              pathname === "/"
                ? "text-primary shadow-active"
                : "hover:bg-hover-xl text-secondary-text",
              "flex-center h-full w-1/2 space-x-2   ",
            )}
            href="/"
          >
            <Stories />
            <span className="text-[15px] font-semibold">Stories</span>
          </Link>
          <Link
            className={cn(
              pathname === "/reels"
                ? "text-primary shadow-active"
                : "hover:bg-hover-xl text-secondary-text",
              "flex-center h-full w-1/2 space-x-2",
            )}
            href="/reels"
          >
            <Reels />
            <span className="text-[15px] font-semibold">Reels</span>
          </Link>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default HomeCenter1;
