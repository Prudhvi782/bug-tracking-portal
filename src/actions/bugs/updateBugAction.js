"use server";

import { dbConnect } from "@/lib/db";
import Bug from "@/models/Bug";
import User from "@/models/User";
import ActivityLog from "@/models/ActivityLog";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { redirect } from "next/navigation";
import { canUpdateStatus } from "@/lib/permissions";

export async function updateBugAction(id, formData) {
  await dbConnect();

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const payload = verifyToken(token);

  if (!payload) {
    redirect("/login");
  }

  if (!canUpdateStatus(payload.role)) {
    throw new Error("Unauthorized");
  }

  await Bug.findByIdAndUpdate(id, {
    title: formData.get("title"),
    description: formData.get("description"),
    module: formData.get("module"),
    priority: formData.get("priority"),
    severity: formData.get("severity"),
    status: formData.get("status"),
    assignedTo: formData.get("assignedTo") || undefined,
    dueDate: formData.get("dueDate"),
  });

  await ActivityLog.create({
    bugId: id,
    action: "Bug Updated",
    performedBy: payload.id,
  });

  redirect(`/bugs/${id}`);
}