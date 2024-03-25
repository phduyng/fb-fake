import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json()
        console.log(JSON.stringify(body))

        const comment = await db.comment.create({
            data: {
                postId: body.postId,
                email: body.email,
                body: body.body
            }
        })

        return NextResponse.json(comment ,{ status: 200 })
    } catch(error) {
        return NextResponse.json({message: 'could not send comment'}, { status: 500 })
    }
}
