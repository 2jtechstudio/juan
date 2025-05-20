"use client";

import BeforeAfterSlider from "./BeforeAfterSlider";

interface Project {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
}

const projects: Project[] = [
  {
    id: "land-clearing-1",
    title: "Residential Land Clearing & Gravel Delivery",
    beforeImage: "/images/before1.jpg",
    afterImage: "/images/after1.jpg",
  },
  {
    id: "foundation-1",
    title: "Debris Clearing",
    beforeImage: "/images/before2.jpg",
    afterImage: "/images/after2.jpg",
  },
  {
    id: "excavation-1",
    title: "Residential Land Clearing & Gravel Delivery",
    beforeImage: "/images/before3.jpg",
    afterImage: "/images/after3.jpg",
  },
  {
    id: "septic-1",
    title: "Concrete Removal & Grading",
    beforeImage: "/images/before4.jpg",
    afterImage: "/images/after4.jpg",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0B1E4A] mb-12">
          Before & After Projects
        </h2>

        <div className="grid grid-cols-2 grid-rows-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="space-y-4 max-w-sm mx-auto text-center"
            >
              <h3 className="text-2xl font-semibold text-[#0B1E4A]">
                {project.title}
              </h3>
              <div className="w-full h-30">
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