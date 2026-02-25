export type PersonalityType =
  | "Bold Adventurer"
  | "Sweet Enthusiast"
  | "Health Nut"
  | "Zen Minimalist";

export interface Answer {
  text: string;
  personality: PersonalityType;
  backgroundImage: string;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface PersonalityResult {
  name: PersonalityType;
  coffee: string;
  tagline: string;
  description: string;
}

export const personalities: Record<PersonalityType, PersonalityResult> = {
  "Bold Adventurer": {
    name: "Bold Adventurer",
    coffee: "Double Espresso",
    tagline: "You live for intensity",
    description:
      "You charge headfirst into the unknown and thrive on adrenaline. Your coffee should hit just as hard as you do.",
  },
  "Sweet Enthusiast": {
    name: "Sweet Enthusiast",
    coffee: "Caramel Latte",
    tagline: "Life's too short for bitter",
    description:
      "You find joy in every little thing and believe the world could always use a bit more sweetness. Your coffee is a treat, not just a drink.",
  },
  "Health Nut": {
    name: "Health Nut",
    coffee: "Oat Milk Americano",
    tagline: "Wellness in every sip",
    description:
      "You treat your body like the temple it is and your mornings start with intention. Your coffee fuels your best self.",
  },
  "Zen Minimalist": {
    name: "Zen Minimalist",
    coffee: "Black Coffee, Single Origin",
    tagline: "Simple. Clean. Perfect.",
    description:
      "You know that less is more. While the world rushes, you pause. Your coffee is deliberate, uncluttered, and exactly enough.",
  },
};

export const questions: Question[] = [
  {
    question:
      "You find a mysterious door in your house you've never noticed. What do you do?",
    answers: [
      {
        text: "Kick it open immediately",
        personality: "Bold Adventurer",
        backgroundImage:
          "https://images.unsplash.com/photo-1762532985810-33aa342a1133?w=1920&q=80",
      },
      {
        text: "Make a snack first, then investigate",
        personality: "Sweet Enthusiast",
        backgroundImage:
          "https://images.unsplash.com/photo-1607919565782-d49c91cb46cd?w=1920&q=80",
      },
      {
        text: "Check if there's a draft - good airflow matters",
        personality: "Health Nut",
        backgroundImage:
          "https://images.unsplash.com/photo-1664129092841-3ec546212316?w=1920&q=80",
      },
      {
        text: "Sit quietly and listen for what's on the other side",
        personality: "Zen Minimalist",
        backgroundImage:
          "https://images.unsplash.com/photo-1610295399810-4964d7fdc693?w=1920&q=80",
      },
    ],
  },
  {
    question:
      "You're given a blank canvas and told to paint anything. What appears?",
    answers: [
      {
        text: "An erupting volcano",
        personality: "Bold Adventurer",
        backgroundImage:
          "https://images.unsplash.com/photo-1627277512894-73d76adfba72?w=1920&q=80",
      },
      {
        text: "A candy shop from a dream you had",
        personality: "Sweet Enthusiast",
        backgroundImage:
          "https://images.unsplash.com/photo-1753663049326-224a637489a4?w=1920&q=80",
      },
      {
        text: "A mountain trail at sunrise",
        personality: "Health Nut",
        backgroundImage:
          "https://images.unsplash.com/photo-1662817159871-0b4a03e8e01b?w=1920&q=80",
      },
      {
        text: "A single perfect circle",
        personality: "Zen Minimalist",
        backgroundImage:
          "https://images.unsplash.com/photo-1761904258305-a4044aebd362?w=1920&q=80",
      },
    ],
  },
  {
    question:
      "An alien lands and asks you to explain humanity in one sentence. You say:",
    answers: [
      {
        text: "We jumped out of planes for fun before we could cure the common cold",
        personality: "Bold Adventurer",
        backgroundImage:
          "https://images.unsplash.com/photo-1665858843828-384327053055?w=1920&q=80",
      },
      {
        text: "We invented dessert before dinner was even figured out",
        personality: "Sweet Enthusiast",
        backgroundImage:
          "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?w=1920&q=80",
      },
      {
        text: "We run toward mountains just to say we reached the top",
        personality: "Health Nut",
        backgroundImage:
          "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1920&q=80",
      },
      {
        text: "We spend our whole lives learning to be still",
        personality: "Zen Minimalist",
        backgroundImage:
          "https://images.unsplash.com/photo-1759067360054-1fe6f9640b67?w=1920&q=80",
      },
    ],
  },
  {
    question: "You wake up with a superpower. What is it?",
    answers: [
      {
        text: "A healing factor that recovers from any wound",
        personality: "Bold Adventurer",
        backgroundImage:
          "https://images.unsplash.com/photo-1622117989692-c8adc3e9bcd4?w=1920&q=80",
      },
      {
        text: "You can conjure any dessert out of thin air",
        personality: "Sweet Enthusiast",
        backgroundImage:
          "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=1920&q=80",
      },
      {
        text: "You never need sleep and always feel rested",
        personality: "Health Nut",
        backgroundImage:
          "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1920&q=80",
      },
      {
        text: "You can stop time whenever you want",
        personality: "Zen Minimalist",
        backgroundImage:
          "https://images.unsplash.com/photo-1608303852360-97cb721e42cc?w=1920&q=80",
      },
    ],
  },
  {
    question: "Pick a hypothetical pet:",
    answers: [
      {
        text: "A falcon that follows your commands",
        personality: "Bold Adventurer",
        backgroundImage:
          "https://images.unsplash.com/photo-1629837270594-fabe06c83d5d?w=1920&q=80",
      },
      {
        text: "A golden retriever that bakes somehow",
        personality: "Sweet Enthusiast",
        backgroundImage:
          "https://images.unsplash.com/photo-1693615775129-f2004d6e3e0b?w=1920&q=80",
      },
      {
        text: "A dolphin that takes you on morning swims",
        personality: "Health Nut",
        backgroundImage:
          "https://images.unsplash.com/photo-1686080186823-f61c47ded839?w=1920&q=80",
      },
      {
        text: "A cat that cuddles you in silence",
        personality: "Zen Minimalist",
        backgroundImage:
          "https://images.unsplash.com/photo-1761570956871-ab366d1ee7cf?w=1920&q=80",
      },
    ],
  },
];
