"use server";

import { dbConnect } from "@/lib/db";
import Bug from "@/models/Bug";
import User from "@/models/User";

export async function getBugsAction({
  search = "",
  status = "",
  priority = "",
  severity = "",
  assignedTo = "",
  sort = "latest",
  page = 1,
  limit = 10,
}) {
  await dbConnect();

  const query = {};

  // Search
  if (search) {
    query.$or = [
      { bugId: { $regex: search, $options: "i" } },
      { title: { $regex: search, $options: "i" } },
      { module: { $regex: search, $options: "i" } },
    ];
  }

  // Filters
  if (status) query.status = status;
  if (priority) query.priority = priority;
  if (severity) query.severity = severity;
  if (assignedTo) query.assignedTo = assignedTo;

  // Sorting
  let sortQuery = {};

  switch (sort) {
    case "oldest":
      sortQuery.createdAt = 1;
      break;

    case "priority":
      sortQuery.priority = -1;
      break;

    case "dueDate":
      sortQuery.dueDate = 1;
      break;

    default:
      sortQuery.createdAt = -1;
  }

  const total = await Bug.countDocuments(query);

  const bugs = await Bug.find(query)
    .populate("assignedTo", "name")
    .populate("createdBy", "name")
    .sort(sortQuery)
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  return JSON.parse(
    JSON.stringify({
      bugs,
      total,
      totalPages: Math.ceil(total / limit),
      page,
    })
  );
}