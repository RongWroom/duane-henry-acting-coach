import { CreditItem, CurriculumModule, RepresentationContact } from '../types';

export const HERO_DATA = {
  department: "DRAMATIC ARTS & PRIVATE COACHING",
  specialties: "STAGE • SCREEN • 1-1 SESSIONS",
  coordinates: "LONDON • LOS ANGELES",
  tagline: "ACTOR & DRAMATIC COACH",
  nameFirst: "DUANE",
  nameLast: "HENRY.",
  biographySummary:
    "Veteran actor of stage and screen. Special Agent Clayton Reeves on CBS's NCIS, Marvel Studios' Captain Marvel, and dramatic coach. Working one-on-one with actors to cultivate undeniable truth and camera presence.",
  portraitUrl: "/images/duanehenry.PNG",
  tickerItems: ["BAFTA NOMINATED", "CBS TELEVISION", "MARVEL STUDIOS"],
};

export const BIOGRAPHY_DATA = {
  sectionNumber: "01",
  sectionTitle: "THE BIOGRAPHY",
  subtitle: "BIRMINGHAM TO HOLLYWOOD",
  quote:
    "Acting is not about pretending; it is about uncovering the undeniable truth under intense pressure.",
  author: "DUANE HENRY",
  philosophyLabel: "Approach & Craft",
  metrics: [
    { value: "15+", label: "YEARS ON SCREEN & STAGE" },
    { value: "45+", label: "NCIS EPISODES" },
    { value: "1-1", label: "PRIVATE SESSIONS" },
  ],
  category: "ORIGINS • DISCIPLINE • REFINEMENT",
  heading: "From the West Midlands to Global Primetime.",
  paragraphs: [
    "Born and raised in Birmingham, England, Duane Henry forged his craft in the gritty, disciplined trenches of British theatre and television, including the BBC's Doctors (earning a prestigious BAFTA nomination for Best Newcomer) and independent British features.",
    "His transition to American cinema caught worldwide attention when he was cast as MI6 Officer Clayton Reeves on the globally celebrated juggernaut NCIS across multiple seasons. He subsequently joined the Marvel Cinematic Universe in the blockbuster Captain Marvel.",
    "Today, Duane works directly with actors through focused, one-on-one coaching sessions. He equips actors with practical, real-world camera tools—stripping away artificial mannerisms to uncover authentic, undeniable presence.",
  ],
  credentials: "SCREEN ACTORS GUILD (SAG-AFTRA) • EQUITY UK",
};

export const SELECTED_WORKS_DATA = {
  sectionNumber: "02",
  sectionTitle: "SELECTED WORKS & FILMOGRAPHY",
  subtitle: "PERFORMANCE RETROSPECTIVE",
  featuredReel: {
    badge: "DURATION • 09:58",
    location: "US & UK PRODUCTIONS",
    subheading: "PERFORMANCE RETROSPECTIVE",
    title: "Duane Henry - Theatrical Reel",
    description:
      "Selected dramatic scenes from CBS's NCIS, Marvel Studios' Captain Marvel, BBC productions, and independent British cinema.",
    duration: "09:58",
    stillUrl:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=85&w=1600",
  },
  credits: [
    {
      id: "ncis",
      category: "TELEVISION SERIES",
      title: "NCIS",
      details: "Special Agent Clayton Reeves (Series Regular • Seasons 13–15)",
      networkOrStudio: "CBS NETWORK",
      accoladeOrEpisodes: "45+ EPISODES",
      accentBorder: "dark",
    },
    {
      id: "captain-marvel",
      category: "FEATURE FILM",
      title: "Captain Marvel",
      details: "Kree Starforce Guard alongside Brie Larson and Jude Law.",
      networkOrStudio: "MARVEL STUDIOS",
      accoladeOrEpisodes: "THEATRICAL",
      accentBorder: "sand",
    },
    {
      id: "dark-knight-rises",
      category: "FEATURE FILM",
      title: "The Dark Knight Rises",
      details: "SWAT Officer in Christopher Nolan's acclaimed superhero conclusion.",
      networkOrStudio: "WARNER BROS.",
      accoladeOrEpisodes: "THEATRICAL",
      accentBorder: "sand",
    },
    {
      id: "doctors",
      category: "TELEVISION DRAMA",
      title: "Doctors",
      details: "Breakout role as Gareth Broadhurst, culminating in BAFTA recognition.",
      networkOrStudio: "BBC DRAMA",
      accoladeOrEpisodes: "BAFTA NOMINEE",
      accentBorder: "sand",
    },
    {
      id: "king-lear",
      category: "THEATRE",
      title: "King Lear",
      details: "Played the role of Edmund on stage across the US and Europe.",
      networkOrStudio: "STAGE TOUR",
      accoladeOrEpisodes: "LIVE PRODUCTION",
      accentBorder: "sand",
    },
    {
      id: "the-cut",
      category: "TELEVISION SERIES",
      title: "The Cut",
      details: "Series regular as Rory in BBC's long-running contemporary drama.",
      networkOrStudio: "BBC TELEVISION",
      accoladeOrEpisodes: "20+ EPISODES",
      accentBorder: "dark",
    },
    {
      id: "we",
      category: "FEATURE FILM",
      title: "W.E.",
      details: "Security Guard in historical romantic drama directed by Madonna.",
      networkOrStudio: "THE WEINSTEIN CO.",
      accoladeOrEpisodes: "THEATRICAL",
      accentBorder: "sand",
    },
    {
      id: "jericho",
      category: "TELEVISION DRAMA",
      title: "Jericho",
      details: "Notable performance in British western period drama set in Yorkshire.",
      networkOrStudio: "ITV NETWORK",
      accoladeOrEpisodes: "PERIOD DRAMA",
      accentBorder: "sand",
    },
  ] as CreditItem[],
};

