export type PersonalityType =
  | "Bold Pioneer"
  | "Smooth Traditionalist"
  | "Curious Explorer"
  | "Cozy Campfire"
  | "Mindful Purist"
  | "Social Trailblazer";

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
  alsoTry: string;
  seasonal: string;
  tagline: string;
  description: string;
}

export const personalities: Record<PersonalityType, PersonalityResult> = {
  "Bold Pioneer": {
    name: "Bold Pioneer",
    coffee: "Double Espresso",
    alsoTry: "Red Eye",
    seasonal: "Spiced Cayenne Mocha",
    tagline: "Life's too short for timid coffee",
    description:
      "You charge headfirst into the unknown and thrive on intensity. First in line for the new limited release, first to suggest the after-hours espresso, first to say yes. Your coffee should match your energy — unapologetic and full-throttle.",
  },
  "Smooth Traditionalist": {
    name: "Smooth Traditionalist",
    coffee: "Classic House Blend",
    alsoTry: "Café au Lait",
    seasonal: "Maple Cinnamon Drip",
    tagline: "Some things never need fixing",
    description:
      "There's a reason classics endure — you know this better than anyone. You find your groove and stick with it, and your loyalty runs deep. Your coffee order hasn't changed in years, and it doesn't need to.",
  },
  "Curious Explorer": {
    name: "Curious Explorer",
    coffee: "Seasonal Pour-Over",
    alsoTry: "Lavender Oat Latte",
    seasonal: "Single Origin Flight",
    tagline: "There's always something new to discover",
    description:
      "You'd rather try something new and be surprised than stick with what you know. For you, the menu is just a starting point. You're always asking baristas 'What's new?' and your coffee journey is far from over.",
  },
  "Cozy Campfire": {
    name: "Cozy Campfire",
    coffee: "Caramel Vanilla Latte",
    alsoTry: "Chai Tea Latte",
    seasonal: "Pumpkin Spice Mocha",
    tagline: "Every cup should feel like a warm hug",
    description:
      "Every cup is a moment to pause and feel warm from the inside out. You're the one who makes every gathering feel like home. Your coffee isn't just a drink — it's a ritual of comfort.",
  },
  "Mindful Purist": {
    name: "Mindful Purist",
    coffee: "Single Origin Black",
    alsoTry: "Cortado",
    seasonal: "Matcha with Oat Milk",
    tagline: "Let the coffee speak for itself",
    description:
      "You believe quality speaks for itself. No syrup, no frills — just exceptional beans and careful preparation. You notice what others miss, and you wouldn't have it any other way.",
  },
  "Social Trailblazer": {
    name: "Social Trailblazer",
    coffee: "Cold Brew Flight",
    alsoTry: "Iced Americano with Flavor Add-On",
    seasonal: "Sparkling Honey Citrus Cold Brew",
    tagline: "Coffee is better with company",
    description:
      "Coffee for you is about the people around the table. You're the one who organizes the meetups, brings the group together, and always orders something you can share. Community is your caffeine.",
  },
};

