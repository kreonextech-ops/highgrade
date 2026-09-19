import os
import subprocess

# 1. Restore layout.tsx
layout_content = """import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "High Grade Construction Company | Siliguri & Darjeeling Luxury Architectural Studio",
  description: "Bespoke residential, commercial & turnkey structural engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container">
        {children}
      </body>
    </html>
  );
}
"""
with open('next-app/src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(layout_content)

# 2. Restore globals.css base
base_globals = """@import "tailwindcss";

@layer base {
  html, body { margin: 0; padding: 0; }
  body { overscroll-behavior: none; }
  main > :first-child { margin-top: 0 !important; }
  main > :last-child { margin-bottom: 0 !important; }
}
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0f1c1a; }
::-webkit-scrollbar-thumb { background: #1b3834; border-radius: 9999px; }
::-webkit-scrollbar-thumb:hover { background: #fea12b; }
@keyframes shimmer {
  100% { transform: translateX(100%); }
}
.shimmer-badge::after {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(90deg, rgba(255,255,255,0) 0, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%);
  animation: shimmer 2.8s infinite;
  content: '';
}
"""
with open('next-app/src/app/globals.css', 'w', encoding='utf-8') as f:
    f.write(base_globals)

# Run CSS fixes
subprocess.run(["python", "convert_theme.py"])
subprocess.run(["python", "fix_fonts.py"])
subprocess.run(["python", "fix_css.py"])

# 3. Restore page.tsx
# We just need to put body_extracted.jsx into page.tsx wrapping it with "use client" and useEffect
import re
with open('body_extracted.jsx', 'r', encoding='utf-8') as f:
    body_jsx = f.read()

page_template = """// @ts-nocheck
'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Interactive Project Terrain Filter Logic
    const filterButtons = document.querySelectorAll('#project-filters .filter-btn');
    const projectCards = document.querySelectorAll('#project-grid .project-card');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Reset active state
        filterButtons.forEach(b => {
          b.classList.remove('bg-primary', 'text-white');
          b.classList.add('text-on-surface-variant');
        });
        // Set active state
        btn.classList.remove('text-on-surface-variant');
        btn.classList.add('bg-primary', 'text-white');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const categories = card.getAttribute('data-cat') || '';
          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }, []);

  return (
    <>
""" + body_jsx + """
    </>
  );
}
"""

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_template)

# Run page fixes
subprocess.run(["python", "fix_select.py"])
subprocess.run(["python", "fix_hero_nav_2.py"])
