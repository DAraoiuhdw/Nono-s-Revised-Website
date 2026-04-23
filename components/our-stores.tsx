"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stores } from "@/lib/store-data";
import { MapPin, Clock, Phone, Search, Sparkles } from "lucide-react";

export function OurStores() {
  const [search, setSearch] = useState("");
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  const filtered = stores.filter((s) =>
    search === "" || s.name.toLowerCase().includes(search.toLowerCase()) || s.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="stores" className="bg-[#F8F0E3] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div ref={titleRef} initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12 text-center md:mb-16">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[4px] text-[#5B9EC9]">{stores.length} Branches Nationwide</span>
          <h2 className="font-serif text-4xl font-bold text-[#3D1F0D] md:text-5xl lg:text-6xl">Our Stores</h2>
          <div className="mx-auto mt-6 h-[2px] w-16 bg-[#5B9EC9]/40" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="mx-auto mb-10 max-w-lg">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6B3A2A]/40" />
            <input type="text" placeholder="Search by location..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-full border border-[#E8D5B7] bg-white py-3.5 pl-12 pr-5 text-[15px] text-[#3D1F0D] placeholder-[#6B3A2A]/40 shadow-sm transition-all focus:border-[#5B9EC9] focus:outline-none focus:ring-2 focus:ring-[#5B9EC9]/20" id="store-search" />
          </div>
        </motion.div>

        <div ref={gridRef}>
          <motion.div initial={{ opacity: 0 }} animate={gridInView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((store, i) => (
              <motion.div key={store.name} initial={{ opacity: 0, y: 20 }} animate={gridInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.5) }} className="rounded-2xl border border-[#E8D5B7]/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="mb-3 font-serif text-lg font-bold text-[#3D1F0D]">{store.name}</h3>
                <div className="mb-2 flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#5B9EC9]" />
                  <p className="text-[13px] leading-relaxed text-[#6B3A2A]/70">{store.address}</p>
                </div>
                <div className="mb-2 flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#5B9EC9]" />
                  <div className="text-[13px] text-[#6B3A2A]/70">{store.hours.map((h, j) => <span key={j} className="block">{h}</span>)}</div>
                </div>
                <div className="mb-3 flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#5B9EC9]" />
                  <a href={`tel:${store.phone}`} className="text-[13px] text-[#5B9EC9] hover:underline">{store.phone}</a>
                </div>
                {store.features && (
                  <div className="flex flex-wrap gap-1.5">
                    {store.features.map((f) => (
                      <span key={f} className="inline-flex items-center gap-1 rounded-full bg-[#FDF6EC] px-2.5 py-1 text-[11px] font-medium text-[#6B3A2A]">
                        <Sparkles className="h-3 w-3 text-[#5B9EC9]" />{f}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
          {filtered.length === 0 && <p className="py-16 text-center font-serif text-lg text-[#6B3A2A]/50">No stores found matching your search.</p>}
        </div>
      </div>
    </section>
  );
}
