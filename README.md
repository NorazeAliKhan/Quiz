# KeyForge — Premium Mechanical Keyboards

A high-performance, dark-themed multi-page website for **KeyForge**, a bespoke mechanical keyboard brand engineered for software developers, tactile enthusiasts, and competitive esports players.

Built following the **Obsidian Cybernetic** design specification exported from Google Stitch with custom visual assets.

---

## 🛠️ Complete Project Structure

```
keyforge/
├── index.html      (Home page — Flagship showcase, acoustic specs, switch overview, customer reviews, CTA)
├── info.html       (Product info page — Switch guide, form factors, technical specs matrix, our story, FAQ accordion)
├── order.html      (Order configurator page — Live interactive builder, dynamic price sync, customer checkout validation)
├── css/
│   └── style.css   (One shared stylesheet for all pages, with CSS variables, Flexbox/Grid, and violet glow hover effects)
├── js/
│   └── script.js   (One shared vanilla JavaScript file with modular page initializers and zero external dependencies)
├── images/         (Assets folder with clearly renamed images)
│   └── asset-manifest.json
└── README.md       (Comprehensive project documentation and user manual)
```

---

## 🌐 Pages & Features

### 1. Home Page (`index.html`)
- **Fixed Blur Header:** Translucent obsidian glass navbar (`rgba(19, 19, 25, 0.88)` with `backdrop-filter: blur(16px)`), brand emblem, prototype badge, pill navigation bar with active page indicator, and mobile menu drawer.
- **Hero Section:** High-contrast typography ("Type Different. Feel Every Click."), dual ambient glow pools, hardware telemetry row (`0.2ms` latency, `100M` keystroke life, `1000Hz` polling), and CNC keyboard visual frame with floating spec badges.
- **Why KeyForge:** 4-card responsive grid highlighting Hot-Swappable Kailh Sockets, Per-Key RGB backlighting, CNC 6063 Aluminum Frame, and 2-Year Full Hardware Warranty.
- **Featured Keyboards:** 3 product cards displaying KeyForge 60 Compact ($149), KeyForge 75 Pro ($189 with highlighted popular banner), and KeyForge TKL Elite ($219).
- **Choose Your Switch:** Side-by-side comparison of Red Linear, Blue Clicky, and Brown Tactile switches with inline SVG force-travel curves and operating specs.
- **Customer Reviews:** Verified buyer testimonials with 5-star ratings (4.96 / 5.0 score).
- **Call-to-Action:** Atmospheric banner with direct "Customize & Order Now" link.
- **Identical Footer:** Engineering support contact and community channels.

### 2. Product Info & Technical Specifications Page (`info.html`)
- **Telemetry Bar:** Instant overview of actuation tolerance (`±0.02 mm`), case density (`6063 Aluminum`), sound profile (`Deep Thock`), and firmware latency (`0.125 ms`).
- **In-Depth Switch Guide:** Technical breakdown of KF-RED v3, KF-BLUE v2, and KF-BROWN v4 with force profile charts, sound signatures, and tactile recommendations.
- **Keyboard Form Factors:** Visual cards comparing 60% Ultra-Compact, 75% Balanced Pro, Tenkeyless (87-Key), and Full-Size Master (104-Key).
- **Technical Specifications Matrix Table:** Comprehensive side-by-side hardware comparison covering chassis alloy, gasket mounting layers, polling rates, battery capacities, and pricing.
- **Our Story & Craftsmanship:** Narrative spotlight on KeyForge's origins, featuring workshop imagery, Poron 5-stage gasket isolation, and authentic Krytox 205g0 hand-lubrication.
- **Interactive FAQ Accordion:** 5 accessible expand/collapse inquiries covering hot-swap compatibility, multi-OS support (macOS/Windows/Linux), shipping times, warranty terms, and 30-day trials.

### 3. Order Configurator Page (`order.html`)
- **Interactive Customizer:**
  - Dynamic Chassis Model dropdown ($149, $189, $219, $239)
  - Layout Profile selector (60%, 75%, TKL, Full-Size)
  - Actuation Switches selector (Red Linear 45g, Blue Clicky 50g, Brown Tactile 55g) with live visual feedback
  - Keycap Theme Profile swatches (Cyberpunk Noir, Arctic Frost, Stealth Matte, Retro Classic)
  - RGB Illumination Mode options
  - Quantity counter with decrement/increment controls (min 1, max 10)
