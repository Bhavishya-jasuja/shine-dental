import type { Doctor } from "@/types"

export const DOCTORS: Doctor[] = [
  {
    id: "jatin-gupta",
    name: "Dr. Jatin Gupta",
    title: "Director, Endodontist and Implantologist",
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
    specialization: "Microscopic Endodontics & Dental Implants",
    experience: "15+",
    image: "/images/dr-jatin-main.jpeg",
    badge: "IBE Certified",
    bio: "",
    credentials: [
      {
        label: "Education",
        value: "B.D.S, M.D.S Conservative Dentistry & Endodontics",
      },
      {
        label: "Recognition",
        value:
          "Pioneer in microscopic root canal treatment with international training across Europe, recognized by the Indian Board of Endodontics.",
      },
      {
        label: "Certification",
        value:
          "Prof. James L. Gutman Certificate for Excellence in Endodontics",
      },
      {
        label: "International Training",
        value:
          "Invited to Europe by Coltene, Switzerland for latest Endodontic advances",
      },
      {
        label: "Research",
        value:
          "Multiple national & international publications in peer-reviewed journals",
      },
      {
        label: "Current Position",
        value: "Director, Endodontist and Implantologist, Shine Dental Clinic",
      },
    ],
    memberships: ["IDA", "IMA", "IES", "AOI"],
  },
  {
    id: "shefali-gupta",
    name: "Dr. Shefali Gupta",
    title: "Director, Endodontist and Cosmetologist",
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
    specialization: "Cosmetic Dentistry & Pediatric Endodontics",
    experience: "15+",
    image: "/images/dr-shefali-main.jpeg",
    badge: "MDS Specialist",
    bio: "",
    credentials: [
      {
        label: "Education",
        value: "B.D.S, M.D.S Conservative Dentistry & Endodontics",
      },
      {
        label: "Recognition",
        value:
          "Expert in cosmetic dentistry and pediatric care with multiple peer-reviewed international publications and academic experience.",
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
        value: "Director, Endodontist and Cosmetologist, Shine Dental Clinic",
      },
    ],
    memberships: ["IDA", "IACDE"],
  },
]
