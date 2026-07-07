"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBugForm() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Title */}

        <div>

          <Label className="text-zinc-300">
            Title
          </Label>

          <Input
            placeholder="Enter bug title"
            className="mt-2"
          />

        </div>

        {/* Module */}

        <div>

          <Label className="text-zinc-300">
            Module
          </Label>

          <Input
            placeholder="Authentication"
            className="mt-2"
          />

        </div>

        {/* Priority */}

        <div>

          <Label className="text-zinc-300">
            Priority
          </Label>

          <select className="mt-2 h-11 w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 text-white">

            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>

          </select>

        </div>

        {/* Severity */}

        <div>

          <Label className="text-zinc-300">
            Severity
          </Label>

          <select className="mt-2 h-11 w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 text-white">

            <option>Minor</option>
            <option>Major</option>
            <option>Critical</option>

          </select>

        </div>

        {/* Assigned */}

        <div>

          <Label className="text-zinc-300">
            Assigned Developer
          </Label>

          <select className="mt-2 h-11 w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 text-white">

            <option>Rahul</option>
            <option>Mahesh</option>
            <option>Prudhvi</option>

          </select>

        </div>

        {/* Due Date */}

        <div>

          <Label className="text-zinc-300">
            Due Date
          </Label>

          <Input
            type="date"
            className="mt-2"
          />

        </div>

      </div>

      {/* Description */}

      <div className="mt-6">

        <Label className="text-zinc-300">
          Description
        </Label>

        <Textarea
          rows={6}
          placeholder="Describe bug..."
          className="mt-2"
        />

      </div>

      {/* Screenshot */}

      <div className="mt-6">

        <Label className="text-zinc-300">
          Screenshot
        </Label>

        <Input
          type="file"
          className="mt-2"
        />

      </div>

      <div className="mt-8 flex justify-end gap-4">

        <Button
          variant="outline"
        >
          Cancel
        </Button>

        <Button
          className="bg-blue-600 hover:bg-blue-700"
        >
          Submit Bug
        </Button>

      </div>

    </div>
  );
}