- **Sticky Live Order Summary:**
  - Real-time specification breakdown
  - Live price calculation: Subtotal + 8% Estimated Tax = Total Investment
  - Mini visual preview thumbnail and model badge
- **Form Validation & Submission:**
  - Enforces required legal name, valid RFC email format, valid telephone contact, shipping address, city, and postal code.
  - Highlights invalid fields and presents clear user-facing error messages.
  - On successful submission, prevents page reload, generates a unique foundry work order ID (e.g. `#KF-849201`), and displays a rich confirmation receipt without external libraries.

---

## 🎨 Design System Tokens

- **Palette:**
  - Deep Canvas: `#0D0D12`
  - Charcoal Base: `#14141A`
  - Interactive Surfaces: `#1F1F25` / `#2A2930` / `#34343B`
  - Structural Borders: `#2F2F3E` / `#3F3F56`
  - High-Emphasis Text: `#F4F4F6` (Soft White)
  - Secondary Text: `#C9C4D8` / `#9E9EB8`
  - Primary Illumination: `#7C5CFF` (Electric Violet, ambient glow `rgba(124, 92, 255, 0.35)`)
  - Secondary Telemetry: `#2DD4D4` (Photonic Cyan, ambient glow `rgba(45, 212, 212, 0.30)`)
- **Typography:**
  - Headings: `Space Grotesk` / `Poppins`
  - Body: `Inter`
  - Specs & Badges: `JetBrains Mono`

---

## 🚀 How to Run the Project

This project uses **100% pure standard web technologies**:
- **Plain HTML5**
- **Plain CSS3 (No Tailwind, No Bootstrap, No preprocessors)**
- **Vanilla JavaScript (No React, No Vue, No jQuery, No build tools, No npm)**

### Opening in Browser
Double-click `index.html` or open it directly in any modern browser:
```text
file:///C:/Users/DELL/.gemini/antigravity/scratch/keyforge/index.html
```

---

## 📷 Asset Mapping Guide

Copy and rename your Google Flow generated assets into `images/` as follows:

| Original Flow Asset | Target Relative Path | Purpose |
|---------------------|----------------------|---------|
| `Mechanical_keyboard_glowing_with.*.jpg` | `images/hero.jpg` | Hero showcase banner |
| `Mechanical_keyboard_on_dark_back.*.jpg` | `images/keyboard-60.jpg` | KeyForge 60 Compact card |
| `Mechanical_keyboard_with_RGB_bac.*.jpg` | `images/keyboard-75.jpg` | KeyForge 75 Pro card |
| `Mechanical_keyboard_with_RGB_und.*.jpg` | `images/keyboard-tkl.jpg` | KeyForge TKL Elite card |
| `Mechanical_keyboard_switch_on_su.*150355.jpg` | `images/switch-red.jpg` | Linear Red switch image |
| `Mechanical_keyboard_switch_on_su.*150456.jpg` | `images/switch-blue.jpg` | Clicky Blue switch image |
| `Mechanical_keyboard_switch_on_su.*150735.jpg` | `images/switch-brown.jpg` | Tactile Brown switch image |
| `Craftsman_assembling_mechanical_.*.jpg` | `images/our-story.jpg` | Workshop craftsmanship photo |
| `Dark_background_with_light_trails_*.jpg` | `images/cta-bg.jpg` | Call to action background |
| `KeyForge_logo_icon_*.jpg` | `images/logo.png` | Brand logo emblem in navbar & footer |

---

## 📝 Assignment Git Commit History

```bash
# Stage 1 Commit
git add README.md index.html css/style.css js/script.js images/
git commit -m "feat: add project setup and home page"

# Stage 2 Commit
git add info.html css/style.css js/script.js
git commit -m "feat: add product info page"

# Stage 3 Commit
git add order.html css/style.css js/script.js README.md
git commit -m "feat: add order page and form validation"
```
