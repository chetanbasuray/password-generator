# Password Generator

A modern, client-side **Password Generator** built with Next.js, React, Framer Motion, and TailwindCSS.  
Generate multiple strong passwords at once with a beautiful animated UI and click-to-copy functionality.

Live Demo: <https://password-generator-one-wheat.vercel.app/>

---

## Features

- Generate multiple passwords at once (configurable length and character sets)
- Options to include:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Symbols
- Click on any password to copy it instantly, with a “Copied!” confirmation
- Fully client-side — no data is stored anywhere
- Dark and Light modes
- Animated floating background particles and gradient animations
- Responsive and mobile-friendly design

---

## Tech Stack

- **Next.js 13** (app router)  
- **React** (functional components + hooks)  
- **Framer Motion** (animated background and particle effects)  
- **TailwindCSS** (utility-first styling)  
- **Lucide-React** (icons for theme toggle)  
- **Geist font** for modern typography

---

## Getting Started

### Prerequisites

Make sure you have Node.js installed (>=18 recommended) and npm or yarn.

### Installation

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
```

or with yarn:

```bash
yarn
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
npm run build
npm run start
```

---

## File Structure

```
/app
  /components
    - PasswordGenerator.js
    - AnimatedBackground.js
  - page.js
  - layout.js
/globals.css
/package.json
/README.md
```

- `page.js` — main page and UI container  
- `PasswordGenerator.js` — generates passwords, handles click-to-copy  
- `AnimatedBackground.js` — floating animated particles  
- `layout.js` — app-wide font and layout configuration  

---

## How to Use

1. Adjust the password **length** using the slider  
2. Toggle options for uppercase, lowercase, numbers, and symbols  
3. Click **Generate Passwords** to create a batch of strong passwords  
4. Click on any password to copy it to your clipboard — a “Copied!” message confirms the action  
5. Toggle between **Light** and **Dark** mode using the sun/moon icon  

---

## Customization

- **Number of passwords:** Change the count of passwords generated at once in `PasswordGenerator.js`  
- **Colors & Theme:** Adjust TailwindCSS classes for background, text, and copied messages  
- **Animations:** Modify `AnimatedBackground.js` for different particle behavior  

---

## License

This project is **MIT Licensed** — free to use and modify.

---

## Acknowledgements

- [Next.js](https://nextjs.org/)  
- [Framer Motion](https://www.framer.com/motion/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [Lucide Icons](https://lucide.dev/)
