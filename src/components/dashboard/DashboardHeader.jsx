import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-zinc-400">
          Monitor bugs, assignments and project progress.
        </p>
      </div>

      <Button className="rounded-xl bg-blue-600 hover:bg-blue-700">
        <Plus className="mr-2 h-4 w-4" />
        Report Bug
      </Button>
    </div>
  );
}