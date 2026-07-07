import { authorize } from "@/lib/authorize";
import UserDetailsPage from "@/components/users/UserDetailsPage";

export default async function Page({ params }) {
  await authorize("Admin");

  const { id } = await params;

  return <UserDetailsPage id={id} />;
}