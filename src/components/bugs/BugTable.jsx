import { getBugsAction } from "@/actions/bugs/getBugsAction";

import BugRow from "./BugRow";
import Pagination from "./Pagination";

export default async function BugTable({ searchParams }) {
  const result = await getBugsAction({
    search: searchParams?.search || "",
    status: searchParams?.status || "",
    priority: searchParams?.priority || "",
    severity: searchParams?.severity || "",
    page: Number(searchParams?.page || 1),
    limit: 1,
  });

  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

      <table className="w-full">

        {/* keep your existing table header */}

        <tbody>

          {result.bugs.map((bug) => (
            <BugRow
              key={bug._id}
              bug={bug}
            />
          ))}

        </tbody>

      </table>

      <Pagination
        page={result.page}
        totalPages={result.totalPages}
      />

    </div>
  );
}