import Link from "next/link";
import ClientBody from "@/components/ClientBody";
import BeforeAfterSection from "@/components/BeforeAfterSection";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-[#0B1E4A] bg-opacity-70" />
        <div className="relative z-10 text-center px-4 py-28 flex flex-col items-center w-full">
          <h1
            className="text-white text-5xl md:text-6xl font-extrabold mb-6 drop-shadow md:leading-tight animate-fadein"
            style={{
              textShadow: "0 2px 16px rgba(11,30,74,.18)",
            }}
          >
            H&amp;I Construction
          </h1>
          <p className="text-blue-100 text-xl md:text-2xl font-semibold mb-8 animate-fadein delay-200">
            Serving Tri-Cities, Walla Walla, Yakima, Grandview, Prosser, and Sunnyside, WA
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded bg-white text-[#0B1E4A] text-lg font-bold shadow hover:bg-blue-50 hover:text-blue-800 transition animate-fadein delay-400"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* ✅ New ClientBody Section (Before & Afters layout) */}
      <ClientBody />

      {/* ✅ Before and After Section */}
      <BeforeAfterSection
        projects={[
          {
            title: "Project 1",
            before: "/images/before1.jpg",
            after: "/images/after1.jpg",
          },
          {
            title: "Project 2",
            before: "/images/before2.jpg",
            after: "/images/after2.jpg",
          },
          {
            title: "Project 3",
            before: "/images/before3.jpg",
            after: "/images/after3.jpg",
          },
          {
            title: "Project 4",
            before: "/images/before4.jpg",
            after: "/images/after4.jpg",
          },
        ]}
      />

      <style>{`
        @keyframes fadein {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: none; }
        }
        .animate-fadein {
          animation: fadein 1s cubic-bezier(.17,.67,.78,1.21) both;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
    </main>
  );
}