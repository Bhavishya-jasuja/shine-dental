export interface Doctor {
  id: string
  name: string
  title: string
  qualifications: string
  specialization: string
  experience: string
  image: string
  badge: string
  bio: string
  credentials: { label: string; value: string }[]
  memberships: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  image: string
  badge?: { text: string; variant: "blue" | "gold" | "teal" | "rose" }
  features: string[]
  shortDesc: string
}

export interface Testimonial {
  id: string
  name: string
  initials: string
  rating: number
  text: string
  treatment: string
  date: string
  reviewCount: string
  color: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Stat {
  value: number | string
  suffix?: string
  label: string
  prefix?: string
  icon: string
}

export interface Technology {
  title: string
  description: string
  icon: string
  highlight: string
}
