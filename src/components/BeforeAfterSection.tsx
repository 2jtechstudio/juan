"use client";

import BeforeAfterSlider from "./BeforeAfterSlider";

interface Project {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  location: string;
}

const projects: Project[] = [
  {
    id: "land-clearing-1",
    title: "Residential Land Clearing",
    description: "Clearing a heavily wooded lot for new home construction.",
    beforeImage: "/images/before1.jpg",
    afterImage: "/images/after1.jpg",
    location: "Kennewick, WA",
  },
  {
    id: "foundation-1",
    title: "Commercial Foundation",
    description: "Preparing and pouring a foundation for a new commercial building.",
    beforeImage: "/images/before2.jpg",
    afterImage: "/images/after2.jpg",
    location: "Pasco, WA",
  },
  {
    id: "excavation-1",
    title: "Residential Excavation",
    description: "Excavating and preparing the site for a new home construction.",
    beforeImage: "/images/before3.jpg",
    afterImage: "/images/after3.jpg",
    location: "Richland, WA",
  },
  {
    id: "septic-1",
    title: "Septic System Installation",
    description: "Installation of a new septic system for a rural property.",
    beforeImage: "/images/before4.jpg",
    afterImage: "/images/after4.jpg",
    location: "Walla Walla, WA",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0B1E4A] mb-12">
          Before & After Projects
        </h2>

        {/* 2x2 grid, with a decent gap */}
        <div className="grid grid-cols-2 grid-rows-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="space-y-4 max-w-sm mx-auto text-center"
            >
              <h3 className="text-2xl font-semibold text-[#0B1E4A]">
                {project.title}
              </h3>
              <p className="text-gray-700">{project.description}</p>
              <p className="text-sm text-gray-500 italic">
                {project.location}
              </p>

              {/* constrain slider height so it fits */}
              <div className="w-full h-48">
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  altBefore={`${project.title} Before`}
                  altAfter={`${project.title} After`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}