export type Channel = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logoSrc: string;
  videoUrl: string;
  colorClasses: {
    bg: string;
    text: string;
    accent: string;
  };
};

export const channelData: Channel[] = [
  {
    id: 'ridiculously-rich',
    name: 'Ridiculously Rich',
    tagline: 'Wildly Extravagant | Fun | Awe-Inducing',
    description: 'Luxurious vibe exploring outrageous acts of wealth. Visuals in gold-and-green color schemes. Engaging listicles about the most absurd purchases by the ultra-rich.',
    logoSrc: '/images/channels/Ridiculously Rich.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    colorClasses: {
      bg: 'bg-rich',
      text: 'text-rich',
      accent: 'bg-rich-gold',
    },
  },
  {
    id: 'conbuster',
    name: 'ConBuster',
    tagline: 'Investigative | Bold | Sharp',
    description: 'Scam-busting and corruption-exposing channel with a journalistic, serious tone. Dark color schemes with urgent accents. Thorough fact-checking and bold revelations.',
    logoSrc: '/images/channels/Conbuster.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    colorClasses: {
      bg: 'bg-conbuster',
      text: 'text-conbuster',
      accent: 'bg-conbuster-accent',
    },
  },
  {
    id: 'whodunit-files',
    name: 'Whodunit Files',
    tagline: 'Mysterious | Serious | Chilling',
    description: 'Murder mysteries, unsolved cases, and true crime stories. Vintage detective aesthetics combined with respectful storytelling. A perfect channel for suspense lovers.',
    logoSrc: '/images/channels/Whodunit.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    colorClasses: {
      bg: 'bg-whodunit',
      text: 'text-whodunit',
      accent: 'bg-whodunit-accent',
    },
  },
  {
    id: 'showdown-central',
    name: 'Showdown Central',
    tagline: 'Playful | Competitive | Energetic',
    description: 'Versus-style videos comparing people, products, or concepts. Vibrant visuals and bold "VS" motifs. Invites debate and crowd engagement.',
    logoSrc: '/images/channels/Showdown Central.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    colorClasses: {
      bg: 'bg-showdown',
      text: 'text-showdown',
      accent: 'bg-showdown-accent',
    },
  },
  {
    id: 'rankitup',
    name: 'RankItUp',
    tagline: 'Variety | Informative | Fun',
    description: 'Classic top 10 lists on anything from tech to pop culture. Bright, snappy countdowns, perfect for wide audiences seeking quick, entertaining info.',
    logoSrc: '/images/channels/Rank It UP.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    colorClasses: {
      bg: 'bg-rankitup',
      text: 'text-rankitup',
      accent: 'bg-rankitup-accent',
    },
  },
]; 