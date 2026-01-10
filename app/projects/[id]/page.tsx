import Link from "next/link";
import { notFound } from "next/navigation";

const projectsData: Record<string, {
  title: string;
  subtitle: string;
  color: string;
  sections: {
    heading: string;
    content: string;
  }[];
}> = {
  "idc1-ideation": {
    title: "IDC1 Ideation",
    subtitle: "Interactive Device Concept 1 - Brainstorming & Conceptual Development",
    color: "from-purple-500 to-pink-500",
    sections: [
      {
        heading: "Overview",
        content: "This section documents the initial ideation phase for my first Interactive Device Concept. Here I explore various ideas, sketch concepts, and develop the foundation for my project."
      },
      {
        heading: "What - Initial Concepts",
        content: "Document your initial ideas here. What device or interaction are you planning to create? Describe the core concept and functionality."
      },
      {
        heading: "How - Proposed Approach",
        content: "Outline your technical approach. What materials, tools, and technologies will you use? Include sketches, diagrams, or flowcharts to illustrate your process."
      },
      {
        heading: "Why - Conceptual Framework",
        content: "Explain the conceptual reasoning behind your project. What problem does it solve? What experience does it create? Why is this meaningful or interesting?"
      },
      {
        heading: "Media & Documentation",
        content: "Add your images, videos, sketches, and diagrams here with detailed descriptions. Remember to describe what, how, and why for each piece of media."
      }
    ]
  },
  "idc1-project": {
    title: "IDC1 Project",
    subtitle: "Interactive Device Concept 1 - Full Implementation",
    color: "from-blue-500 to-cyan-500",
    sections: [
      {
        heading: "Project Overview",
        content: "This section contains the complete documentation for the first Interactive Device Concept project, from initial development through final implementation."
      },
      {
        heading: "What - Final Device",
        content: "Describe your completed device. What does it do? What are its key features and interactions?"
      },
      {
        heading: "How - Build Process",
        content: "Document your build process step by step. Include details about materials, tools, code, circuits, and any challenges you encountered along the way."
      },
      {
        heading: "Why - Design Rationale",
        content: "Explain your design decisions. Why did you make specific choices about form, function, and interaction? How does the final device relate to your initial concept?"
      },
      {
        heading: "Process Documentation",
        content: "Include images and videos of your building process, prototypes, iterations, and testing phases."
      },
      {
        heading: "Final Documentation",
        content: "Present your completed device with high-quality images and videos showing it in action. Include detailed captions explaining functionality and user experience."
      }
    ]
  },
  "enclosures": {
    title: "Enclosures Mini Project",
    subtitle: "Physical Housing & Fabrication Exploration",
    color: "from-green-500 to-emerald-500",
    sections: [
      {
        heading: "Project Overview",
        content: "This mini project explores physical enclosures and housing for interactive devices, focusing on fabrication techniques and material choices."
      },
      {
        heading: "What - Enclosure Design",
        content: "Describe your enclosure design. What device is it housing? What materials did you choose and why?"
      },
      {
        heading: "How - Fabrication Process",
        content: "Document the fabrication process. What tools and techniques did you use? Include details about measurements, cuts, assembly, and finishing."
      },
      {
        heading: "Why - Design Considerations",
        content: "Explain your design rationale. How does the enclosure relate to the device's function? What aesthetic or practical considerations influenced your choices?"
      },
      {
        heading: "Documentation",
        content: "Include sketches, diagrams, process photos, and images of the final enclosure. Show different angles and details of construction."
      }
    ]
  },
  "motor-buffet": {
    title: "Motor Buffet Mini Project",
    subtitle: "Mechanical Movement & Motor Exploration",
    color: "from-orange-500 to-red-500",
    sections: [
      {
        heading: "Project Overview",
        content: "This mini project involves experimentation with different types of motors and mechanical movement systems."
      },
      {
        heading: "What - Motor Experiments",
        content: "Describe the motors and movements you explored. What types of motors did you work with? What movements or mechanisms did you create?"
      },
      {
        heading: "How - Technical Implementation",
        content: "Document your technical setup. How did you control the motors? What circuits, code, or mechanical systems did you build? Include diagrams and schematics."
      },
      {
        heading: "Why - Exploration Goals",
        content: "Explain what you learned from these experiments. Why did you choose these particular motors or movements? What insights did you gain about mechanical systems?"
      },
      {
        heading: "Documentation",
        content: "Include videos of your motors in action, circuit diagrams, code snippets, and images of your setups. Describe each experiment clearly."
      }
    ]
  },
  "idc2-ideation": {
    title: "IDC2 Ideation",
    subtitle: "Interactive Device Concept 2 - Conceptual Development",
    color: "from-indigo-500 to-purple-500",
    sections: [
      {
        heading: "Overview",
        content: "This section documents the ideation phase for the second Interactive Device Concept, building on lessons learned from IDC1."
      },
      {
        heading: "What - Evolved Concepts",
        content: "Document your ideas for IDC2. How has your thinking evolved since IDC1? What new concepts are you exploring?"
      },
      {
        heading: "How - Planned Approach",
        content: "Outline your technical and creative approach. What methods, materials, and technologies will you employ? Include preliminary sketches and diagrams."
      },
      {
        heading: "Why - Conceptual Development",
        content: "Explain the conceptual framework for this project. What are you trying to achieve? How does this project advance your creative tech practice?"
      },
      {
        heading: "Media & Documentation",
        content: "Add your ideation materials: sketches, mood boards, diagrams, references, and any other visual or written documentation of your concept development."
      }
    ]
  },
  "idc2-project": {
    title: "IDC2 Project",
    subtitle: "Interactive Device Concept 2 - Full Implementation",
    color: "from-rose-500 to-pink-500",
    sections: [
      {
        heading: "Project Overview",
        content: "This section contains comprehensive documentation for the second Interactive Device Concept project, showcasing your growth throughout the semester."
      },
      {
        heading: "What - Final Implementation",
        content: "Describe your completed IDC2 device. What functionality does it have? How does it differ from or build upon IDC1?"
      },
      {
        heading: "How - Build & Process",
        content: "Document your complete build process. Include technical details, code, circuits, fabrication steps, and any innovations or solutions you developed."
      },
      {
        heading: "Why - Design Philosophy",
        content: "Explain your design decisions and overall philosophy. What did you learn throughout the semester? How does this project represent your creative tech journey?"
      },
      {
        heading: "Process Documentation",
        content: "Include comprehensive process documentation: sketches, prototypes, iterations, testing, troubleshooting, and refinement stages."
      },
      {
        heading: "Final Documentation",
        content: "Present your finished device with professional documentation: high-quality images, demonstration videos, user interaction sequences, and detailed technical specifications."
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id: id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-medium mb-6`}>
            Project Documentation
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            {project.subtitle}
          </p>

          {/* Documentation Sections */}
          <div className="space-y-8">
            {project.sections.map((section, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  {section.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>{section.content}</p>
                  
                  {/* Placeholder for media */}
                  <div className="mt-6 p-8 border-2 border-dashed border-white/20 rounded-lg bg-white/5">
                    <div className="text-center text-gray-400">
                      <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">
                        Add your images, videos, sketches, and diagrams here
                      </p>
                      <p className="text-xs mt-2 text-gray-500">
                        Include descriptions of what, how, and why for each piece of media
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Guide Section */}
          <div className="mt-12 p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">
              📝 Documentation Guide
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Remember to include both visual media (images, videos, sketches, diagrams) AND written descriptions for each piece of documentation. 
              Always explain <strong>what</strong> the subject is, <strong>how</strong> you created or implemented it, and <strong>why</strong> it's 
              significant to your project concept.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
