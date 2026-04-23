"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#FDF6EC]">
      {/* Hero Image Container — framed with cream margins and rounded corners */}
      <div className="px-5 pb-5 pt-0 md:px-10 md:pb-10">
        <div className="relative min-h-screen overflow-hidden rounded-[20px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-food.jpg"
              alt="Beautifully plated gourmet dishes on a rustic wooden table"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Warm amber overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-amber-900/25 to-black/50" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="max-w-5xl text-balance font-serif text-[40px] font-bold leading-[1.1] tracking-tight text-white sm:text-[56px] md:text-[72px] lg:text-[84px]"
              >
                Filipino comfort food, made with love.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
                className="mt-6 max-w-xl text-pretty text-base italic text-white/85 sm:text-lg md:text-xl"
              >
                Authentic recipes passed down through generations
              </motion.p>

              <motion.a
                href="#reservations"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10 inline-block rounded-full bg-[#5B9EC9] px-10 py-4 text-base font-semibold text-white shadow-lg transition-shadow hover:shadow-xl sm:text-lg md:py-5"
              >
                Reserve a Table
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-xs uppercase tracking-[3px] text-white/60">
                  Scroll
                </span>
                <svg
                  width="16"
                  height="24"
                  viewBox="0 0 16 24"
                  fill="none"
                  className="text-white/50"
                >
                  <path
                    d="M7.29 23.71a1 1 0 001.42 0l5.3-5.3a1 1 0 00-1.42-1.42L8 21.58l-4.59-4.59a1 1 0 00-1.41 1.42l5.29 5.3zM7 0v23h2V0H7z"
                    fill="currentColor"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
