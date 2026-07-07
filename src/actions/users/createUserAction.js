"use server";

import { redirect } from "next/navigation";
import { dbConnect } from "@/lib/db";
import User from "@/models/User";
import { hashPassword } from "@/lib/auth";

export async function createUserAction(formData) {
  try {
    await dbConnect();

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");
    const department = formData.get("department");
    const status = formData.get("status");

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await hashPassword(password);

    await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      department,
      status,
    });

  } catch (error) {
    console.log(error);
    throw error;
  }

  redirect("/users");
}