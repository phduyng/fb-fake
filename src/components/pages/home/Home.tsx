import { FC, ReactNode } from "react";
import { HomeLeft } from "./HomeLeft";
import HomeCenter from "./home_center/HomeCenter";
import HomeRight from "./HomeRight";

interface HomeProps {
  children?: ReactNode;
}

const Home: FC<HomeProps> = ({ children }) => {
  return (
    <div className="flex-center absolute top-14 w-full">
      <div className="fixed left-0 top-14">
        <HomeLeft />
      </div>
      <HomeCenter className="">{children}</HomeCenter>
      <div className="fixed right-0 top-14">
        <HomeRight />
      </div>
    </div>
  );
};

export default Home;
