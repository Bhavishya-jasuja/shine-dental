import type { Doctor } from "@/types"

export const DOCTORS: Doctor[] = [
  {
    id: "jatin-gupta",
    name: "Dr. Jatin Gupta",
    title: "Director & Chief Endodontist",
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
    specialization: "Microscopic Endodontics & Dental Implants",
    experience: "15+",
    image: "/images/dr-jatin-main.jpeg",
    badge: "IBE Certified",
    bio: "Pioneer in microscopic root canal treatment with international training across Europe, recognized by the Indian Board of Endodontics.",
    credentials: [
      {
        label: "Education",
        value: "K.L.E Dental College, Belgaum, Karnataka (2011)",
      },
      {
        label: "Post Graduation",
        value:
          "MDS — Conservative Dentistry & Endodontics, Subharti Dental College, Meerut (2014)",
      },
      {
        label: "Special Recognition",
        value: "Diplomate of Indian Board of Endodontics (IBE) — 2021",
      },
      {
        label: "Certification",
        value:
          "Prof. James L. Gutman Certificate — Excellence in Endodontics",
      },
      {
        label: "International Training",
        value:
          "Invited to Europe (2019, 2023) by Coltene, Switzerland for latest Endodontic advances",
      },
    ],
    memberships: ["IDA", "IMA", "IES", "AOI"],
  },
  {
    id: "shefali-gupta",
    name: "Dr. Shefali Gupta",
    title: "Director & Senior Endodontist",
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
    specialization: "Cosmetic Dentistry & Pediatric Endodontics",
    experience: "12+",
    image: "/images/dr-shefali-main.jpeg",
    badge: "MDS Specialist",
    bio: "Expert in cosmetic dentistry and pediatric care with multiple peer-reviewed international publications and academic experience.",
    credentials: [
      {
        label: "Education",
        value: "BDS, Santosh Dental College, Ghaziabad (2008)",
      },
      {
        label: "Post Graduation",
        value:
          "MDS — Conservative Dentistry & Endodontics, Subharti Dental College, Meerut (2014)",
      },
      {
        label: "Academic Experience",
        value: "Former Faculty, Muzaffarnagar Medical College & Dental School",
      },
      {
        label: "Research",
        value:
          "Multiple national & international publications in peer-reviewed journals",
      },
      {
        label: "Current Position",
        value: "Director & Senior Endodontist, Shine Dental Clinic",
      },
    ],
    memberships: ["IDA", "IACDE"],
  },
]
