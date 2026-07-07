import BugToolbar from "./BugToolbar";
import BugTable from "./BugTable";

export default function BugPage({ searchParams }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Bug Management
          </h1>

          <p className="mt-2 text-zinc-400">
            Manage and track all reported bugs.
          </p>
        </div>
      </div>

      <BugToolbar searchParams={searchParams} />

      <BugTable searchParams={searchParams} />
    </div>
  );
}