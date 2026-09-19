import re

with open('next-app/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

new_contact_html = """{/* Right Office & Map Presence */}
<div className="lg:col-span-5 flex flex-col justify-between gap-6">
<div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
<h4 className="font-headline-md text-headline-md text-primary font-bold mb-6">Contact Information</h4>
<div className="flex flex-col gap-6 font-body-sm text-[15px] text-on-surface-variant">

<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">location_on</span>
</div>
<div>
<div className="font-bold text-on-surface text-[16px] mb-1">Office</div>
<div>Pradhan Nagar, Siliguri</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">call</span>
</div>
<div>
<div className="font-bold text-on-surface text-[16px] mb-1">Phone</div>
<div className="text-secondary font-semibold">+91 70764 23578</div>
<div className="text-secondary font-semibold mt-1">+91 89721 64804</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-surface-variant text-on-surface-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">mail</span>
</div>
<div>
<div className="font-bold text-on-surface text-[16px] mb-1">Email</div>
<div className="text-primary font-medium">highgradeconstruction3@gmail.com</div>
</div>
</div>

</div>
</div>
{/* Stylized Dual-Region Map Viewport */}
<div className="relative w-full h-64 rounded-3xl bg-cover bg-center overflow-hidden shadow-md border border-outline-variant/30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNxiTY_nPwBCxDNvWbPmZaeEAEAJP3S6ljdEgK-u7Y7hZDDKZ-Dr82X0iZElQ1ahIZEVrVFz3s6wlxooqWz_qmTgTFbRiifW_NaQ_heRwDLyT_SMNtfxFy6d2YBnxw7RZAWREkLmspBSO6KoZ9USwqiE00_WznmXn05_ZWBeyt6__B_jzbaDaMaEZTFYxW4kPio_y2fRwxM0dQT8wlZe7Q87tXlZV7OA_DLfaK80vanDJCQknKMjng')" }}>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a1514]/80 via-[#0a1514]/30 to-transparent"></div>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm font-label-caps text-label-caps uppercase text-primary font-bold flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
<span>Serving North Bengal</span>
</div>
<div className="absolute bottom-4 left-4 text-white">
<div className="font-headline-sm text-headline-sm font-bold leading-tight">Headquartered in Siliguri</div>
<div className="font-body-sm text-body-sm text-outline-variant">Pradhan Nagar, Engineering Hub</div>
</div>
</div>
</div>
</div>
</div>
</section>"""

pattern = r'\{/\*\s*Right Office & Map Presence\s*\*/\}.*?</section>'
content = re.sub(pattern, new_contact_html, content, flags=re.DOTALL)

with open('next-app/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
