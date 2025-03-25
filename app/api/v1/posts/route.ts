import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const posts = await prisma.post.findMany();
        console.log(posts);
        return NextResponse.json({ posts });
    } catch (error) {
        console.log('there was an error getting posts: ', error);
        return NextResponse.json(error);
    }
}
