/**
 * JSON-LD Structured Data component.
 * Drop this into any Server Component page to add rich schema markup.
 * Does NOT render anything visible — purely for SEO crawlers.
 */

interface LocalBusinessSchemaProps {
  page?: "home" | "about" | "services" | "portfolio" | "process" | "contact";
}

export default function JsonLd({ page = "home" }: LocalBusinessSchemaProps) {
  const BASE_URL = "https://highgrade-one.vercel.app";

  const organization = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#business`,
    name: "HighGrade Constructions",
    alternateName: "High Grade Construction Company",
    description:
      "Premium residential, commercial and turnkey construction company serving Siliguri, Darjeeling and North Bengal since 2018.",
    url: BASE_URL,
    logo: `${BASE_URL}/logohgc.png`,
    image: `${BASE_URL}/og-image.jpg`,
    foundingDate: "2018",
    telephone: "+917076423578",
    email: "highgradeconstruction3@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kaziman Pradhan Rd, near Union Bank Methibari, Salbari",
      addressLocality: "Siliguri",
      addressRegion: "West Bengal",
      postalCode: "734002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.765125,
      longitude: 88.3811867,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://wa.me/917076423578",
    ],
    areaServed: [
      { "@type": "City", name: "Siliguri" },
      { "@type": "City", name: "Darjeeling" },
      { "@type": "AdministrativeArea", name: "North Bengal" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Construction" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Construction" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Turnkey Projects" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hill Architecture" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architectural Planning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D Elevation Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovation & Remodeling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Structural Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Management" } },
      ],
    },
  };

  const breadcrumbMap: Record<string, object> = {
    home: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      ],
    },
    about: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
      ],
    },
    services: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      ],
    },
    portfolio: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: `${BASE_URL}/portfolio` },
      ],
    },
    process: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Our Process", item: `${BASE_URL}/process` },
      ],
    },
    contact: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbMap[page]) }}
      />
    </>
  );
}