export const COACHING_DATA = {
  sectionNumber: "03",
  sectionTitle: "PRIVATE COACHING",
  subtitle: "1-1 SESSIONS WITH DUANE",
  category: "DIRECT MENTORSHIP",
  headline: "Practical Guidance for Working Actors.",
  description:
    "Direct, one-on-one sessions with Duane Henry. Whether you are preparing for a major television or film audition, breaking down complex scripts, or sharpening your on-camera discipline, each session is focused entirely on your specific goals.",
  sessionLocations: {
    label: "SESSION FORMAT",
    text: "Sessions are conducted online worldwide via video call, or in-person in London and Los Angeles by arrangement.",
  },
  modules: [
    {
      id: "scene-study",
      number: "01",
      title: "Scene Study & Monologue Work",
      price: "$350 / SESSION",
      description:
        "Detailed deconstruction of contemporary or classical scripts. We examine beat transitions, emotional clarity, and making bold, grounded choices tailored for the camera.",
      focusAreas: ["Script Breakdown", "Emotional Grounding", "Camera Presence"],
      deliverables: "Comprehensive work on your chosen scene with take-by-take notes.",
    },
    {
      id: "audition-room",
      number: "02",
      title: "Audition & Self-Tape Preparation",
      price: "$280 / SESSION",
      description:
        "Focused work on your actual audition sides. We hone your eye-line, sharpen the opening moments of the tape, and ensure your choices stand out to casting directors.",
      focusAreas: ["First-Frame Impact", "Eye-Line & Framing", "Audition Sides"],
      deliverables: "Focused preparation on your current or upcoming audition sides.",
    },
    {
      id: "career-path",
      number: "03",
      title: "Script Analysis & Career Guidance",
      price: "$400 / SESSION",
      description:
        "One-on-one strategic discussion on character preparation, script navigation, transitioning between the UK and US markets, and navigating professional longevity.",
      focusAreas: ["Career Strategy", "Cold Reading", "US / UK Market Nuances"],
      deliverables: "Actionable strategic feedback tailored to your current career stage.",
    },
  ] as CurriculumModule[],
};

export const INQUIRIES_DATA = {
  heroTagline: "PRIVATE COACHING & INQUIRIES",
  heroHeadline: "BOOK A SESSION.",
  representations: [
    {
      type: "UK MANAGEMENT & THEATRICAL",
      agency: "Creative Artists Management (CAM)",
      addressLine1: "55 Drury Lane, Covent Garden",
      addressLine2: "London WC2B 5RT, United Kingdom",
      email: "representation@cam.co.uk",
    },
    {
      type: "US THEATRICAL REPRESENTATION",
      agency: "Gersh Agency",
      addressLine1: "9465 Wilshire Blvd, 6th Floor",
      addressLine2: "Beverly Hills, CA 90212",
    },
    {
      type: "DIRECT COACHING INQUIRIES",
      agency: "Duane Henry Coaching",
      addressLine1: "Online sessions worldwide • London & Los Angeles in-person",
      addressLine2: "Inquiries answered within 24–48 hours.",
      email: "coaching@duanehenry.com",
    },
  ] as RepresentationContact[],
};
