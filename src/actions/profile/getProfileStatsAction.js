"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import { dbConnect } from "@/lib/db";
import Bug from "@/models/Bug";

export async function getProfileStatsAction() {
  await dbConnect();

  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  const { id } = jwt.verify(token, process.env.JWT_SECRET);

  const total = await Bug.countDocuments({
    assignedTo: id,
  });

  const resolved = await Bug.countDocuments({
    assignedTo: id,
    status: "Resolved",
  });

  const open = await Bug.countDocuments({
    assignedTo: id,
    status: "Open",
  });

  const progress = await Bug.countDocuments({
    assignedTo: id,
    status: "In Progress",
  });

  return {
    total,
    resolved,
    open,
    progress,
  };
}