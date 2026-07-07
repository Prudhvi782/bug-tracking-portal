import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getBugByIdAction } from "@/actions/bugs/getBugByIdAction";

import BugInfoCard from "./BugInfoCard";
import ActivityTimeline from "./ActivityTimeline";
import CommentSection from "./CommentSection";

export default async function BugDetailsPage({ id }) {

  const bug = await getBugByIdAction(id);

  if (!bug) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <h2 className="text-3xl font-bold text-white">
          Bug Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <Link
            href="/bugs"
            className="mb-4 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Bugs
          </Link>

          <h1 className="mt-2 text-5xl font-bold text-white">
            {bug.title}
          </h1>

          <p className="mt-3 text-zinc-400">
            {bug.bugId}
          </p>

        </div>

      </div>

      <BugInfoCard bug={bug} />

      <div className="grid gap-8 lg:grid-cols-2">

        <ActivityTimeline bugId={bug._id.toString()} />

        <CommentSection bugId={bug._id.toString()} />

      </div>

    </div>
  );
}