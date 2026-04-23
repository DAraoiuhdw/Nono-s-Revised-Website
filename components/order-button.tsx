"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Percent, X } from "lucide-react";
import Link from "next/link";

export function OrderButton() {
  const [showDiscount, setShowDiscount] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  return (
    <>
      {/* Discount Popup */}
      <AnimatePresence>
        {showDiscount && !dismissed && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.25 }} className="fixed bottom-24 right-6 z-[60] w-72 overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-2xl md:right-8">
            <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-4">
              <button onClick={() => setDismissed(true)} className="absolute right-2 top-2 rounded-full p-1 text-white/70 hover:text-white"><X className="h-4 w-4" /></button>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Percent className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">15% OFF</p>
                  <p className="text-[12px] text-white/80">Your first order!</p>
                </div>
              </div>
            </div>
            <div className="px-5 py-4">
              <p className="mb-3 text-[13px] text-[#6B3A2A]/70">Use code <span className="font-bold text-[#3D1F0D]">NONOS15</span> at checkout</p>
              <Link href="/order" className="block w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 py-2.5 text-center text-[13px] font-bold text-white transition-transform hover:scale-[1.02]">
                Claim Now & Order
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Order Button */}
      <Link href="/order" onMouseEnter={() => { setShowDiscount(true); setDismissed(false); }} className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#5B9EC9] to-[#4a8db8] px-6 py-4 font-semibold text-white shadow-xl shadow-[#5B9EC9]/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#5B9EC9]/40 md:right-8">
        <ShoppingBag className="h-5 w-5" />
        <span className="text-[15px]">Order Now</span>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold">🔥</span>
      </Link>
    </>
  );
}
