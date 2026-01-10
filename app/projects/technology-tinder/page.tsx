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
              Technology should give people power not take it. I don&apos;t know first hand yet but I&apos;m thinking Arduino 
              represents a tool that can give you power and creativity. Help amplify human ability and design. TikTok 
              on the other hand does the opposite. TikTok exploits people attention and creativity optimizing for 
              engagement over autonomy. We can sum it up to a <strong>tool versus a trap</strong>.
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
              Open-Source Hardware (Arduino)
            </h3>

            {/* Arduino Image */}
            <div className="my-6">
              <img 
                src="/technology-tinder/arduino.jpg" 
                alt="Arduino boards and open-source hardware platforms"
                className="w-full rounded-xl shadow-2xl border border-white/10"
              />
              <p className="mt-3 text-gray-400 text-sm">
                Arduino and open-source hardware platforms that enable technology creation
              </p>
            </div>

            <div className="space-y-4 text-gray-300">
              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-green-400 mb-2">What it is</h4>
                <p>
                  Open source hardware platforms like Arduino are pretty damn cheap micro computers that anyone can 
                  use to build physical interactive projects and devices. They come with their own software, free 
                  development tools, and a ton of community support.
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-green-400 mb-2">Why I value it</h4>
                <p>
                  These platforms fully enable technology creation. They put the power to build, modify, and 
                  understand technology directly in anyone's hands not just formally trained and career engineers 
                  at big companies. I learned to code by making small games and this is the hardware version of that. 
                  No gatekeeping, not expensive, just curiosity a bit of creativity and a $70 kit.
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-green-400 mb-2">What it enables</h4>
                <p>
                  It&apos;s awesome because it enables <strong>learning by making</strong>. You don&apos;t need special permission, 
                  just watch a YouTube and plug it in and start experimenting. From artists to students you can use this 
                  to understand how devices work by building them, and tinkerers like myself love to solve real problems 
                  in their own lives and communities. It shifts power from consumers to creators.
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-green-400 mb-2">Why it matters to me</h4>
                <p>
                  I believe technology should be transparent and modifiable, not black-boxed and locked down on all sides. 
                  Open-source hardware embodies the idea that understanding how things work is a form of empowerment. 
                  It&apos;s the opposite of &quot;just trust us&quot; it&apos;s &quot;here&apos;s how it works, now make it your own.&quot; That's the 
                  kind of technology and creative control I want to spend my time building and advocating for.
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
                  We all know what TikTok is. The infinite scroll they use removes all natural stopping points. Their autoplay 
                  feature keeps you watching. The &quot;For You&quot; algorithm predicts what will keep you on the platform longest, 
                  not what serves you best.
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-red-400 mb-2">Why I reject it</h4>
                <p>
                  It hijacks human attention and intention! I've fortunately never never had TikTok but personally 
                  lost days to Instagram, Facebook, and worst of all YouTube shorts you open the app to check one 
                  thing, then suddenly it's an hour later and I've watched hundreds of videos I didn't mean to see. 
                  It's not that I'm weak-willed it's designed to do that. TikTok is explicitly designed by teams of 
                  engineers to be hard to resist and addictive.
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-red-400 mb-2">What it disables</h4>
                <p>
                  It disables <strong>intentional choice</strong>. When algorithms decide what you see next, 
                  you&apos;re not navigating you&apos;re just being guided. It disables the ability to decide I&apos;m done now 
                  because there&apos;s always one more thing you want to see. It replaces human agency and self governance 
                  with automated compulsion.
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h4 className="font-semibold text-red-400 mb-2">Why it concerns me</h4>
                <p>
                  I&apos;m concerned because this optimization treats human attention as infinite and extractable. 
                  It&apos;s technology designed not to serve human needs, but to shape human behavior for the company&apos;s 
                  benefit. If I&apos;m going to build technology, I want to build things that respect people&apos;s time 
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
                Arduino and TikTok represent opposite visions of what technology can be. One emphasizes creation 
                and puts power in people's hands. The other optimizes for engagement and treats users as metrics 
                to pull time from.
              </p>
              <p>
                I value <strong>transparency over black boxes</strong>, <strong>intention over convenience</strong>, 
                and <strong>empowerment over exploitation</strong>. The technologies I want to build are tools you 
                can understand, modify, and control, not platforms that control you.
              </p>
              <p>
                I want <strong>tools, not traps</strong>. Technology that respects human intention, not technology 
                that hijacks it.
              </p>
            </div>
          </div>

          {/* Presentation Notes */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              My Presentation Notes
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h3 className="font-semibold text-purple-400 mb-2">Opening (0:00-0:20)</h3>
                <p className="leading-relaxed">
                  &quot;Technology should give people power, not take it. I swiped right on Arduino—a tool that puts 
                  creation in your hands. I swiped left on TikTok—a platform designed to hijack your attention. 
                  The difference is simple: <strong>tools versus traps</strong>.&quot;
                </p>
              </div>
              
              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h3 className="font-semibold text-green-400 mb-2">Arduino - Right Swipe (0:20-1:30)</h3>
                <p className="leading-relaxed mb-3">
                  &quot;Arduino is a cheap microcomputer that anyone can use to build interactive devices. It comes with 
                  free software and massive community support.&quot;
                </p>
                <p className="leading-relaxed mb-3">
                  &quot;I value it because it puts power directly in people&apos;s hands—not just trained engineers. I learned 
                  to code making small games. This is the hardware version. No gatekeeping, just curiosity and a $70 kit."
                </p>
                <p className="leading-relaxed mb-3">
                  &quot;It enables <strong>learning by making</strong>. Watch a YouTube, plug it in, start building. Artists, 
                  students, tinkerers like me—we solve real problems. It shifts power from consumers to creators.&quot;
                </p>
                <p className="leading-relaxed">
                  &quot;I believe tech should be transparent and modifiable, not locked down. Arduino says &apos;here&apos;s how it 
                  works, make it your own.&apos; That&apos;s the technology I want to build.&quot;
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h3 className="font-semibold text-red-400 mb-2">TikTok - Left Swipe (1:30-2:40)</h3>
                <p className="leading-relaxed mb-3">
                  &quot;TikTok uses infinite scroll—no natural stopping points. Autoplay keeps you watching. The algorithm 
                  keeps you on the platform longest, not what serves you best.&quot;
                </p>
                <p className="leading-relaxed mb-3">
                  &quot;I&apos;ve never had TikTok, but I&apos;ve lost days to Instagram, Facebook, YouTube Shorts. You open it to 
                  check one thing, an hour later you&apos;ve watched hundreds of videos. It&apos;s not weakness—it&apos;s designed 
                  to be addictive by teams of engineers.&quot;
                </p>
                <p className="leading-relaxed mb-3">
                  &quot;It disables <strong>intentional choice</strong>. The algorithm decides what you see. You&apos;re not 
                  navigating, you&apos;re being guided. You can&apos;t say &apos;I&apos;m done&apos; because there&apos;s always one more. It replaces 
                  agency with compulsion.&quot;
                </p>
                <p className="leading-relaxed">
                  &quot;This treats attention as infinite and extractable. It&apos;s not serving human needs—it&apos;s shaping behavior 
                  for profit. I want to build tech that respects people&apos;s time and agency, not exploits it.&quot;
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                <h3 className="font-semibold text-purple-400 mb-2">Closing (2:40-3:00)</h3>
                <p className="leading-relaxed">
                  &quot;Arduino and TikTok are opposite visions. One puts power in your hands. The other treats you as a 
                  metric to extract from. I value transparency over black boxes, intention over convenience, empowerment 
                  over exploitation. <strong>Tools, not traps.</strong> That&apos;s the technology I want to spend my time 
                  building.&quot;
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