export const questions: Question[] = [
  {
    question:
      "You find a mysterious door in your house you've never noticed. What do you do?",
    answers: [
      {
        text: "Kick it open immediately",
        personality: "Bold Pioneer",
        backgroundImage:
          "https://images.unsplash.com/photo-1762532985810-33aa342a1133?w=1920&q=80",
      },
      {
        text: "Grab a blanket and some snacks first, then investigate",
        personality: "Cozy Campfire",
        backgroundImage:
          "https://images.unsplash.com/photo-1607919565782-d49c91cb46cd?w=1920&q=80",
      },
      {
        text: "Sit quietly and listen for what's on the other side",
        personality: "Mindful Purist",
        backgroundImage:
          "https://images.unsplash.com/photo-1610295399810-4964d7fdc693?w=1920&q=80",
      },
      {
        text: "Text your friends to come explore it with you",
        personality: "Social Trailblazer",
        backgroundImage:
          "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1920&q=80",
      },
    ],
  },
  {
    question:
      "You're given a blank canvas and told to paint anything. What appears?",
    answers: [
      {
        text: "An erupting volcano",
        personality: "Bold Pioneer",
        backgroundImage:
          "https://images.unsplash.com/photo-1627277512894-73d76adfba72?w=1920&q=80",
      },
      {
        text: "A cozy cabin with smoke curling from the chimney",
        personality: "Smooth Traditionalist",
        backgroundImage:
          "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1920&q=80",
      },
      {
        text: "A map of all the places you haven't been yet",
        personality: "Curious Explorer",
        backgroundImage:
          "https://images.unsplash.com/photo-1662817159871-0b4a03e8e01b?w=1920&q=80",
      },
      {
        text: "A single perfect circle",
        personality: "Mindful Purist",
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
        personality: "Bold Pioneer",
        backgroundImage:
          "https://images.unsplash.com/photo-1665858843828-384327053055?w=1920&q=80",
      },
      {
        text: "We keep doing the same morning ritual because it feels like home",
        personality: "Smooth Traditionalist",
        backgroundImage:
          "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?w=1920&q=80",
      },
      {
        text: "We crossed oceans just to see what was on the other side",
        personality: "Curious Explorer",
        backgroundImage:
          "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1920&q=80",
      },
      {
        text: "We built coffee shops so we'd have somewhere to be together",
        personality: "Social Trailblazer",
        backgroundImage:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80",
      },
    ],
  },
  {
    question: "You wake up with a superpower. What is it?",
    answers: [
      {
        text: "You can taste any dish from anywhere in the world just by thinking of it",
        personality: "Curious Explorer",
        backgroundImage:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80",
      },
      {
        text: "Every blanket you touch becomes the perfect temperature",
        personality: "Cozy Campfire",
        backgroundImage:
          "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=1920&q=80",
      },
      {
        text: "You can stop time whenever you want",
        personality: "Mindful Purist",
        backgroundImage:
          "https://images.unsplash.com/photo-1608303852360-97cb721e42cc?w=1920&q=80",
      },
      {
        text: "You can speak every language fluently",
        personality: "Social Trailblazer",
        backgroundImage:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
      },
    ],
  },
  {
    question: "Pick a hypothetical pet:",
    answers: [
      {
        text: "A falcon that follows your commands",
        personality: "Bold Pioneer",
        backgroundImage:
          "https://images.unsplash.com/photo-1629837270594-fabe06c83d5d?w=1920&q=80",
      },
      {
        text: "A golden retriever that greets you the same way every day",
        personality: "Smooth Traditionalist",
        backgroundImage:
          "https://images.unsplash.com/photo-1693615775129-f2004d6e3e0b?w=1920&q=80",
      },
      {
        text: "A chameleon that changes colors to match your mood",
        personality: "Curious Explorer",
        backgroundImage:
          "https://images.unsplash.com/photo-1504450874802-0ba2bcd659e0?w=1920&q=80",
      },
      {
        text: "A dog that introduces you to every person in the park",
        personality: "Social Trailblazer",
        backgroundImage:
          "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80",
      },
    ],
  },
  {
    question: "Your ideal Saturday morning looks like...",
    answers: [
      {
        text: "The same coffee shop, the same table, the same order",
        personality: "Smooth Traditionalist",
        backgroundImage:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=80",
      },
      {
        text: "A new neighborhood, a new bakery, a new adventure",
        personality: "Curious Explorer",
        backgroundImage:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
      },
      {
        text: "A blanket, a warm mug, and nowhere to be",
        personality: "Cozy Campfire",
        backgroundImage:
          "https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920&q=80",
      },
      {
        text: "A quiet walk, a single cup of something perfect",
        personality: "Mindful Purist",
        backgroundImage:
          "https://images.unsplash.com/photo-1759067360054-1fe6f9640b67?w=1920&q=80",
      },
    ],
  },
  {
    question: "You're planning a road trip. You're most excited about...",
    answers: [
      {
        text: "Driving roads with no GPS and no plan",
        personality: "Bold Pioneer",
        backgroundImage:
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80",
      },
      {
        text: "The snacks and playlists you've been curating for weeks",
        personality: "Cozy Campfire",
        backgroundImage:
          "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1920&q=80",
      },
      {
        text: "The one intentional stop you've researched deeply",
        personality: "Mindful Purist",
        backgroundImage:
          "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1920&q=80",
      },
      {
        text: "Convincing your whole friend group to come along",
        personality: "Social Trailblazer",
        backgroundImage:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=80",
      },
    ],
  },
  {
    question: "A friend asks you to pick the restaurant. You choose...",
    answers: [
      {
        text: "The neighborhood spot you've been going to for years",
        personality: "Smooth Traditionalist",
        backgroundImage:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
      },
      {
        text: "That brand-new place with a menu you've never seen before",
        personality: "Curious Explorer",
        backgroundImage:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
      },
      {
        text: "The cozy place with the fireplace and the big portions",
        personality: "Cozy Campfire",
        backgroundImage:
          "https://images.unsplash.com/photo-1664129092841-3ec546212316?w=1920&q=80",
      },
      {
        text: "The quiet place with a small, perfect menu",
        personality: "Mindful Purist",
        backgroundImage:
          "https://images.unsplash.com/photo-1622117989692-c8adc3e9bcd4?w=1920&q=80",
      },
    ],
  },
];
