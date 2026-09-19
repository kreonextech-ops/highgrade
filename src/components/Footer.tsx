import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a1514] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative p-1 rounded-xl bg-white/5 border border-white/10 transition-colors">
                <img alt="High Grade Construction Company" className="h-10 w-auto object-contain brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8l44GiShbzVfUDPwsBM-nSq1hRJhSFT8Kouo3og-88Yh6iG5EoU5rqN5_cjkrS-MNb1EYABwMGYNqPyBQ-rhyyJ5hVKP1ZwNbkxQvmu5nskjpGxNEPFHUyAtC1drS6vTkczqVE2g-sBGI24jZK0_tA8zaPuFQBpM2oy9P3dPDaruC-Cb2_dEK3UoiJU2Yf171lMdpQWRccrqEZJiZfEMoZzyfiEGeKzcvEo25XmztAmbIIghC46IbI6PxOo6D3W9LGA" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-[21px] font-bold tracking-tight text-white leading-none">High Grade</span>
                <span className="font-label-caps text-[10px] uppercase tracking-[0.18em] text-white/50 mt-1">Construction Co.</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Engineering-led construction for the plains and hills of North Bengal. We build with precision, transparency, and unyielding quality.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-headline-sm text-lg font-bold text-white mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-white/60 hover:text-[#fea12b] transition-colors text-sm">About Us</Link>
              <Link href="/services" className="text-white/60 hover:text-[#fea12b] transition-colors text-sm">Our Services</Link>
              <Link href="/projects" className="text-white/60 hover:text-[#fea12b] transition-colors text-sm">Projects</Link>
              <Link href="/process" className="text-white/60 hover:text-[#fea12b] transition-colors text-sm">Our Process</Link>
            </nav>
          </div>

          <div className="flex flex-col">
            <h4 className="font-headline-sm text-lg font-bold text-white mb-6">Core Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li>Turnkey Construction</li>
              <li>Architectural Planning</li>
              <li>Structural Engineering</li>
              <li>Hill Architecture</li>
              <li>Renovation & Remodeling</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-headline-sm text-lg font-bold text-white mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#fea12b] text-[20px]">location_on</span>
                <span>Pradhan Nagar, Siliguri<br/>West Bengal, 734003</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#fea12b] text-[20px]">call</span>
                <div className="flex flex-col">
                  <span>+91 70764 23578</span>
                  <span>+91 89721 64804</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#fea12b] text-[20px]">mail</span>
                <span>highgradeconstruction3@gmail.com</span>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} High Grade Construction Company. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
