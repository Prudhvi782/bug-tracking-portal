"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/constants/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {navigation.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.title}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
          >
            <Icon size={20} />
            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}