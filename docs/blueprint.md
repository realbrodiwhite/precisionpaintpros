# Precision Paint Pros – Developer Blueprint

## Overview

Precision Paint Pros is a professional painting service based in Monte Vista, Colorado. This web application serves as their digital presence, showcasing services, past projects, and providing a platform for potential clients to request quotes.

---

## Tech Stack

- **Framework:** Next.js 13 with App Router  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **Package Manager:** npm  
- **Deployment:** Configured for platforms like Vercel or Firebase Hosting  

---

## Project Structure

The project is organized as follows:

```
precisionpaintpros/
├── .github/
├── .vscode/
├── docs/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── components/
│   └── styles/
├── public/
├── .env
├── .gitignore
├── README.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Styling and Theming

### Tailwind Configuration (`tailwind.config.ts`)

The Tailwind configuration extends the default theme to include custom colors and fonts:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937",
        secondary: "#f97316",
        accent: "#10b981",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        heading: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

---

### Fonts

The application utilizes Google Fonts:

- **Headings:** Montserrat  
- **Body:** Open Sans  

These fonts are imported in the global CSS or directly in the `_document.tsx` file.

---

## Features

- **Responsive Design** – Ensures optimal viewing on all devices.  
- **Service Listings** – Detailed descriptions of offered painting services.  
- **Project Gallery** – Showcases previous work with high-quality images.  
- **Contact Form** – Allows users to request quotes or ask questions.  
- **SEO Optimization** – Meta tags and descriptions for better search engine visibility.

---

## Setup Instructions

### Prerequisites

- Node.js 18+
- npm
- Git

### Getting Started

```bash
# Clone the repo
git clone https://github.com/realbrodiwhite/precisionpaintpros.git
cd precisionpaintpros

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:3000` in your browser to view the app.

---

## Environment Variables

Create a `.env` file in the root directory and define the following variables as needed:

```
NEXT_PUBLIC_SITE_URL=https://precisionpaintpros.com
NEXT_PUBLIC_API_BASE_URL=https://api.precisionpaintpros.com
```

You can expand this section as more integrations (e.g., forms, analytics, email) are added.

---

## Deployment Notes

This app is optimized for deployment on platforms like **Vercel**, **Netlify**, or **Firebase Hosting**. Use their Next.js build presets when deploying.

```bash
# Vercel deployment example
npx vercel login
npx vercel --prod
```

---

## Contribution Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

---

## License

MIT – See `LICENSE` file for details.
