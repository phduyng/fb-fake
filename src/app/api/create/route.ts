import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const body = await req.json()
        console.log("body: " + body.caption );
        
        const post = await db.post.create({
            data: {
                caption : body.caption,
                imageUrl: body.previewURL,
            }
        })
        return NextResponse.json(post, { status: 200 })
    } catch(error) {
        return NextResponse.json({message: 'could not fetch post'}, { status: 500 })
    }
}