"use client";

import { getAllComments } from "@/data/comment";
import { useEffect, useState } from "react";

const LabPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute top-14">
      <div className="h-10 w-full bg-bg-1 "></div>
      <div className="h-10 w-full bg-bg-2 "></div>
      <div className="h-10 w-full bg-bg-3 "></div>
      <span className="text-[20px] font-semibold text-text-1">Hello World</span>
      <span className="text-[20px] font-semibold text-text-2">Hello World</span>

      {screenWidth >= 768 ? <h1>Desktop Content</h1> : <h1>Mobile Content</h1>}
    </div>
  );
};

export default LabPage;
