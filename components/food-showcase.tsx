"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { showcaseDishes } from "@/lib/menu-data";

function ShowcaseRow({ dish, index }: { dish: (typeof showcaseDishes)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.article ref={ref} initial={{ opacity: 0, x: isEven ? -60 : 60 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut" }} className={`flex flex-col items-center gap-8 md:gap-12 lg:gap-16 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
      <div className="w-full md:w-1/2">
        <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image src={dish.image} alt={dish.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      </div>
      <div className="flex w-full flex-col md:w-1/2">
        <span className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-[#5B9EC9]">{dish.category}</span>
        <h3 className="font-serif text-2xl font-bold text-[#3D1F0D] md:text-3xl lg:text-[28px]">{dish.name}</h3>
        <p className="mt-4 text-base leading-relaxed text-[#6B3A2A]/75 md:text-[17px]">{dish.description}</p>
        <p className="mt-6 font-serif text-2xl font-semibold text-[#5B9EC9]">₱{dish.price}</p>
      </div>
    </motion.article>
  );
}

export function FoodShowcase() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#FDF6EC] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div ref={titleRef} initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-20 text-center md:mb-28">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[4px] text-[#5B9EC9]">Signature Dishes</span>
          <h2 className="font-serif text-4xl font-bold text-[#3D1F0D] md:text-5xl lg:text-6xl">Our Food</h2>
          <div className="mx-auto mt-6 h-[2px] w-16 bg-[#5B9EC9]/40" />
        </motion.div>
        <div className="flex flex-col gap-20 md:gap-28">
          {showcaseDishes.map((dish, index) => (
            <ShowcaseRow key={dish.name} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
