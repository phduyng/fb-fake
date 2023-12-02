"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Menu from "../../shared/svgs/Menu";
import Home from "@/components/shared/svgs/Home";
import Friends from "@/components/shared/svgs/Friends";
import Groups from "@/components/shared/svgs/Groups";

interface NavigationCenterProps {
  className?: string;
}

const NavigationCenter: React.FC<NavigationCenterProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div className={cn("h-full", className)}>
      <div className="700:flex-center hidden h-full space-x-1 p-1 ">
        <Link
          href="/"
          className={cn(
            pathname === "/" || pathname === "/reels"
              ? "nav-active"
              : "hover:bg-hover-xl",
            "menu-square",
          )}
        >
          <Home />
        </Link>
        <Link
          href="/friends"
          className={cn(
            pathname === "/friends" ? "nav-active" : "hover:bg-hover-xl",
            "menu-square",
          )}
        >
          <Friends />
        </Link>
        <Link
          href="/groups"
          className={cn(
            pathname === "/groups" ? "nav-active" : "hover:bg-hover-xl",
            "menu-square",
          )}
        >
          <Groups />
        </Link>
        <Link
          href="/menu"
          className={cn(
            pathname === "/menu" ? "nav-active" : "hover:bg-hover-xl",
            "menu-square 1100:hidden",
          )}
        >
          <Menu />
        </Link>
      </div>
    </div>
  );
};

export default NavigationCenter;
