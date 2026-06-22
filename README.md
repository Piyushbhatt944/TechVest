# TechVest

TechVest is an interactive web application designed to help investors and users analyze financial data and company performance using AI-powered insights.

## Project Overview

TechVest provides actionable investment intelligence through dynamic summaries of financial performance, competitor comparison dashboards, and ratio analysis tools. The application features a pixel-perfect, high-fidelity user interface styled as a **Figma Design Prototype** with full support for responsive layouts and color themes.

---

## Current Progress & Milestones

### Week 1: Frontend Skeleton & Routing
- **Layout Structure**: Implemented a responsive top-bar navigation schema.
- **Routing Context**: Configured routing paths using React Router v6:
  - `/` &rarr; Home Page (renders hero layout and feature descriptions)
  - `/about` &rarr; About Page placeholder
  - `/dashboard` &rarr; Analytics dashboard placeholder
  - `/login` &rarr; Authentication placeholder
- **Core Components**: Created reusable Card, Hero, Navbar, and Footer components.

### Week 2: Component Library & Themes (Deliverable 2)
- **Reusable UI Component Library (`src/components/ui/`)**:
  - `Button`: Supports primary, secondary, outline, and danger variants across `sm`, `md`, and `lg` sizes.
  - `Input`: Renders text fields with labels, error states, and borders.
  - `Modal`: Floating dialog with scroll-locking and overlay dismissals.
  - `Toast`: Auto-dismissing notification bars that slide into the viewport.
  - `Loader`: Animated spinners and dots matching theme selection colors.
  - *All components include JSDoc prop documentation at the top of their files.*
- **Export Index**: Consolidated all library exports inside `src/components/ui/index.js` for clean import statements.
- **Dark & Light Modes**: Added a global theme state toggled via a button in the Navbar. Colors, backgrounds, shadows, and borders transition smoothly using scoped CSS variables.
- **Showcase Page**: Built an interactive playground page (`/showcase`) that demonstrates all five UI components in various states and configurations.

---

## Tech Stack

- **Core Library**: React (v18+)
- **Build Tool**: Vite
- **Routing**: React Router DOM (v6+)
- **Documentation**: JSDoc (Prop parameter configurations)
- **Styling**: Vanilla CSS (Responsive Flexbox and Grid layouts, CSS Custom Properties/Variables)

---

## Installation & Running Instructions

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or higher is recommended).

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Piyushbhatt944/TechVest.git
   cd TechVest
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open the local address in your browser (usually `http://localhost:5173`).

---

## Future Scope

- Integrated Authentication (OAuth and email-password login).
- Live financial market API integrations (Alpha Vantage, Yahoo Finance, or polygon.io).
- Dedicated AI chat interface for company filings.
- Custom watchlists, automated email alerts, and PDF report exports.

## Author

- **Piyush Bhatt** (piyushbhatt944@gmail.com)
