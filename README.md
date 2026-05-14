# BEM Fasilkom UPN "Veteran" Jawa Timur

Official web application for the Student Executive Board (BEM) of the Faculty of Computer Science at UPN "Veteran" Jawa Timur. This platform serves as a central hub for student information, organizational structure, program documentation, and student advocacy.

## Project Overview

This project was built to deliver a high-performance, accessible, and modern user interface. It features dynamic routing, animated components, and a fully responsive design tailored for both mobile and desktop users.

## Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Phosphor Icons

## Local Development Setup

To run this project locally, ensure you have Node.js installed on your machine.

1. Clone the repository
```bash
git clone https://github.com/yann-gamedev/Website-BEM-Fasilkom.git
```

2. Navigate into the project directory
```bash
cd Website-BEM-Fasilkom
```

3. Install all dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and navigate to the local server address provided in the terminal (usually `http://localhost:5173`).

## Project Structure

- `src/` : Contains the main source code for the React application.
  - `components/` : Reusable UI components (Navbar, Hero, About, Cabinet, Program, Footer).
  - `index.css` : Global stylesheet including Tailwind directives and custom design variables.
  - `App.jsx` : Main application layout and component assembly.
  - `main.jsx` : React DOM mounting point.
- `public/` : Static assets like images and fonts.
- `backup/vanilla/` : Contains the legacy HTML/CSS/JS implementation for reference purposes.

## Deployment

This application is optimized for deployment on modern platforms such as Vercel, Netlify, or GitHub Pages.

To create a production build, run:
```bash
npm run build
```

This will generate a `dist/` directory containing the optimized, minified files ready for hosting.

## License

Copyright 2026 BEM Fasilkom UPN "Veteran" Jatim. All rights reserved.
