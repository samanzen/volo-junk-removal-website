import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar"; // Import the new component
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: {
    default: `${siteData.businessName} | Fast & Friendly Service in Metro Vancouver`,
    template: `%s | ${siteData.businessName}`,
  },
  description: `Your friendly, reliable choice for junk removal in Coquitlam, Burnaby, Surrey, and across Metro Vancouver. We offer same-day service for furniture, appliances, yard waste, and more. Get your free quote today!`,
  metadataBase: new URL("https://www.volojunk.ca"), // Placeholder URL
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
        <main className="pb-20 md:pb-0">{children}</main> {/* Add padding-bottom for mobile */}
        <Footer />
        <MobileCtaBar /> {/* Add the new component here */}
      </body>
    </html>
  );
}
