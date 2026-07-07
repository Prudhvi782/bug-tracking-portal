"use server";

import { dbConnect } from "@/lib/db";
import Bug from "@/models/Bug";
import ActivityLog from "@/models/ActivityLog";

export async function getDashboardStatsAction() {
  await dbConnect();

  const [
    totalBugs,
    open,
    assigned,
    inProgress,
    resolved,
    closed,
    critical,
  ] = await Promise.all([
    Bug.countDocuments(),
    Bug.countDocuments({ status: "Open" }),
    Bug.countDocuments({ status: "Assigned" }),
    Bug.countDocuments({ status: "In Progress" }),
    Bug.countDocuments({ status: "Resolved" }),
    Bug.countDocuments({ status: "Closed" }),
    Bug.countDocuments({ priority: "Critical" }),
  ]);

  const recentActivity = await ActivityLog.find()
    .sort({ createdAt: -1 })
    .limit(5)
    .populate("performedBy", "name")
    .lean();

  return JSON.parse(
    JSON.stringify({
      totalBugs,
      open,
      assigned,
      inProgress,
      resolved,
      closed,
      critical,
      recentActivity,
    })
  );
}