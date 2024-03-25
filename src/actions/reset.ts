"use server"

import * as z from "zod";
import { getUserByEmail } from '../data/user';
import { sendPasswordResetEmail } from '@/lib/mail';
import { ResetSchema } from "@/schemas";
import { generatePassworkResetToken } from "@/lib/token";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const validatedFields = ResetSchema.safeParse(values)

    if (!validatedFields.success) {
        return { error: "Invalid email!" }
    }

    const { email } = validatedFields.data

    const existingUser = await getUserByEmail(email)

    if (!existingUser) {
        return { error: "Email not founded!" }
    }

    // TODO: Generate token & send email
    const passworkResetToken = await generatePassworkResetToken(email)

    await sendPasswordResetEmail(
        passworkResetToken.email,
        passworkResetToken.token
    )

    return { success: "Reset email send!" }
}