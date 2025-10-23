# Legend Travels

A modern, responsive travel website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Custom Fonts**: Helvetica and Arial font system as specified
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Typography System

The project uses a custom typography system based on Helvetica and Arial fonts:

- **Headline**: Helvetica Bold, 35pt
- **Subhead**: Helvetica Bold, 25pt  
- **Body**: Helvetica Regular, 12pt
- **Callout**: Helvetica Bold Oblique, 8pt

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
legend-travels/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       └── Hero.tsx
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Components

### Header
- Responsive navigation with mobile menu
- Sticky positioning
- Call-to-action button
- Smooth hover animations

### Hero
- Full-screen hero section with background image
- Search functionality
- Quick action buttons for different services
- Animated scroll indicator

## Deployment

This project is optimized for deployment on Vercel:

```bash
npm run build
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library
- **ESLint**: Code linting

## License

This project is private and proprietary to Legend Travels.
