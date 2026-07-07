"use server";

import { dbConnect } from "@/lib/db";
import Bug from "@/models/Bug";
import User from "@/models/User";

export async function getBugByIdAction(id) {
  await dbConnect();

  const bug = await Bug.findById(id)
    .populate("assignedTo", "name email")
    .populate("createdBy", "name email")
    .lean();

  if (!bug) {
    return null;
  }

  return JSON.parse(JSON.stringify(bug));
}