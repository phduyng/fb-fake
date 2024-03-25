import db from "@/lib/db";

export async function emailExist(email: string) {
    const res = await db.emojiUnit.findUnique({
      where: {
        email: email,
      },
    });
  
    if (res) {
      return 'yes'
    } else {
      return ''
    }

  }
  