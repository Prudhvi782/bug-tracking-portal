import { redirect } from "next/navigation";
import { getCurrentUser } from "./getCurrentUser";

export async function authorize(...roles) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (!roles.includes(user.role)) {
    redirect("/dashboard");
  }

  return user;
}