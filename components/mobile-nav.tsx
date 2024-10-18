"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./nav-bar";
import { useState } from "react";

const MobileNav = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false)

  const handleSheetClose = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <AlignRight className="h-10 w-10 text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center items-center space-y-8">
        <nav className="flex flex-col gap-8 w-full justify-center items-center">
          {navLinks.map((link, index) => {
          
            return (
              <Link
                key={index}
                href={link.path}
                onClick={handleSheetClose}
                className={cn(
                  "capitalize font-medium text-xl hover:text-accent transition-all",
                  link.path === pathname &&
                    "text-accent border-b-2  border-accent"
                )}
              >
                <SheetClose />
                {link.name}
              </Link>
            );
          })}
        </nav>
        <Link
            href=""
            onClick={handleSheetClose}
            className="bg-neutral-900 hover:bg-neutral-800 px-4 py-3 text-primary-white shadow rounded-3xl text-base font-medium transition-all"
          >
            Get In Touch
          </Link>
        
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
