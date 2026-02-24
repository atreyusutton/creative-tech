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
    subtitle: "Independent Design Challenge 1: Solving a Personal Pet Peeve",
    color: "from-purple-500 to-pink-500",
    sections: [
      {
        heading: "The Challenge",
        content: "Design and prototype an interactive object that addresses a personal pet peeve. Must incorporate Arduino, circuit, and code. It should function both technically and aesthetically—as much storytelling as technical implementation. Due: Project 3/5/26"
      },
      {
        heading: "Three Pet Peeve Ideas",
        content: "Each concept addresses a personal frustration with an interactive solution that combines physical computing and expressive behavior."
      }
    ]
  },
  "idc1-ideation-old": {
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
    subtitle: "3D Printed Interactive Light Box",
    color: "from-green-500 to-emerald-500",
    sections: [
      {
        heading: "Project Overview",
        content: "A black 3D printed box with a button and internal LED. Press the button, the box lights up. The enclosure houses the button interface and LED system with custom dimensions for a tight fit. All electronics concealed inside the minimal black housing."
      },
      {
        heading: "Materials & Components",
        content: "Black 3D printed PLA filament • Push button switch • LED lighting system • Arduino/electronics • Custom enclosure design • Matte black finish"
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

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData[id];

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
                </div>
              </div>
            ))}
          </div>

          {/* Custom content for Enclosures */}
          {id === 'enclosures' && (
            <div className="mt-8 space-y-8">
              {/* Process Photos */}
              <div className="grid md:grid-cols-2 gap-6">
                <img 
                  src="/enclosures/process-1.jpeg" 
                  alt="3D printed black box"
                  className="w-full rounded-xl shadow-lg border border-white/10"
                />
                <img 
                  src="/enclosures/process-2.jpeg" 
                  alt="Button and lighting assembly"
                  className="w-full rounded-xl shadow-lg border border-white/10"
                />
              </div>

              {/* GIF - Smaller */}
              <div className="max-w-2xl mx-auto">
                <img 
                  src="/enclosures/assembly.gif" 
                  alt="Box lighting up when button pressed"
                  className="w-full rounded-xl shadow-2xl border border-white/10"
                />
                <p className="mt-3 text-gray-400 text-sm text-center">
                  Press the button → Box lights up. 3D printed housing, LED inside, simple interaction.
                </p>
              </div>
            </div>
          )}

          {/* Custom content for IDC1 Ideation */}
          {id === 'idc1-ideation' && (
            <>
              {/* Three Ideas Grid */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {/* Idea 1 - Passive-Aggressive Alarm Clock */}
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 hover:border-amber-500/50 transition-all">
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-medium mb-4">
                    CHOSEN
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Passive-Aggressive Alarm Clock
                  </h3>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <p><strong className="text-amber-400">Peeve:</strong> Snoozing too much</p>
                    <p><strong className="text-amber-400">Object:</strong> Alarm that gets increasingly judgmental with each snooze</p>
                    <p><strong className="text-amber-400">Tech:</strong> Arduino Uno, LCD display, tactile buttons, buzzer</p>
                    <p className="text-gray-400 italic">&quot;We both know this won&apos;t help.&quot;</p>
                  </div>
                </div>

                {/* Idea 2 - Dish Sink Guilt Totem */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Dish Sink Guilt Totem
                  </h3>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <p><strong className="text-purple-400">Peeve:</strong> Dishes piling up</p>
                    <p><strong className="text-purple-400">Object:</strong> Countertop object that grows angrier over time</p>
                    <p><strong className="text-purple-400">Tech:</strong> Weight sensor, RGB LED</p>
                    <p className="text-gray-400 italic">Domestic accountability with personality</p>
                  </div>
                </div>

                {/* Idea 3 - Coffee Mug */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <h3 className="text-xl font-bold text-white mb-3">
                    The Coffee Mug That Knows You Forgot
                  </h3>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <p><strong className="text-blue-400">Peeve:</strong> Cold coffee</p>
                    <p><strong className="text-blue-400">Object:</strong> Mug coaster that reacts as coffee cools</p>
                    <p><strong className="text-blue-400">Tech:</strong> Temperature sensor, LED ring</p>
                    <p className="text-gray-400 italic">Time passing made visible</p>
                  </div>
                </div>
              </div>

              {/* Technical Stack Section */}
              <div className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Technical Implementation: Passive-Aggressive Alarm Clock
                </h2>
                
                {/* Image 1 */}
                <div className="mb-8">
                  <img 
                    src="/idc1/annoying-alarm.webp" 
                    alt="Passive-aggressive alarm clock concept"
                    className="w-full rounded-xl shadow-2xl border border-white/10"
                  />
                  <p className="mt-3 text-gray-400 text-sm">
                    The alarm that judges your life choices, one snooze at a time
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-amber-400">Core Hardware</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• <strong>Arduino Uno</strong> - Central controller for timing logic and state transitions</li>
                      <li>• <strong>1602 LCD</strong> - Displays escalating passive-aggressive messages</li>
                      <li>• <strong>Active Buzzer</strong> - Audible alarm with escalating cadence</li>
                      <li>• <strong>Two Tactile Buttons</strong> - Snooze and Stop controls</li>
                      <li>• <strong>10kΩ Potentiometer</strong> - LCD contrast adjustment</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-amber-400">Why This Approach</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      The technical choices prioritize expressive behavior over raw functionality. The LCD enables 
                      text-based personality, buttons create interaction loops, and the buzzer&apos;s escalation pattern 
                      creates the passive-aggressive character. State-driven logic tracks snooze count, allowing the 
                      alarm&apos;s attitude to evolve based on user behavior.
                    </p>
                  </div>
                </div>

                {/* Image 2 */}
                <div>
                  <img 
                    src="/idc1/billmurray.png" 
                    alt="Bill Murray Groundhog Day - the eternal snooze loop"
                    className="w-full rounded-xl shadow-2xl border border-white/10"
                  />
                  <p className="mt-3 text-gray-400 text-sm">
                    <em>Groundhog Day</em> - A visual metaphor for the eternal snooze loop. The alarm becomes your personal Phil Connors.
                  </p>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
