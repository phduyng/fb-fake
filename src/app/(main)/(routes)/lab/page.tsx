"use client";

import { Comment, Post } from "@prisma/client";
import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";

const LabPage = () => {
  const postId = "clu4mcf270000a8uk6ptkenpi";

  const { data: dataCmts } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await axios.get(`/api/comment/${postId}`);
      return res.data;
    },
  });

  const queries = useQueries({
    queries: (dataCmts ?? []).map((comment: Comment, index: string) => {
      console.log(index + comment.email);

      return {
        queryKey: ["comments", comment.email],
        queryFn: async () => {
          const res = await axios.get(`/api/user/${comment.email}`);
          return res.data;
        },
      };
    }),
  });

  console.log(queries?.map((q) => q.data));

  return (
    <div className="absolute top-14">
      <div className="h-10 w-full bg-bg-1 "></div>
      <div className="h-10 w-full bg-bg-2 "></div>
      <div className="h-10 w-full bg-bg-3 "></div>
      <span className="text-[20px] font-semibold text-text-1">Hello World</span>
      <span className="text-[20px] font-semibold text-text-2">Hello World</span>

      <pre>{JSON.stringify(dataCmts, null, 3)}</pre>
    </div>
  );
};

export default LabPage;
