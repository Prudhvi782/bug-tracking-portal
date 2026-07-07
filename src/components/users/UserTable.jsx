import { getUsersAction } from "@/actions/users/getUsersAction";

import UserRow from "./UserRow";
import Pagination from "./Pagination";

export default async function UserTable({ searchParams }) {

  const result = await getUsersAction({
    search: searchParams?.search || "",
    role: searchParams?.role || "",
    page: Number(searchParams?.page || 1),
    limit: 1,
  });

  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-black">

            <tr>

              <th className="px-6 py-5 text-left text-white">
                Name
              </th>

              <th className="px-6 py-5 text-left text-white">
                Email
              </th>

              <th className="px-6 py-5 text-left text-white">
                Role
              </th>

              <th className="px-6 py-5 text-left text-white">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {result.users.map((user) => (

              <UserRow
                key={user._id}
                user={user}
              />

            ))}

          </tbody>

        </table>

      </div>

      <Pagination
        page={result.page}
        totalPages={result.totalPages}
        searchParams={searchParams}
      />

    </div>
  );
}