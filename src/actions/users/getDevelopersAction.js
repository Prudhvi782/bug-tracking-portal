"use server";

import { dbConnect } from "@/lib/db";
import User from "@/models/User";

export async function getDevelopersAction() {
  await dbConnect();

  const developers = await User.find({
    role: "Developer",
  }).lean();

  console.log("Developers:", developers);

  return JSON.parse(JSON.stringify(developers));
}