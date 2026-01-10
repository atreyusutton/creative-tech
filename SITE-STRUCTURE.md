# 🗺️ Site Structure Overview

## Visual Site Map

```
Homepage (/)
│
├─ Creative Technologies
│  └─ Project Grid with 6 Cards
│
├─ IDC1 Ideation (/projects/idc1-ideation)
│  ├─ Overview
│  ├─ What - Initial Concepts
│  ├─ How - Proposed Approach
│  ├─ Why - Conceptual Framework
│  └─ Media & Documentation
│
├─ IDC1 Project (/projects/idc1-project)
│  ├─ Project Overview
│  ├─ What - Final Device
│  ├─ How - Build Process
│  ├─ Why - Design Rationale
│  ├─ Process Documentation
│  └─ Final Documentation
│
├─ Enclosures Mini Project (/projects/enclosures)
│  ├─ Project Overview
│  ├─ What - Enclosure Design
│  ├─ How - Fabrication Process
│  ├─ Why - Design Considerations
│  └─ Documentation
│
├─ Motor Buffet Mini Project (/projects/motor-buffet)
│  ├─ Project Overview
│  ├─ What - Motor Experiments
│  ├─ How - Technical Implementation
│  ├─ Why - Exploration Goals
│  └─ Documentation
│
├─ IDC2 Ideation (/projects/idc2-ideation)
│  ├─ Overview
│  ├─ What - Evolved Concepts
│  ├─ How - Planned Approach
│  ├─ Why - Conceptual Development
│  └─ Media & Documentation
│
└─ IDC2 Project (/projects/idc2-project)
   ├─ Project Overview
   ├─ What - Final Implementation
   ├─ How - Build & Process
   ├─ Why - Design Philosophy
   ├─ Process Documentation
   └─ Final Documentation
```

## File Structure

```
creative-tech/
│
├── 📱 APP (Next.js Application)
│   ├── layout.tsx                 # Root layout, metadata, fonts
│   ├── page.tsx                   # Homepage with project grid
│   ├── globals.css                # Global styles
│   └── projects/[id]/
│       └── page.tsx               # Dynamic project pages
│
├── 🎨 PUBLIC (Static Assets)
│   ├── [Your project folders]     # Add your media here
│   └── [Default Next.js assets]
│
├── 📚 DOCUMENTATION
│   ├── README.md                  # Technical documentation
│   ├── QUICKSTART.md              # Getting started guide
│   ├── DEPLOYMENT.md              # Deployment instructions
│   ├── DEPLOYMENT-CHECKLIST.md    # Pre-deployment checklist
│   ├── MEDIA-GUIDE.md             # How to add media
│   ├── EXAMPLE-CONTENT.md         # Content examples
│   ├── PROJECT-SUMMARY.md         # Project overview
│   └── SITE-STRUCTURE.md          # This file
│
├── ⚙️ CONFIGURATION
│   ├── package.json               # Dependencies
│   ├── tsconfig.json              # TypeScript config
│   ├── next.config.ts             # Next.js config
│   ├── tailwind.config.ts         # Tailwind config
│   ├── postcss.config.mjs         # PostCSS config
│   ├── eslint.config.mjs          # ESLint config
│   └── vercel.json                # Vercel config
│
└── 🔧 OTHER
    ├── .gitignore                 # Git ignore rules
    └── node_modules/              # Dependencies (auto-generated)
```

## Page Components Breakdown

### Homepage (`app/page.tsx`)

```tsx
┌─────────────────────────────────────┐
│         Hero Section                │
│  ┌───────────────────────────┐     │
│  │   Creative Technologies    │     │
│  │   [Gradient Text]          │     │
│  │   Description              │     │
│  └───────────────────────────┘     │
│                                     │
│         Project Grid                │
│  ┌─────────┐  ┌─────────┐         │
│  │ IDC1    │  │ IDC1    │         │
│  │ Ideation│  │ Project │         │
│  └─────────┘  └─────────┘         │
│  ┌─────────┐  ┌─────────┐         │
│  │Enclosures│ │ Motor   │         │
│  │         │  │ Buffet  │         │
│  └─────────┘  └─────────┘         │
│  ┌─────────┐  ┌─────────┐         │
│  │ IDC2    │  │ IDC2    │         │
│  │ Ideation│  │ Project │         │
│  └─────────┘  └─────────┘         │
│                                     │
│         Footer Info                 │
└─────────────────────────────────────┘
```

