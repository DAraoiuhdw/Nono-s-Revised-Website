"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Leonardo Garcia", text: "We had a good experience during our dinner date with the family at Nono's. Good food, good ambiance, good staff. We will surely come back and try the other menus! 😊", date: "November 2024" },
  { name: "Kiara Aquino", text: "The food quality was great, the quantity of the food is spontaneous and the service of the staff are efficient and good. Overall I had a great time! ☺️", date: "January 2025" },
  { name: "Marco Santos", text: "I really like the grilled cheese panini! The pasta and waffles with ice cream were also amazing. This is our new go-to comfort food spot.", date: "May 2025" },
];

export function OurStory() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-80px" });
  const reviewRef = useRef<HTMLDivElement>(null);
  const reviewInView = useInView(reviewRef, { once: true, margin: "-80px" });

  return (
    <section id="story" className="bg-[#FDF6EC] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div ref={titleRef} initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16 text-center md:mb-24">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[4px] text-[#5B9EC9]">Since Day One</span>
          <h2 className="font-serif text-4xl font-bold text-[#3D1F0D] md:text-5xl lg:text-6xl">Our Story</h2>
          <div className="mx-auto mt-6 h-[2px] w-16 bg-[#5B9EC9]/40" />
        </motion.div>

        <motion.div ref={contentRef} initial={{ opacity: 0, y: 40 }} animate={contentInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-24 grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
            <Image src="https://nonos.ph/wp-content/uploads/2023/10/pasta-day-EXPORT-NONOS-OCT-2022-Oct-H2-SMCP-6385-800x1200-optimized.jpg" alt="Nono's pasta served fresh" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
          </div>
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-[#5B9EC9]">It is heartwarming. It is nourishing. It is home.</h3>
            <h4 className="mb-6 font-serif text-3xl font-bold text-[#3D1F0D] md:text-4xl">Comfort Food Done Right</h4>
            <p className="mb-4 text-[16px] leading-relaxed text-[#6B3A2A]/75">It began with a slice of cake. Chef Baba Ibazeta Benedicto has built a loyal following over the years for her delicious, classic desserts at the successful Classic Confections. One of her most famous concoctions is Nono&apos;s Chocolate Oblivion, named after her father.</p>
            <p className="mb-6 text-[16px] leading-relaxed text-[#6B3A2A]/75">Baba&apos;s latest venture, Nono&apos;s, allows her to explore her passion for delicious comfort food — simple, heartwarming, and nourishing dishes that feel like home. Every recipe is crafted with love and served in a cozy, inviting atmosphere where every meal feels like a celebration.</p>
            <p className="font-serif text-lg italic text-[#5B9EC9]">&ldquo;Comfort food is simple. It is heartwarming. It is nourishing. It is home.&rdquo;</p>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div ref={reviewRef} initial={{ opacity: 0, y: 30 }} animate={reviewInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h3 className="mb-12 text-center font-serif text-2xl font-bold text-[#3D1F0D] md:text-3xl">What Our Guests Say</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} animate={reviewInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.15 }} className="rounded-2xl border border-[#E8D5B7]/60 bg-white p-7 shadow-sm">
                <Quote className="mb-4 h-6 w-6 text-[#5B9EC9]/30" />
                <p className="mb-5 text-[14px] italic leading-relaxed text-[#6B3A2A]/70">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5B9EC9]/10 font-serif text-sm font-bold text-[#5B9EC9]">{t.name[0]}</div>
                  <div>
                    <p className="text-sm font-semibold text-[#3D1F0D]">{t.name}</p>
                    <p className="text-[11px] text-[#6B3A2A]/50">{t.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
