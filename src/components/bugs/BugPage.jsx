import BugToolbar from "./BugToolbar";
import BugTable from "./BugTable";

export default function BugPage({ searchParams }) {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Bug Management
        </h1>

        <p className="mt-2 text-sm text-zinc-400 sm:text-base">
          Manage and track all reported bugs.
        </p>
      </div>

      <BugToolbar searchParams={searchParams} />

      <BugTable searchParams={searchParams} />

    </div>
  );
}