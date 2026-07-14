# Sweet Saeeda — Leeds' Hidden Tunisian Gem

A high-performance, beautiful, and fully responsive single-page marketing website built for **Sweet Saeeda**, an authentic Tunisian street food stall inside **Leeds Kirkgate Market**.

---

## 🌟 Brand Identity & Positioning
- **Core Values:** Fresh, Authentic, Friendly, and the ultimate "Hidden Gem" of Leeds.
- **Branding Colors:**
  - 🟥 **Deep Tunisian Red:** `#B22222`
  - 🟧 **Warm Terracotta:** `#D2691E`
  - 🟩 **Olive Green:** `#556B2F`
  - ⬜ **Cream:** `#FFF8F0`
  - ⬛ **Charcoal:** `#222222`
- **Typography:** Headings set in **Playfair Display** (via Google Fonts) and body text set in **Inter**.

---

## 🛠️ Tech Stack & Dependencies
- **Frontend Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/) (Vite provides ultra-fast HMR and is extremely memory-light)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (leverages CSS-first configuration and high performance)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (adds smooth, hardware-accelerated animations on scroll and page load)
- **Icons:** [Lucide Icons](https://lucide.dev/) (modern, clean, and highly customizable icon library)

---

## ⚡ Key Conversion Features Built
- **Floating Badge:** A sleek, non-intrusive trust badge at the top-left marking Sweet Saeeda as "Leeds' #1 Hidden Gem" (Google Rating 4.9/5).
- **Above-Fold Menu Preview:** The signature dishes are placed early in the hierarchy to capture attention and appetite immediately.
- **Sticky Mobile Action Bar:** On mobile displays, a floating bottom bar provides one-click directions or calls, converting online interest directly to market foot traffic.
- **Reviews Grid & Carousel:** Displays rotating and highly-visible actual customer testimonials and ratings.
- **Interactive Location block:** Styled maps and exact opening hours for the Leeds Kirkgate Market stall.

---

## 📸 Generated Visual Assets
To showcase authentic food and avoid empty generic placeholders, the team generated 5 premium AI photography assets saved in `/public/assets/images/`:
1. `hero-tunisian-food.png` — Vibrant Tunisian plate (couscous spread, harissa, and salads).
2. `tunisian-plate.png` — Beautiful, appetizing signature Tunisian plate.
3. `lamb-plate.png` — Succulent, perfectly grilled traditional lamb plate.
4. `tunisian-brik.png` — Golden crispy Tunisian Brik pastry.
5. `tunisian-bread.png` — Legendary traditional homemade Tunisian bread.

---

## 📁 Directory Structure
```text
sweet-saeeda-web/
├── public/
│   └── assets/
│       └── images/          # Premium AI food photography assets
├── src/
│   ├── components/          # Modularized Page Sections
│   │   ├── Navbar.jsx       # Header & Main Menu
│   │   ├── Hero.jsx         # Hero Banner with CTA Buttons & Trust Bar
│   │   ├── Menu.jsx         # Menu & Signature Dishes Cards
│   │   ├── Features.jsx     # Values Grid ("Fresh Everyday", etc.)
│   │   ├── Story.jsx        # "From Tunisia to Leeds" Heritage Split Section
│   │   ├── Reviews.jsx      # Testimonials & Google Ratings
│   │   ├── Gallery.jsx      # Interactive Masonry Image Grid
│   │   ├── Location.jsx     # Leeds Kirkgate Market Map & Detail Section
│   │   ├── FloatingBadge.jsx# Sticky trust badge ("Leeds' Hidden Gem")
│   │   ├── MobileCTA.jsx    # Floating bottom CTA bar for mobile devices
│   │   └── Footer.jsx       # Contact information, opening hours, and links
│   ├── App.jsx              # App Layout Assembly
│   ├── index.css            # Global Styling (Tailwind imports & Google Fonts)
│   └── main.jsx             # React DOM Entrypoint
├── index.html               # Main index (Loads Playfair Display & Inter fonts)
├── vite.config.js           # Vite dev and build settings
└── package.json             # Dev dependencies and scripts
```

---

## 🚀 Running the Project Locally

### 1. Installation
Clone the repository, navigate to the folder, and install dependencies:
```bash
npm install
```

### 2. Run Dev Server
Start the Vite local development server on port 3000:
```bash
npm run dev
```

### 3. Production Build
To build the project for production, run:
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory, ready to be served statically!
