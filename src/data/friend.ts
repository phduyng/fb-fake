import { db } from "@/lib/db"


export const getAllFriends = async ( email: string ) => {
    const res = await db.friend.findMany({
        where: {
            emailUser: email
        }
    })
    return res
}

export const FriendCount = async (email: string) => {
    const res = await db.friend.count({
      where: {
        emailUser: email
      },
    })
    return res
  } 