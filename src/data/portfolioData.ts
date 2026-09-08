import { CreditItem, CurriculumModule, RepresentationContact } from '../types';

export const HERO_DATA = {
  department: "DRAMATIC ARTS & CONSERVATORY",
  specialties: "STAGE • SCREEN • PRIVATE COACHING",
  coordinates: "LONDON • LOS ANGELES",
  tagline: "PORTFOLIO & PRIVATE MASTERCLASS",
  nameFirst: "DUANE",
  nameLast: "HENRY.",
  biographySummary:
    "Veteran actor of stage and screen. Special Agent Clayton Reeves on CBS's NCIS, Marvel Studios' Captain Marvel, and leading dramatic instructions. Cultivating unapologetic truth in the next echelon of screen talent.",
  portraitUrl:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=85&w=1200",
  tickerItems: ["BAFTA RECOGNIZED", "CBS TELEVISION", "MARVEL STUDIOS"],
};

export const BIOGRAPHY_DATA = {
  sectionNumber: "01",
  sectionTitle: "THE BIOGRAPHY",
  subtitle: "BIRMINGHAM TO HOLLYWOOD",
  quote:
    "Acting is not about pretending; it is about uncovering the undeniable truth under intense pressure.",
  author: "DUANE HENRY",
  philosophyLabel: "Method & Philosophy",
  metrics: [
    { value: "15+", label: "YEARS IN INDUSTRY" },
    { value: "40+", label: "MAJOR EPISODES" },
    { value: "1:1", label: "EXCLUSIVE MENTORSHIP" },
  ],
  category: "ORIGINS • DISCIPLINE • REFINEMENT",
  heading: "From the West Midlands to Global Primetime.",
  paragraphs: [
    "Born and raised in Birmingham, England, Duane Henry forged his craft in the gritty, disciplined trenches of British theatre and television, including the BBC's Doctors (earning a prestigious BAFTA nomination for Best Newcomer) and gritty UK independent features.",
    "His transition to American cinema caught worldwide attention when he was cast as MI6 Officer Clayton Reeves on the globally celebrated juggernaut NCIS across multiple critically acclaimed seasons. He subsequently joined the Marvel Cinematic Universe in the blockbuster Captain Marvel.",
    "Today, Duane bridges the gap between high-level performance and elite instruction. His private London and Los Angeles masterclasses provide working actors with visceral, real-world tools—stripping away theatrical pretension to reveal undeniable cinematic presence.",
  ],
  credentials: "SCREEN ACTORS GUILD • EQUITY UK",
};

export const SELECTED_WORKS_DATA = {
  sectionNumber: "02",
  sectionTitle: "SELECTED WORKS & FILMOGRAPHY",
  subtitle: "16:9 THEATRICAL STILLS",
  featuredReel: {
    badge: "FEATURE SHOWREEL • 04:18",
    location: "ON STAGE: US • EUROPE",
    subheading: "PERFORMANCE RETROSPECTIVE",
    title: "The Dramatic Reel (2018–2024)",
    description:
      "Featuring pivotal dramatic sequences from CBS's NCIS, Marvel Studios' Captain Marvel, BBC drama productions, and independent British cinema.",
    duration: "04:18",
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
      details: "Talented Kree/Starforce Guard alongside Brie Larson & Jude Law.",
      networkOrStudio: "MARVEL STUDIOS",
      accoladeOrEpisodes: "THEATRICAL",
      accentBorder: "sand",
    },
    {
      id: "king-lear",
      category: "ON TOUR",
      title: "King Lear",
      details: "Played the role of Edmund on stage across the US and Europe.",
      networkOrStudio: "FESTIVAL CIRCUIT",
      accoladeOrEpisodes: "LIVE PERFORMANCE",
      accentBorder: "sand",
    },
    {
      id: "doctors",
      category: "DRAMATIC TELEVISION",
      title: "Doctors",
      details: "Breakout role as Gareth Broadhurst, culminating in BAFTA recognition.",
      networkOrStudio: "BBC DRAMA",
      accoladeOrEpisodes: "BAFTA NOMINEE",
      accentBorder: "sand",
    },
  ] as CreditItem[],
};

