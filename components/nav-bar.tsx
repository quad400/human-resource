"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile-nav";

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "#services",
  },
  {
    name: "Our Mission",
    path: "#mission",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white fixed w-full shadow-sm z-40">
      <nav className="flex justify-between items-center py-4 container ">
        <Link href="/" className="flex justify-between items-center">
         <div className="text-2xl font-semibold text-neutral-900">deel.</div>
        </Link>
        <div className="flex justify-center items-center space-x-6 max-md:hidden">
          {navLinks.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={cn(
                  "capitalize font-medium hover:text-forground transition-all",
                  link.path === pathname &&
                    "text-accent border-b-2  border-accent"
                )}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href=""
            className="bg-neutral-900 hover:bg-neutral-800 px-4 py-3 text-primary-white shadow rounded-3xl text-base font-medium transition-all"
          >
            Get In Touch
          </Link>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </nav>
    </div>
  );
};
