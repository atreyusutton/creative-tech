# Creative Tech Portfolio

A modern documentation website for Creative Technologies coursework, showcasing projects and process documentation throughout the semester.

## Projects Documented

- **IDC1 Ideation** - Initial concepts for Interactive Device Concept 1
- **IDC1 Project** - Full implementation of Interactive Device Concept 1
- **Enclosures Mini Project** - Physical housing and fabrication exploration
- **Motor Buffet Mini Project** - Motor and mechanical movement experiments
- **IDC2 Ideation** - Conceptual development for Interactive Device Concept 2
- **IDC2 Project** - Complete implementation of Interactive Device Concept 2

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

This site is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy your site

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/creative-tech)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Adding Your Documentation

Each project page includes template sections for documentation. Add your content by:

1. Adding images/videos to the `/public` folder
2. Updating the project pages in `/app/projects/[id]/page.tsx`
3. Including descriptions for all media (what, how, why)

## Documentation Guidelines

All documentation should include:
- **Images**: Process photos, final results, details
- **Videos**: Demonstrations, interactions, functionality
- **Sketches**: Concept drawings, planning materials
- **Diagrams**: Technical specifications, circuits, flowcharts
- **Written descriptions**: Explaining what, how, and why for each element

---

Built for Creative Technologies Course
