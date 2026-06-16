// ---------------------------------------------------------------------------
// Site content — lifted verbatim from the Sput Searight design canvas.
// ---------------------------------------------------------------------------

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Tour", href: "/tour" },
  { label: "Collabs", href: "/collabs" },
  { label: "About", href: "/about" },
] as const;

// Rotating word in the hero headline ("It's all about ___")
export const HERO_WORDS = ["THE POCKET", "THE GROOVE", "THE FEEL", "THE FUNK"];

// Marquee of collaborators that scrolls beneath the hero
export const MARQUEE_ARTISTS = [
  "Ghost-Note",
  "Snarky Puppy",
  "Snoop Dogg",
  "Erykah Badu",
  "Kendrick Lamar",
  "Justin Timberlake",
  "Kirk Franklin",
  "Marcus Miller",
  "Toto",
];

export const FEATURE_TILES = [
  { index: "01 / Live", title: "On The Road 2026 →", href: "/tour", bg: "mar" },
  { index: "02 / History", title: "The Collab Map →", href: "/collabs", bg: "mag", invert: true },
  { index: "03 / Story", title: "The Man Behind →", href: "/about", bg: "teal" },
] as const;

// ---------------------------------------------------------------------------
// TOUR
// ---------------------------------------------------------------------------
export type TourStatus = "available" | "few" | "sold";

export interface TourStop {
  date: string;
  city: string;
  venue: string;
  status: TourStatus;
}

export const TOUR: TourStop[] = [
  { date: "MAY 02", city: "Austin, TX", venue: "ACL Live · Moody Theater", status: "few" },
  { date: "MAY 09", city: "New Orleans, LA", venue: "Tipitina's", status: "sold" },
  { date: "MAY 16", city: "Atlanta, GA", venue: "Variety Playhouse", status: "available" },
  { date: "JUN 06", city: "Brooklyn, NY", venue: "Brooklyn Steel", status: "few" },
  { date: "JUN 14", city: "Chicago, IL", venue: "Thalia Hall", status: "available" },
  { date: "JUN 21", city: "Denver, CO", venue: "Cervantes' Masterpiece", status: "sold" },
  { date: "JUL 03", city: "London, UK", venue: "Jazz Café", status: "available" },
  { date: "JUL 11", city: "Paris, FR", venue: "New Morning", status: "few" },
  { date: "JUL 18", city: "Amsterdam, NL", venue: "Paradiso", status: "available" },
  { date: "AUG 01", city: "Tokyo, JP", venue: "Blue Note Tokyo", status: "sold" },
];

export const STATUS_LABEL: Record<TourStatus, string> = {
  available: "Tickets",
  few: "Few Left",
  sold: "Sold Out",
};

// ---------------------------------------------------------------------------
// COLLABS — the timeline data
// ---------------------------------------------------------------------------
export type Family = "Ghost-Note" | "Snarky Puppy" | "Sessions";

export interface Collab {
  artist: string;
  album: string;
  year: number;
  family: Family;
  role: string;
  note: string;
}

export const FAMILIES = ["All", "Ghost-Note", "Snarky Puppy", "Sessions"] as const;

