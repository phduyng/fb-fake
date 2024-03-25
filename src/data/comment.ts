import { db } from "@/lib/db"

export const getAllComments = async (postId: string) => {

    const res = await db.comment.findMany({
        where: {
            postId: postId
        }
    })

    return res
}