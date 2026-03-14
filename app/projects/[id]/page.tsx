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
    subtitle: "Passive-Aggressive Alarm Clock — Interactive Device Concept 1",
    color: "from-blue-500 to-cyan-500",
    sections: [
      {
        heading: "What",
        content: "An alarm clock that gets increasingly judgmental the more you snooze it. Built in a Yosemite Sam enclosure, it uses a state machine, escalating buzzer patterns, shrinking snooze windows, and 40 custom voice clips to create a device that is annoying on purpose — in a funny way."
      },
      {
        heading: "Why",
        content: "Snoozing too much is a genuine pet peeve. Rather than just making a louder alarm, I wanted the device to have personality — something that reacts to your behavior and holds you accountable through escalating passive-aggression. The constraint that you can't stop it until you've snoozed at least twice forces you into the experience whether you like it or not."
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
    subtitle: "War Pigs Tornado — 120V AC Motor with Light & Sound",
    color: "from-orange-500 to-red-500",
    sections: [
      {
        heading: "What",
        content: "A motorized tornado sculpture that spins an acrylic vortex tower while playing War Pigs by Black Sabbath. Black geometric enclosure, blue LED glow, toggle switch power, and a DFPlayer Mini driving the audio — all coordinated by Arduino."
      },
      {
        heading: "Why",
        content: "The challenge was to explore mechanical movement through a real motor system. We wanted something theatrical — not just a motor spinning, but a complete experience with light, sound, and physical form working together. War Pigs felt right."
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
                  className="w-full max-h-screen object-contain rounded-xl shadow-lg border border-white/10"
                />
                <img
                  src="/enclosures/process-2.jpeg"
                  alt="Button and lighting assembly"
                  className="w-full max-h-screen object-contain rounded-xl shadow-lg border border-white/10"
                />
              </div>

              {/* GIF - Smaller */}
              <div className="max-w-2xl mx-auto">
                <img
                  src="/enclosures/assembly.gif"
                  alt="Box lighting up when button pressed"
                  className="w-full max-h-screen object-contain rounded-xl shadow-2xl border border-white/10"
                />
                <p className="mt-3 text-gray-400 text-sm text-center">
                  Press the button → Box lights up. 3D printed housing, LED inside, simple interaction.
                </p>
              </div>
            </div>
          )}

          {/* Custom content for IDC1 Project */}
          {id === 'idc1-project' && (
            <div className="mt-8 space-y-8">

              {/* Enclosure photo */}
              <div>
                <img
                  src="/idc1-project/enclosure-box.jpg"
                  alt="Yosemite Sam alarm clock enclosure"
                  className="w-full max-h-screen object-contain rounded-xl shadow-2xl border border-white/10"
                />
                <p className="mt-3 text-gray-400 text-sm text-center">
                  Yosemite Sam enclosure — &quot;I&apos;m the meanest, roughest, toughest hombre that&apos;s ever crossed the Rio Grande.&quot;
                </p>
              </div>

              {/* Video + Download */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Demo</h2>
                <video
                  controls
                  preload="metadata"
                  className="w-full max-h-screen rounded-xl shadow-2xl border border-white/10 mb-4"
                >
                  <source src="/idc1-project/demo.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>
                <a
                  href="/idc1-project/demo.mp4"
                  download="passive-aggressive-alarm-clock-demo.mp4"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download MP4
                </a>
              </div>

              {/* Hardware Table */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Hardware</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-gray-300">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 pr-6 text-cyan-400 font-semibold">Component</th>
                        <th className="text-left py-3 text-cyan-400 font-semibold">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {[
                        ["Arduino (Uno/Nano)", "Main microcontroller"],
                        ["LCD 1602 (16×2)", "Displays time and state"],
                        ["Active buzzer (D9)", "Beeping alarm sound"],
                        ["Snooze button (D7)", "Snooze the alarm"],
                        ["Stop button (D8)", "Stop the alarm (if earned)"],
                        ["DFPlayer Mini", "MP3 audio module"],
                        ["Speaker (via DFPlayer)", "Plays voice clips"],
                        ["SD card (in DFPlayer)", "Holds 40 .mp3 files"],
                      ].map(([component, purpose]) => (
                        <tr key={component}>
                          <td className="py-3 pr-6 font-mono text-white">{component}</td>
                          <td className="py-3 text-gray-400">{purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* State Machine */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">State Machine</h2>
                <div className="bg-black/30 rounded-xl p-6 font-mono text-sm text-cyan-300 mb-6 overflow-x-auto">
                  ST_IDLE → ST_ALARM → ST_SNOOZ → ST_ALARM → ... → ST_STOP → ST_IDLE
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { state: "IDLE", color: "text-blue-400", desc: "Normal time display, waiting for alarm time" },
                    { state: "ALARM", color: "text-red-400", desc: "Buzzing + LCD message + voice clip playing" },
                    { state: "SNOOZ", color: "text-amber-400", desc: "Alarm silenced temporarily, countdown running" },
                    { state: "STOP", color: "text-green-400", desc: "Alarm fully dismissed, auto-resets to IDLE after 5 seconds" },
                  ].map(({ state, color, desc }) => (
                    <div key={state} className="bg-black/20 rounded-xl p-4">
                      <span className={`font-mono font-bold text-lg ${color}`}>{state}</span>
                      <p className="text-gray-400 text-sm mt-1">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Mechanics */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Core Mechanics</h2>
                <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
                  <div>
                    <h3 className="text-amber-400 font-semibold mb-1">Buzzer escalation</h3>
                    <p>Each snooze makes the beeping faster: <code className="bg-white/10 px-2 py-0.5 rounded text-cyan-300">interval = 800ms − (snoozeCount × 120ms)</code>, minimum 120ms.</p>
                  </div>
                  <div>
                    <h3 className="text-amber-400 font-semibold mb-1">Snooze duration shrinks</h3>
                    <p>Each snooze is shorter than the last: <code className="bg-white/10 px-2 py-0.5 rounded text-cyan-300">duration = 20s − (snoozeCount × 3s)</code>, minimum 5s.</p>
                  </div>
                  <div>
                    <h3 className="text-amber-400 font-semibold mb-1">Stop is blocked</h3>
                    <p>You cannot stop the alarm until you&apos;ve snoozed at least twice. Trying early plays a &quot;forceful refusal&quot; clip and the alarm keeps going.</p>
                  </div>
                  <div>
                    <h3 className="text-amber-400 font-semibold mb-1">Voice pause</h3>
                    <p>When a clip plays, the buzzer goes silent for up to 8 seconds (or until DFPlayer signals done) so you can actually hear what it says. Then buzzing resumes.</p>
                  </div>
                  <div>
                    <h3 className="text-amber-400 font-semibold mb-1">Dirty-tracking LCD</h3>
                    <p>The display only redraws when time, state, or snooze count actually changes — no unnecessary flicker.</p>
                  </div>
                </div>
              </div>

              {/* Audio System */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-2">Audio Clip System</h2>
                <p className="text-gray-400 text-sm mb-6">40 MP3 files organized into 4 categories on the SD card. <code className="bg-white/10 px-2 py-0.5 rounded text-cyan-300">randomClip()</code> picks a random file from the active category, avoiding repeating the last one played.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-gray-300">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 pr-6 text-cyan-400 font-semibold">Files</th>
                        <th className="text-left py-3 pr-6 text-cyan-400 font-semibold">Category</th>
                        <th className="text-left py-3 text-cyan-400 font-semibold">When played</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {[
                        ["0001–0010", "Alarm initiation", "Alarm first triggers"],
                        ["0011–0020", "Snooze response", "You hit snooze"],
                        ["0021–0030", "Forceful refusal", "You try to stop too early"],
                        ["0031–0040", "Stop acceptance", "You've earned the stop"],
                      ].map(([files, category, when]) => (
                        <tr key={files}>
                          <td className="py-3 pr-6 font-mono text-white">{files}</td>
                          <td className="py-3 pr-6 text-amber-400">{category}</td>
                          <td className="py-3 text-gray-400">{when}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Audio Clips */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-2">Voice Clips</h2>
                <p className="text-gray-400 text-sm mb-6">All 40 MP3s used by the alarm. Each category plays at a different moment in the interaction.</p>
                {[
                  { label: "Alarm Initiation", range: [1, 10], color: "text-red-400", border: "border-red-500/30", bg: "from-red-500/10 to-orange-500/10" },
                  { label: "Snooze Response", range: [11, 20], color: "text-amber-400", border: "border-amber-500/30", bg: "from-amber-500/10 to-yellow-500/10" },
                  { label: "Forceful Refusal", range: [21, 30], color: "text-purple-400", border: "border-purple-500/30", bg: "from-purple-500/10 to-pink-500/10" },
                  { label: "Stop Acceptance", range: [31, 40], color: "text-green-400", border: "border-green-500/30", bg: "from-green-500/10 to-emerald-500/10" },
                ].map(({ label, range, color, border, bg }) => (
                  <div key={label} className={`bg-gradient-to-br ${bg} border ${border} rounded-xl p-5 mb-4`}>
                    <h3 className={`font-semibold mb-3 ${color}`}>{label}</h3>
                    <div className="space-y-2">
                      {Array.from({ length: range[1] - range[0] + 1 }, (_, i) => {
                        const n = (range[0] + i).toString().padStart(4, "0");
                        return (
                          <div key={n} className="flex items-center gap-3">
                            <span className="font-mono text-xs text-gray-500 w-10">{n}</span>
                            <audio controls src={`/idc1-project/audio/${n}.mp3`} className="h-8 w-full" preload="none" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* LCD Display */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">LCD Display</h2>
                <div className="bg-black/50 rounded-xl p-5 font-mono text-green-400 text-sm mb-6 border border-green-900/50">
                  <div>07:01 ALRM</div>
                  <div>You said that.</div>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><span className="text-cyan-400 font-semibold">Line 1:</span> HH:MM STATE — e.g., 07:01 ALRM</li>
                  <li><span className="text-cyan-400 font-semibold">Line 2:</span> Escalating passive-aggressive messages as snooze count climbs:</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Good morning.", "One more min.", "You said that.", "Wont help.", "You're awake.", "You chose this."].map((msg) => (
                    <span key={msg} className="bg-black/30 border border-white/10 rounded px-3 py-1 font-mono text-green-400 text-xs">{msg}</span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Custom content for Motor Buffet */}
          {id === 'motor-buffet' && (
            <div className="mt-8 space-y-8">

              {/* Hero photo */}
              <div>
                <img
                  src="/motor-buffet/tornado.jpg"
                  alt="War Pigs tornado sculpture"
                  className="w-full max-h-screen object-contain rounded-xl shadow-2xl border border-white/10"
                />
                <p className="mt-3 text-gray-400 text-sm text-center">
                  Black geometric base, acrylic tornado tower, blue LEDs — toggle switch brings it to life
                </p>
              </div>

              {/* Demo video */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Demo</h2>
                <video
                  controls
                  preload="metadata"
                  className="w-full max-h-screen rounded-xl shadow-2xl border border-white/10 mb-4"
                >
                  <source src="/motor-buffet/tornado-demo.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>
                <a
                  href="/motor-buffet/tornado-demo.mp4"
                  download="war-pigs-tornado-demo.mp4"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download MP4
                </a>
              </div>

              {/* Hardware */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Hardware</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-gray-300">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 pr-6 text-orange-400 font-semibold">Component</th>
                        <th className="text-left py-3 text-orange-400 font-semibold">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {[
                        ["120V AC Motor", "Spins the acrylic tornado tower"],
                        ["Arduino", "Controls lights and audio sequencing"],
                        ["DFPlayer Mini", "Plays War Pigs from SD card"],
                        ["Speaker", "Audio output"],
                        ["Blue LEDs", "Illuminate the acrylic vortex"],
                        ["Toggle switch", "Main power on/off"],
                        ["Black geometric enclosure", "Cardboard and foam base housing all electronics"],
                        ["Acrylic tower", "Laser-cut vortex form that spins and glows"],
                      ].map(([component, purpose]) => (
                        <tr key={component}>
                          <td className="py-3 pr-6 font-mono text-white">{component}</td>
                          <td className="py-3 text-gray-400">{purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* How it works */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
                <div className="space-y-5 text-gray-300 text-sm leading-relaxed">
                  <div>
                    <h3 className="text-orange-400 font-semibold mb-1">120V AC Motor</h3>
                    <p>Mains-voltage AC motor drives the rotation of the acrylic tornado tower. The high-torque output keeps the vortex spinning steadily — something a small DC motor couldn&apos;t achieve with the same presence.</p>
                  </div>
                  <div>
                    <h3 className="text-orange-400 font-semibold mb-1">Audio</h3>
                    <p>DFPlayer Mini plays War Pigs by Black Sabbath off an SD card, triggered by Arduino on power-up. The speaker is housed inside the base enclosure.</p>
                  </div>
                  <div>
                    <h3 className="text-orange-400 font-semibold mb-1">Lighting</h3>
                    <p>Blue LEDs are positioned inside the base to backlight the transparent acrylic tower, making the vortex glow as it spins. Arduino controls the LED state in sync with the audio trigger.</p>
                  </div>
                  <div>
                    <h3 className="text-orange-400 font-semibold mb-1">Enclosure</h3>
                    <p>Black painted geometric base built from cardboard with a brass toggle switch on the front panel. The mid-section exposes the corrugated cardboard structure as a design element, with status LEDs visible through it.</p>
                  </div>
                </div>
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
                    className="w-full max-h-screen object-contain rounded-xl shadow-2xl border border-white/10"
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
                    className="w-full max-h-screen object-contain rounded-xl shadow-2xl border border-white/10"
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
