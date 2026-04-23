"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const promos = [
  { title: "Buy 1 Get 1 Pizza every Tuesday", subtitle: "JCB Chooseday Promo", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80", cta: "Learn More" },
  { title: "Nono's Signature Bowls", subtitle: "New on the Menu", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80", cta: "See Menu" },
  { title: "Discover Your Next Coffee Obsession", subtitle: "There's a New Cup in Town", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80", cta: "Explore" },
];

export function PromoCarousel() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % promos.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#FDF6EC] px-6 py-16 md:px-12 md:py-24">
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mx-auto max-w-6xl">
        <div className="relative aspect-[16/7] overflow-hidden rounded-3xl sm:aspect-[16/6]">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="absolute inset-0">
              <Image src={promos[current].image} alt={promos[current].title} fill className="object-cover" sizes="100vw" priority />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-14 md:px-20">
                <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-[#5B9EC9] sm:text-sm">{promos[current].subtitle}</motion.span>
                <motion.h3 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-md font-serif text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">{promos[current].title}</motion.h3>
                <motion.a initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} href="#menu" className="mt-6 inline-block w-fit rounded-full bg-[#5B9EC9] px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">{promos[current].cta}</motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {promos.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-white" : "w-2 bg-white/50"}`} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
