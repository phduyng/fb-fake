import Navigation from "@/components/pages/navigation/Navigation";
import { FC, ReactNode } from "react";

interface layoutProps {
  children?: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
};

export default layout;
