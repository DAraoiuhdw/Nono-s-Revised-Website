"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";

const pageLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Our Stores", href: "#stores" },
  { label: "Contact Us", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
];

const latestUpdates = [
  { title: "JCB Chooseday Promo", subtitle: "Buy 1 Get 1 Pizza every Tuesday" },
  { title: "Nono's Signature Bowls", subtitle: "New on the menu" },
  { title: "New Coffee Obsession", subtitle: "There's a new cup in town" },
  { title: "UnionBank Debit Card Promo", subtitle: "Exclusive dining perks" },
];

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} id="contact" className="bg-[#FDF6EC] px-6 pt-20 pb-8 md:px-12">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mx-auto max-w-6xl">
        {/* Logo */}
        <div className="mb-14 flex justify-center">
          <img src="https://nonos.ph/wp-content/uploads/2023/10/nonoslogo-grey-optimized.png" alt="Nono's Comfort Kitchen & Bakery" style={{ height: "50px", width: "auto" }} />
        </div>
        <div className="mb-12 h-px w-full bg-[#3D1F0D]/10" />

        {/* Four Columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-5 font-serif text-sm font-bold uppercase tracking-[2px] text-[#3D1F0D]">Pages</h4>
            <ul className="space-y-3">
              {pageLinks.map((link) => (<li key={link.label}><a href={link.href} className="text-[14px] text-[#6B3A2A]/70 transition-colors hover:text-[#5B9EC9]">{link.label}</a></li>))}
            </ul>
          </div>
          <div>
            <h4 className="mb-5 font-serif text-sm font-bold uppercase tracking-[2px] text-[#3D1F0D]">Follow Us</h4>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/nonos.ph/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3D1F0D]/5 text-[#6B3A2A] transition-all hover:bg-[#5B9EC9] hover:text-white" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
              <a href="https://www.instagram.com/nonos.ph/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3D1F0D]/5 text-[#6B3A2A] transition-all hover:bg-[#5B9EC9] hover:text-white" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
              <a href="https://ph.linkedin.com/company/nonosph" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3D1F0D]/5 text-[#6B3A2A] transition-all hover:bg-[#5B9EC9] hover:text-white" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="mb-5 font-serif text-sm font-bold uppercase tracking-[2px] text-[#3D1F0D]">Latest Updates</h4>
            <ul className="space-y-3">
              {latestUpdates.map((u) => (<li key={u.title}><p className="text-[14px] font-medium text-[#3D1F0D]">{u.title}</p><p className="text-[12px] text-[#6B3A2A]/50">{u.subtitle}</p></li>))}
            </ul>
          </div>
          <div>
            <h4 className="mb-5 font-serif text-sm font-bold uppercase tracking-[2px] text-[#3D1F0D]">Contact</h4>
            <p className="mb-2 text-[14px] text-[#6B3A2A]/70">For inquiries and reservations:</p>
            <p className="mb-1 text-[14px] font-medium text-[#3D1F0D]">info@nonos.ph</p>
            <p className="text-[14px] text-[#6B3A2A]/70">Visit any of our {31} branches across Metro Manila</p>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-[#3D1F0D]/10" />
        <div className="mt-6 text-center">
          <p className="text-[12px] text-[#6B3A2A]/45">&copy; 2026 Nono&apos;s Comfort Kitchen &amp; Bakery. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
}
