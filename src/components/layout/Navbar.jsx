import MobileSidebar from "./MobileSidebar";
import ProfileMenu from "./ProfileMenu";

import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-6">

      <MobileSidebar />

      <h2 className="text-lg font-semibold">
        Bug Tracking Portal
      </h2>

      <div className="flex items-center gap-5">

        <Bell className="cursor-pointer" />

        <ProfileMenu />

      </div>

    </header>
  );
}