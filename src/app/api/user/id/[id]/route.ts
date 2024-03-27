import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface contextProps {
    params: {
        id: string
    }
}

export async function GET(req: Request, context: contextProps) {
    try {
        const user = await db.user.findFirst({
            where: {
                id: context.params.id
            }
        })
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}