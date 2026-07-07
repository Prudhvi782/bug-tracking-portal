import { Bug } from "lucide-react";

export default function AppLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg">
        <Bug className="h-6 w-6 text-white" />
      </div>

      <div>
        <h1 className="text-lg font-bold tracking-wide text-white">
          BugPortal
        </h1>

        <p className="text-xs text-zinc-400">
          Issue Management
        </p>
      </div>
    </div>
  );
}