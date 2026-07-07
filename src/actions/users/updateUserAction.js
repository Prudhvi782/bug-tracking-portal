"use server";

import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/db";
import User from "@/models/User";

export async function updateUserAction(id, formData) {
  await dbConnect();

  await User.findByIdAndUpdate(id, {
    name: formData.get("name"),
    email: formData.get("email"),
    role: formData.get("role"),
    department: formData.get("department"),
    status: formData.get("status"),
  });

  redirect(`/users/${id}`);
}