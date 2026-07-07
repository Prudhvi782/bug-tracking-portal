import AppLogo from "./AppLogo";
import NavLinks from "./NavLinks";

export default function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-zinc-800 bg-zinc-900 lg:flex lg:flex-col">
      <div className="border-b border-zinc-800 p-6">
        <AppLogo />
      </div>

      <div className="flex-1 p-4">
        <NavLinks />
      </div>
    </aside>
  );
}