"use server";

import { dbConnect } from "@/lib/db";
import Bug from "@/models/Bug";
import ActivityLog from "@/models/ActivityLog";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { redirect } from "next/navigation";
import { canCreateBug } from "@/lib/permissions";

export async function createBugAction(formData) {
    try {
        await dbConnect();

        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            redirect("/login");
        }

        const payload = verifyToken(token);

        if (!canCreateBug(payload.role)) {
            throw new Error("Unauthorized");
        }

        if (!payload) {
            redirect("/login");
        }

        const bugCount = await Bug.countDocuments();

        const bug = await Bug.create({
            bugId: `BUG-${1001 + bugCount}`,
            title: formData.get("title"),
            description: formData.get("description"),
            module: formData.get("module"),
            priority: formData.get("priority"),
            severity: formData.get("severity"),
            assignedTo: formData.get("assignedTo") || undefined,
            createdBy: payload.id,
            dueDate: formData.get("dueDate"),
            screenshot: "",
        });

        await ActivityLog.create({
            bugId: bug._id,
            action: "Bug Created",
            performedBy: payload.id,
        });

    } catch (error) {
        console.log(error);
    }

    redirect("/bugs");
}