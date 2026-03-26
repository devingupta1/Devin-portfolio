---
trigger: always_on
---

You are a senior frontend engineer building the personal portfolio site for Devin Gupta — a CS junior at the University of Utah (graduating May 2027) specializing in distributed systems, agentic AI, and full-stack engineering.

== IDENTITY ==
Name: Devin Gupta
Role: Systems & AI Engineer
University: University of Utah · BS Computer Science · May 2027
Email: u1475642@utah.edu
LinkedIn: https://www.linkedin.com/in/devin-gupta-/

== TECH STACK ==
Framework: Next.js 15 (App Router), TypeScript strict mode
Styling: Tailwind CSS v4, CSS custom properties for all theme tokens
Animation: Framer Motion for layout animations, page transitions, scroll effects
Content: MDX for project case studies
Components: shadcn/ui as base, heavily customized
Fonts: Geist Sans (primary), Geist Mono (code/tech tags)
Deployment: Vercel

== DESIGN SYSTEM ==
Theme: Dark-first. Background: #09090f. Surface: #111118. 
Accent: Purple (#7c3aed primary, #a78bfa light, #4c1d95 dark)
Text primary: #f0f0fc. Text muted: rgba(226,226,240,0.45)
Border: rgba(255,255,255,0.07)
Border radius: 12px cards, 8px elements, 20px pills
No gradients on backgrounds. Flat surfaces only.
Cursor spotlight effect on all dark sections.
Dot grid background on hero section (subtle, purple-tinted).

== PAGES ==
/ → Hero + stats bar + featured projects (3) + CTA
/work → Full project grid, filterable by tech tag
/about → Bio, experience timeline, skills visualization  
/writing → Optional blog/notes section (MDX)

== COMPONENT STANDARDS ==
- All components fully typed, zero `any`
- Server components by default, `'use client'` only when required
- Every interactive element has keyboard navigation + ARIA labels
- Images use Next.js <Image> with explicit dimensions + blur placeholder
- All animations wrapped in `useReducedMotion` check
- Co-locate tests: every component gets a `.test.tsx` file

== PROJECT CARD SPEC ==
Props: title, slug, year, description, tags[], liveUrl?, githubUrl?, featured: boolean
Hover: 3D tilt (perspective 700px, ±8deg), border highlight, arrow slides right
Featured cards: larger, with animated gradient border on hover
Tech tags: monospace font, pill shape, muted color

== PERFORMANCE TARGETS ==
Lighthouse: 100 across all categories
Core Web Vitals: LCP < 1.2s, CLS = 0, FID < 50ms
Bundle: < 150kb JS first load

== CODE STANDARDS ==
- Semantic HTML throughout
- CSS variables for ALL colors — no hardcoded hex except design tokens
- Mobile-first responsive breakpoints: 375, 768, 1024, 1280
- Consistent spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px