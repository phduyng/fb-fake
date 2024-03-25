'use server'

import { RegisterSchema } from "@/schemas"
import { z } from "zod"
import bcrypt from "bcryptjs";
import db from "@/lib/db";
import { getUserByEmail } from "../data/user";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerifiCationToken } from "@/lib/token";
// import { generateVerifiCationToken } from "@/lib/tokens";
// import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema> ) => {
    const validateFields = RegisterSchema.safeParse(values)

    if (!validateFields.success) return { error: "Invalid fields!" } 

    const { email, password, name } = validateFields.data
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email)

    if (existingUser) return { error: "Email already in use!" }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })

    const verificationToken = await generateVerifiCationToken(email)
    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
    )

    // TODO: Send verification token email

    return { success: "Register account success" }
}

