import BugForm from "./BugForm";

export default function CreateBugPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Report New Bug
        </h1>

        <p className="mt-2 text-zinc-400">
          Create a new bug and assign it to your team.
        </p>
      </div>

      <BugForm />

    </div>
  );
}