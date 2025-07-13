"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Logo from "../NavBar/NavLogo";
import NavLinks from "../NavBar/NavLinks";
import ContactCTA from "../NavBar/ContactCTA";
import MobileToggle from "../NavBar/MobileToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute top-0 inset-x-0 z-50 h-24 flex items-center bg-white lg:bg-transparent">
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-full">
        <nav className="flex justify-between items-center h-full" aria-label="Main Navigation">
          <div className="min-w-max">
            <Logo />
          </div>

          {/* Center Nav + CTA (only visible on lg+) */}
          <div className="hidden lg:flex flex-1 justify-center items-center relative h-full">
            <NavLinks/>
          </div>

          {/* CTA (Right) */}
          <div className="hidden lg:flex min-w-max">
            <ContactCTA/>
          </div>

          {/* Mobile Menu (absolute full-screen) */}
          <div id="main-menu" className={clsx("fixed inset-0 top-0 bg-white py-24 px-6 sm:px-10 md:px-14 transition-all duration-300 ease-linear flex flex-col gap-y-10 text-gray-700", "lg:hidden", {"opacity-100 visible translate-y-0": open, "opacity-0 invisible -translate-y-10": !open,})}>
            <NavLinks onClick={() => setOpen(false)}/>
            <ContactCTA onClick={() => setOpen(false)}/>
          </div>

          {/* Mobile Toggle Button */}
          <MobileToggle open={open} setOpen={setOpen}/>
        </nav>
      </div>
    </header>
  );
}