"use client";

import FbFont from "@/components/shared/svgs/FbFont";
import { Button } from "@/components/shared/ui/button";
import { LoginForm } from "../_components/LoginForm";
import { Separator } from "@/components/shared/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import RegisterForm from "../_components/RegisterForm";

const page = () => {
  return (
    <div className="flex h-full w-full items-center justify-center space-x-20 bg-white">
      <div className="max-w-[500px] -translate-y-[40px]">
        <div className="-translate-x-[6%]">
          <FbFont />
        </div>
        e
        <span
          id="slogan-signin"
          className=" text-[28px] font-normal text-black"
        >
          Facebook helps you connect and share with the people in your life.
        </span>
      </div>
      <div className="flex h-auto w-[396px] min-w-[396px] max-w-[396px] flex-col items-center justify-center rounded-lg pb-6 pt-4 shadow-form-equaly">
        <LoginForm />

        <Separator className="my-5 w-[364px] bg-gray-300" />

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="create" size="create">
              Create new account
            </Button>
          </DialogTrigger>
          <DialogPortal>
            <DialogContent className="fixed left-1/2 top-1/2 z-50 flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-lg bg-bg-2 shadow-lg">
              <RegisterForm />
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>
    </div>
  );
};

export default page;
