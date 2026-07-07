import { authorize } from "@/lib/authorize";
import UsersPage from "@/components/users/UsersPage";

export default async function Page({ searchParams }) {
  await authorize("Admin");

  return (
    <UsersPage
      searchParams={await searchParams}
    />
  );
}