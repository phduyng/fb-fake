"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";

const GetUser = () => {
  const user = useCurrentUser();

  return <pre>{user?.name}</pre>;
};

export default GetUser;
