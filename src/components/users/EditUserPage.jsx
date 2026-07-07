import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getUserByIdAction } from "@/actions/users/getUserByIdAction";
import EditUserForm from "./EditUserForm";

export default async function EditUserPage({ id }) {
  const user = await getUserByIdAction(id);

  if (!user) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <h1 className="text-3xl font-bold text-white">
          User Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <Link
        href="/users"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
      >
        <ArrowLeft size={18} />
        Back to Users
      </Link>

      <h1 className="text-5xl font-bold text-white">
        Edit Team Member
      </h1>

      <EditUserForm user={user} />

    </div>
  );
}