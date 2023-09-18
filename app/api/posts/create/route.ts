import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const post = await db.post.create({
      data: {
        title: body.title,
        body: body.body,
        categoryId: body.categoryId,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "[POSTS:POST] : Could'nt create post",
      },
      { status: 500 }
    );
  }
}
