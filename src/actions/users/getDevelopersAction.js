"use server";

import { unstable_noStore as noStore } from "next/cache";
import { dbConnect } from "@/lib/db";
import User from "@/models/User";

export async function getDevelopersAction() {
  noStore()
  await dbConnect();

  const developers = await User.find({
    role: "Developer",
  }).lean();

  console.log("Developers:", developers);

  return JSON.parse(JSON.stringify(developers));
}