import React from "react";
import Search from "../../shared/svgs/Search";
import { BsThreeDots } from "react-icons/bs";
import { TriggerModalCustom } from "../../shared/TriggerModalCustom";
import { Avatar, AvatarImage } from "../../shared/ui/avatar";

const HomeRight = () => {
  return (
    <div className="flex h-[500px] w-[360px] flex-col px-1 pt-4">
      <div className="flex-between w-full">
        <span className="text-[17px] font-semibold text-secondary-text">
          Contacts
        </span>
        <div className="flex-center space-x-2">
          <div className="flex-center h-8 w-8 rounded-full hover:bg-hover-menu">
            <Search height="16" width="16" />
          </div>
          <div className="flex-center h-9 w-9 rounded-full hover:bg-hover-menu">
            <BsThreeDots size={20} />
          </div>
        </div>
      </div>
      {/* ====================================== bar ========================================= */}
      <TriggerModalCustom
        className="mx-0 w-auto"
        name="Phuong Duy"
        icon={
          <div className="relative">
            <Avatar>
              <AvatarImage
                height={36}
                width={36}
                src="/images/duck.jpg"
                alt="Duck"
              />
            </Avatar>
            <span className="absolute bottom-[2px] right-[2px] h-2 w-2 rounded-full bg-green-600 outline outline-[2px] outline-black"></span>
          </div>
        }
      />
      <TriggerModalCustom
        className="mx-0 w-auto"
        name="Phuong Duy"
        icon={
          <div className="relative">
            <Avatar>
              <AvatarImage
                height={36}
                width={36}
                src="/images/duck.jpg"
                alt="Duck"
              />
            </Avatar>
            <span className="absolute bottom-[2px] right-[2px] h-2 w-2 rounded-full bg-green-600 outline outline-[2px] outline-black"></span>
          </div>
        }
      />
      <TriggerModalCustom
        className="mx-0 w-auto"
        name="Phuong Duy"
        icon={
          <div className="relative">
            <Avatar>
              <AvatarImage
                height={36}
                width={36}
                src="/images/duck.jpg"
                alt="Duck"
              />
            </Avatar>
            <span className="absolute bottom-[2px] right-[2px] h-2 w-2 rounded-full bg-green-600 outline outline-[2px] outline-black"></span>
          </div>
        }
      />
    </div>
  );
};

export default HomeRight;
