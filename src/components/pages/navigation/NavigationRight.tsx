import { cn } from "@/lib/utils";
import Bell from "../../shared/svgs/Bell";
import Messenger from "../../shared/svgs/Messenger";
import NineCircle from "../../shared/svgs/NineCircle";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";
import Plus from "../../shared/svgs/Plus";
import NavRightAvt from "../../modals/navigation/account/AccountModal";

interface NavigationRightProps {
  className?: string;
}

const NavigationRight: React.FC<NavigationRightProps> = ({ className }) => {
  return (
    <div className={cn("flex-end h-full w-full space-x-2 pr-4", className)}>
      <Avatar className="1260:flex-center hover:nav-right-hover hidden h-9 w-[108px] bg-background-3">
        <span className="text-sm font-semibold">Find friends</span>
      </Avatar>
      <Avatar className="flex-center hover:nav-right-hover bg-background-3">
        <NineCircle className="hidden 1100:block" />
        <Plus className="block 1100:hidden" />
      </Avatar>
      <Avatar className="flex-center hover:nav-right-hover bg-background-3">
        <Messenger />
      </Avatar>
      <Avatar className="flex-center hover:nav-right-hover bg-background-3">
        <Bell />
      </Avatar>
      <NavRightAvt />
    </div>
  );
};

export default NavigationRight;
