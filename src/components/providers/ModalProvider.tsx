"use client";

import { useEffect, useState } from "react";
import TestModals from "../modals/TestModals";
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <TestModals />
    </>
  );
};
