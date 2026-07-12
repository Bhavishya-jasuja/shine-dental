import { CLINIC } from "@/constants/clinic"

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: CLINIC.name,
  image: "https://shinedentalmzn.com/images/clinic.jpg",
  "@id": "https://shinedentalmzn.com",
  url: "https://shinedentalmzn.com",
  telephone: `+91${CLINIC.primaryPhone}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Mahaveer Chowk",
    addressLocality: "Muzaffarnagar",
    postalCode: "251001",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.413,
    longitude: 77.703,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "11:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "17:00",
      closes: "19:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
  priceRange: "$$",
  medicalSpecialty: "Dentistry",
  sameAs: [CLINIC.social.facebook, CLINIC.social.instagram],
}
