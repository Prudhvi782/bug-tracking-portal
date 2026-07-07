import Link from "next/link";

export default function Pagination({
  page,
  totalPages,
}) {
  return (
    <div className="flex items-center justify-between border-t border-zinc-800 px-6 py-5">

      <p className="text-zinc-400">
        Page {page} of {totalPages}
      </p>

      <div className="flex gap-2">

        {page > 1 ? (
          <Link
            href={`/bugs?page=${page - 1}`}
            className="rounded-lg border border-zinc-700 px-4 py-2 text-white hover:bg-zinc-800"
          >
            Previous
          </Link>
        ) : (
          <button
            disabled
            className="rounded-lg border border-zinc-700 px-4 py-2 text-white opacity-40"
          >
            Previous
          </button>
        )}

        {page < totalPages ? (
          <Link
            href={`/bugs?page=${page + 1}`}
            className="rounded-lg border border-zinc-700 px-4 py-2 text-white hover:bg-zinc-800"
          >
            Next
          </Link>
        ) : (
          <button
            disabled
            className="rounded-lg border border-zinc-700 px-4 py-2 text-white opacity-40"
          >
            Next
          </button>
        )}

      </div>

    </div>
  );
} 