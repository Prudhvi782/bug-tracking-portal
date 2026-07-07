import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AddUserForm from "./AddUserForm";

export default function AddUserPage() {
  return (
    <div className="space-y-8">

      <div>

        <Link
          href="/users"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Users
        </Link>

        <h1 className="mt-4 text-5xl font-bold text-white">
          Add Team Member
        </h1>

        <p className="mt-3 text-zinc-400">
          Invite a developer, tester or administrator.
        </p>

      </div>

      <AddUserForm />

    </div>
  );
}