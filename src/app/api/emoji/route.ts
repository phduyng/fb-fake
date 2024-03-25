import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json()
        console.log(JSON.stringify(body))

        const post = await db.emojiUnit.create({
            data: {
                postId: body.postId,
                email: body.email,
                emoji: body.emoji
            }
        })

        return NextResponse.json(post ,{ status: 200 })
    } catch(error) {
        return NextResponse.json({message: 'could not fetch post'}, { status: 500 })
    }
}

export async function PATCH(req: Request) {
    try {
        const body = await req.json()
        console.log(JSON.stringify(body))

        await db.emojiUnit.delete({
            where: {
                email: body.email
            }
        })
        return new Response(null, { status: 204 })
    } catch(error) {
        return NextResponse.json({message: 'could not delete post'}, { status: 500 })
    }
}