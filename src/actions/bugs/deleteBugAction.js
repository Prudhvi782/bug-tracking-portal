"use server";

import { dbConnect } from "@/lib/db";
import Bug from "@/models/Bug";
import ActivityLog from "@/models/ActivityLog";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { redirect } from "next/navigation";
import { canDeleteBug } from "@/lib/permissions";

export async function deleteBugAction(id) {
    await dbConnect();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const payload = verifyToken(token);

    if (!canDeleteBug(payload.role)) {
        throw new Error("Unauthorized");
    }
    await ActivityLog.create({
        bugId: id,
        action: "Bug Deleted",
        performedBy: payload.id,
    });

    await Bug.findByIdAndDelete(id);

    redirect("/bugs");
}