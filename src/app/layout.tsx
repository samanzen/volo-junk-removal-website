import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: {
    default: `${siteData.businessName} | Fast & Friendly Service in Metro Vancouver`,
    template: `%s | ${siteData.businessName}`,
  },
  description: `Your friendly, reliable choice for junk removal in Coquitlam, Burnaby, Surrey, and across Metro Vancouver. We offer same-day service for furniture, appliances, yard waste, and more. Get your free quote today!`,
  // The metadataBase URL needs to be a valid, absolute URL. Using a placeholder.
  metadataBase: new URL("https://volojunk.ca"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
