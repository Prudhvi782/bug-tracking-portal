import UserToolbar from "./UserToolbar";
import UserTable from "./UserTable";

export default function UsersPage({ searchParams }) {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold text-white">
          Team Members
        </h1>

        <p className="mt-3 text-zinc-400">
          Manage developers, testers and administrators.
        </p>
      </div>

      <UserToolbar searchParams={searchParams} />

      <UserTable searchParams={searchParams} />

    </div>
  );
}