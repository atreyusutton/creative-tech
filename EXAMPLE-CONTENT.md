# Example: Adding Content to a Project Page

This file shows you exactly how to add your documentation to a project page.

## Step-by-Step Example

Let's say you want to add documentation for your **IDC1 Ideation** project.

### Step 1: Organize Your Media Files

Create a folder in `/public` and add your files:

```
public/
└── idc1-ideation/
    ├── sketch1.jpg
    ├── sketch2.jpg
    ├── mood-board.png
    └── concept-video.mp4
```

### Step 2: Edit the Project Page

Open `/app/projects/[id]/page.tsx` and find the `idc1-ideation` section in the `projectsData` object.

### Step 3: Replace Placeholder Content

**BEFORE** (the template):
```tsx
{
  heading: "What - Initial Concepts",
  content: "Document your initial ideas here. What device or interaction are you planning to create? Describe the core concept and functionality."
}
```

**AFTER** (your content):
```tsx
{
  heading: "What - Initial Concepts",
  content: "I'm developing an interactive light sculpture that responds to ambient sound levels. The device uses multiple LED strips arranged in a geometric pattern that pulses and changes color based on the volume and frequency of surrounding sounds. The goal is to create a visual representation of the sonic environment."
}
```

### Step 4: Add Media in the Template

Find the media placeholder section (looks like this):

```tsx
<div className="mt-6 p-8 border-2 border-dashed border-white/20 rounded-lg bg-white/5">
  <div className="text-center text-gray-400">
    <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <p className="text-sm">Add your images, videos, sketches, and diagrams here</p>
  </div>
</div>
```

**Replace it with your actual media:**

```tsx
{/* Initial Concept Sketches */}
<div className="space-y-6 mt-6">
  {/* First Sketch */}
  <div>
    <img 
      src="/idc1-ideation/sketch1.jpg" 
      alt="Initial concept sketch of geometric LED arrangement"
      className="w-full rounded-lg shadow-lg"
    />
    <div className="mt-3 text-gray-300 text-sm space-y-2">
      <p><strong>What:</strong> Initial concept sketch showing the geometric arrangement of LED strips in a hexagonal pattern.</p>
      <p><strong>How:</strong> Hand-drawn with pencil on paper, exploring different spatial configurations and how light would interact with the structure.</p>
      <p><strong>Why:</strong> The hexagonal pattern allows for interesting light diffusion and creates multiple viewing angles. This sketch helped me visualize how the LEDs would be positioned relative to each other.</p>
    </div>
  </div>

  {/* Second Sketch */}
  <div>
    <img 
      src="/idc1-ideation/sketch2.jpg" 
      alt="Technical diagram showing sensor placement"
      className="w-full rounded-lg shadow-lg"
    />
    <div className="mt-3 text-gray-300 text-sm space-y-2">
      <p><strong>What:</strong> Technical diagram illustrating the placement of the sound sensor and how it connects to the LED controller.</p>
      <p><strong>How:</strong> Created in Procreate, combining hand-drawn elements with digital annotations to show the technical relationships.</p>
      <p><strong>Why:</strong> This diagram was essential for planning the electronics layout and ensuring the sensor would be positioned optimally to capture ambient sound.</p>
    </div>
  </div>

  {/* Mood Board */}
  <div>
    <img 
      src="/idc1-ideation/mood-board.png" 
      alt="Mood board with visual references"
      className="w-full rounded-lg shadow-lg"
    />
    <div className="mt-3 text-gray-300 text-sm space-y-2">
      <p><strong>What:</strong> Mood board collecting visual references from light installations, geometric art, and sound visualization projects.</p>
      <p><strong>How:</strong> Assembled in Figma, combining images from various artists and projects that inspired this concept.</p>
      <p><strong>Why:</strong> These references helped define the aesthetic direction and informed decisions about color palettes and geometric forms.</p>
    </div>
  </div>

  {/* Concept Video */}
  <div>
    <video 
      controls 
      className="w-full rounded-lg shadow-lg"
    >
      <source src="/idc1-ideation/concept-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="mt-3 text-gray-300 text-sm space-y-2">
      <p><strong>What:</strong> Quick animation showing how the LED patterns might respond to different sound frequencies.</p>
      <p><strong>How:</strong> Created in After Effects as a proof-of-concept visualization before building the physical prototype.</p>
      <p><strong>Why:</strong> This animation helped me understand the timing and visual rhythm of the light responses, which informed the programming of the actual device.</p>
    </div>
  </div>
</div>
```

## Complete Example Section

Here's a complete section with all the pieces together:

```tsx
{
  heading: "Media & Documentation",
  content: "Below are the key visual materials from my ideation process, including sketches, technical diagrams, mood boards, and concept animations."
},
```

Then in the rendering part of the page, the media gets added in the placeholder area.

## Tips for Your Documentation

### Good Documentation Includes:
✅ Clear, high-resolution images
✅ Multiple angles and perspectives
✅ Process work, not just final results
✅ Detailed written descriptions
✅ Explanation of design decisions
✅ Technical details when relevant

### Avoid:
❌ Blurry or low-quality images
❌ Images without any description
❌ Only showing final results
❌ Vague or minimal explanations
❌ Missing the "why" behind decisions

## Real-World Example Description

**Good Description:**
> **What:** Circuit diagram showing the Arduino Nano connected to a MAX9814 microphone amplifier and a WS2812B LED strip.
> 
> **How:** Created in Fritzing, showing all pin connections and power requirements. The microphone connects to A0 for analog input, while the LED data line connects to D6. A separate 5V power supply feeds the LED strip to prevent overloading the Arduino.
> 
> **Why:** This diagram was essential for troubleshooting connection issues and ensuring proper power distribution. It also serves as a reference for anyone wanting to replicate or modify the project.

**Bad Description:**
> Circuit diagram for the project.

## Multiple Images Example

For showing process or iterations:

```tsx
<div className="grid md:grid-cols-3 gap-4 mt-6">
  <div>
    <img src="/idc1-ideation/iteration1.jpg" alt="First iteration" className="w-full rounded-lg shadow-lg" />
    <p className="mt-2 text-gray-400 text-sm">Iteration 1: Basic form</p>
  </div>
  <div>
    <img src="/idc1-ideation/iteration2.jpg" alt="Second iteration" className="w-full rounded-lg shadow-lg" />
    <p className="mt-2 text-gray-400 text-sm">Iteration 2: Added complexity</p>
  </div>
  <div>
    <img src="/idc1-ideation/iteration3.jpg" alt="Third iteration" className="w-full rounded-lg shadow-lg" />
    <p className="mt-2 text-gray-400 text-sm">Iteration 3: Final concept</p>
  </div>
</div>
<p className="mt-4 text-gray-300 text-sm">
  Evolution of the geometric form through three iterations, each refining the LED placement and structural design.
</p>
```

## Need More Examples?

Check out the reference portfolio: https://kailahoportfolio.vercel.app/st

---

**Remember:** The goal is to tell the story of your creative and technical process!
