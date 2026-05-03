import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CartReclaim – Recover Abandoned Carts with Personalized Campaigns",
  description: "Tracks cart abandonment patterns and sends targeted recovery emails with dynamic discount optimization for Shopify stores."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b3c329df-a4cf-4c2c-9358-3d6bbdf37c2e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
