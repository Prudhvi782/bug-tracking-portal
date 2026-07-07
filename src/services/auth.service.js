import bcrypt from "bcryptjs";

import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function registerUser(data) {
  await dbConnect();

  const existingUser = await User.findOne({
    email: data.email,
  });

  if (existingUser) {
    throw new Error("Email already exists.");
  }

  const hashedPassword = await bcrypt.hash(
    data.password,
    10
  );

  const user = await User.create({
    ...data,
    password: hashedPassword,
  });

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

export async function loginUser({
  email,
  password,
}) {
  await dbConnect();

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const isPasswordValid =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!isPasswordValid) {
    throw new Error("Invalid email or password.");
  }

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
  };
}