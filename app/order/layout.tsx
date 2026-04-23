import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Now | Nono's Comfort Kitchen & Bakery",
  description: "Order your favorite Filipino comfort food online. Find your nearest Nono's branch and get food delivered or ready for pickup.",
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
