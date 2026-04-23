"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, categories } from "@/lib/menu-data";
import { stores } from "@/lib/store-data";
import { ArrowLeft, MapPin, Clock, Navigation, ShoppingCart, Plus, Minus, Trash2, Search, X, Flame, ChevronDown } from "lucide-react";

interface CartItem { name: string; price: number; image: string; qty: number; }
interface StoreWithDist { name: string; address: string; phone: string; hours: string[]; dist: number; eta: number; }

function haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; const dLat = (lat2 - lat1) * Math.PI / 180; const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

const storeCoords: Record<string, [number, number]> = {
  "UP Town Center": [14.6575, 121.0615], "The Podium": [14.5768, 121.0559], "Three Central Mall": [14.5606, 121.0235],
  "Festival Mall": [14.4167, 121.0398], "Ayala Malls Solenad": [14.2374, 121.0491], "Ayala Malls Manila Bay": [14.5244, 120.9878],
  "Power Plant Mall": [14.5564, 121.0286], "S Maison": [14.5321, 120.9827], "Uptown Mall": [14.5516, 121.0549],
  "High Street South": [14.5489, 121.0518], "KL Tower": [14.5566, 121.0208], "Okada Manila": [14.5224, 120.9828],
  "SM City Santa Rosa": [14.3132, 121.1117], "SM City Fairview": [14.7296, 121.0573], "SM City Grand Central": [14.6570, 120.9835],
  "Gateway Mall 2": [14.6219, 121.0528], "Robinsons Antipolo": [14.5886, 121.1241], "Ayala Malls Vermosa": [14.3466, 120.9571],
  "The Outlets at Lipa": [14.0706, 121.1419], "Arcovia City": [14.5886, 121.0662], "Laus Group Complex": [15.0296, 120.6891],
  "Greenfield": [14.5824, 121.0487], "SM City Bicutan": [14.4833, 121.0425], "Robinsons Galleria": [14.5877, 121.0596],
  "Opus Mall": [14.6083, 121.0775], "Ayala Malls Circuit": [14.5494, 121.0152], "Ayala Malls Evo City": [14.3782, 120.9264],
  "Lucky Chinatown": [14.5997, 120.9733], "Robinsons Malolos": [14.8446, 120.8087], "Evia Lifestyle Center": [14.4263, 120.9790],
  "NAIA Terminal 1": [14.5086, 121.0195],
};

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("Best Sellers");
  const [userLoc, setUserLoc] = useState<{ lat: number; lng: number } | null>(null);
  const [locError, setLocError] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [selectedStore, setSelectedStore] = useState<string>("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setUserLoc({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => setLocError("Location access denied. Showing all branches."),
      { enableHighAccuracy: true }
    );
  }, []);

  const nearbyStores = useMemo<StoreWithDist[]>(() => {
    return stores.map((s) => {
      const coords = storeCoords[s.name];
      if (!coords || !userLoc) return { ...s, dist: 999, eta: 99 };
      const dist = haversine(userLoc.lat, userLoc.lng, coords[0], coords[1]);
      return { name: s.name, address: s.address, phone: s.phone, hours: s.hours, dist: Math.round(dist * 10) / 10, eta: Math.max(15, Math.round(dist * 4.5)) };
    }).sort((a, b) => a.dist - b.dist);
  }, [userLoc]);

  const displayCats = categories.filter((c) => c !== "All");
  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const catMatch = activeCat === "Best Sellers" ? item.bestSeller === true : item.category === activeCat;
      const searchMatch = !search || item.name.toLowerCase().includes(search.toLowerCase());
      return catMatch && searchMatch;
    });
  }, [activeCat, search]);

  const addToCart = (item: typeof menuItems[0]) => {
    setCart((prev) => { const existing = prev.find((c) => c.name === item.name); if (existing) return prev.map((c) => c.name === item.name ? { ...c, qty: c.qty + 1 } : c); return [...prev, { name: item.name, price: item.price, image: item.image, qty: 1 }]; });
  };
  const updateQty = (name: string, delta: number) => {
    setCart((prev) => prev.map((c) => c.name === name ? { ...c, qty: Math.max(0, c.qty + delta) } : c).filter((c) => c.qty > 0));
  };
  const subtotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.15) : 0;
  const total = subtotal - discount;
  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);

  const applyPromo = () => { if (promoCode.toUpperCase() === "NONOS15") setPromoApplied(true); };

  return (
    <div className="min-h-screen bg-[#F5EDE0]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#E8D5B7] bg-[#FDF6EC]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-[#6B3A2A] hover:text-[#5B9EC9] transition-colors"><ArrowLeft className="h-5 w-5" /><span className="hidden text-sm font-medium sm:inline">Back</span></Link>
            <div className="h-6 w-px bg-[#E8D5B7]" />
            <img src="https://nonos.ph/wp-content/uploads/2023/10/nonoslogo-grey-optimized.png" alt="Nono's" className="h-8" />
            <span className="hidden font-serif text-lg font-bold text-[#3D1F0D] md:inline">Order Online</span>
          </div>
          <button onClick={() => setShowCart(true)} className="relative flex items-center gap-2 rounded-full bg-[#5B9EC9] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105">
            <ShoppingCart className="h-4 w-4" /> Cart
            {cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold">{cartCount}</span>}
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        {/* Nearest Branch Bar */}
        <div className="mb-6 rounded-2xl border border-[#E8D5B7]/60 bg-white p-4 md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5B9EC9]/10"><Navigation className="h-5 w-5 text-[#5B9EC9]" /></div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#5B9EC9]">Nearest Branch</p>
                {locError ? <p className="text-sm text-[#6B3A2A]/60">{locError}</p> : !userLoc ? <p className="text-sm text-[#6B3A2A]/60">Finding your location...</p> : (
                  <div><p className="font-serif text-lg font-bold text-[#3D1F0D]">{nearbyStores[0]?.name}</p>
                  <p className="text-[13px] text-[#6B3A2A]/60">{nearbyStores[0]?.address}</p></div>
                )}
              </div>
            </div>
            {userLoc && nearbyStores[0] && (
              <div className="flex gap-4">
                <div className="text-center"><p className="text-xl font-bold text-[#3D1F0D]">{nearbyStores[0].dist} km</p><p className="text-[11px] text-[#6B3A2A]/50">Distance</p></div>
                <div className="h-10 w-px bg-[#E8D5B7]" />
                <div className="text-center"><p className="text-xl font-bold text-[#5B9EC9]">~{nearbyStores[0].eta} min</p><p className="text-[11px] text-[#6B3A2A]/50">Est. Arrival</p></div>
              </div>
            )}
          </div>
          {/* Other nearby stores */}
          {userLoc && (
            <details className="mt-4">
              <summary className="flex cursor-pointer items-center gap-1 text-[13px] font-semibold text-[#5B9EC9]"><ChevronDown className="h-4 w-4" /> View all nearby branches</summary>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {nearbyStores.slice(0, 9).map((s) => (
                  <button key={s.name} onClick={() => setSelectedStore(s.name)} className={`rounded-xl border p-3 text-left transition-all ${selectedStore === s.name ? "border-[#5B9EC9] bg-[#5B9EC9]/5" : "border-[#E8D5B7]/60 hover:border-[#5B9EC9]/40"}`}>
                    <p className="text-sm font-semibold text-[#3D1F0D]">{s.name}</p>
                    <div className="mt-1 flex items-center gap-3 text-[12px] text-[#6B3A2A]/60">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{s.dist} km</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />~{s.eta} min</span>
                    </div>
                  </button>
                ))}
              </div>
            </details>
          )}
        </div>

        {/* Search + Categories */}
        <div className="mb-4">
          <div className="relative mb-4 max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B3A2A]/40" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search menu..." className="w-full rounded-full border border-[#E8D5B7] bg-white py-3 pl-10 pr-4 text-sm text-[#3D1F0D] placeholder-[#6B3A2A]/40 focus:border-[#5B9EC9] focus:outline-none focus:ring-2 focus:ring-[#5B9EC9]/20" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {displayCats.map((cat) => (
              <button key={cat} onClick={() => setActiveCat(cat)} className={`shrink-0 rounded-full px-4 py-2 text-[12px] font-semibold transition-all ${activeCat === cat ? cat === "Best Sellers" ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white" : "bg-[#5B9EC9] text-white" : "bg-white text-[#6B3A2A] hover:bg-[#E8D5B7]"}`}>
                {cat === "Best Sellers" && <Flame className="mr-1 inline h-3 w-3" />}{cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item, i) => {
            const inCart = cart.find((c) => c.name === item.name);
            return (
              <motion.div key={`${item.name}-${i}`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.4) }} className="group overflow-hidden rounded-2xl border border-[#E8D5B7]/60 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  {item.bestSeller && <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-2 py-0.5 text-[10px] font-bold text-white"><Flame className="h-2.5 w-2.5" />Best Seller</span>}
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-serif text-[15px] font-bold text-[#3D1F0D] leading-tight">{item.name}</h3>
                  <p className="mb-3 text-[12px] italic text-[#6B3A2A]/50 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-[#5B9EC9]">₱{item.price}</span>
                    {inCart ? (
                      <div className="flex items-center gap-2 rounded-full bg-[#5B9EC9]/10 px-2 py-1">
                        <button onClick={() => updateQty(item.name, -1)} className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#5B9EC9] shadow-sm hover:bg-[#5B9EC9] hover:text-white transition-colors"><Minus className="h-3 w-3" /></button>
                        <span className="w-5 text-center text-sm font-bold text-[#3D1F0D]">{inCart.qty}</span>
                        <button onClick={() => updateQty(item.name, 1)} className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#5B9EC9] shadow-sm hover:bg-[#5B9EC9] hover:text-white transition-colors"><Plus className="h-3 w-3" /></button>
                      </div>
                    ) : (
                      <button onClick={() => addToCart(item)} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5B9EC9] text-white shadow-sm transition-transform hover:scale-110"><Plus className="h-4 w-4" /></button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Cart Slide-Over */}
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/40" onClick={() => setShowCart(false)} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }} className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-[#FDF6EC] shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#E8D5B7] p-5">
                <h2 className="font-serif text-xl font-bold text-[#3D1F0D]">Your Order</h2>
                <button onClick={() => setShowCart(false)} className="rounded-full p-2 hover:bg-[#E8D5B7] transition-colors"><X className="h-5 w-5 text-[#6B3A2A]" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-5">
                {cart.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <ShoppingCart className="mb-4 h-16 w-16 text-[#E8D5B7]" />
                    <p className="font-serif text-lg text-[#6B3A2A]/50">Your cart is empty</p>
                    <p className="mt-1 text-sm text-[#6B3A2A]/30">Add dishes to get started</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.name} className="flex gap-3 rounded-xl border border-[#E8D5B7]/60 bg-white p-3">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg"><Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" /></div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-[#3D1F0D]">{item.name}</h4>
                          <p className="text-sm font-bold text-[#5B9EC9]">₱{item.price * item.qty}</p>
                          <div className="mt-1 flex items-center gap-2">
                            <button onClick={() => updateQty(item.name, -1)} className="flex h-6 w-6 items-center justify-center rounded-full border border-[#E8D5B7] text-[#6B3A2A] hover:bg-[#E8D5B7]"><Minus className="h-3 w-3" /></button>
                            <span className="text-sm font-bold text-[#3D1F0D]">{item.qty}</span>
                            <button onClick={() => updateQty(item.name, 1)} className="flex h-6 w-6 items-center justify-center rounded-full border border-[#E8D5B7] text-[#6B3A2A] hover:bg-[#E8D5B7]"><Plus className="h-3 w-3" /></button>
                            <button onClick={() => updateQty(item.name, -item.qty)} className="ml-auto text-red-400 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {cart.length > 0 && (
                <div className="border-t border-[#E8D5B7] p-5">
                  {/* Promo Code */}
                  <div className="mb-4 flex gap-2">
                    <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} placeholder="Promo code (NONOS15)" className="flex-1 rounded-full border border-[#E8D5B7] bg-white px-4 py-2.5 text-sm focus:border-[#5B9EC9] focus:outline-none" />
                    <button onClick={applyPromo} className="rounded-full bg-[#3D1F0D] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#5a2d14] transition-colors">Apply</button>
                  </div>
                  {promoApplied && <p className="mb-3 text-center text-sm font-medium text-emerald-600">✓ 15% discount applied!</p>}
                  <div className="mb-2 flex justify-between text-sm text-[#6B3A2A]/70"><span>Subtotal</span><span>₱{subtotal.toLocaleString()}</span></div>
                  {discount > 0 && <div className="mb-2 flex justify-between text-sm text-emerald-600"><span>Discount (15%)</span><span>-₱{discount.toLocaleString()}</span></div>}
                  <div className="mb-4 flex justify-between font-serif text-lg font-bold text-[#3D1F0D]"><span>Total</span><span>₱{total.toLocaleString()}</span></div>
                  <button className="w-full rounded-full bg-gradient-to-r from-[#5B9EC9] to-[#4a8db8] py-3.5 text-[15px] font-bold text-white shadow-lg transition-transform hover:scale-[1.02]">Place Order</button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
