# Dristor Dent - Dental Clinic Website

A modern, responsive website for Dristor Dent dental clinic built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean, professional design with smooth animations
- **Promo Bar**: Fixed top promotional banner with contact information
- **Navigation**: Sticky header with mobile hamburger menu
- **Hero Section**: Full-screen background image with overlay
- **Services**: Comprehensive dental services information
- **Contact Form**: Appointment booking form
- **Footer**: Complete contact information with embedded map

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Netlify

## Getting Started

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

## Deployment

This project is configured for deployment on Netlify:

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Netlify will automatically detect the Next.js configuration and deploy

## Project Structure

```
├── public/          # Static assets (images, etc.)
├── src/
│   └── app/
│       ├── globals.css    # Global styles
│       ├── layout.tsx     # Root layout
│       └── page.tsx       # Home page
├── netlify.toml     # Netlify configuration
├── tailwind.config.ts    # Tailwind configuration
└── package.json     # Dependencies and scripts
```

## Images

Place your images in the `public/` folder:
- `logo.png` - Clinic logo
- `image1.jpg` - Hero image (doctor)
- `image2.jpg` - Hero image (interior)
- `image3.jpg` - Hero background
- `skyro.png` - Sky.ro logo

## License

© 2026 Dristor Dent SRL. All rights reserved.