"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star, Send } from "lucide-react";

interface Review {
  name: string;
  text: string;
  date: string;
  rating: number;
}

const defaultReviews: Review[] = [
  { name: "Leonardo Garcia", text: "We had a good experience during our dinner date with the family at Nono's. Good food, good ambiance, good staff. We will surely come back and try the other menus! 😊", date: "November 2024", rating: 5 },
  { name: "Kiara Aquino", text: "The food quality was great, the quantity of the food is spontaneous and the service of the staff are efficient and good. Overall I had a great time! ☺️", date: "January 2025", rating: 5 },
  { name: "Marco Santos", text: "I really like the grilled cheese panini! The pasta and waffles with ice cream were also amazing. This is our new go-to comfort food spot.", date: "May 2025", rating: 4 },
];

export function GuestReviews() {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: "-50px" });

  // Load saved reviews from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("nonos-reviews");
      if (saved) {
        const parsed = JSON.parse(saved) as Review[];
        setReviews([...defaultReviews, ...parsed]);
      }
    } catch {}
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newReview: Review = {
      name: name.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      rating,
    };

    const updated = [...reviews, newReview];
    setReviews(updated);

    // Save user reviews to localStorage (exclude defaults)
    const userReviews = updated.slice(defaultReviews.length);
    localStorage.setItem("nonos-reviews", JSON.stringify(userReviews));

    setName("");
    setText("");
    setRating(5);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="reviews" className="bg-[#FDF6EC] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div ref={titleRef} initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[4px] text-[#5B9EC9]">Real Experiences</span>
          <h2 className="font-serif text-4xl font-bold text-[#3D1F0D] md:text-5xl lg:text-6xl">Guest Reviews</h2>
          <div className="mx-auto mt-6 h-[2px] w-16 bg-[#5B9EC9]/40" />
        </motion.div>

        {/* Reviews Grid */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div key={`${r.name}-${i}`} initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: Math.min(i * 0.1, 0.6) }} className="rounded-2xl border border-[#E8D5B7]/60 bg-white p-7 shadow-sm">
              <Quote className="mb-3 h-5 w-5 text-[#5B9EC9]/30" />
              {/* Stars */}
              <div className="mb-3 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className={`h-4 w-4 ${s <= r.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
                ))}
              </div>
              <p className="mb-5 text-[14px] italic leading-relaxed text-[#6B3A2A]/70">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5B9EC9]/10 font-serif text-sm font-bold text-[#5B9EC9]">{r.name[0]}</div>
                <div>
                  <p className="text-sm font-semibold text-[#3D1F0D]">{r.name}</p>
                  <p className="text-[11px] text-[#6B3A2A]/50">{r.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leave a Review Form */}
        <motion.div ref={formRef} initial={{ opacity: 0, y: 30 }} animate={formInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-[#E8D5B7]/60 bg-white p-8 shadow-sm md:p-10">
            <h3 className="mb-6 text-center font-serif text-2xl font-bold text-[#3D1F0D]">Share Your Experience</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="review-name" className="mb-1.5 block text-[13px] font-semibold text-[#6B3A2A]">Your Name</label>
                <input id="review-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Juan Dela Cruz" required className="w-full rounded-xl border border-[#E8D5B7] bg-[#FDF6EC] px-4 py-3 text-[14px] text-[#3D1F0D] placeholder-[#6B3A2A]/30 transition-all focus:border-[#5B9EC9] focus:outline-none focus:ring-2 focus:ring-[#5B9EC9]/20" />
              </div>
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-[#6B3A2A]">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button key={s} type="button" onClick={() => setRating(s)} onMouseEnter={() => setHoverRating(s)} onMouseLeave={() => setHoverRating(0)} className="p-0.5 transition-transform hover:scale-110">
                      <Star className={`h-7 w-7 ${s <= (hoverRating || rating) ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="review-text" className="mb-1.5 block text-[13px] font-semibold text-[#6B3A2A]">Your Review</label>
                <textarea id="review-text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Tell us about your experience..." required rows={4} className="w-full resize-none rounded-xl border border-[#E8D5B7] bg-[#FDF6EC] px-4 py-3 text-[14px] text-[#3D1F0D] placeholder-[#6B3A2A]/30 transition-all focus:border-[#5B9EC9] focus:outline-none focus:ring-2 focus:ring-[#5B9EC9]/20" />
              </div>
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#5B9EC9] py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-[#4a8db8] hover:shadow-lg">
                <Send className="h-4 w-4" /> Submit Review
              </button>
              {submitted && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-sm font-medium text-emerald-600">✓ Thank you for your review!</motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
