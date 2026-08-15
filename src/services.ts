export interface Service {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export const services: Service[] = [
  {
    title: "Architecture Design",
    description:
      "Comprehensive architectural design from concept to completion, balancing aesthetics with structural integrity and context sensitivity.",
    icon: "ri-building-line",
  },
  {
    title: "Interior Design",
    description:
      "Bespoke interior environments that reflect your personality, lifestyle, and aspirations with curated materiality and thoughtful detailing.",
    icon: "ri-sofa-line",
  },
  {
    title: "Commercial Design",
    description:
      "Office towers, retail spaces, and mixed-use developments designed for productivity, brand identity, and growth.",
    icon: "ri-building-4-line",
  },
  {
    title: "Hospitality Design",
    description:
      "Hotels, resorts, and F&B spaces that create memorable guest experiences through immersive design storytelling.",
    icon: "ri-hotel-line",
  },
  {
    title: "Master Planning",
    description:
      "Large-scale urban and landscape planning that creates cohesive, sustainable communities for future generations.",
    icon: "ri-map-2-line",
  },
  {
    title: "Prefab Projects",
    description:
      "Revolutionary prefabricated modular structures designed for portability, sustainability, and speed — architecture that adapts to any landscape.",
    icon: "ri-home-4-line",
    href: "/projects/prefab",
  },
];