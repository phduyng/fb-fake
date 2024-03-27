import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const body = await req.json()
        console.log("body: " + body );
        
        const friend = await db.friend.create({
            data: {
                email: body.email,
                emailUser: body.emailUser
            }
        })
        return NextResponse.json(friend, { status: 200 })
    } catch(error) {
        return NextResponse.json({message: 'could not fetch post'}, { status: 500 })
    }
}