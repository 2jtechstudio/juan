import React from 'react';

const services = [
  "Excavation",
  "Demolition",
  "Land Clearing & Grading",
  "Utility Installation",
  "Foundation Work",
  "Concrete",
  "Septic & Sewer",
  "Rock & Sand Delivery"
];

export default function ContactPage() {
  return (
    <main className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-[#0B1E4A]">Contact</h1>
      <form className="bg-white shadow-lg rounded-lg p-6 grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-[#0B1E4A] mb-2" htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" className="w-full border border-gray-300 p-2 rounded" required />
          </div>
          <div>
            <label className="block font-semibold text-[#0B1E4A] mb-2" htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" className="w-full border border-gray-300 p-2 rounded" required />
          </div>
        </div>
        <label className="block font-semibold text-[#0B1E4A] mb-2" htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" className="w-full border border-gray-300 p-2 rounded" required />
        <label className="block font-semibold text-[#0B1E4A] mb-2" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className="w-full border border-gray-300 p-2 rounded" required />
        <label className="block font-semibold text-[#0B1E4A] mb-2" htmlFor="service">Service</label>
        <select id="service" name="service" className="w-full border border-gray-300 p-2 rounded" required>
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
        <label className="block font-semibold text-[#0B1E4A] mb-2" htmlFor="description">Project Description</label>
        <textarea id="description" name="description" className="w-full border border-gray-300 p-2 rounded min-h-[100px]" required />
        <button type="submit" className="mt-4 px-6 py-3 bg-[#0B1E4A] text-white font-bold rounded shadow hover:bg-blue-800 transition">Send Message</button>
      </form>
    </main>
  );
}
