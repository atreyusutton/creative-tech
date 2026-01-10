# Media Integration Guide

This guide shows you how to add images, videos, and other media to your project documentation.

## 📁 File Organization

Store your media files in the `/public` folder organized by project:

```
public/
├── idc1-ideation/
│   ├── sketch1.jpg
│   ├── sketch2.jpg
│   └── concept-video.mp4
├── idc1-project/
│   ├── process1.jpg
│   ├── process2.jpg
│   ├── circuit-diagram.png
│   └── final-demo.mp4
├── enclosures/
├── motor-buffet/
├── idc2-ideation/
└── idc2-project/
```

## 🖼️ Adding Images

### Basic Image

```tsx
<div className="my-6">
  <img 
    src="/idc1-ideation/sketch1.jpg" 
    alt="Initial concept sketch showing device layout"
    className="w-full rounded-lg shadow-lg"
  />
  <div className="mt-3 text-gray-300 text-sm space-y-1">
    <p><strong>What:</strong> Initial concept sketch showing the device layout and user interaction points.</p>
    <p><strong>How:</strong> Hand-drawn on paper using pencil, then scanned and digitized in Photoshop.</p>
    <p><strong>Why:</strong> This sketch helped me visualize the spatial relationship between components and plan the user interaction flow.</p>
  </div>
</div>
```

### Image Grid (Multiple Images)

```tsx
<div className="grid grid-cols-2 gap-4 my-6">
  <div>
    <img 
      src="/idc1-project/process1.jpg" 
      alt="Soldering the circuit"
      className="w-full rounded-lg shadow-lg"
    />
    <p className="mt-2 text-gray-400 text-sm">Soldering the main circuit board</p>
  </div>
  <div>
    <img 
      src="/idc1-project/process2.jpg" 
      alt="Testing the sensors"
      className="w-full rounded-lg shadow-lg"
    />
    <p className="mt-2 text-gray-400 text-sm">Testing sensor responsiveness</p>
  </div>
</div>
```

### Full-Width Image with Caption

```tsx
<figure className="my-8">
  <img 
    src="/idc1-project/final-device.jpg" 
    alt="Completed interactive device"
    className="w-full rounded-lg shadow-2xl"
  />
  <figcaption className="mt-4 text-gray-300 leading-relaxed">
    <strong>Final Device:</strong> The completed interactive device features a custom-designed 
    enclosure with embedded sensors and LED feedback system. The minimalist design emphasizes 
    the interaction points while hiding the technical complexity inside.
  </figcaption>
</figure>
```

## 🎥 Adding Videos

### Embedded Video (MP4)

```tsx
<div className="my-6">
  <video 
    controls 
    className="w-full rounded-lg shadow-lg"
    poster="/idc1-project/video-thumbnail.jpg"
  >
    <source src="/idc1-project/demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="mt-3 text-gray-300 text-sm space-y-1">
    <p><strong>What:</strong> Demonstration of the device responding to user input.</p>
    <p><strong>How:</strong> Recorded in natural lighting, showing the full interaction sequence.</p>
    <p><strong>Why:</strong> Video captures the real-time responsiveness that still images cannot convey.</p>
  </div>
</div>
```

### YouTube Video

```tsx
<div className="my-6">
  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
    <iframe 
      className="absolute inset-0 w-full h-full"
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
      title="Project Demo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
  <div className="mt-3 text-gray-300 text-sm">
    <p><strong>Demo Video:</strong> Full walkthrough of the device functionality and user interaction.</p>
  </div>
</div>
```

## 📊 Adding Diagrams

### Circuit Diagram

```tsx
<div className="my-6 bg-white p-4 rounded-lg">
  <img 
    src="/motor-buffet/circuit-diagram.png" 
    alt="Circuit schematic showing motor control"
    className="w-full"
  />
  <div className="mt-3 text-gray-700 text-sm space-y-1">
    <p><strong>What:</strong> Circuit schematic showing the motor control system with Arduino.</p>
    <p><strong>How:</strong> Created in Fritzing, showing connections between Arduino, motor driver, and power supply.</p>
    <p><strong>Why:</strong> This diagram documents the technical implementation and helps troubleshoot issues.</p>
  </div>
</div>
```

