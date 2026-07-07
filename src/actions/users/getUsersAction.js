"use server";

import { dbConnect } from "@/lib/db";
import User from "@/models/User";

export async function getUsersAction({
  search = "",
  role = "",
  page = 1,
  limit = 10,
}) {
  await dbConnect();

  const query = {};

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { email: { $regex: search, $options: "i" } },
    ];
  }

  if (role) {
    query.role = role;
  }

  const total = await User.countDocuments(query);

  const users = await User.find(query)
    .sort({
      createdAt: -1,
    })
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  return JSON.parse(
    JSON.stringify({
      users,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    })
  );
}