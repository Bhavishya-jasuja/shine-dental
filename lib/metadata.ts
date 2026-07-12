import type { Metadata } from "next"
import { CLINIC } from "@/constants/clinic"

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://shinedentalmzn.com"),
  title: {
    default: `${CLINIC.name} — Dr. Jatin & Dr. Shefali Gupta, Muzaffarnagar`,
    template: `%s | ${CLINIC.shortName}`,
  },
  description:
    "Advanced dental care in Muzaffarnagar. Microscopic root canal, dental implants, laser dentistry, cosmetic dentistry by IBE-certified specialist endodontists Dr. Jatin & Dr. Shefali Gupta. 10,000+ happy patients.",
  keywords: [
    "dentist muzaffarnagar",
    "dental clinic muzaffarnagar",
    "root canal muzaffarnagar",
    "dental implants muzaffarnagar",
    "best dentist muzaffarnagar",
    "microscopic root canal",
    "endodontist muzaffarnagar",
    "cosmetic dentistry muzaffarnagar",
    "Dr Jatin Gupta dentist",
    "Dr Shefali Gupta dentist",
    "laser dentistry muzaffarnagar",
    "shine dental clinic",
  ],
  authors: [{ name: "Shine Dental & Medical Clinic" }],
  creator: "Shine Dental & Medical Clinic",
  publisher: "Shine Dental & Medical Clinic",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shinedentalmzn.com",
    siteName: CLINIC.name,
    title: `${CLINIC.name} — Advanced Dental Care in Muzaffarnagar`,
    description:
      "IBE-certified specialist endodontists offering microscopic root canal, dental implants, laser dentistry, and cosmetic dentistry. 15+ years of excellence, 10,000+ happy patients.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shine Dental & Medical Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CLINIC.name} — Advanced Dental Care`,
    description: "IBE-certified specialist endodontists in Muzaffarnagar.",
    images: ["/images/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
}
