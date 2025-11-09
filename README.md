Real Estate Listing App

A modern property listing web application built with Next.js, TypeScript, and Tailwind CSS, featuring dynamic routes, booking, and reviews — all powered by mock APIs.
This project demonstrates my ability to create scalable, responsive, and user-friendly frontends suitable for real-world client projects or production environments.

🚀 Live Demo

🔗 View Live on Vercel
[(https://alx-listing-app-deployed-ten-livid.vercel.app/)]

✨ Features
🖥️ Core Functionality

Property Listings Page — Displays available properties fetched from a mock API.

Dynamic Property Details — Each listing links to its own details page via a dynamic route (/property/[id]).

Booking Flow — Users can book a property through a simple form (connected to mock API endpoints).

Review Section — Displays user reviews fetched dynamically for each property.

🎨 User Interface

Hero Section — Eye-catching landing banner with a call to action.

Filter Pills — Users can browse by categories like Top Villa, Luxury, Beachfront, etc.

Responsive Design — Fully optimized for desktop, tablet, and mobile.

Tailwind CSS Styling — Clean and modern UI with smooth hover states and adaptive layouts.

⚙️ Technical Features

Next.js API Routes used to simulate real-world REST APIs (mock JSON data).

TypeScript Interfaces (PropertyProps) for type-safe data handling.

Image Optimization using Next.js <Image> component.

Error + Loading State Handling for better UX.

Reusable Components (Layout, PropertyCard, Pill) demonstrating scalable frontend structure.

🛠️ Tech Stack
Category Tools & Libraries
Framework Next.js 14+

Language TypeScript

Styling Tailwind CSS

UI Components React functional components + Hooks
API Mock JSON data via Next.js API routes
Image Optimization next/image
Deployment Vercel

Optional Monitoring Sentry
(for error reporting)
📁 Folder Structure
src/
┣ components/
┃ ┣ layout/
┃ ┃ ┗ Layout.tsx
┃ ┣ property/
┃ ┃ ┗ PropertyCard.tsx
┣ interfaces/
┃ ┗ index.ts
┣ pages/
┃ ┣ index.tsx # Home / listing page
┃ ┣ property/[id].tsx # Dynamic property details
┃ ┗ api/property/index.ts # Mock API endpoint
┣ constants/
┃ ┗ index.ts
┗ styles/
┗ globals.css

⚡ Getting Started
1️⃣ Clone the repository
git clone https://github.com/Gentlestan/alx-listing-app-deployed.git
cd real-estate-listing

2️⃣ Install dependencies
npm install

# or

yarn install

3️⃣ Run the development server
npm run dev

# or

yarn dev

4️⃣ Open in browser
http://localhost:3000

🌍 Deployment

You can deploy instantly using Vercel:

npm run build
vercel deploy

Or connect your GitHub repo directly to Vercel for automatic builds on push.

🧠 What I Learned

Building reusable, typed React components for scalable UI architecture.

Implementing dynamic routes in Next.js.

Fetching and handling API data with loading/error states.

Managing responsive layouts efficiently using Tailwind CSS.

Structuring real-world projects for maintainability.

💡 Future Improvements

Add search and filter functionality (e.g., by price or location).

Integrate real backend API (e.g., Supabase, Firebase, or Strapi).

Add authentication (NextAuth).

Improve performance metrics and accessibility.

👨‍💻 About Me

I’m a Frontend Developer passionate about building responsive, interactive, and accessible web apps.
I specialize in React, Next.js, TypeScript, and modern UI design — crafting interfaces that are both functional and visually engaging.

🔗 Portfolio: [https://portfolio-stanley.netlify.app/]
📧 Email: sohazulike@gmail.com

💼 LinkedIn: https://www.linkedin.com/in/ohazulike-stanley/
