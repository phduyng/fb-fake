import FbFont from "@/components/shared/svgs/FbFont";
import { Button } from "@/components/shared/ui/button";
import { LoginForm } from "./_components/LoginForm";
import { Separator } from "@/components/shared/ui/separator";

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
      <div className="flex h-auto w-[396px] flex-col items-center justify-center rounded-lg pb-6 pt-4 shadow-form-equaly">
        <LoginForm />

        <span className="mt-3 text-[15px] font-medium text-[#0866FF] hover:underline hover:underline-offset-2">
          Forgotten password?
        </span>

        <Separator className="my-5 w-[364px] bg-gray-300" />

        <Button variant="create" size="create">
          Create new account
        </Button>
      </div>
    </div>
  );
};

export default page;
