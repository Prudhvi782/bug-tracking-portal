import { createBugAction } from "@/actions/bugs/createBugAction";
import { getDevelopersAction } from "@/actions/users/getDevelopersAction";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

export default async function BugForm() {

  const developers = await getDevelopersAction();

  return (
    <form
      action={createBugAction}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
    >

      <div className="grid gap-6 md:grid-cols-2">

        <FormInput
          name="title"
          label="Bug Title"
          placeholder="Enter bug title"
        />

        <FormInput
          name="module"
          label="Module"
          placeholder="Authentication"
        />

        <FormSelect
          name="priority"
          label="Priority"
          options={[
            "Low",
            "Medium",
            "High",
            "Critical",
          ]}
        />

        <FormSelect
          name="severity"
          label="Severity"
          options={[
            "Minor",
            "Major",
            "Critical",
          ]}
        />

        <div className="space-y-2">

          <label className="text-sm text-zinc-300">
            Assigned Developer
          </label>

          <select
            name="assignedTo"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white"
          >

            <option value="">
              Select Developer
            </option>

            {developers.map((developer) => (

              <option
                key={developer._id}
                value={developer._id}
              >
                {developer.name}
              </option>

            ))}

          </select>

        </div>

        <FormInput
          name="dueDate"
          label="Due Date"
          type="date"
        />

      </div>

      <div className="mt-6">

        <FormTextarea
          name="description"
          label="Description"
        />

      </div>

      <div className="mt-8 flex justify-end gap-4">

        <button
          type="reset"
          className="rounded-xl border border-zinc-700 px-6 py-3 text-zinc-300"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
        >
          Create Bug
        </button>

      </div>

    </form>
  );
}