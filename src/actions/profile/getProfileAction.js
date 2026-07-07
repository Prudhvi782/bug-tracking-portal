"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import { dbConnect } from "@/lib/db";
import User from "@/models/User";

export async function getProfileAction() {
  await dbConnect();

  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  console.log("===============");
  console.log("TOKEN:", token);

  if (!token) {
    console.log("NO TOKEN FOUND");
    return null;
  }

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET
  );

  console.log("DECODED:", decoded);

  const user = await User.findById(decoded.id);

  console.log("USER:", user);

  return JSON.parse(JSON.stringify(user));
}