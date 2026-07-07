"use server";

import { dbConnect } from "@/lib/db";
import ActivityLog from "@/models/ActivityLog";

export async function getActivityLogsAction(bugId) {
  await dbConnect();

  const logs = await ActivityLog.find({
    bugId,
  })
    .populate("performedBy", "name")
    .sort({
      createdAt: -1,
    })
    .lean();

  return JSON.parse(JSON.stringify(logs));
}