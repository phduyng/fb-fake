import Image from "next/image";
import GetUser from "./_components/GetUser";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const page = async () => {
  const session = await getServerSession(options);

  return (
    <div className="absolute top-14  w-full  bg-sky-500">
      <div className="relative h-[500px] w-[300px] ">
        <Image
          fill={true}
          objectFit="cover"
          src={session?.user?.image || ""}
          alt="avt"
        />
      </div>
    </div>
  );
};

export default page;
