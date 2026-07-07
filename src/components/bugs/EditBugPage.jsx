import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import EditBugForm from "./EditBugForm";
import { getBugByIdAction } from "@/actions/bugs/getBugByIdAction";
import { getDevelopersAction } from "@/actions/users/getDevelopersAction";

export default async function EditBugPage({ id }) {
  const bug = await getBugByIdAction(id);
  const developers = await getDevelopersAction();

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/bugs"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Bugs
        </Link>

        <h1 className="mt-4 text-5xl font-bold text-white">
          Edit Bug
        </h1>

        <p className="mt-2 text-zinc-400">
          Update bug information and assign developers.
        </p>
      </div>

      <EditBugForm
        bug={bug}
        developers={developers}
      />
    </div>
  );
}