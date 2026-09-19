import Link from 'next/link';

export default function Navbar() {
  return (
<header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pointer-events-none">
<div className="max-w-[1400px] mx-auto pointer-events-auto">
<div className="h-20 px-4 sm:px-6 lg:px-8 bg-[#0b1a18]/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.35)] flex items-center justify-between gap-4 transition-all duration-300">
{/* Brand Presentation */}
<Link className="flex items-center gap-3 shrink-0 group" href="/">
<div className="relative p-1 rounded-xl bg-white/5 border border-white/10 group-hover:border-secondary-container/40 transition-colors">
<img alt="High Grade Construction Company" className="h-9 sm:h-10 w-auto object-contain brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8l44GiShbzVfUDPwsBM-nSq1hRJhSFT8Kouo3og-88Yh6iG5EoU5rqN5_cjkrS-MNb1EYABwMGYNqPyBQ-rhyyJ5hVKP1ZwNbkxQvmu5nskjpGxNEPFHUyAtC1drS6vTkczqVE2g-sBGI24jZK0_tA8zaPuFQBpM2oy9P3dPDaruC-Cb2_dEK3UoiJU2Yf171lMdpQWRccrqEZJiZfEMoZzyfiEGeKzcvEo25XmztAmbIIghC46IbI6PxOo6D3W9LGA"/>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-[19px] sm:text-[21px] font-bold tracking-tight text-white leading-none flex items-center gap-1.5">
              High Grade
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
</span>
<span className="font-label-caps text-[10px] uppercase tracking-[0.18em] text-outline-variant mt-1">
              Construction Co.
            </span>
</div>
{/* Territory Badge */}
<div className="hidden 2xl:inline-flex items-center gap-1.5 ml-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
<span className="material-symbols-outlined text-secondary-container text-[14px]">terrain</span>
<span className="font-label-caps text-[10px] uppercase font-bold tracking-wider text-secondary-fixed">Siliguri &amp; Darjeeling</span>
</div>
</Link>
{/* Desktop Navigation Matrix */}
<nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-white/90">
<Link aria-current="page" className="relative font-label-md text-label-md px-2 py-2 rounded-xl bg-primary text-white font-semibold shadow-sm transition-all" href="/">
            Home
          </Link>
<Link className="font-label-md text-label-md px-2 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all" href="/about">
            About
          </Link>
<div className="relative group">
<Link className="inline-flex items-center gap-1 font-label-md text-label-md px-2 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all" href="/services">
<span>Services</span>
<span className="material-symbols-outlined text-[16px] transition-transform group-hover:rotate-180">expand_more</span>
</Link>
</div>
<div className="relative group">
<Link className="inline-flex items-center gap-1 font-label-md text-label-md px-2 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all" href="/projects">
<span>Projects</span>
<span className="material-symbols-outlined text-[16px] transition-transform group-hover:rotate-180">expand_more</span>
</Link>
</div>

<Link className="font-label-md text-label-md px-2 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all" href="/process">
            Process
          </Link>

<Link className="font-label-md text-label-md px-2 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all" href="/contact">
            Contact
          </Link>
</nav>
{/* Right Quick Consult an Expert & Action CTA */}
<div className="flex items-center gap-3 sm:gap-4 shrink-0">
{/* Dual Phone Dial Pill */}
<div className="hidden 2xl:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white/90">
<span className="material-symbols-outlined text-secondary-container text-[18px]">phone_in_talk</span>
<div className="flex flex-col text-[12px] leading-tight">
<Link className="font-bold hover:text-secondary-fixed transition-colors" href="tel:+917076423578">+91 70764 23578</Link>
<Link className="text-outline-variant hover:text-white transition-colors" href="tel:+918972164804">+91 89721 64804</Link>
</div>
</div>
{/* Shimmer High-End Studio CTA */}
<Link className="relative overflow-hidden shimmer-badge inline-flex items-center gap-2 bg-[#F59A23] hover:bg-[#ffaa3b] text-on-secondary-fixed font-label-md text-label-md px-4 sm:px-5 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-[0_6px_22px_rgba(245,154,35,0.4)] group" href="/contact">
<span className="whitespace-nowrap">Consult an Expert</span>
<span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">east</span>
</Link>
{/* Mobile Menu Drawer Toggle Trigger (Visual) */}
<Link className="lg:hidden p-2 rounded-xl bg-white/5 text-white" href="/contact">
<span className="material-symbols-outlined text-[24px]">menu</span>
</Link>
</div>
</div>
</div>
</header>
  );
}
