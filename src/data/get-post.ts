import db from "@/lib/db";

export async function getPosts(authorId: string) {
    try {
        const user = await db.post.findMany({ where: { authorId } });
    
        return user;
      } catch {
        return null;
      }
    };