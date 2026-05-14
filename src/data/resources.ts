export type Resource = {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  url: string;
  isAffiliate: boolean;
};

export const resources: Resource[] = [
  {
    id: "1",
    name: "Whoop Strap 4.0",
    description: "Advanced fitness and health wearable that tracks sleep, recovery, and daily strain.",
    category: "Gadgets",
    icon: "Activity",
    url: "#",
    isAffiliate: true
  },
  {
    id: "2",
    name: "Calm App",
    description: "The #1 app for sleep, meditation and relaxation, with over 100 million downloads.",
    category: "Apps",
    icon: "Wind",
    url: "#",
    isAffiliate: true
  },
  {
    id: "3",
    name: "Athletic Greens (AG1)",
    description: "A comprehensive daily nutrition powder with 75 vitamins, minerals, and whole-food sourced ingredients.",
    category: "Supplements",
    icon: "Leaf",
    url: "#",
    isAffiliate: true
  },
  {
    id: "4",
    name: "The Five Minute Journal",
    description: "A simple, guided gratitude journal to boost your mood and start your day right.",
    category: "Books & Journals",
    icon: "Book",
    url: "#",
    isAffiliate: true
  },
  {
    id: "5",
    name: "Oura Ring Gen3",
    description: "A sleek, accurate smart ring that tracks your sleep stages, heart rate variability, and readiness.",
    category: "Gadgets",
    icon: "Moon",
    url: "#",
    isAffiliate: true
  },
  {
    id: "6",
    name: "LMNT Electrolytes",
    description: "A tasty electrolyte drink mix that is formulated to help anyone with their electrolyte needs.",
    category: "Supplements",
    icon: "Droplet",
    url: "#",
    isAffiliate: true
  },
  {
    id: "7",
    name: "Zero Fasting App",
    description: "The world's most popular intermittent fasting tracker. Simple to use with great insights.",
    category: "Apps",
    icon: "Clock",
    url: "#",
    isAffiliate: false
  },
  {
    id: "8",
    name: "Why We Sleep by Matthew Walker",
    description: "The definitive book on the science of sleep and why it is the most important aspect of our health.",
    category: "Books & Journals",
    icon: "BookOpen",
    url: "#",
    isAffiliate: true
  }
];
