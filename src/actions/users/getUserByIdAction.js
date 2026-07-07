"use server";

import { dbConnect } from "@/lib/db";
import User from "@/models/User";
import Bug from "@/models/Bug";

export async function getUserByIdAction(id) {
  await dbConnect();

  const user = await User.findById(id).lean();

  if (!user) {
    return null;
  }

  const assignedBugs = await Bug.countDocuments({
    assignedTo: id,
  });

  return JSON.parse(
    JSON.stringify({
      ...user,
      assignedBugs,
    })
  );
}