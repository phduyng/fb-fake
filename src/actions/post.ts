import { db } from '@/lib/db';
import { EmojiUnit } from '@prisma/client';

export type EmojiUnitWithoutId = Omit<EmojiUnit, "id">;

export type EmojiUnitOnlyEmail = {
    email: string
}

export const createLike = async (param: EmojiUnitWithoutId) => {
    await db.emojiUnit.create({
        data: {
            postId: param.postId,
            email: param.email,
            emoji: param.emoji
        }
    })
}