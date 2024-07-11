"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cross1Icon, Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const navLinks = [
    { href: "/about-me", label: "About Me" },
    { href: "/my-expertise", label: "My Expertise" },
    { href: "/project", label: "Project" },
  ];
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="header-wrapper relative">
      <div className="flex justify-between text-[#ACCDC0] p-4">
        <div className="left-side">
          <h1 className="text-3xl">Rado No</h1>
        </div>

        {/* Desktop menu */}
        <div className="right-side hidden md:flex justify-center items-center">
          <div className="nav_item flex">
            {navLinks.map((link, index) => (
              <span key={link.href} className="flex justify-center items-center">
                <Link href={link.href} className="mx-3">
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && "/"}
              </span>
            ))}
          </div>
        </div>
        <div className="hamburger block md:hidden">
          <Button size="icon" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? (
              <Cross1Icon className="h-6 w-6" />
            ) : (
              <HamburgerMenuIcon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden block fixed top-0 left-0 bg-gray-900 text-white w-full h-screen z-40"
          >
            <div className="flex flex-col h-full justify-center relative">
              {navLinks.map((link, index) => (
                <motion.span
                  key={link.href}
                  className="flex justify-center items-center my-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link href={link.href} className="mx-3 text-xl">
                    {link.label}
                  </Link>
                </motion.span>
              ))}


              <div className="close_btn absolute top-14 right-10 cursor-pointer"onClick={() => setOpenMenu(!openMenu)}>
                <Cross2Icon className="h-6 w-6"/>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
