import Home from "@/components/pages/home/Home";
import React from "react";

interface layoutProps {
  children?: React.ReactNode;
}

const layout: React.FC<layoutProps> = ({ children }) => {
  return <Home>{children}</Home>;
};

export default layout;
