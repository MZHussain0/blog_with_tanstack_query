import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface ContextProps {
  params: {
    postId: string;
  };
}

export async function DELETE(req: Request, context: ContextProps) {
  try {
    const { postId } = context.params;
    await db.post.delete({
      where: {
        id: postId,
      },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "[POSTS:DELETE] : Could'nt delete post",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request, context: ContextProps) {
  try {
    const { postId } = context.params;
    const body = await req.json();
    await db.post.update({
      where: {
        id: postId,
      },
      data: {
        title: body.title,
        body: body.body,
        categoryId: body.categoryId,
      },
    });

    return NextResponse.json({ message: "update sucess" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "[POSTS:UPDATE] : Could'nt update post",
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request, context: ContextProps) {
  try {
    const { postId } = context.params;
    const post = await db.post.findFirst({
      where: {
        id: postId,
      },
      include: {
        Category: true,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "[POSTS:DELETE] : Could'nt delete post",
      },
      { status: 500 }
    );
  }
}