export const COLLABS: Collab[] = [
  { artist: "Snarky Puppy", album: "Bring Us the Bright", year: 2008, family: "Snarky Puppy", role: "Drums", note: "Early days in the Texas fusion collective that would go on to redefine instrumental music for a generation." },
  { artist: "Snarky Puppy", album: "Tell Your Friends", year: 2010, family: "Snarky Puppy", role: "Drums + Production", note: "A breakout live record — Sput's feel becomes the heartbeat of the band's reputation." },
  { artist: "Snarky Puppy", album: "GroundUP", year: 2012, family: "Snarky Puppy", role: "Drums", note: "Studio-meets-stage experiments that pushed the ensemble into new rhythmic territory." },
  { artist: "Snarky Puppy", album: "We Like It Here", year: 2014, family: "Snarky Puppy", role: "Drums", note: "The era that turned a cult band into a global phenomenon. The pocket heard 'round the world." },
  { artist: "Kendrick Lamar", album: "Session Work", year: 2015, family: "Sessions", role: "Session Drums", note: "Lending live drum textures to one of hip-hop's most ambitious studio eras." },
  { artist: "Ghost-Note", album: "Fortified", year: 2015, family: "Ghost-Note", role: "Co-leader + Drums", note: "The debut. Sput and Nate Werth launch their own funk-forward outfit and never look back." },
  { artist: "Erykah Badu", album: "Live Run", year: 2016, family: "Sessions", role: "Touring Drums", note: "Neo-soul royalty meets the deepest pocket in the game on the road." },
  { artist: "Snoop Dogg", album: "Touring Band", year: 2017, family: "Sessions", role: "Live Drums", note: "West-coast bounce, live and in the cut." },
  { artist: "Ghost-Note", album: "Swagism", year: 2018, family: "Ghost-Note", role: "Co-leader + Drums", note: "A sprawling, guest-packed statement record. Funk as a wide-open conversation." },
  { artist: "Kirk Franklin", album: "Long Live Love", year: 2019, family: "Sessions", role: "Session Drums", note: "Back to the gospel roots that started it all — fire behind the kit." },
  { artist: "Ghost-Note", album: "Live Sessions", year: 2021, family: "Ghost-Note", role: "Co-leader + Drums", note: "Stripped-back, in-the-room recordings that capture the band at full groove." },
  { artist: "Toto", album: "With a Little Help from My Friends", year: 2021, family: "Sessions", role: "Live Drums", note: "Stepping into a legendary catalog for a live celebration of the band's classics." },
  { artist: "Ghost-Note", album: "Mustard n'Onions", year: 2022, family: "Ghost-Note", role: "Co-leader + Producer", note: "A double album and the most adventurous Ghost-Note statement yet." },
  { artist: "Marcus Miller", album: "Collaboration", year: 2023, family: "Sessions", role: "Guest Drums", note: "Two pocket masters trading ideas across genres." },
  { artist: "Ghost-Note", album: "World Tour Live", year: 2024, family: "Ghost-Note", role: "Co-leader + Drums", note: "Documenting the band at the peak of its live powers across three continents." },
];

// ---------------------------------------------------------------------------
// ABOUT
// ---------------------------------------------------------------------------
export const ABOUT_BIO: string[] = [
  'Robert "Sput" Searight is a Dallas-born drummer, producer, and bandleader whose feel has anchored some of the most adventurous music of the last twenty years. A founding force in <strong>Ghost-Note</strong> and a long-running pillar of the Snarky Puppy universe, his playing lives at the intersection of gospel fire, hip-hop swagger, and deep funk.',
  "From church drums as a kid to sessions and stages with Snoop Dogg, Erykah Badu, Kendrick Lamar and Kirk Franklin, Sput built a reputation on one thing above all: the pocket. The kind of time that makes a whole room move without anyone deciding to.",
  "Today he splits his life between the studio, the road, and clinics where he passes the feel forward to the next generation of players.",
];

export const GEAR = [
  { label: "Drums", value: "Custom Maple Kit" },
  { label: "Cymbals", value: "Dark Crash Stack" },
  { label: "Snare", value: '14" Brass Beast' },
  { label: "Sticks", value: "Signature 5B" },
];

// ---------------------------------------------------------------------------
// CONTACT
// ---------------------------------------------------------------------------
export const INQUIRY_TYPES = [
  "Festival / Concert",
  "Session work",
  "Clinic / Masterclass",
  "Private event",
  "Press / Interview",
];

export const CONTACTS = [
  { label: "Booking", value: "booking@sput.live" },
  { label: "Management", value: "mgmt@ghost-note.com" },
];

export const SOCIALS = [
  { label: "IG", href: "https://instagram.com", hover: "mag" },
  { label: "Spotify", href: "https://open.spotify.com", hover: "teal" },
  { label: "YT", href: "https://youtube.com", hover: "tang" },
];
