import { Separator } from "@/components/shared/ui/separator";
import { BsThreeDots } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

const ProfileNav = () => {
  return (
    <>
      <Separator
        orientation="horizontal"
        className="mx-8 mt-4 w-[1031px] bg-neutral-700"
      />
      <div className="flex-between mx-8 w-[1031px]">
        <div className="flex">
          <span className="flex-center h-[60px] px-4 text-[15px] font-semibold text-primary hover:bg-sky-300">
            Posts
          </span>
          <span className="flex-center h-[60px] px-4 text-[15px] font-semibold hover:bg-sky-300">
            About
          </span>
          <span className="flex-center h-[60px] px-4 text-[15px] font-semibold hover:bg-sky-300">
            Friends
          </span>
          <span className="flex-center h-[60px] px-4 text-[15px] font-semibold hover:bg-sky-300">
            Photos
          </span>
          <span className="flex-center h-[60px] px-4 text-[15px] font-semibold hover:bg-sky-300">
            Videos
          </span>
          <span className="flex-center h-[60px] px-4 text-[15px] font-semibold hover:bg-sky-300">
            Check-ins
          </span>
          <div className="flex-center h-[60px] space-x-1 px-4 hover:bg-sky-300">
            <span className="text-[15px] font-semibold ">More</span>
            <FaChevronDown className="text-text-2" size={12} />
          </div>
        </div>
        <div className="flex-center bg-bg-3 h-9 w-12 rounded-lg">
          <BsThreeDots className="" size={16} />
        </div>
      </div>
    </>
  );
};

export default ProfileNav;
