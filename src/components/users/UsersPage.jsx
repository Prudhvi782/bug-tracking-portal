import UserToolbar from "./UserToolbar";
import UserTable from "./UserTable";

export default function UsersPage({ searchParams }) {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Team Members
        </h1>

        <p className="mt-3 text-sm text-zinc-400 sm:text-base">
          Manage developers, testers and administrators.
        </p>
      </div>

      <UserToolbar searchParams={searchParams} />

      <UserTable searchParams={searchParams} />

    </div>
  );
}