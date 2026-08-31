# Brandex Digital Learning

<div align="center">
  <img src="public/brandex-logo-latest.png" alt="Brandex Digital Learning" width="280" />
  <p><strong>Curriculum-Organized Educational Video Library & Assessments for Schools</strong></p>
  <p>Official Karnataka State Board Curriculum Platform (Classes 6 to 10)</p>
  
  <p>
    <a href="https://brandex.co.in"><strong>Official Portal</strong></a> •
    <a href="#key-features"><strong>Features</strong></a> •
    <a href="#getting-started"><strong>Getting Started</strong></a> •
    <a href="#curriculum-structure"><strong>Curriculum</strong></a>
  </p>
</div>

---

## 🌟 Overview

**Brandex Digital Learning** is a school-focused digital education platform created by **Brandex**. It delivers syllabus-mapped educational video lessons, interactive classroom presentation tools, and formative assessments for teachers and students across Karnataka State Syllabus (KSEEB).

### 🎯 Primary Goals:
- **Zero Student Tracking / Frictionless Access**: No passwords to manage during live lectures; instant access to curated classroom content.
- **Strict Syllabus Alignment**: Organized hierarchically by `Class ➔ Subject ➔ Chapter ➔ Topic ➔ Lesson`.
- **Smartboard-Ready Presentation**: Dedicated **Classroom Mode** optimized for projectors, smartboards, and interactive panels.

---

## ✨ Key Features

1. **Step-by-Step Learning Hub**:
   - **Step 1:** Select Class (Classes 6, 7, 8, 9, 10).
   - **Step 2:** Select Subject (Science, Mathematics, Social Science, English).
   - **Step 3:** Browse chapter-wise video modules with learning objectives.
2. **Distraction-Free Classroom Mode**:
   - Fullscreen presentation player designed for teachers with quick chapter playlist drawer and topic switching.
3. **Predefined Chapter Quizzes**:
   - Formative assessment runner with instant feedback, scoring, and explanation reviews.
4. **Global Lesson Search (`⌘K`)**:
   - Instant search across all classes, subjects, and topics with keyboard shortcuts.
5. **Modern Light Design System**:
   - Built with the clean geometric **Outfit** typography and high-contrast color accents.
6. **Official Brandex Ecosystem Footer**:
   - Full social media directory, portal links, contact info, and legal documentation.

---

## 📚 Curriculum Structure

Curated according to **Karnataka State Board (KSEEB)** textbooks:

| Grade | Core Subjects Mapped | Features |
| :--- | :--- | :--- |
| **Class 6** | Science, Mathematics, Social Science, English | Chapters, Topics, Quizzes |
| **Class 7** | Science, Mathematics, Social Science, English | Chapters, Topics, Quizzes |
| **Class 8** | Science, Mathematics, Social Science, English | Chapters, Topics, Quizzes |
| **Class 9** | Science, Mathematics, Social Science, English | Chapters, Topics, Quizzes |
| **Class 10** | Science, Mathematics, Social Science, English | Board Prep Modules & Quizzes |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: Tailwind CSS & CSS Variables
- **Typography**: [Outfit](https://fonts.google.com/specimen/Outfit) (`next/font/google`)
- **Icons**: Lucide React & Brand Vectors
- **Animations**: Framer Motion
- **Media Player**: Custom YouTube Embedded Player with Zero-Distraction Overlay

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/PavanKumar-HQ/Brandex-Education.git

# Navigate to project directory
cd Brandex-Education

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 📂 Project Architecture

```
├── public/                     # Brandex logos, favicons, static assets
├── src/
│   ├── app/
│   │   ├── page.tsx            # Front Door Product Landing Page
│   │   ├── layout.tsx          # Root Layout with Outfit font & metadata
│   │   ├── explore/            # Step-by-Step Curriculum Hub routes
│   │   │   ├── page.tsx        # Step 1: Class Selection
│   │   │   ├── [classId]/      # Step 2: Subject Selection
│   │   │   │   └── [subjectSlug]/ # Step 3: Chapters & Lessons
│   │   ├── lesson/[slug]/      # Dedicated Lesson Player & Playlist
│   │   ├── classroom/          # Fullscreen Classroom Presentation Hub
│   │   ├── admin/              # Admin CMS Studio
│   │   └── login/              # Teacher Access Portal
│   ├── components/
│   │   ├── brandex/            # Brandex official logos & symbols
│   │   ├── classroom/          # Classroom Mode Theater Modal
│   │   ├── layout/             # Navbar, AppShell, BrandexFooter
│   │   ├── learning/           # YouTube Player wrapper & controls
│   │   ├── quiz/               # Predefined Quiz Runner
│   │   └── search/             # Global ⌘K Search Modal
│   └── lib/
│       ├── curriculum-data.ts  # Source of truth for syllabus matrix
│       └── auth-context.tsx    # Auth & session provider
```

---

## 🏛️ About Brandex

**Brandex Digital Learning** is a product of [Brandex](https://brandex.co.in).

- 🌐 **Portal**: [www.brandex.co.in](https://brandex.co.in)
- ✉️ **Contact**: brandexhq@gmail.com
- 📍 **Headquarters**: #121, 13th Main, Binny Layout, Vijaynagar, Bangalore - 560040

---

## 📄 License & Copyright

© 2026 Brandex. All Rights Reserved.  
Entity ID: `29OGNPS8060K1Z5`
