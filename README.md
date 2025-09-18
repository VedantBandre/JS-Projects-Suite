# JS Projects Suite

A clean collection of **vanilla JS projects** wrapped in a unified interface — featuring a dark theme, minimal UI, and a card-based homepage linking to each interactive app.
Made in order to learn JavaScript.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-0f172a?logo=javascript)
![HTML](https://img.shields.io/badge/HTML-5-0f172a?logo=html5)
![CSS](https://img.shields.io/badge/CSS-3-0f172a?logo=css3)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

---

<p align="center">
  <img src="https://github.com/user-attachments/assets/7077dead-ceae-422a-b44b-961faf33a59e" alt="Homepage" width="100%" />
</p>

---

## [Live Website](https://vedantbandre.github.io/JS-Projects-Suite/)  

---

## Project Walkthrough

* **Homepage**
  <p align="center">
    <img src="https://github.com/user-attachments/assets/7077dead-ceae-422a-b44b-961faf33a59e" alt="Homepage" width="90%" />
  </p>
  
  * 2×2 grid of cards (desktop)
  * Single-column stack (mobile)
  * Contains apps of Pomodoro Timer, QR Code Generator, Password Generator & Calculator


1. **Pomodoro Timer**
   <p align="center">
    <img src="https://github.com/user-attachments/assets/ecffa8ff-5016-41e8-a1d7-633cee202cde" alt="Homepage" width="90%" />
  </p>

  * Customizable Sessions – set focus, short break, and long break durations manually
  * Cycle Management – configure after how many focus sessions a long break occurs
  * Mode Switching – quick tabs for Focus, Short Break, and Long Break
  * Controls – Start, Reset, and Skip buttons for full session control
  * Options – toggle sound alerts, auto-start next session, and desktop notifications
  * Cycle Indicator – shows current cycle number and session type


2. **QR Code Generator**
   <p align="center">
    <img src="https://github.com/user-attachments/assets/8a46144e-4049-4460-9680-bb28c855c246" alt="Homepage" width="90%" />
  </p>

  * Text/URL input
  * Selectable QR size
  * Generate + Download options


3. **Password Generator**
   <p align="center">
    <img src="https://github.com/user-attachments/assets/650615b9-97b8-4a55-ae23-846e5a033cb3" alt="Homepage" width="90%" />
  </p>

  * Sliders + checkboxes to pick length & character types
  * Copy-to-clipboard button with visual feedback


4. **Calculator**
   <p align="center">
    <img src="https://github.com/user-attachments/assets/959b0ded-e11d-4a83-8ff5-04dd23e8065f" alt="Homepage" width="90%" />
  </p>

  * Dark-themed calculator with numeric & operator buttons
  * Keyboard-like layout, glowing operators, responsive

---

## Features

* **Card-based Homepage**
  * Grid of project cards with header, preview image, and description  
  * Hover animations, dark backgrounds, subtle shadows

* **Individual Projects**
  * Each project in its own folder with `style.css`, `script.js`, and an HTML entrypoint  
  * Consistent theme across all projects  
  * Standalone functionality (no build tools required)

* **Responsive Design**
  * Homepage fits neatly on a single screen (2×2 grid on desktop, stacked on mobile)  
  * Cards adapt to smaller screens while preserving readability  

* **Example Projects**
  * Calculator  
  * Password Generator  
  * QR Code Generator  
  * (more coming soon…)

---

## Tech Stack

* **HTML5**
* **CSS**
* **Vanilla JavaScript (ES6+)**

---

## Getting Started

### 1) Clone & enter the project

```bash
git clone https://github.com/VedantBandre/JS-Projects-Suite.git
cd JS-Projects-Suite
````

### 2) Open in your browser

Simply open `index.html` in any browser.
All projects can also be opened directly by their HTML files (e.g., `calculator.html`).

---

## Deployment

This repo is **static** (HTML/CSS/JS only). You can host it anywhere:

* **GitHub Pages**

  * Make sure the homepage is name `index.html` at the repo root
  * Push to `main` branch
  * Enable GitHub Pages in repo → Settings → Pages

* **Vercel / Netlify**

  * Import the repo
  * Deploy as static site (no config needed)

---

## Contributing

PRs and suggestions welcome!
If you want to add another project:

1. Create a new folder (e.g., `my_project/`)
2. Add `index.html`, `style.css`, and `script.js`
3. Add a card to the homepage linking to your project

---

## License

[MIT License](https://choosealicense.com/licenses/mit/)

---
