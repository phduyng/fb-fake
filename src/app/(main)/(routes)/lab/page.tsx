import { getAllComments } from "@/data/comment";
import { Comment, Post } from "@prisma/client";
import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";

const LabPage = async () => {
  const postId = "clu4mcf270000a8uk6ptkenpi";

  const comments = await getAllComments(postId);

  return (
    <div className="absolute top-14">
      <div className="h-10 w-full bg-bg-1 "></div>
      <div className="h-10 w-full bg-bg-2 "></div>
      <div className="h-10 w-full bg-bg-3 "></div>
      <span className="text-[20px] font-semibold text-text-1">Hello World</span>
      <span className="text-[20px] font-semibold text-text-2">Hello World</span>

      <pre>{JSON.stringify(comments, null, 3)}</pre>
    </div>
  );
};

export default LabPage;
