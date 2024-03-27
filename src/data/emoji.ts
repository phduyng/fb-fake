import db from "@/lib/db";

export async function emailExist({email, postId}: {email: string, postId: string}) {
    const res = await db.emojiUnit.findUnique({
      where: {
        email: email,
        postId: postId
      },
    });
  
    if (res) {
      return 'yes'
    } else {
      return ''
    }

  }
  