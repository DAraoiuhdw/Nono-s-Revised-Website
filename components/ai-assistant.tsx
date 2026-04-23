"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { menuItems, type MenuItem } from "@/lib/menu-data";
import { Send, Sparkles, UtensilsCrossed } from "lucide-react";

function findRecommendations(query: string): MenuItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const scored = menuItems.map((item) => {
    let score = 0;
    const name = item.name.toLowerCase();
    const desc = item.description.toLowerCase();
    const cat = item.category.toLowerCase();

    if (name.includes(q)) score += 10;

    const catMap: Record<string, string[]> = {
      breakfast: ["breakfast", "morning", "brunch", "egg", "waffle", "bacon"],
      starters: ["starter", "appetizer", "snack", "soup", "fries"],
      salads: ["salad", "light", "healthy", "fresh", "greens", "diet"],
      "fried chicken": ["chicken", "fried chicken", "crispy chicken"],
      mains: ["hearty", "heavy", "filling", "steak", "beef", "pork", "ribs", "meat"],
      pasta: ["pasta", "noodle", "spaghetti", "italian", "cream sauce"],
      pizza: ["pizza", "pie", "cheesy", "pepperoni"],
      sandwiches: ["burger", "sandwich", "slider"],
      kids: ["kid", "child", "kiddie", "little"],
      afternoon: ["afternoon", "merienda", "tea time"],
    };

    const filipino = ["filipino", "pinoy", "comfort", "homestyle"];
    const filipinoDishes = ["sisig", "tapa", "longganisa", "arroz caldo", "tinapa", "ensaymada", "fried chicken"];
    if (filipino.some((k) => q.includes(k)) && filipinoDishes.some((d) => name.includes(d) || desc.includes(d))) score += 8;

    const sweet = ["sweet", "dessert", "chocolate"];
    if (sweet.some((k) => q.includes(k)) && ["waffle", "ensaymada", "chocolate"].some((d) => name.includes(d) || desc.includes(d))) score += 8;

    const seafood = ["seafood", "fish", "salmon", "shrimp", "tuna", "mussel"];
    if (seafood.some((k) => q.includes(k)) && seafood.some((s) => name.includes(s) || desc.includes(s))) score += 8;

    const soup = ["soup", "broth", "stew"];
    if (soup.some((k) => q.includes(k)) && ["soup", "chowder", "caldo", "bouillabaisse"].some((s) => name.includes(s))) score += 8;

    const fancy = ["truffle", "premium", "fancy", "luxury", "date night", "celebration"];
    if (fancy.some((k) => q.includes(k)) && (name.includes("truffle") || desc.includes("truffle") || item.price >= 795)) score += 8;

    for (const [category, keywords] of Object.entries(catMap)) {
      if (keywords.some((kw) => q.includes(kw)) && cat === category) score += 6;
    }

    const words = q.split(/\s+/);
    for (const word of words) {
      if (word.length < 3) continue;
      if (name.includes(word)) score += 3;
      if (desc.includes(word)) score += 1;
    }

    return { item, score };
  });

  const seen = new Set<string>();
  const results = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .filter((s) => {
      if (seen.has(s.item.name)) return false;
      seen.add(s.item.name);
      return true;
    })
    .slice(0, 3)
    .map((s) => s.item);

  if (results.length === 0) {
    return [
      menuItems.find((i) => i.name === "Nono's Homestyle Fried Chicken")!,
      menuItems.find((i) => i.name === "Baby Back Ribs")!,
      menuItems.find((i) => i.name === "Nono's Pizza")!,
    ].filter(Boolean);
  }

  return results;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  recommendations?: MenuItem[];
}

export function AiAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const recs = findRecommendations(userMsg.content);
      const replies = [
        "Great choice! Based on what you're craving, I'd recommend:",
        "Ooh, I know just the thing! Here are my top picks:",
        "You're going to love these! Here's what I'd suggest:",
        "Perfect craving! Let me recommend these dishes:",
      ];
      setMessages((prev) => [...prev, { role: "assistant", content: replies[Math.floor(Math.random() * replies.length)], recommendations: recs }]);
      setIsTyping(false);
    }, 800);
  };

  const suggestions = ["Something hearty", "Light and healthy", "Filipino comfort food", "Something with truffle", "Best for kids", "Seafood lover"];

  return (
    <section className="bg-[#FDF6EC] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div ref={titleRef} initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12 text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[4px] text-[#5B9EC9]"><Sparkles className="mb-1 mr-1.5 inline h-4 w-4" />Dish Finder</span>
          <h2 className="font-serif text-4xl font-bold text-[#3D1F0D] md:text-5xl">What are you craving?</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-[#6B3A2A]/70">Tell us what you&apos;re in the mood for and we&apos;ll find the perfect dish.</p>
          <div className="mx-auto mt-6 h-[2px] w-16 bg-[#5B9EC9]/40" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="overflow-hidden rounded-3xl border border-[#E8D5B7]/60 bg-white shadow-sm">
          <div className="min-h-[400px] max-h-[600px] overflow-y-auto p-8 space-y-5">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5B9EC9]/10">
                  <UtensilsCrossed className="h-8 w-8 text-[#5B9EC9]" />
                </div>
                <p className="mb-6 text-sm text-[#6B3A2A]/50">Try telling me what you&apos;re in the mood for!</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {suggestions.map((s) => (
                    <button key={s} onClick={() => setInput(s)} className="rounded-full border border-[#E8D5B7] bg-[#FDF6EC] px-4 py-2 text-[12px] font-medium text-[#6B3A2A] transition-all hover:border-[#5B9EC9] hover:text-[#5B9EC9]">{s}</button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((msg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-5 py-3 ${msg.role === "user" ? "bg-[#5B9EC9] text-white" : "bg-[#FDF6EC] text-[#3D1F0D]"}`}>
                  <p className="text-[14px] leading-relaxed">{msg.content}</p>
                  {msg.recommendations && (
                    <div className="mt-3 space-y-2">
                      {msg.recommendations.map((rec, j) => (
                        <div key={j} className="rounded-xl border border-[#E8D5B7]/60 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-sm">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h4 className="font-serif text-[15px] font-bold text-[#3D1F0D]">{rec.name}</h4>
                              <p className="mt-1 text-[12px] italic text-[#6B3A2A]/60">{rec.description}</p>
                            </div>
                            <span className="shrink-0 font-serif text-sm font-semibold text-[#5B9EC9]">₱{rec.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                <div className="rounded-2xl bg-[#FDF6EC] px-5 py-3">
                  <div className="flex gap-1.5">
                    <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-[#5B9EC9]/40 [animation-delay:0ms]" />
                    <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-[#5B9EC9]/40 [animation-delay:150ms]" />
                    <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-[#5B9EC9]/40 [animation-delay:300ms]" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          <div className="border-t border-[#E8D5B7]/40 p-5">
            <div className="flex items-center gap-3">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }} placeholder='e.g. "something sweet", "hearty Filipino food"...' className="flex-1 rounded-full border border-[#E8D5B7] bg-[#FDF6EC] px-5 py-3.5 text-[15px] text-[#3D1F0D] placeholder-[#6B3A2A]/35 transition-all focus:border-[#5B9EC9] focus:outline-none focus:ring-2 focus:ring-[#5B9EC9]/20" id="ai-craving-input" />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleSend} disabled={!input.trim() || isTyping} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5B9EC9] text-white shadow-md transition-all disabled:opacity-40" aria-label="Send message">
                <Send className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
