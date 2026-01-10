# 📋 Using the Technology Tinder Template

## What I Just Created for You

I've built a **complete example page** at `/projects/technology-tinder/` that shows exactly what a finished Technology Tinder assignment looks like.

## How to Access It

**View the example:** http://localhost:3000/projects/technology-tinder

**Access from homepage:** Click the Technology Tinder card to view the example template page

## What's in the Example

The example demonstrates:

### ✅ Complete Structure
- Position statement up front
- Swipe Right section (Open-Source Hardware)
- Swipe Left section (Algorithmic Engagement Optimization)
- Reflection on values
- Presentation timing breakdown
- Peer feedback template

### ✅ Proper Depth
Each technology includes:
- **What it is** - Clear description
- **Why I value/reject it** - Personal position with story
- **What it enables/disables** - Impact on human capability
- **Why it matters to me** - Connection to values

### ✅ Visual Placeholders
- Two image placeholders with instructions on what to add
- Suggestions for replacement images
- File path examples

## How to Use This Template

### Step 1: Study the Example
Visit http://localhost:3000/projects/technology-tinder and read through the entire example to understand:
- The level of detail expected
- How personal stories strengthen arguments
- The structure of each section
- How to connect choices to your values

### Step 2: Choose Your Technologies
Pick one swipe-right and one swipe-left based on what YOU actually believe. Don't copy the example topics—choose technologies you genuinely care about.

### Step 3: Fill Out Your Own Version

You have two options:

#### Option A: Edit the Template Directly
Go to `/app/projects/technology-tinder/page.tsx` and replace the example content with your own technologies, arguments, and images.

#### Option B: Create Your Own Page (Advanced)
Copy the template structure from `/app/technology-tinder/page.tsx` and modify it with your content.

### Step 4: Add Your Images

Create a folder in `/public`:
```bash
mkdir -p public/technology-tinder
```

Add your images:
```
public/
└── technology-tinder/
    ├── swipe-right-image.jpg
    └── swipe-left-image.jpg
```

Then update the image paths in your content.

## Key Differences: Example vs. Your Work

### The Example Shows:
- ✅ Structure and formatting
- ✅ Level of detail and depth
- ✅ How to be personal and specific
- ✅ How to connect to values

### You Should Change:
- 🔄 The technologies (choose your own!)
- 🔄 The arguments (your own thinking!)
- 🔄 The images (your own visuals!)
- 🔄 The personal stories (your experiences!)
- 🔄 The values (what matters to YOU!)

## Template Structure Breakdown

### 1. Position Statement
**Purpose:** Establish your overarching value system
**Length:** 2-3 sentences
**Example:** "I believe technology should amplify human capability without hijacking human intention..."

### 2. Swipe Right Section
**What to include:**
- Technology name and brief description
- Image showing the technology
- 4 subsections:
  - What it is
  - Why you value it (personal!)
  - What it enables
  - Why it matters to you

### 3. Swipe Left Section
**Same structure as Swipe Right:**
- Technology name and description
- Image
- 4 subsections:
  - What it is
  - Why you reject it (personal!)
  - What it disables/diminishes
  - Why it concerns you

### 4. Reflection
**Purpose:** Connect your choices to what you want to build
**Questions to answer:**
- What do these choices reveal about your values?
- What's the throughline between them?
- How does this inform your future work?

### 5. Presentation Notes
**Purpose:** Plan your 3-minute talk
**Include:**
- Timing breakdown (intro, right, left, close)
- Key points to hit in each section
- How you'll transition between sections

### 6. Peer Feedback Space
**Purpose:** Document after your presentation
**Capture:**
- What people challenged
- What resonated
- What surprised you
- How your thinking evolved

## Adding Your Own Images

### For the Swipe Right Technology

Replace this placeholder section:
```tsx
<div className="aspect-video flex items-center justify-center bg-gradient-to-br from-green-900/20 to-emerald-900/20">
  <div className="text-center p-8">
    <div className="text-6xl mb-4">🔧</div>
    <p className="text-gray-400 text-sm">
      Replace with: Image of Arduino boards...
    </p>
  </div>
</div>
```

With your actual image:
```tsx
<img 
  src="/technology-tinder/your-image.jpg" 
  alt="Descriptive alt text"
  className="w-full rounded-xl"
/>
<p className="mt-3 text-gray-400 text-sm">
  Caption explaining what this image shows and why it's included
</p>
```

### Image Guidelines

**Good Images:**
- Show the technology in use
- Illustrate your point
- Are clear and well-lit
- Connect to your argument

**Image Sources:**
- Your own photos (best!)
- Screenshots you've taken
- Creative Commons images (with attribution)
- Diagrams you've created

## Writing Tips from the Example

### Be Specific
❌ "Arduino is good for makers"
✅ "I learned to code by making LEDs blink with Arduino. No gatekeeping, no expensive tools, just curiosity and a $25 board."

### Be Personal
❌ "Many people lose time to social media"
✅ "I've personally lost hours to these patterns—opened an app to check one thing, then suddenly it's 45 minutes later"

### Connect to Values
❌ "This technology is bad"
✅ "I believe technology should serve human goals, not manipulate them. This is why I reject..."

### Use Concrete Examples
❌ "It helps people learn"
✅ "It enables artists to add interactivity, students to understand how devices work by building them, and tinkerers to solve real problems"

## Your Presentation Slides

While the example page is detailed, **your presentation slides should be minimal:**

**Slide 1 (Swipe Right):**
- Technology name
- One compelling image
- Your position in 1 sentence

**Slide 2 (Swipe Left):**
- Technology name
- One compelling image
- Your position in 1 sentence

**You speak the details.** The slides are just visual anchors.

## Common Mistakes to Avoid

❌ Copying the example technologies
❌ Being neutral or hedging your position
❌ Listing features without taking a stance
❌ Forgetting personal connection
❌ Making it about the tech alone (not about humans)
❌ Adding too much text to slides

## Checklist Before Your Presentation

- [ ] I chose technologies I genuinely care about
- [ ] My position is clear and specific
- [ ] I included personal stories/experiences
- [ ] I explained what it enables/disables in humans
- [ ] I connected to my own values
- [ ] My slides are minimal (just tech name + image)
- [ ] I practiced and hit 3 minutes
- [ ] My detailed thinking is documented on my site

## After Your Presentation

Go back to the example to see how to document peer feedback:
- What arguments did people challenge?
- What resonated with the class?
- What surprised you?
- How did your thinking evolve?

This reflection is valuable for your final project!

## Questions?

- **"Should my page look exactly like this?"** → Structure yes, content NO. Use your own ideas!
- **"Do I need this much detail on my slides?"** → No! Slides are minimal. This detail is for your site documentation.
- **"Can I use different technologies?"** → Absolutely! You SHOULD use different technologies that matter to YOU.
- **"What if people disagree?"** → Perfect! That means you took a real position.

---

## Quick Start

1. **View example:** http://localhost:3000/projects/technology-tinder
2. **Choose your technologies** (different from the example!)
3. **Edit the template** at `/app/projects/technology-tinder/page.tsx`
4. **Add your images** to `/public/technology-tinder/`
5. **Create 2 minimal slides** for your presentation
6. **Practice your 3-minute talk**
7. **Present on 1/22/26**

**The example is your guide, not your answer.** 🎯

Use it to understand the structure and depth expected, then create something that reveals who YOU are and what YOU believe.
