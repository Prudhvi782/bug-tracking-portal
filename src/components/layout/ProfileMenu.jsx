"use client";

import { useState } from "react";
import { UserCircle2 } from "lucide-react";
import { logoutAction } from "@/actions/auth/logoutAction";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      >
        <UserCircle2 className="h-8 w-8" />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-40 rounded-xl border border-zinc-700 bg-zinc-900 shadow-lg">

          <form action={logoutAction}>
            <button
              type="submit"
              className="w-full rounded-xl cursor-pointer px-4 py-3 text-left text-red-400 hover:bg-zinc-800"
            >
              Logout
            </button>
          </form>

        </div>
      )}

    </div>
  );
}