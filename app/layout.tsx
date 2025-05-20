import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "H&I Construction | Kennewick & Tri-Cities WA",
  description:
    "Expert excavation, demolition, land clearing, utilities, foundations, concrete, septic, and delivery services for Kennewick & the Tri-Cities, WA.",
  keywords:
    "Kennewick WA construction, Tri-Cities contractor, excavation, demolition, land clearing, grading, utility installation, foundation, concrete, septic, sewer, rock, sand delivery",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "H&I Construction LLC",
              url: "https://handiconstruction.com",
              telephone: "(509) 123-4567",
              email: "info@handiconstruction.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main St",
                addressLocality: "Kennewick",
                addressRegion: "WA",
                postalCode: "99336",
                addressCountry: "US",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "14:00",
                },
              ],
              areaServed: [
                "Kennewick",
                "Pasco",
                "Richland",
                "West Richland",
                "Walla Walla",
                "Yakima",
                "Grandview",
                "Prosser",
                "Sunnyside",
              ],
              sameAs: [
                "https://facebook.com/profile.php?id=100089345247566",
                "https://www.instagram.com/handiconstructionllc/",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white text-black min-h-screen flex flex-col antialiased">
        {/* ← This is your new NavBar with working mobile hamburger */}
        <NavBar />

        {/* Page content */}
        <main className="flex-1 w-full">{children}</main>

        {/* Your existing footer */}
        <footer className="bg-[#0B1E4A] text-white text-sm py-8 mt-12">
          {/* …same markup you already have here… */}
        </footer>
      </body>
    </html>
  );
}