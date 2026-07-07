import { Bug, ShieldCheck, Users } from "lucide-react";

export default function AuthHeader() {
  return (
    <section className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-blue-700 via-indigo-700 to-zinc-950 p-14 text-white">

      <div>
        <div className="flex items-center gap-5">

          <div className="rounded-3xl bg-white/15 p-5 backdrop-blur">
            <Bug className="h-10 w-10" />
          </div>

          <div>
            <h1 className="text-5xl font-extrabold">
              BugPortal
            </h1>

            <p className="mt-1 text-lg text-blue-100">
              Bug Tracking Portal
            </p>
          </div>
        </div>
      </div>

      <div>

        <h2 className="text-7xl font-extrabold leading-tight">
          Track
          <br />
          Assign
          <br />
          Resolve
        </h2>

        <p className="mt-10 max-w-lg text-xl leading-9 text-blue-100">
          Report bugs, assign developers, collaborate with testers and monitor
          project progress in one modern dashboard.
        </p>

        <div className="mt-16 space-y-7 text-lg">

          <div className="flex items-center gap-4">
            <ShieldCheck className="text-green-300" />
            Secure Authentication
          </div>

          <div className="flex items-center gap-4">
            <Users className="text-yellow-300" />
            Team Collaboration
          </div>

        </div>

      </div>

      <div className="text-lg text-blue-100">
        ©2026 BugPortal
      </div>

    </section>
  );
}