"use server";

import { dbConnect } from "@/lib/db";
import User from "@/models/User";

export async function getDevelopersAction() {
  await dbConnect();

  const developers = await User.find(
    {
      role: "Developer",
    },
    {
      name: 1,
      email: 1,
    }
  ).lean();

  return JSON.parse(JSON.stringify(developers));
}