import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface contextProps {
    params: {
        postId: string
    }
}

export async function GET(req: Request, context: contextProps) {
    try {
        const comment = await db.comment.findMany({
            where: {
                postId: context.params.postId
            }
        })
        return NextResponse.json(comment, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}