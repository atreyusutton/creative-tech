import Link from "next/link";

export default function TechnologyTinderExample() {
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
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-sm font-medium mb-6">
            Assignment Due 1/22
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Technology Tinder
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Which technologies make humans more capable — and which make us less so?
          </p>
          

          {/* Assignment Brief */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              My Position
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I believe technology should give people power, not take it away. Arduino represents tools that empower—
              transparent, accessible, and designed to amplify human capability. TikTok represents platforms that 
              exploit—designed to hijack attention and optimize for engagement over agency. The line is clear: 
              <strong>tools versus traps</strong>.
            </p>
          </div>

          {/* Swipe Right Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-5xl">👉</div>
              <div>
                <h2 className="text-3xl font-bold text-green-400">
                  Swipe Right
                </h2>
                <p className="text-gray-400">Technology that adds human capability</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Open-Source Hardware (Arduino, Raspberry Pi)
            </h3>

            {/* Arduino Image */}
            <div className="my-6">
              <img 
                src="/technology-tinder/arduino.jpg" 
                alt="Arduino boards and open-source hardware platforms"
                className="w-full rounded-xl shadow-2xl border border-white/10"
              />
              <p className="mt-3 text-gray-400 text-sm">
                Arduino and open-source hardware platforms that democratize technology creation
              </p>
            </div>

            <div className="space-y-4 text-gray-300">
              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-green-400 mb-2">What it is</h4>
                <p>
                  Open-source hardware platforms like Arduino and Raspberry Pi are affordable, accessible 
                  computing boards that anyone can use to build physical interactive devices. They come with 
                  open schematics, free development tools, and massive community support.
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-green-400 mb-2">Why I value it</h4>
                <p>
                  These platforms democratize technology creation. They put the power to build, modify, and 
                  understand technology directly in anyone's hands—not just engineers at big companies. I learned 
                  to code by making LEDs blink with Arduino. No gatekeeping, no expensive tools, just curiosity 
                  and a $25 board.
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-green-400 mb-2">What it enables</h4>
                <p>
                  It enables <strong>learning by making</strong>. You don't need permission or credentials—just 
                  plug it in and start experimenting. It enables artists to add interactivity, students to understand 
                  how devices work by building them, and tinkerers to solve real problems in their own communities. 
                  It shifts power from consumers to creators.
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-green-400 mb-2">Why it matters to me</h4>
                <p>
                  I believe technology should be transparent and modifiable, not black-boxed and locked down. 
                  Open-source hardware embodies the idea that understanding how things work is a form of empowerment. 
                  It's the opposite of "just trust us"—it's "here's how it works, now make it your own." That's the 
                  kind of technology I want to spend my time building and advocating for.
                </p>
              </div>
            </div>
          </div>

          {/* Swipe Left Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-5xl">👈</div>
              <div>
                <h2 className="text-3xl font-bold text-red-400">
                  Swipe Left
                </h2>
                <p className="text-gray-400">Technology that reduces human capability</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              TikTok
            </h3>

            {/* Infinite Scroll Image */}
            <div className="my-6">
              <img 
                src="/technology-tinder/infinite-scroll.jpg" 
                alt="TikTok's algorithmic feed and engagement features"
                className="w-full rounded-xl shadow-2xl border border-white/10"
              />
              <p className="mt-3 text-gray-400 text-sm">
                TikTok's infinite scroll and algorithmic content delivery system
              </p>
            </div>

            <div className="space-y-4 text-gray-300">
              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-red-400 mb-2">What it is</h4>
                <p>
                  TikTok is a short-form video platform engineered to maximize engagement through algorithmic content delivery. 
                  The infinite scroll removes natural stopping points. Autoplay keeps you watching. The "For You" algorithm 
                  predicts what will keep you on the platform longest, not what serves you best.
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-red-400 mb-2">Why I reject it</h4>
                <p>
                  Because it hijacks human attention and intention. I've personally lost hours to TikTok—
                  opened the app to check one thing, then suddenly it's 45 minutes later and I've watched 
                  hundreds of videos I didn't mean to see. It's not that I'm weak-willed; TikTok is 
                  explicitly designed by teams of engineers to be hard to resist.
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-red-400 mb-2">What it disables</h4>
                <p>
                  It disables <strong>intentional choice</strong>. When algorithms decide what you see next, 
                  you're not navigating—you're being guided. It erodes the ability to decide "I'm done now" 
                  because there's always one more thing. It replaces human agency with automated compulsion. 
                  You become a resource to optimize, not a person with goals.
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-red-400 mb-2">Why it concerns me</h4>
                <p>
                  I'm concerned because this optimization treats human attention as infinite and extractable. 
                  It's technology designed not to serve human needs, but to shape human behavior for platform 
                  benefit. If I'm going to build technology, I want to build things that respect people's time 
                  and agency, not exploit it. I want tools, not traps.
                </p>
              </div>
            </div>
          </div>

          {/* Reflection Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              What This Reveals About My Values
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Arduino and TikTok represent opposite visions of what technology can be. One democratizes creation 
                and puts power in people's hands. The other optimizes for engagement and treats users as metrics 
                to extract from.
              </p>
              <p>
                I value <strong>transparency over black boxes</strong>, <strong>agency over convenience</strong>, 
                and <strong>empowerment over exploitation</strong>. The technologies I want to build are tools you 
                can understand, modify, and control—not platforms that control you.
              </p>
              <p>
                That's the foundation: <strong>tools, not traps</strong>. Technology that respects human intention, 
                not technology that hijacks it.
              </p>
            </div>
          </div>

          {/* Presentation Notes */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              My Presentation Language
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <p className="text-lg leading-relaxed">
                  "I swiped right on Arduino and open-source hardware, and left on TikTok. 
                  These choices show what I value: <strong>tools that give you power versus platforms that take it away</strong>."
                </p>
              </div>
              
              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h3 className="font-semibold text-green-400 mb-2">On Arduino (Right Swipe):</h3>
                <p className="leading-relaxed">
                  "Arduino puts creation in anyone's hands. You don't need permission, you don't need credentials—
                  just curiosity and a $25 board. I learned to code by making LEDs blink. That's what I want 
                  technology to be: <strong>transparent, accessible, empowering</strong>. Not locked behind paywalls 
                  or corporate gatekeeping."
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h3 className="font-semibold text-red-400 mb-2">On TikTok (Left Swipe):</h3>
                <p className="leading-relaxed">
                  "TikTok is designed to hijack your attention. I've opened it to check one thing and lost 45 minutes 
                  to videos I didn't choose to watch. The algorithm decides what I see. I'm not navigating—I'm being 
                  <strong>guided, manipulated, optimized</strong>. That's not a tool, that's a trap."
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h3 className="font-semibold text-purple-400 mb-2">What This Means:</h3>
                <p className="leading-relaxed">
                  "If I'm going to build technology, I want to build things that respect people's agency. 
                  Things you can understand, modify, and control. <strong>Tools, not traps.</strong> Arduino shows 
                  what's possible when technology empowers. TikTok shows what happens when it exploits. I know which 
                  side I want to be on."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
