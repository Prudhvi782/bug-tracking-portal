import { authorize } from "@/lib/authorize";
import EditUserPage from "@/components/users/EditUserPage";

export default async function Page({ params }) {
  await authorize("Admin");

  const { id } = await params;

  return <EditUserPage id={id} />;
}