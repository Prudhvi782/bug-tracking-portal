import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function BugHeader() {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

      <div>

        <h1 className="text-4xl font-bold text-white">
          Bugs
        </h1>

        <p className="mt-2 text-zinc-400">
          Manage and track all reported bugs.
        </p>

      </div>

      <Button className="rounded-xl bg-blue-600 hover:bg-blue-700">

        <Plus className="mr-2 h-4 w-4"/>

        Report Bug

      </Button>

    </div>
  );
}