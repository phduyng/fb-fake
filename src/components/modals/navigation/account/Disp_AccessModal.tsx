import { DialogClose, DialogContent } from "../../../shared/ui/dialog";

import { TbMoonFilled } from "react-icons/tb";
import { FaArrowLeft } from "react-icons/fa6";
import { ModeToggle } from "../../../shared/ModeToggle";

const Disp_AccessModal = () => {
  return (
    <DialogContent className="fixed right-4 top-[52px] z-50 h-[452px] w-full min-w-[360px] max-w-[360px] rounded-lg border bg-background p-4 shadow-lg">
      <div className="flex-start my-4 w-auto space-x-3">
        <DialogClose>
          <div className="flex-center hover:bg-hover-full h-9 w-9">
            <FaArrowLeft className="text-icon" size={16} />
          </div>
        </DialogClose>
        <span className="text-2xl font-bold text-tertiary-text">
          Display & accessibility
        </span>
      </div>
      <div className="flex w-auto justify-start space-x-1">
        <div className="flex-center bg-hover-full h-9 min-w-[36px]">
          <TbMoonFilled size={22} />
        </div>
        <div className="mt-[-3px] flex flex-col">
          <span className="ml-3 text-[17px] font-semibold text-tertiary-text">
            Dark Mode
          </span>
          <p className="ml-3 pb-2 text-[15px] font-normal text-secondary-text">
            Adjust the appearance of Facebook to reduce glare and give your eyes
            a break.
          </p>
          <ModeToggle />
        </div>
      </div>
    </DialogContent>
  );
};

export default Disp_AccessModal;
