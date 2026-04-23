"use client";

import { useState, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { menuItems, categories, type Category } from "@/lib/menu-data";
import { Search, Flame } from "lucide-react";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Best Sellers");
  const [searchQuery, setSearchQuery] = useState("");
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === "Best Sellers" ? item.bestSeller === true : item.category === activeCategory;
      const matchesSearch = searchQuery === "" || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Filter out "All" from displayed categories
  const displayCategories = categories.filter((c) => c !== "All");

  return (
    <section id="menu" className="bg-[#F8F0E3] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div ref={titleRef} initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12 text-center md:mb-16">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[4px] text-[#5B9EC9]">Full Selection</span>
          <h2 className="font-serif text-4xl font-bold text-[#3D1F0D] md:text-5xl lg:text-6xl">Our Menu</h2>
          <div className="mx-auto mt-6 h-[2px] w-16 bg-[#5B9EC9]/40" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="mx-auto mb-8 max-w-lg">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6B3A2A]/40" />
            <input type="text" placeholder="Search dishes..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full rounded-full border border-[#E8D5B7] bg-white py-3.5 pl-12 pr-5 text-[15px] text-[#3D1F0D] placeholder-[#6B3A2A]/40 shadow-sm transition-all focus:border-[#5B9EC9] focus:outline-none focus:ring-2 focus:ring-[#5B9EC9]/20" id="menu-search" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="mb-12 flex flex-wrap justify-center gap-2 md:gap-3">
          {displayCategories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`rounded-full px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-300 ${activeCategory === cat ? cat === "Best Sellers" ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/25" : "bg-[#5B9EC9] text-white shadow-md shadow-[#5B9EC9]/25" : "bg-[#FDF6EC] text-[#6B3A2A] hover:bg-[#E8D5B7]"}`} id={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}>
              {cat === "Best Sellers" && <Flame className="mr-1 inline h-3.5 w-3.5" />}
              {cat}
            </button>
          ))}
        </motion.div>

        <div ref={gridRef}>
          {filteredItems.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
              <p className="font-serif text-xl text-[#6B3A2A]/60">No dishes found matching your search.</p>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={gridInView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, index) => (
                <motion.div key={`${item.name}-${item.category}-${index}`} initial={{ opacity: 0, y: 20 }} animate={gridInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.6) }} className="group overflow-hidden rounded-2xl border border-[#E8D5B7]/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#3D1F0D]/5">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-3 inline-block rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#5B9EC9] backdrop-blur-sm">{item.category}</span>
                    {item.bestSeller && (
                      <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                        <Flame className="h-3 w-3" /> Best Seller
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h3 className="font-serif text-[17px] font-bold leading-snug text-[#3D1F0D]">{item.name}</h3>
                      <span className="shrink-0 font-serif text-lg font-semibold text-[#5B9EC9]">₱{item.price}</span>
                    </div>
                    <p className="text-[13px] italic leading-relaxed text-[#6B3A2A]/60">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={gridInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }} className="mt-8 text-center text-sm text-[#6B3A2A]/50">
          Showing {filteredItems.length} of {menuItems.length} dishes
        </motion.p>
      </div>
    </section>
  );
}
