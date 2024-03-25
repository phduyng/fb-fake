import db from "@/lib/db";

export const getAllPosts = async () => {
    const posts = await db.post.findMany();
    return posts;
  }

export const emojiUnitCount = async (postId: string) => {
    const res = await db.emojiUnit.count({
      where: {
        postId: postId,
      },
    })
    return res
  } 
  
