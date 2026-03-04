import type { GenreItem } from "@/types/movie";

// ─── Home page discovery lists ───────────────────────────────────────────────

export const TRENDING_IDS: string[] = [
  "tt15398776", // Oppenheimer
  "tt1517268",  // Barbie
  "tt6166392",  // Dune: Part Two
  "tt9362722",  // Spider-Man: Across the Spider-Verse
  "tt21807222", // Inside Out 2
  "tt1630029",  // Avatar: The Way of Water
  "tt14513804", // Anyone But You
  "tt9114286",  // Black Panther: Wakanda Forever
  "tt15239678", // Killers of the Flower Moon
  "tt11389872", // The Batman
];

export const TOP_RATED_IDS: string[] = [
  "tt0111161", // The Shawshank Redemption
  "tt0068646", // The Godfather
  "tt0468569", // The Dark Knight
  "tt0071562", // The Godfather Part II
  "tt0050083", // 12 Angry Men
  "tt0108052", // Schindler's List
  "tt0167260", // The Lord of the Rings: The Return of the King
  "tt0110912", // Pulp Fiction
  "tt0137523", // Fight Club
  "tt0109830", // Forrest Gump
];

// ─── Genre browse collections ─────────────────────────────────────────────────

export const GENRE_COLLECTIONS: Record<string, string[]> = {
  action: [
    "tt0468569", // The Dark Knight
    "tt4154796", // Avengers: Endgame
    "tt0133093", // The Matrix
    "tt1392190", // Mad Max: Fury Road
    "tt0095016", // Die Hard
    "tt0172495", // Gladiator
    "tt2911666", // John Wick
    "tt4912910", // Mission: Impossible – Fallout
    "tt1745960", // Top Gun: Maverick
    "tt4154756", // Avengers: Infinity War
  ],
  drama: [
    "tt0111161", // The Shawshank Redemption
    "tt0068646", // The Godfather
    "tt0108052", // Schindler's List
    "tt0109830", // Forrest Gump
    "tt0137523", // Fight Club
    "tt0407887", // The Departed
    "tt0482571", // The Prestige
    "tt0361748", // Inglourious Basterds
    "tt0050083", // 12 Angry Men
    "tt0071562", // The Godfather Part II
  ],
  scifi: [
    "tt0816692", // Interstellar
    "tt0133093", // The Matrix
    "tt0910970", // WALL-E
    "tt0076759", // Star Wars: A New Hope
    "tt1375666", // Inception
    "tt1454468", // Gravity
    "tt6139732", // Blade Runner 2049
    "tt0083658", // Blade Runner
    "tt0062622", // 2001: A Space Odyssey
    "tt0118884", // Contact
  ],
  horror: [
    "tt0081505", // The Shining
    "tt0078748", // Alien
    "tt0073195", // Jaws
    "tt0167404", // The Sixth Sense
    "tt0083907", // The Thing
    "tt1457767", // The Conjuring
    "tt0087800", // A Nightmare on Elm Street
    "tt1396484", // It (2017)
    "tt6751668", // Parasite
    "tt0102926", // The Silence of the Lambs
  ],
  animation: [
    "tt0910970", // WALL-E
    "tt0114709", // Toy Story
    "tt0382932", // Ratatouille
    "tt0266543", // Finding Nemo
    "tt0435761", // Toy Story 3
    "tt2096673", // Inside Out
    "tt6105098", // Coco
    "tt4633694", // Spider-Man: Into the Spider-Verse
    "tt0317705", // The Incredibles
    "tt0120623", // A Bug's Life
  ],
  comedy: [
    "tt0107048", // Groundhog Day
    "tt0099785", // Home Alone
    "tt0093779", // The Princess Bride
    "tt0072562", // Monty Python and the Holy Grail
    "tt0118715", // The Big Lebowski
    "tt0087884", // Beverly Hills Cop
    "tt0119977", // Liar Liar
    "tt0109040", // Ace Ventura: Pet Detective
    "tt0367882", // The 40-Year-Old Virgin
    "tt0293429", // Zoolander
  ],
  thriller: [
    "tt0114369", // Se7en
    "tt0114814", // The Usual Suspects
    "tt0119488", // L.A. Confidential
    "tt0264464", // Catch Me If You Can
    "tt0073486", // One Flew Over the Cuckoo's Nest
    "tt0048473", // Rear Window
    "tt0052357", // Vertigo
    "tt0317248", // City of God
    "tt0405094", // The Lives of Others
    "tt0102926", // The Silence of the Lambs
  ],
};

// ─── Ordered genre display config for UI rendering ────────────────────────────

export const GENRE_LIST: GenreItem[] = [
  { label: "Action",    slug: "action"    },
  { label: "Drama",     slug: "drama"     },
  { label: "Sci-Fi",    slug: "scifi"     },
  { label: "Horror",    slug: "horror"    },
  { label: "Animation", slug: "animation" },
  { label: "Comedy",    slug: "comedy"    },
  { label: "Thriller",  slug: "thriller"  },
];
