import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "../../../shared/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../../../shared/ui/avatar";
import { RiFeedbackFill, RiSettings5Fill } from "react-icons/ri";
import { FaCircleQuestion } from "react-icons/fa6";
import { TbMoonFilled } from "react-icons/tb";
import { IoLogOut } from "react-icons/io5";
import Disp_AccessModal from "./Disp_AccessModal";
import { TriggerModalCustom } from "../../../shared/TriggerModalCustom";
import AdLogo from "../../../shared/icons/AdLogo";
import { LogoutButton } from "@/app/auth/_components/LogoutButton";
import UserAvt from "@/components/shared/UserAvatar";

const Account = async () => {
  return (
    <Dialog modal={false}>
      <DialogTrigger>
        <UserAvt className="h-10 w-10" />
      </DialogTrigger>
      <DialogPortal>
        <DialogContent className="fixed right-4 top-[52px] z-50 h-[452px] w-full min-w-[360px] max-w-[360px] rounded-lg border bg-background shadow-lg">
          <div className="m-4 flex h-[112px] w-auto flex-col rounded-lg shadow-account-homepage">
            <div className=" flex-start hover:bg-hover-xl m-1 h-[60px] w-auto space-x-2 p-2">
              <UserAvt className="h-10 w-10" />
              <div className="text-[15px] font-semibold text-primary-text">
                Phuong Duy
              </div>
            </div>
            <div className="w-[292px] self-center border border-line "></div>
            <div className="flex-start hover:bg-hover-xl m-1 h-[35px] w-auto p-2 text-[15px] font-medium text-primary">
              See all profiles
            </div>
          </div>
          <div className="w-auto">
            <TriggerModalCustom
              variant="secondary"
              size="icon"
              name="Settings & privacy"
              icon={<RiSettings5Fill size={24} />}
              caret={true}
            />
            <TriggerModalCustom
              variant="secondary"
              size="icon"
              name="Help & support"
              icon={<FaCircleQuestion size={20} />}
              caret
            />
            <TriggerModalCustom
              variant="secondary"
              size="icon"
              name="Display & accessibility"
              icon={<TbMoonFilled size={20} />}
              caret={true}
              modalContent={<Disp_AccessModal />}
            />
            <TriggerModalCustom
              variant="secondary"
              size="icon"
              name="Give feedback"
              icon={<RiFeedbackFill size={20} />}
            />
            <LogoutButton>
              <TriggerModalCustom
                variant="secondary"
                size="icon"
                name="Log out"
                icon={<IoLogOut size={20} />}
              />
            </LogoutButton>
          </div>
          <footer className="mx-4 w-auto text-[13px] font-normal text-secondary-text">
            Privacy · Terms · Advertising · Ad choices{" "}
            {<AdLogo className="translate-y-[2px]" />} · Cookies · More · Meta
            © 2024
          </footer>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default Account;
