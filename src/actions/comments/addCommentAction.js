"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import { dbConnect } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";

import Comment from "@/models/Comment";
import ActivityLog from "@/models/ActivityLog";
import { canComment } from "@/lib/permissions";

export async function addCommentAction(formData) {
    await dbConnect();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        throw new Error("Unauthorized");
    }

    const payload = verifyToken(token);

    if (!payload) {
        throw new Error("Invalid Token");
    }

    if (!canComment(payload.role)) {
        throw new Error("Unauthorized");
    }
    const bugId = formData.get("bugId");
    const comment = formData.get("comment");

    if (!comment?.trim()) {
        throw new Error("Comment is required");
    }

    await Comment.create({
        bugId,
        userId: payload.id,
        comment,
    });

    await ActivityLog.create({
        bugId,
        action: "Comment Added",
        performedBy: payload.id,
    });

    revalidatePath(`/bugs/${bugId}`);
}