### Flowchart or Process Diagram

```tsx
<div className="my-6">
  <img 
    src="/idc2-ideation/user-flow.png" 
    alt="User interaction flowchart"
    className="w-full rounded-lg shadow-lg bg-white p-6"
  />
  <p className="mt-3 text-gray-300 text-sm">
    User interaction flowchart mapping the decision points and system responses.
  </p>
</div>
```

## 🎨 Sketches and Drawings

### Hand-Drawn Sketches

```tsx
<div className="my-6">
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <img 
      src="/enclosures/sketch-iterations.jpg" 
      alt="Multiple enclosure design iterations"
      className="w-full"
    />
  </div>
  <div className="mt-3 text-gray-300 text-sm space-y-1">
    <p><strong>What:</strong> Three different enclosure design iterations exploring various form factors.</p>
    <p><strong>How:</strong> Sketched by hand, exploring different approaches to housing the electronics.</p>
    <p><strong>Why:</strong> These iterations helped me evaluate different design directions before committing to fabrication.</p>
  </div>
</div>
```

## 📝 Code Snippets

### Arduino/Code Examples

```tsx
<div className="my-6">
  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
    <pre className="text-green-400 text-sm">
      <code>{`
void setup() {
  pinMode(MOTOR_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(A0);
  analogWrite(MOTOR_PIN, sensorValue);
}
      `}</code>
    </pre>
  </div>
  <p className="mt-3 text-gray-300 text-sm">
    Core Arduino code controlling motor speed based on sensor input.
  </p>
</div>
```

## 🎭 Before/After Comparisons

```tsx
<div className="my-6">
  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <img 
        src="/idc2-project/before.jpg" 
        alt="Initial prototype"
        className="w-full rounded-lg shadow-lg"
      />
      <p className="mt-2 text-gray-400 text-sm text-center">Initial Prototype</p>
    </div>
    <div>
      <img 
        src="/idc2-project/after.jpg" 
        alt="Final refined version"
        className="w-full rounded-lg shadow-lg"
      />
      <p className="mt-2 text-gray-400 text-sm text-center">Final Refined Version</p>
    </div>
  </div>
  <p className="mt-4 text-gray-300 text-sm">
    Comparison showing the evolution from rough prototype to polished final device.
  </p>
</div>
```

## 💡 Best Practices

### Image Optimization
- Use JPG for photos (smaller file size)
- Use PNG for diagrams/screenshots (better quality)
- Compress images before uploading (use tools like TinyPNG)
- Recommended max width: 1920px

### Video Tips
- Keep videos under 50MB when possible
- Use MP4 format for best compatibility
- Consider hosting large videos on YouTube/Vimeo
- Include a poster image (thumbnail)

### Accessibility
- Always include descriptive `alt` text
- Use captions for videos when possible
- Ensure text has good contrast with background

### Organization
- Name files descriptively: `motor-test-1.jpg` not `IMG_1234.jpg`
- Keep consistent naming conventions
- Group related media together

## 🔄 Where to Add Media

Edit `/app/projects/[id]/page.tsx` and replace the placeholder sections:

```tsx
{/* Replace this placeholder section */}
<div className="mt-6 p-8 border-2 border-dashed border-white/20 rounded-lg bg-white/5">
  <div className="text-center text-gray-400">
    <p className="text-sm">Add your images, videos, sketches, and diagrams here</p>
  </div>
</div>

{/* With your actual media */}
<div className="my-6">
  <img src="/your-project/your-image.jpg" alt="Description" className="w-full rounded-lg shadow-lg" />
  <p className="mt-3 text-gray-300 text-sm">Your description here...</p>
</div>
```

---

**Remember:** Every piece of media should have a description explaining **what**, **how**, and **why**!
