import { FC, ReactNode } from "react";
import { HomeLeft } from "./HomeLeft";
import HomeCenter from "./home_center/HomeCenter";
import HomeRight from "./HomeRight";

interface HomeProps {
  children?: ReactNode;
}

const Home: FC<HomeProps> = ({ children }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="hidden h-screen w-[360px] max-w-[360px] grow-0 overflow-x-hidden overflow-y-hidden pt-16 hover:overflow-y-visible 1100:block 1300:max-w-[360px] 1300:grow">
        <HomeLeft />
      </div>
      <div className="h-screen min-w-max max-w-[792.8px] grow overflow-y-auto pt-20 scrollbar-hide 1300:min-w-[792.8px]">
        <HomeCenter>{children}</HomeCenter>
      </div>
      <div className="hidden h-screen w-[360px] max-w-[360px] grow-0 overflow-x-hidden overflow-y-hidden pt-14 hover:overflow-y-auto 900:block 1300:max-w-[360px] 1300:grow ">
        <HomeRight />
      </div>
    </div>
  );
};

export default Home;
