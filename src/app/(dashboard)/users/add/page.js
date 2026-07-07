import { authorize } from "@/lib/authorize";
import AddUserPage from "@/components/users/AddUserPage";

export default async function Page() {
  await authorize("Admin");

  return <AddUserPage />;
}