import type { Service } from "@/types"

export const SERVICES: Service[] = [
  {
    id: "micro-endodontics",
    title: "Micro-Endodontics",
    shortDesc: "Root Canal under Surgical Microscope",
    description:
      "Experience painless root canal treatment with 25× magnification. Our advanced surgical microscope technology ensures the highest success rates with precision unmatched by conventional methods.",
    icon: "microscope",
    image: "/images/microscope-treatment.jpeg",
    badge: { text: "Speciality", variant: "blue" },
    features: [
      "Single-visit completion",
      "25× microscope magnification",
      "Rubber dam isolation",
      "Immediate pain relief",
      "Highest success rates",
    ],
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    shortDesc: "All-on-4 · All-on-6 · Single Day Implants",
    description:
      "Permanent, reliable, and natural-looking solution to tooth loss. Our dental implants restore full function and aesthetics, from single tooth to full arch restoration.",
    icon: "tooth",
    image: "/images/services/dental-implants.jpg",
    badge: { text: "Popular", variant: "gold" },
    features: [
      "All-on-4 Full Arch",
      "All-on-6 Full Arch",
      "Immediate Loading Implants",
      "Single Day Implant Dentistry",
      "Single Tooth Implants",
      "Titanium Grade Implants",
    ],
  },
  {
    id: "dental-laser",
    title: "Laser Dentistry",
    shortDesc: "Painless Bloodless Procedures",
    description:
      "Cutting-edge laser technology for bloodless, painless procedures with faster healing. Treats gum disease, ulcers, whitening, and more with minimal discomfort.",
    icon: "zap",
    image: "/images/services/dental-laser.jpeg",
    badge: { text: "Advanced", variant: "teal" },
    features: [
      "Bloodless surgery",
      "Faster healing",
      "Gum treatment",
      "Teeth whitening",
      "TMJ pain relief",
    ],
  },
  {
    id: "smile-design",
    title: "Smile Design",
    shortDesc: "Veneers & Cosmetic Dentistry",
    description:
      "Transform your smile with custom porcelain veneers and comprehensive smile makeover procedures. Digital smile design technology lets you preview your perfect smile before treatment.",
    icon: "smile",
    image: "/images/services/dental-veneer.jpg",
    badge: { text: "Premium", variant: "rose" },
    features: [
      "Digital smile preview",
      "Porcelain veneers",
      "Teeth whitening",
      "Smile makeover",
      "Natural aesthetics",
    ],
  },
  {
    id: "intraoral-scanner",
    title: "Digital Dentistry",
    shortDesc: "3D Intraoral Scanning",
    description:
      "Precision 3D digital impressions replacing messy traditional molds. Highly accurate scanning for crowns, bridges, aligners and implant planning.",
    icon: "scan",
    image: "/images/services/intraoral-scanner.jpg",
    badge: { text: "Digital", variant: "blue" },
    features: [
      "No messy impressions",
      "3D digital models",
      "Same-day planning",
      "Aligner fitting",
      "Implant precision",
    ],
  },
  {
    id: "braces-aligners",
    title: "Braces & Aligners",
    shortDesc: "Teeth Alignment Solutions",
    description:
      "Advanced orthodontic solutions — from ceramic braces to invisible clear aligners. Correct misaligned teeth with minimal aesthetic impact on your appearance.",
    icon: "git-merge",
    image: "/images/services/braces.webp",
    features: [
      "Clear aligners",
      "Ceramic braces",
      "Invisible treatment",
      "Digital tracking",
      "Short treatment time",
    ],
  },
  {
    id: "crown-bridge",
    title: "Crowns & Bridges",
    shortDesc: "Premium Zirconia Restorations",
    description:
      "Custom metal-free zirconia crowns and bridges combining superior strength with perfect aesthetics. Biocompatible, natural-looking restorations built to last.",
    icon: "shield",
    image: "/images/services/crown-bridge.jpg",
    features: [
      "Metal-free zirconia",
      "Natural appearance",
      "Superior strength",
      "Biocompatible",
      "Long-lasting",
    ],
  },
  {
    id: "kids-dentistry",
    title: "Kids Dentistry",
    shortDesc: "Gentle Pediatric Dental Care",
    description:
      "Specialized pediatric dentistry with a gentle, child-friendly approach. From preventive fluoride treatment to painless procedures designed to make children love dental visits.",
    icon: "heart",
    image: "/images/services/kids-dentistry.jpg",
    features: [
      "Child-friendly environment",
      "Painless procedures",
      "Fluoride treatment",
      "Fissure sealants",
      "Preventive care",
    ],
  },
  {
    id: "gum-treatment",
    title: "Gum Treatment",
    shortDesc: "Periodontal & Gum Disease Care",
    description:
      "Comprehensive treatment for gum disease, bleeding gums, and periodontitis using laser and conventional therapy. Healthy gums are the foundation of a healthy smile.",
    icon: "heart-pulse",
    image: "/images/services/gum-problems.jpg",
    features: [
      "Laser gum therapy",
      "Deep cleaning (scaling)",
      "Root planing",
      "Bleeding gum treatment",
      "Gum reshaping",
    ],
  },
  {
    id: "oral-surgery",
    title: "Oral Surgery",
    shortDesc: "Surgical Extractions & More",
    description:
      "Safe and precise oral surgical procedures including surgical tooth extractions, cyst removal, and minor oral surgery — performed under local anaesthesia with minimal discomfort.",
    icon: "shield",
    image: "/images/services/oral-surgery.webp",
    features: [
      "Surgical extractions",
      "Cyst removal",
      "Frenectomy",
      "Local anaesthesia",
      "Minimal recovery time",
    ],
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    shortDesc: "Professional Laser Whitening",
    description:
      "Professional-grade teeth whitening using advanced laser and bleaching technology. Get teeth up to 8 shades whiter in a single sitting — safely, effectively, and lasting.",
    icon: "sparkles",
    image: "/images/services/teeth-whitening.png",
    features: [
      "Up to 8 shades whiter",
      "Single-sitting results",
      "Laser-activated bleaching",
      "Safe & supervised",
      "Long-lasting results",
    ],
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Removal",
    shortDesc: "Painless Surgical Extraction",
    description:
      "Expert removal of impacted and painful wisdom teeth with minimal swelling and fast recovery. Our surgical expertise ensures a smooth, comfortable procedure every time.",
    icon: "zap",
    image: "/images/services/wisdom-tooth.jpg",
    features: [
      "Impacted tooth removal",
      "Minimal post-op swelling",
      "IV sedation option",
      "Fast recovery",
      "Detailed aftercare",
    ],
  },
  {
    id: "tooth-fillings",
    title: "Tooth-Coloured Fillings",
    shortDesc: "Natural-Looking Composite Fillings",
    description:
      "Replace old metal amalgam fillings or treat new cavities with tooth-coloured composite resin. Virtually invisible, mercury-free, and bonds directly to the tooth for a stronger result.",
    icon: "pen-tool",
    image: "/images/services/tooth-fillings.jpg",
    features: [
      "Mercury-free composite",
      "Colour-matched to teeth",
      "Single-visit procedure",
      "Replaces amalgam",
      "Strong & durable",
    ],
  },
]
