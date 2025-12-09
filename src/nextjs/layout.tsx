import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audrey Poh - Independent Financial Advisor in Singapore",
  description: "Empowering individuals and families in Singapore to achieve financial wellness through personalized advice. Comprehensive retirement planning, family protection, and wealth accumulation services.",
  keywords: ["financial advisor", "Singapore", "retirement planning", "wealth management", "insurance", "investment planning"],
  authors: [{ name: "Audrey Poh" }],
  openGraph: {
    title: "Audrey Poh - Independent Financial Advisor",
    description: "Comprehensive financial planning services in Singapore",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
