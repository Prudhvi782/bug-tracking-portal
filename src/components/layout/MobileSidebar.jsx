"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import AppLogo from "./AppLogo";
import NavLinks from "./NavLinks";

export default function MobileSidebar() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-72 border-zinc-800 bg-zinc-900 text-white"
        >
          <div className="mb-8">
            <AppLogo />
          </div>

          <NavLinks />
        </SheetContent>
      </Sheet>
    </div>
  );
}