export const COACHING_DATA = {
  sectionNumber: "03",
  sectionTitle: "MENTORSHIP & STUDIO",
  subtitle: "PRIVATE ACTING LAB",
  category: "UNCOMPROMISING RIGOR",
  headline: "The Craft of Screen Presence.",
  description:
    "No boilerplate methods. Duane accepts a strictly limited cohort of working and emerging professional actors for one-on-one camera coaching, self-tape engineering, and psychological text deconstruction.",
  studioLocations: {
    label: "STUDIO LOCATIONS",
    text: "In-person private studios in Soho, London & West Hollywood, California. Dedicated virtual studio sessions available worldwide via 4K calibrated streaming.",
  },
  modules: [
    {
      id: "scene-study",
      number: "01",
      title: "Scene Study & Intensive Monologues",
      price: "$350 / SESSION",
      description:
        "Dissecting contemporary and classical texts under high-stakes conditions. Precision beat breakdown, emotional resonance, and subtextual delivery formulated for cinematic lenses.",
      focusAreas: ["High-Stakes Scene Work", "Subtextual Micro-Expressions", "Contemporary Drama"],
      deliverables: "Recorded 4K multi-take assessment with frame-by-frame critique.",
    },
    {
      id: "audition-room",
      number: "02",
      title: "The Audition Room & Self-Tape Lab",
      price: "$280 / SESSION",
      description:
        "Technical lighting, sound, eye-line mastery, and creating an arresting first 5 seconds. We record, review, and refine your real tapes under actual industry casting directors' expectations.",
      focusAreas: ["First-5-Second Capture", "Eye-Line Geometry", "US vs UK Tape Nuances"],
      deliverables: "Export-ready color-balanced self-tape submission and casting slate.",
    },
    {
      id: "career-path",
      number: "03",
      title: "Career Path & Script Breakdown",
      price: "$400 / SESSION",
      description:
        "Strategic representation navigation between UK/US markets, character typing, cold reads, and navigating agency transitions with veteran perspective.",
      focusAreas: ["Bicoastal Agency Strategy", "Cold Reading Calibration", "Market Archetypes"],
      deliverables: "Comprehensive personal dossier mapping 12-month career positioning.",
    },
    {
      id: "private-conservatory",
      number: "04",
      title: "Private Conservatory & 3-Day Immersion",
      price: "BY APPLICATION",
      description:
        "An intensive three-day deep dive in London or Los Angeles studios. Full scene immersion, multi-camera shoot with edited footage for reels, and bespoke artist development.",
      focusAreas: ["Multi-Camera Practical Shoots", "Physiological Character Embodiment", "Directorial Collaboration"],
      deliverables: "Edited showcase scene for dramatic reel + ongoing mentorship access.",
    },
  ] as CurriculumModule[],
};

export const INQUIRIES_DATA = {
  heroTagline: "THE ART OF ABSOLUTE COMMITMENT",
  heroHeadline: "TRUTH IN PERFORMANCE.",
  representations: [
    {
      type: "MANAGEMENT & THEATRICAL",
      agency: "Creative Artists Management",
      addressLine1: "55 Drury Lane, Covent Garden",
      addressLine2: "London WC2B 5RT, United Kingdom",
      email: "representation@cam.co.uk",
    },
    {
      type: "UNITED STATES THEATRICAL",
      agency: "Gersh Agency / LA",
      addressLine1: "9465 Wilshire Blvd, 6th Floor",
      addressLine2: "Beverly Hills, CA 90212",
    },
    {
      type: "DIRECT MASTERCLASS ADMISSIONS",
      agency: "Studio Admissions Desk",
      addressLine1: "In-person consultations arranged exclusively",
      addressLine2: "following portfolio or reel review.",
      email: "studio@duanehenry.com",
    },
  ] as RepresentationContact[],
};
