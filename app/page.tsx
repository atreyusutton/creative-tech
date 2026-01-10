import Link from "next/link";

const projects = [
  {
    id: "technology-tinder",
    title: "Technology Tinder",
    description: "Conceptual assignment: Which technologies make humans more capable — and which make us less so?",
    color: "from-yellow-500 to-amber-500",
    badge: "Due 1/22"
  },
  {
    id: "idc1-ideation",
    title: "IDC1 Ideation",
    description: "Initial concepts and brainstorming for Interactive Device Concept 1",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "idc1-project",
    title: "IDC1 Project",
    description: "Full development and documentation of Interactive Device Concept 1",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "enclosures",
    title: "Enclosures Mini Project",
    description: "Exploring physical housing and fabrication techniques",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: "motor-buffet",
    title: "Motor Buffet Mini Project",
    description: "Experimentation with motors and mechanical movement",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "idc2-ideation",
    title: "IDC2 Ideation",
    description: "Conceptual development for Interactive Device Concept 2",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: "idc2-project",
    title: "IDC2 Project",
    description: "Complete implementation of Interactive Device Concept 2",
    color: "from-rose-500 to-pink-500"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-2xl md:text-3xl font-light text-purple-300">Atreyu Sutton</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Creative <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Technologies</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              A living documentation of my creative technology journey—exploring the intersection of 
              physical computing, interactive design, and innovative fabrication.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="p-8">
                  <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-medium mb-4`}>
                    {project.badge || "Project"}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-6 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span className="text-sm font-medium">View Documentation</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm">
              Each project includes process documentation, images, videos, sketches, diagrams, and detailed written descriptions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
