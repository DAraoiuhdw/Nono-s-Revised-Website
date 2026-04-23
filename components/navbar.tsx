"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Our Stores", href: "#stores" },
  { label: "Contact Us", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 md:px-12 ${
          scrolled
            ? "bg-[#FDF6EC]/95 shadow-[0_2px_20px_rgba(61,31,13,0.08)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="/" className="relative z-10 shrink-0">
          <img
            src="https://nonos.ph/wp-content/uploads/2023/10/nonoslogo-grey-optimized.png"
            alt="Nono's Comfort Kitchen & Bakery"
            style={{ height: "45px", width: "auto" }}
            className={`transition-all duration-500 ${
              scrolled ? "brightness-100" : "brightness-0 invert"
            }`}
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link relative text-[17px] font-medium transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#5B9EC9] after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? "text-[#6B3A2A]" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-5 transition-all duration-300 ${
              mobileOpen
                ? "translate-y-[7px] rotate-45 bg-[#3D1F0D]"
                : scrolled
                ? "bg-[#3D1F0D]"
                : "bg-white"
            }`}
          />
          <span
            className={`block h-[2px] w-5 transition-all duration-300 ${
              mobileOpen
                ? "opacity-0"
                : scrolled
                ? "bg-[#3D1F0D]"
                : "bg-white"
            }`}
          />
          <span
            className={`block h-[2px] w-5 transition-all duration-300 ${
              mobileOpen
                ? "-translate-y-[7px] -rotate-45 bg-[#3D1F0D]"
                : scrolled
                ? "bg-[#3D1F0D]"
                : "bg-white"
            }`}
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FDF6EC]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.08 }}
                  className="font-serif text-3xl font-bold text-[#3D1F0D] transition-colors hover:text-[#5B9EC9]"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#reservations"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mt-4 rounded-full bg-[#5B9EC9] px-10 py-4 text-lg font-semibold text-white transition-transform hover:scale-105"
              >
                Reserve a Table
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
