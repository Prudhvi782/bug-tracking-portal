"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { dbConnect } from "@/lib/db";
import User from "@/models/User";
import { comparePassword } from "@/lib/auth";
import { generateToken } from "@/lib/jwt";

export async function loginAction(formData) {
  try {
    await dbConnect();

    const email = formData.get("email");
    const password = formData.get("password");

    const user = await User.findOne({ email });

    if (!user) {
      return {
        success: false,
        message: "Invalid Email",
      };
    }

    const matched = await comparePassword(
      password,
      user.password
    );

    if (!matched) {
      return {
        success: false,
        message: "Invalid Password",
      };
    }

    const token = generateToken({
      id: user._id.toString(),
      role: user.role,
    });

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });

  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }

  redirect("/dashboard");
}