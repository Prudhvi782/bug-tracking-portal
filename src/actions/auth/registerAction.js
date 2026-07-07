"use server";

import { redirect } from "next/navigation";

import { dbConnect } from "@/lib/db";
import User from "@/models/User";
import { hashPassword } from "@/lib/auth";

export async function registerAction(formData) {
  try {
    await dbConnect();

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");
    const department = formData.get("department");

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return {
        success: false,
        message: "Email already exists",
      };
    }

    const hashedPassword = await hashPassword(password);

    await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      department,
    });

  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }

  redirect("/login");
}