import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apple Checkout page",
  description: "A mockup of a checkout page for devchallenges.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
