<div align="center">

# 🎬 MovieBee

**A blazing-fast entertainment discovery platform.**

Real-time ratings, curated collections, personalised watchlists, and a cinema-grade browsing experience — built for how people actually discover and watch content today.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-moviebee--uk.vercel.app-blue?style=for-the-badge&logo=vercel)](https://moviebee-uk.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## ✨ Features

- **Movie Discovery** — Browse trending and top-rated movies with a cinema-grade UI
- **Genre Browsing** — Explore movies filtered by genre
- **Search** — Find any movie instantly by title
- **Detailed Pages** — View cast, ratings, awards, and box office info
- **Personalised Watchlist** — Save and manage movies across sessions
- **Dark / Light Mode** — Theme toggle with system preference support
- **Responsive Design** — Optimised for all screen sizes including mobile

---

## 🛠️ Tech Stack

| Layer      | Technology              |
| ---------- | ----------------------- |
| Framework  | Next.js 16 (App Router) |
| Language   | TypeScript              |
| Styling    | Tailwind CSS            |
| Data       | OMDb API                |
| Linting    | ESLint 9                |
| Deployment | Vercel                  |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A free [OMDb API key](https://www.omdbapi.com/apikey.aspx)

### Installation

```bash
# Clone the repository
git clone https://github.com/UtkarshK95/moviebee.git
cd moviebee

# Install dependencies
npm install
```

### Environment Setup

```bash
cp .env.example .env
```

Open `.env` and add your API key:

```env
OMDB_API_KEY=your_omdb_api_key_here
```

### Run

```bash
npm run dev
```

App runs at `http://localhost:3000`.

### Production Build

```bash
npm run build
```

---

## 📁 Project Structure

```
moviebee/
├── public/               # Static assets (icons, images)
├── src/
│   ├── app/              # Next.js App Router pages and API routes
│   ├── components/       # Reusable React components (ui, layout, movie)
│   ├── context/          # React context (WatchlistContext)
│   ├── lib/              # API logic, constants, storage utilities
│   └── types/            # Shared TypeScript interfaces
├── .env.example          # Environment variable template
├── tailwind.config.js    # Tailwind CSS configuration
├── next.config.mjs       # Next.js configuration
└── package.json
```

---

## ☕ Support the Project

- **GitHub:** [https://github.com/UtkarshK95/moviebee](https://github.com/UtkarshK95/moviebee)
- **Buy Me a Coffee:** [https://buymeacoffee.com/utkarshk95](https://buymeacoffee.com/utkarshk95)

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/UtkarshK95">Utkarsh Katiyar</a>
</div>
