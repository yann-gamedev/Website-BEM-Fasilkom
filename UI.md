# UI Implementation Requirements: Dynamic Sticky Shrinking Navbar

## 1. Context & Objective
We are updating the main Navigation Bar for the "BEM Fasilkom Kabinet Aetherion" website. The goal is to replicate the scroll behavior and visual transition of the BEM Unsoed website's navbar. 

Currently, our navbar is static. We need it to be a **Dynamic Sticky Navbar** that starts wide and flat at the top of the page, and transitions into a smaller, floating, glassmorphism "pill" shape when the user scrolls down.

## 2. Tech Stack Context
* **Framework:** React 19
* **Build Tool:** Vite
* **Styling:** [TULIS KAN STYLING ANDA DI SINI, cth: Tailwind CSS / CSS Modules / Styled Components]

## 3. Core Behavior & State Management
* **State:** Create a boolean state `isScrolled` using React's `useState`.
* **Scroll Listener:** Implement a `useEffect` hook to track `window.scrollY`.
  * If `scrollY > 50` (threshold), set `isScrolled` to `true`.
  * If `scrollY <= 50`, set `isScrolled` to `false`.
* **Performance:** Ensure the scroll event listener is properly cleaned up in the `useEffect` return function to prevent memory leaks.

## 4. Visual States (The "Before" and "After" Scroll)
The AI agent must apply conditional styling based on the `isScrolled` state. Retain all current BEM Fasilkom logos, colors, and routing links. Only change the container's behavior.

### State 1: At the Top (`isScrolled === false`)
* **Position:** Fixed at the top (`top-0`, `left-0`, `right-0`, `z-50`).
* **Width:** Full width or a very wide max-width container (e.g., `max-w-7xl` or `w-[95%]`).
* **Background:** Solid white or fully transparent (matching the top hero section background).
* **Spacing/Padding:** Generous vertical padding (e.g., `py-4` or `py-6`).
* **Border Radius:** Fully rounded corners (pill shape, e.g., `rounded-full`).
* **Shadow:** None or very subtle.

### State 2: Scrolled (`isScrolled === true`)
* **Position:** Still fixed at the top, but floating with a top margin (e.g., `top-4`).
* **Width:** Shrinks significantly to become more compact and centered (e.g., `max-w-4xl` or `max-w-5xl`).
* **Background (Glassmorphism):** Semi-transparent white with a blur effect (e.g., `bg-white/70` to `bg-white/80` with `backdrop-blur-md`).
* **Spacing/Padding:** Reduced vertical padding to save screen space (e.g., `py-2` or `py-3`).
* **Border Radius:** Retain fully rounded corners (`rounded-full`).
* **Shadow:** Prominent drop shadow to separate it from the content beneath (e.g., `shadow-lg` or a custom soft shadow).

## 5. Animation & Transitions
* **Rule:** The transition between `State 1` and `State 2` MUST be smooth.
* **CSS Property:** Apply a transition to layout, background, and shadow properties (e.g., `transition-all duration-300 ease-in-out`). The shrinking effect should look like the navbar is gracefully contracting.

## 6. Inner Content Structure
Ensure the inner flex container properly aligns the items regardless of the outer width:
* **Left Side:** BEM Fasilkom Logo + Text (Keep original styling).
* **Center/Right Side:** Navigation Links (Beranda, Tentang Kami, Kabinet, Program).
* Ensure any existing dropdown functionality (hover/click) continues to work perfectly in both states and does not get cut off by the `overflow` property of the pill container.