import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import { dbConnect } from "./db";
import User from "@/models/User";

export async function getCurrentUser() {
  await dbConnect();

  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await User.findById(decoded.id).lean();

    if (!user) return null;

    return JSON.parse(JSON.stringify(user));
  } catch {
    return null;
  }
}