import Link from 'next/link';

const services = [
  {
    name: "Excavation",
    slug: "excavation"
  },
  {
    name: "Demolition",
    slug: "demolition"
  },
  {
    name: "Land Clearing & Grading",
    slug: "land-clearing-grading"
  },
  {
    name: "Utility Installation",
    slug: "utility-installation"
  },
  {
    name: "Foundation Work",
    slug: "foundation-work"
  },
  {
    name: "Concrete",
    slug: "concrete"
  },
  {
    name: "Septic & Sewer",
    slug: "septic-sewer"
  },
  {
    name: "Rock & Sand Delivery",
    slug: "rock-sand-delivery"
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-[#0B1E4A]">Services</h1>
      <p className="mb-6 text-lg text-black">We offer a full suite of construction, grading, and delivery services to support your residential and commercial projects in the Tri-Cities and surrounding area. Select a service below to learn more.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="block bg-slate-100 p-6 rounded-lg shadow hover:bg-blue-50 transition border-b-4 border-transparent hover:border-[#0B1E4A]">
            <span className="font-semibold text-[#0B1E4A]">{service.name}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
