interface Project {
  title: string;
  before: string;
  after: string;
}

export default function BeforeAfterSection({ projects }: { projects: Project[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0B1E4A] mb-12">
          Before & After Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
              <h3 className="text-xl font-semibold text-[#0B1E4A] p-4">{project.title}</h3>
              <div className="grid grid-cols-2 gap-1">
                <img src={project.before} alt={`${project.title} Before`} className="w-full h-48 object-cover" />
                <img src={project.after} alt={`${project.title} After`} className="w-full h-48 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}