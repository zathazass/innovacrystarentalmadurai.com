import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageLayout from "@/components/layout/PageLayout";
import { Info } from "@/lib/constants/information";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Innova Crysta Rentals in Madurai - Comfort, Class & Convenience | Madurai Murugan Tours & Travels",
    template: "%s | Madurai Murugan Tours & Travels",
  },
  description: "Book premium Toyota Innova Crysta rentals in Madurai for family trips, corporate travel & temple tours. 2023-24 AC models, English/Hindi speaking drivers, 24/7 service. Rameshwaram, Kodaikanal, Kanyakumari packages available.",
  keywords: [
    "Innova Crysta rental Madurai",
    "Toyota Innova Crysta Madurai",
    "Madurai taxi service",
    "Madurai to Rameshwaram taxi",
    "Madurai to Kodaikanal cab",
    "Madurai outstation cabs",
    "Madurai tours and travels",
    "Kodaikanal taxi from Madurai",
    "South India pilgrimage tours",
    "family taxi service Madurai",
    "corporate travel Madurai",
    "airport taxi Madurai",
    "local sightseeing Madurai",
    "Tempo Traveller rental Madurai",
    "best taxi service Madurai"
  ].join(", "),
  metadataBase: new URL("https://maduraimurugantoursandtravels.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://maduraimurugantoursandtravels.com",
    siteName: "Madurai Murugan Tours & Travels",
    locale: "en_IN",
    title: "Innova Crysta Rentals in Madurai - Comfort, Class & Convenience | Madurai Murugan Tours & Travels",
    description: "Premium Toyota Innova Crysta taxi service in Madurai. Family trips, corporate travel, temple tours to Rameshwaram, Kodaikanal, Kanyakumari. 24/7 service, experienced drivers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Madurai Murugan Tours & Travels - Premium Innova Crysta Rentals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@maduraitaxi",
    creator: "@maduraitaxi",
    title: "Innova Crysta Rentals in Madurai | Madurai Murugan Tours & Travels",
    description: "Book premium Innova Crysta taxis in Madurai for comfortable & safe travel. Local & outstation trips with professional drivers.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    {
      name: "Madurai Murugan Tours & Travels",
      url: "https://maduraimurugantoursandtravels.com",
    },
  ],
  publisher: "Madurai Murugan Tours & Travels",
  creator: "Madurai Murugan Tours & Travels",
  category: "Travel & Transportation",
  classification: "Taxi Service, Tour Packages, Car Rental",
  abstract: "Premium Toyota Innova Crysta rentals and taxi services in Madurai for local and outstation trips across South India.",
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name: Info.name,
  description: 'Premium Toyota Innova Crysta rentals in Madurai for family trips, corporate travel and temple tours',
  url: 'https://maduraimurugantoursandtravels.com',
  telephone: Info.contact.phone[0],
  email: Info.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${Info.address.street}, ${Info.address.location}`,
    addressLocality: Info.address.city,
    addressRegion: Info.address.state,
    postalCode: Info.address.pincode.toString(),
    addressCountry: Info.address.country
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '9.9252',
    longitude: '78.1198'
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '9.9252',
      longitude: '78.1198'
    },
    geoRadius: '500000' // 500km radius covering South India
  },
  serviceType: ['TaxiService', 'TourPackage'],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Toyota Innova Crysta Rental',
        description: 'Premium 7+1 seater AC Toyota Innova Crysta for local and outstation trips'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Tour Packages',
        description: 'Customized tour packages to Rameshwaram, Kodaikanal, Kanyakumari and other South Indian destinations'
      }
    }
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '₹₹ - ₹₹₹',
  taxID: `GSTIN: ${Info.gstin}`,
  knowsAbout: [
    'Madurai Local Sightseeing',
    'Rameshwaram Temple Tours',
    'Kodaikanal Hill Station Trips',
    'Kanyakumari Pilgrimage Tours',
    'South India Temple Circuits'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Primary Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Madurai" />
        <meta name="geo.position" content="9.9252;78.1198" />
        <meta name="ICBM" content="9.9252, 78.1198" />

        {/* Business Contact Information */}
        <meta name="contact" content={Info.contact.phone[0]} />
        <meta name="contact" content={Info.contact.email} />
        <meta name="business" content={Info.name} />
        <meta name="location" content={`${Info.address.city}, ${Info.address.state}, ${Info.address.country}`} />
        
        {/* Custom meta tags */}
        <meta name="subject" content="Taxi Service, Car Rental, Tour Packages" />
        <meta name="topic" content="Travel Transportation Taxi Service South India Tours" />
        <meta name="company" content={Info.name} />
        <meta name="GSTIN" content={Info.gstin} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageLayout>
          {children}
        </PageLayout> 
      </body>
    </html>
  );
}
