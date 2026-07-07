import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Name is required"),

  email: z.email("Invalid Email"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),

  role: z.enum([
    "Admin",
    "Developer",
    "Tester",
  ]),

  department: z.string().min(2),
});

export const loginSchema = z.object({
  email: z.email("Invalid Email"),

  password: z.string().min(6),
});