### Project Page (`app/projects/[id]/page.tsx`)

```tsx
┌─────────────────────────────────────┐
│  ← Back to All Projects             │ (Sticky Header)
├─────────────────────────────────────┤
│         Hero Section                │
│  [Project Badge]                    │
│  Project Title                      │
│  Subtitle                           │
├─────────────────────────────────────┤
│         Section 1                   │
│  ┌───────────────────────────┐     │
│  │ Heading                    │     │
│  │ Content text...            │     │
│  │                            │     │
│  │ [Media Placeholder/        │     │
│  │  Your Images & Videos]     │     │
│  └───────────────────────────┘     │
├─────────────────────────────────────┤
│         Section 2                   │
│  [Same structure]                   │
├─────────────────────────────────────┤
│         Section 3                   │
│  [Same structure]                   │
├─────────────────────────────────────┤
│         ...more sections            │
├─────────────────────────────────────┤
│    Documentation Guide              │
│  [Tips for adding content]          │
└─────────────────────────────────────┘
```

## Color Themes by Project

| Project | Gradient Colors | Hex Values |
|---------|----------------|------------|
| IDC1 Ideation | Purple → Pink | `from-purple-500 to-pink-500` |
| IDC1 Project | Blue → Cyan | `from-blue-500 to-cyan-500` |
| Enclosures | Green → Emerald | `from-green-500 to-emerald-500` |
| Motor Buffet | Orange → Red | `from-orange-500 to-red-500` |
| IDC2 Ideation | Indigo → Purple | `from-indigo-500 to-purple-500` |
| IDC2 Project | Rose → Pink | `from-rose-500 to-pink-500` |

## Responsive Breakpoints

- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (2 columns, larger spacing)

## Navigation Flow

```
User Journey:

1. Land on Homepage
   ↓
2. See all 6 projects in grid
   ↓
3. Click on a project card
   ↓
4. View project documentation
   ↓
5. Scroll through sections
   ↓
6. Click "Back to All Projects"
   ↓
7. Return to Homepage
```

## Content Organization

### Ideation Projects (IDC1 & IDC2)
- Focus on concept development
- Include sketches and early ideas
- Document brainstorming process
- Explain conceptual framework

### Implementation Projects (IDC1 & IDC2 Projects)
- Show complete build process
- Include process and final documentation
- Technical details and code
- Final device demonstrations

### Mini Projects (Enclosures & Motor Buffet)
- Focused explorations
- Specific techniques or materials
- Experiments and iterations
- Learning outcomes

## Adding New Projects (Future)

If you need to add more projects later:

1. **Add to homepage** (`app/page.tsx`):
```tsx
const projects = [
  // ... existing projects
  {
    id: "new-project",
    title: "New Project",
    description: "Description",
    color: "from-color-500 to-color-500"
  }
];
```

2. **Add to project data** (`app/projects/[id]/page.tsx`):
```tsx
const projectsData = {
  // ... existing projects
  "new-project": {
    title: "New Project",
    subtitle: "Subtitle",
    color: "from-color-500 to-color-500",
    sections: [...]
  }
};
```

## Key Features

✨ **Static Generation** - All pages pre-rendered at build time
✨ **Dynamic Routes** - Single template for all project pages
✨ **Responsive Design** - Works on all devices
✨ **Fast Loading** - Optimized for performance
✨ **SEO Friendly** - Proper metadata and structure
✨ **Easy to Update** - Simple content management

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Hosting and deployment platform

---

**This structure is designed to be simple, maintainable, and focused on your documentation needs!**
