import { getAllComments } from "@/data/comment";
import { db } from "@/lib/db";
import { Comment } from "@prisma/client";
import { create } from "zustand";

interface useGetCommentsProps {
    data: () => Promise<Comment[]>
}

export const useGetComments = create<useGetCommentsProps>()((set) => ({
    data: async () => {
        const res = await getAllComments('clu0q3b6q0000rel1dhkgdksf')

        return res
    }
}))