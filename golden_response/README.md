# 🏡 LUXE Real Estate — Premium Property Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF0055?style=for-the-badge&logo=framer)
![Prisma](https://img.shields.io/badge/Prisma-7.x-2D3748?style=for-the-badge&logo=prisma)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A high-performance, production-grade real estate showcase platform with advanced search, premium UI animations, and a secure agent inquiry system.**

[Live Demo](#) · [Documentation](#project-structure) · [Evaluation Report](justification.md)

</div>

---

## ✨ Features

| Category | Details |
|----------|---------|
| **Property Browsing** | 12 luxury properties across Malibu, Manhattan, Beverly Hills, Dubai, London, Santorini, Tokyo, and more |
| **Advanced Search** | Real-time search by keyword, city, property type, price range, bedrooms — all debounced |
| **Property Details** | Image gallery with lightbox, full specs, amenities grid, agent card, JSON-LD SEO |
| **Contact System** | Modal inquiry form with Zod validation, success animation, API submission |
| **Premium UI** | Glassmorphism navbar, Framer Motion stagger animations, Inter + Outfit fonts, dark luxury theme |
| **Responsive** | Fully responsive from mobile to desktop with adaptive layouts |
| **SEO Optimized** | Dynamic metadata, Open Graph tags, structured data, semantic HTML, ARIA labels |
| **Production Build** | Zero TypeScript errors, SSG for detail pages, optimized bundle |

---

## 🏗 Tech Stack

```
Frontend       → Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
Animations     → Framer Motion 12
Validation     → Zod
Database ORM   → Prisma 7 (PostgreSQL)
Email           → Nodemailer (SMTP)
Fonts          → Google Fonts (Inter, Outfit)
```

---

## 📁 Project Structure

```
real-estate-platform/
├── prisma/
│   ├── schema.prisma           # DB schema (Agent, Property, Inquiry)
│   └── seed.ts                 # 12 luxury properties + 3 agents
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, metadata, nav/footer)
│   │   ├── page.tsx            # Homepage (hero + featured + stats + CTA)
│   │   ├── properties/
│   │   │   ├── page.tsx        # Browse page (search + filter + grid)
│   │   │   └── [id]/
│   │   │       ├── page.tsx    # Detail page (SSG, SEO, JSON-LD)
│   │   │       └── PropertyDetailClient.tsx
│   │   ├── globals.css         # Design system (tokens, glassmorphism, animations)
│   │   └── api/
│   │       ├── properties/route.ts  # GET — search, filter, paginate
│   │       └── inquiry/route.ts     # POST — validate, log, email
│   ├── components/
│   │   ├── Navbar.tsx          # Glassmorphism navigation
│   │   ├── Footer.tsx          # Multi-column footer
│   │   ├── HeroSection.tsx     # Animated hero with stats bar
│   │   ├── FeaturedListings.tsx # Stagger animation grid
│   │   ├── PropertyCard.tsx    # Hover-animated property cards
│   │   ├── SearchFilters.tsx   # Responsive filter bar
│   │   ├── ImageGallery.tsx    # Lightbox with keyboard navigation
│   │   ├── ContactAgentForm.tsx # Modal form with Zod validation
│   │   └── NewsletterForm.tsx  # Newsletter signup
│   ├── hooks/
│   │   └── useDebounce.ts      # Debounce hook for search inputs
│   ├── lib/
│   │   ├── prisma.ts           # Prisma client singleton (PG adapter)
│   │   └── mock-data.ts        # 12 properties + query helpers
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── prompt.md                   # Original evaluation prompt
├── justification.md            # RLHF evaluation & scoring
├── .env.example                # Environment variable template
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/PriyeshMishra226/realEstateWebsite.git
cd realEstateWebsite

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** The app works out-of-the-box using built-in mock data (12 luxury properties). No database setup is required for the demo.

### Optional: PostgreSQL Setup

To enable full database features:

```bash
# 1. Copy environment template
cp .env.example .env

# 2. Update DATABASE_URL in .env with your PostgreSQL credentials

# 3. Push schema to database
npx prisma db push

# 4. Seed with sample data
npm run db:seed

# 5. Start development server
npm run dev
```

---

## 🔌 API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/properties` | Search, filter, sort, and paginate properties |
| `POST` | `/api/inquiry` | Submit contact inquiry with Zod validation |

### Query Parameters — `GET /api/properties`

| Param | Type | Description |
|-------|------|-------------|
| `search` | string | Keyword search (title) |
| `city` | string | Filter by city |
| `type` | enum | `HOUSE`, `APARTMENT`, `CONDO`, `VILLA`, `PENTHOUSE` |
| `status` | enum | `FOR_SALE`, `FOR_RENT` |
| `minPrice` | number | Minimum price |
| `maxPrice` | number | Maximum price |
| `bedrooms` | number | Minimum bedrooms |
| `sortBy` | string | Sort field (default: `createdAt`) |
| `order` | `asc`/`desc` | Sort order (default: `desc`) |
| `page` | number | Page number (default: `1`) |
| `limit` | number | Results per page (default: `9`, max: `50`) |

---

## 🎨 Design System

The platform uses a custom dark luxury design system built with Tailwind CSS v4:

- **Colors:** Slate/amber palette with premium gradients
- **Typography:** Inter (body) + Outfit (headings) via Google Fonts
- **Effects:** Glassmorphism navbar, backdrop-blur, subtle shadows
- **Animations:** Framer Motion stagger reveals, hover lifts, modal transitions
- **Layout:** CSS Grid responsive system (1→2→3 columns)

---

## 📊 Route Map

```
○ /                    → Homepage (Hero + Featured + Stats + CTA)
○ /properties          → Browse with live search, filters, pagination
● /properties/[id]     → Detail page (SSG — 12 pre-rendered)
ƒ /api/properties      → GET (search/filter/paginate)
ƒ /api/inquiry         → POST (validate + log)

○ = Static    ● = SSG    ƒ = Dynamic
```

---

## 🔧 Environment Variables

```env
# Database (PostgreSQL)
DATABASE_URL="postgresql://user:pass@localhost:5432/realestate_db"

# SMTP Email Notifications
SMTP_HOST="smtp.mailtrap.io"
SMTP_PORT=2525
SMTP_SECURE=false
SMTP_USER="your_smtp_user"
SMTP_PASS="your_smtp_pass"
SMTP_FROM_EMAIL="noreply@luxerealty.com"
```

---

## 📋 Evaluation Report

This repository includes an RLHF evaluation comparing two LLM-generated responses to the same real estate platform prompt:

| File | Description |
|------|-------------|
| [prompt.md](prompt.md) | The original domain-specific coding prompt |
| [justification.md](justification.md) | Dimension-by-dimension scoring, comparative analysis, and final verdict |

**Verdict:** Response B preferred (34.9/35 vs 33.5/35), driven by superior Completeness and Helpfulness scores.

---

## 📝 License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**

</div>
