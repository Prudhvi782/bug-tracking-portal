"use server";

import { dbConnect } from "@/lib/db";
import Comment from "@/models/Comment";

export async function getCommentsAction(bugId) {
  await dbConnect();

  const comments = await Comment.find({
    bugId,
  })
    .populate("userId", "name role")
    .sort({
      createdAt: -1,
    })
    .lean();

  return JSON.parse(JSON.stringify(comments));
}