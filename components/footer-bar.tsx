import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Facebook, MailIcon, Youtube } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

export const FooterBar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-primary-dark pt-10 -z-10">
      <footer className="container mx-auto py-4 flex justify-start items-start space-x-4">
        <Link
          href="/"
          className=""
        >
          <Logo />
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold text-xl">Contact Us</h3>
            <p className="text-neutral-400">
              Got any question, enquiry and/or comments call our office
            </p>
            <div className="flex flex-col">
              <Link href={`tel:+23439596749`} className="text-neutral-400">
                +234-(39)-596-749
              </Link>
              <Link
                href="mailTo:adedijiabdulquadri@gmail.com"
                className="text-neutral-400 flex-wrap overflow-clip"
              >
                <MailIcon className="w-6 h-6 text-neutral-400" />
              </Link>
            </div>
            <div className="flex space-x-3 mt-4">
              <Link href={`${process.env.NEXT_PUBLIC_INSTAGRAM}`}>
                <InstagramLogoIcon className="w-6 h-6 text-neutral-400" />
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_FACEBOOK}`}>
                <Facebook className="w-6 h-6 text-neutral-400" />
              </Link>
              <Link href={`${process.env.NEXT_PUBLIC_YOUTUBE}`}>
                <Youtube className="w-6 h-6 text-neutral-400" />
              </Link>
            </div>
          </div>

          {/* Quick Action Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold text-xl">How it works</h3>
            <Link href="/" className="text-neutral-400">
              Hire Employees
            </Link>
            <Link href="/" className="text-neutral-400">
              Hire Contractors
            </Link>
            <Link href="/" className="text-neutral-400">
              Run Global Payroll
            </Link>
          </div>

          {/* Pages Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-bold text-xl">Solutions</h3>
            <Link href="/" className="text-neutral-400">
              Compliance
            </Link>
            <Link href="/" className="text-neutral-400">
              Payments
            </Link>
            <Link href="/" className="text-neutral-400">
              For Finance Teams
            </Link>
            <Link href="/" className="text-neutral-400">
              For Legal Teams
            </Link>
          </div>
        </div>
      </footer>
      <div className="py-5 justify-center items-center">
        <p className="text-neutral-400 text-center max-md:text-xs">
          &copy; {currentYear} Adediji Abdulquadri. All rights reserved.
        </p>
      </div>
    </div>
  );
};
