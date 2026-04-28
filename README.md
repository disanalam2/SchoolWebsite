# 🏫 Firayalal Public School Website

A fully responsive, static school website built for Firayalal Public School. This project showcases a multi-page architecture using HTML, CSS, JavaScript, and Bootstrap, with seamless deployment via Firebase Hosting.

## 🌟 Overview

This project simulates a complete school web portal. It is organized into multiple sections, including Admissions, Academics, Infrastructure, and Media. The main layout utilizes `iframe` elements to render content dynamically within a consistent dashboard interface, offering a smooth user experience.

## ✨ Key Features

- **Comprehensive Navigation:** Multi-page layout covering School Information, Admissions, Academics, Extracurriculars, Infrastructure, Media, and Notice Board.
- **Dashboard Layout:** Main landing page uses `iframe` elements for seamless content rendering without full page reloads.
- **Quick Access Sidebar:** Easy access to `Login`, `Register`, `Get in Touch`, and `CCTV` sections.
- **Responsive Design:** Mobile-friendly burger menu and collapsible side panels powered by custom JavaScript.
- **Firebase Integration:** Pre-configured with Firebase Web SDK, Firebase Analytics, and Firebase Hosting.
- **Content Protection:** Basic content protection implemented by disabling right-click interactions.

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+), Bootstrap, jQuery (CDN)
- **Backend/Hosting:** Firebase Web SDK, Firebase Analytics, Firebase Hosting

## 📂 Project Structure

```text
├── index.html           # Main website entry point with menu and iframe layout
├── HTML/                # Inner page templates loaded inside iframes
├── CSS/                 # Custom styles for main pages and iframe content
├── JAVA SCRIPT/         # Custom JS files for interactions and menu toggling
├── TOP LINK PAGE/       # Top navigation content pages (About, Admissions, etc.)
├── public/              # Deploy-ready public folder for Firebase Hosting
└── firebase.json        # Firebase Hosting configuration
```

## 🚀 Getting Started

To run this project locally, you don't need any complex build tools since it's a static site.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/disanalam2/SchoolWebsite.git
   ```
2. **Open the project:**
   Simply open `index.html` in your preferred web browser. 
   *Alternatively, use a local development server like VS Code Live Server for the best experience.*

## 🌐 Deployment

This website is optimized for Firebase Hosting.

1. Install the Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Login and deploy:
   ```bash
   firebase login
   firebase deploy
   ```

## 📝 Notes

- The project loads Firebase SDK modules directly via the official CDN.
- Although a `package-lock.json` is present, the site is primarily static and does not require a Node.js build pipeline.
- The repository contains development files in the root and production-ready files in the `public/` directory.
