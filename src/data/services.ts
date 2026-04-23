export type Service = {
  slug: string;
  name: string;
  short: string;
  keyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  subheadline: string;
  intro: string;
  whatsIncluded: string[];
  process: { step: number; title: string; body: string }[];
  pricing: { label: string; range: string; note: string }[];
  pricingNote: string;
  faqs: { q: string; a: string }[];
  hasBeforeAfter: boolean;
  heroImage: string;
  detailImages: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "slate-roofing",
    name: "Slate Roofing",
    short: "Hand-laid slate for heritage and estate homes",
    keyword: "slate roof installation Johannesburg",
    title: "Slate Roof Installation Johannesburg | Cederhof Roofing",
    metaDescription:
      "Hand-laid slate roof installation and heritage repair across Joburg North. MBSA craftsmen, 10-year workmanship guarantee. Free quote.",
    h1: "Slate Roof Installation & Repair",
    subheadline:
      "Natural stone roofing for heritage homes in Dainfern, Sandton, Bryanston and Hyde Park. Fitted by hand, finished to last a century.",
    intro:
      "Slate is the most demanding roofing material and the most rewarding one. Cut correctly and fitted by a tradesman who understands how it weathers, a slate roof will outlast the home beneath it. Cederhof installs slate on heritage and estate properties across Joburg North, from full new roofs on period houses to sympathetic repair on older slate that has slipped or cracked.",
    whatsIncluded: [
      "On-site assessment and measurement by an MBSA-certified contractor",
      "Selection of imported Welsh or South African slate graded for roof pitch and exposure",
      "Structural timber inspection and any necessary strengthening before slating",
      "Breathable membrane and batten layer fitted to current SABS standard",
      "Hand-nailed slate with copper nails on exposed pitches",
      "Lead flashing at all junctions, valleys and chimneys",
      "Ridge and hip work finished with matching slate or clay bonnets",
      "Site left clean daily; full debris removal on completion",
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        body: "On-site survey of the existing roof structure, pitch, span, and any heritage constraints. Written scope issued within 48 hours.",
      },
      {
        step: 2,
        title: "Quote",
        body: "Fixed-price quote itemised by slate supply, timber, membrane, labour, and lead work. No ambiguity. No variations without written approval.",
      },
      {
        step: 3,
        title: "Schedule",
        body: "Weather-dependent start date booked in writing. On larger projects we stage the work so at least half the roof is weather-tight every evening.",
      },
      {
        step: 4,
        title: "Execute",
        body: "Daily on-site supervision by the project lead. Scaffold, safety signage, and site protection for your garden and driveway included.",
      },
      {
        step: 5,
        title: "Sign-off",
        body: "Walk-through inspection with you. Guarantee certificate issued. Post-install follow-up at 6 and 12 months.",
      },
    ],
    pricing: [
      {
        label: "Slate repair (slipped tiles, localised damage)",
        range: "R4,500 – R18,000",
        note: "Per visit, depending on access and quantity",
      },
      {
        label: "Slate re-bedding (ridges, hips)",
        range: "R22,000 – R65,000",
        note: "Based on total ridge metres",
      },
      {
        label: "Full slate roof replacement",
        range: "R380,000 – R1,200,000+",
        note: "Material, labour, scaffolding, flashing. Larger estates exceed this range",
      },
    ],
    pricingNote:
      "Pricing varies with slate grade, roof pitch, access, and structural condition. We quote firm and in writing. No day-rate variations, no surprises when the invoice arrives.",
    faqs: [
      {
        q: "How long does a full slate re-roof take?",
        a: "Most residential slate re-roofs take 3 to 6 weeks depending on size, weather, and structural work. We stage the work so your home is weather-tight every night, even mid-project.",
      },
      {
        q: "Can you match slate on a heritage home?",
        a: "Yes. We source reclaimed Welsh slate where possible, and new slate matched on colour, thickness, and weathering. On a listed property we work with your architect and the heritage authority.",
      },
      {
        q: "Do I need to vacate my home during the work?",
        a: "No. Slate work is noisy but the interior is liveable. We set scaffold access clear of entrances and protect your landscaping with boards.",
      },
      {
        q: "How long does a slate roof last?",
        a: "A correctly fitted slate roof lasts 80 to 120 years. The slate itself can last 200+. The limiting factors are the batten timber and the lead flashing, both of which we specify to last 60 years minimum.",
      },
    ],
    hasBeforeAfter: false,
    heroImage: "slate-tile-roof-1.jpg",
    detailImages: ["slate-tile-roof-2.jpg", "slate-tile-roof-3.jpg"],
    related: ["clay-tile-roofing", "re-roofing", "waterproofing"],
  },

  {
    slug: "clay-tile-roofing",
    name: "Clay Tile Roofing",
    short: "Marseille and specialty clay tile for period homes",
    keyword: "clay tile roofing Johannesburg",
    title: "Clay Tile Roofing & Re-Roofing Johannesburg | Cederhof Roofing",
    metaDescription:
      "Clay Marseille and specialty tile re-roofing for Joburg North heritage homes. MBSA contractor, 17 years experience. Get a free quote.",
    h1: "Clay Tile Roofing Specialists",
    subheadline:
      "Marseille, Double Roman, and specialty clay tile work for period homes and new architect-designed residences across Johannesburg North.",
    intro:
      "Clay tile is the quiet workhorse of Joburg North residential roofing. It reads as heritage, ages with character, and when it is fitted right it will outlast every owner of the house. Cederhof handles Marseille, Double Roman, and specialty clay profiles for both period re-roofing and new architect-led builds.",
    whatsIncluded: [
      "Pitch and spacing survey before quoting",
      "Removal of failed tiles and inspection of underlying timber",
      "New or replacement breathable membrane and battens",
      "Tile selection from Coverland, Algoa, or imported suppliers",
      "Hand-fitted tiles with correct overlap for Gauteng rainfall",
      "Bedded ridges and hips, dry-fix optional",
      "Lead and zinc flashing at abutments and chimneys",
      "Clean-up and final sign-off walk",
    ],
    process: [
      { step: 1, title: "Assessment", body: "Pitch, span, tile profile match, and structural check. Written scope in 48 hours." },
      { step: 2, title: "Quote", body: "Itemised by tile supply, timber, labour, flashing. Fixed price in writing." },
      { step: 3, title: "Schedule", body: "Weather-dependent start, staged for nightly weather-tightness." },
      { step: 4, title: "Execute", body: "Daily supervision, site protection, scaffold safety." },
      { step: 5, title: "Sign-off", body: "Walk-through, guarantee certificate, 6 and 12 month follow-up." },
    ],
    pricing: [
      { label: "Clay tile repair", range: "R3,500 – R14,000", note: "Per visit, depending on access" },
      { label: "Partial re-tile (one face)", range: "R48,000 – R160,000", note: "Based on square metres" },
      { label: "Full clay tile re-roof", range: "R220,000 – R680,000", note: "Material, labour, scaffolding, flashing" },
    ],
    pricingNote:
      "Prices depend on tile profile, roof pitch, access, and whether timber substructure needs replacement. We quote firm and in writing.",
    faqs: [
      {
        q: "Can you match older discontinued clay tile?",
        a: "Usually yes. We source from reclamation yards and match by profile and colour. If exact match is not possible we will show you the closest alternative before you commit.",
      },
      {
        q: "Will new clay tiles look too fresh next to old ones?",
        a: "Clay weathers in about 18 months. We place newer tiles on the lower roof faces so the difference is least visible while it ages.",
      },
      {
        q: "Do clay tiles handle Joburg hail?",
        a: "Yes. Correctly overlapped clay survives the typical Gauteng storm. Severe hail can chip any tile; we inspect after major storms and replace affected pieces under guarantee.",
      },
      {
        q: "How do clay and concrete tiles compare?",
        a: "Clay is more expensive, weathers more beautifully, and lasts longer. Concrete is cheaper and heavier. For heritage homes we recommend clay; for new builds with budget focus, concrete can be right.",
      },
    ],
    hasBeforeAfter: false,
    heroImage: "clay-tile-roof-1.jpg",
    detailImages: ["clay-tile-roof-2.jpg", "clay-tile-roof-3.jpg"],
    related: ["slate-roofing", "concrete-tile-roofing", "re-roofing"],
  },

  {
    slug: "concrete-tile-roofing",
    name: "Concrete Tile Roofing",
    short: "Coverland and specialty concrete tile replacement",
    keyword: "concrete tile roofing Johannesburg",
    title: "Concrete Tile Roof Replacement Johannesburg | Cederhof Roofing",
    metaDescription:
      "Concrete Coverland tile replacement and repair for Joburg North homes. Premium finish, clean site, 10-year workmanship guarantee.",
    h1: "Concrete Tile Roofing & Repair",
    subheadline:
      "Coverland and specialty concrete tile work for Johannesburg North homes. Efficient, durable, finished to the same craft standard as our slate work.",
    intro:
      "Concrete tile is the dominant residential roofing material in Gauteng and for good reason. Done well it lasts 40 years. Done poorly it leaks inside two. The difference is in the underlay, the nailing pattern, the ridge bedding, and the flashing around penetrations. Cederhof handles all of it.",
    whatsIncluded: [
      "Structural and pitch survey before quoting",
      "Removal and safe disposal of failed tiles",
      "Full replacement of underlay and battens if required",
      "Coverland or equivalent tile supply with colour matching",
      "Hand-laid tiles with correct overlap for local rainfall",
      "Ridges bedded in mortar or dry-fixed, your preference",
      "Lead flashing at chimneys, valleys, and abutments",
      "Daily site clean and final walk-through",
    ],
    process: [
      { step: 1, title: "Assessment", body: "Site survey and structural inspection. Written scope in 48 hours." },
      { step: 2, title: "Quote", body: "Fixed-price itemised quote, no day-rate variations." },
      { step: 3, title: "Schedule", body: "Weather-dependent booking, staged to keep home weather-tight." },
      { step: 4, title: "Execute", body: "Supervised installation, scaffolded safety, site protection." },
      { step: 5, title: "Sign-off", body: "Walk-through, guarantee certificate, post-install follow-up." },
    ],
    pricing: [
      { label: "Concrete tile repair", range: "R2,800 – R12,000", note: "Per visit" },
      { label: "Partial re-tile", range: "R38,000 – R120,000", note: "Per roof face" },
      { label: "Full concrete tile re-roof", range: "R165,000 – R420,000", note: "Material, labour, scaffold, flashing" },
    ],
    pricingNote:
      "Concrete tile replacement is the most predictable pricing bracket in roofing. Our quotes are firm and itemised.",
    faqs: [
      {
        q: "How long does a concrete tile roof last?",
        a: "A well-installed concrete tile roof lasts 35 to 50 years. The underlay typically needs replacement at 25 to 30 years, often before the tiles themselves.",
      },
      {
        q: "Can concrete tile match my existing colour?",
        a: "We source close matches and weather new tiles into position. Exact match after 20 years is not always possible; we will tell you honestly if we can only get within 90%.",
      },
      {
        q: "Is concrete tile suitable for modern architect homes?",
        a: "Yes. Flat concrete profiles work well with contemporary architecture. We have fitted them on homes in Dainfern and Hyde Park built by leading SA architects.",
      },
      {
        q: "Do you install solar-ready concrete tile roofs?",
        a: "Yes. We install with reinforced batten spacing and pre-plan penetration points so a later solar install does not compromise waterproofing.",
      },
    ],
    hasBeforeAfter: true,
    heroImage: "clay-tile-roof-3.jpg",
    detailImages: ["golden-hour-modern-house-2.jpg", "luxury-home-exterior-1.jpg"],
    related: ["clay-tile-roofing", "re-roofing", "waterproofing"],
  },

  {
    slug: "re-roofing",
    name: "Full Re-Roofing",
    short: "Complete re-roof projects for R5m+ homes",
    keyword: "residential re-roofing Johannesburg",
    title: "Full Residential Re-Roofing Johannesburg | Cederhof Roofing",
    metaDescription:
      "Complete re-roofing projects for R5m+ Joburg North properties. Structural assessment, material upgrade, clean finish. Free quote.",
    h1: "Full Residential Re-Roofing",
    subheadline:
      "Strip, survey, upgrade, re-cover. Turnkey re-roofing for heritage and estate homes across Johannesburg North.",
    intro:
      "A full re-roof is the most consequential maintenance decision a homeowner makes. Done well it adds a generation to the life of the house. Cederhof runs turnkey re-roofing projects on homes from R5m to R40m across Joburg North. Strip, structural survey, timber remediation, upgraded membrane, hand-fitted tile or slate, new flashing, clean sign-off.",
    whatsIncluded: [
      "Pre-start structural assessment with engineer sign-off where required",
      "Full strip of existing tile or slate and disposal of old material",
      "Timber survey, sistered rafters or trusses where needed",
      "Current-standard breathable underlay",
      "New batten layer spaced for the replacement material",
      "Full tile or slate supply, with optional material upgrade",
      "New lead and zinc flashing on all penetrations",
      "Bedded ridges and hips or dry-fix, your preference",
      "Scaffold, site protection, daily clean, final walk-through",
    ],
    process: [
      { step: 1, title: "Assessment", body: "Full structural, material, and drainage survey. Written scope in 48 hours." },
      { step: 2, title: "Quote", body: "Itemised fixed-price. Alternatives priced where decisions are open (e.g. slate vs clay upgrade)." },
      { step: 3, title: "Schedule", body: "3 to 8 week projects, staged so the home is habitable throughout." },
      { step: 4, title: "Execute", body: "Dedicated project lead on site daily. Weekly progress walk with you." },
      { step: 5, title: "Sign-off", body: "Engineer certificate where applicable, guarantee certificate, 6/12 month follow-up." },
    ],
    pricing: [
      { label: "Re-roof on standard single storey (300-400 m²)", range: "R320,000 – R680,000", note: "Concrete or clay tile, including timber work" },
      { label: "Re-roof on double storey or large single (450-650 m²)", range: "R520,000 – R1,100,000", note: "Concrete or clay tile" },
      { label: "Re-roof with slate upgrade", range: "R680,000 – R2,400,000", note: "Slate supply carries a 2-3x premium over tile" },
    ],
    pricingNote:
      "Every re-roof is quoted after on-site measurement. We give you an itemised fixed price, not a range. The ranges above are what 85% of our projects fall into.",
    faqs: [
      {
        q: "Can you re-roof while we live in the house?",
        a: "Yes, in almost all cases. We stage work to keep the home weather-tight each evening. We agree noise windows with you up front.",
      },
      {
        q: "How long does a full re-roof take?",
        a: "3 to 8 weeks from scaffold up to final clean, weather-dependent. We build a realistic timeline into the quote; no imaginary two-week promises.",
      },
      {
        q: "What is the biggest hidden cost on a re-roof?",
        a: "Timber remediation. If rafters or trusses have rot, they must be replaced before tiling. We survey this before quoting and price it explicitly so there are no mid-project surprises.",
      },
      {
        q: "Do we need an engineer?",
        a: "For material changes (tile to slate, flat to pitched) or where structural work is significant, yes. We arrange this and include the fee in the quote.",
      },
      {
        q: "Can we upgrade material during a re-roof?",
        a: "This is the best moment to upgrade, from concrete to clay tile, from clay to slate. We will cost each option so you can compare on full life-cost, not sticker price.",
      },
    ],
    hasBeforeAfter: true,
    heroImage: "roof-installation-worker-1.jpg",
    detailImages: ["roof-installation-worker-2.jpg", "roof-installation-worker-3.jpg"],
    related: ["slate-roofing", "clay-tile-roofing", "waterproofing"],
  },

  {
    slug: "waterproofing",
    name: "Waterproofing & Flashing",
    short: "Membrane, torch-on, flashing and emergency response",
    keyword: "roof waterproofing Johannesburg",
    title: "Roof Waterproofing Johannesburg | Cederhof Roofing",
    metaDescription:
      "Membrane, torch-on, and chimney flashing waterproofing across Joburg North. MBSA contractor. Same-week emergency response.",
    h1: "Roof Waterproofing, Flashing & Repair",
    subheadline:
      "Membrane, torch-on, lead and zinc flashing. Planned waterproofing and emergency leak response across Joburg North.",
    intro:
      "Roofs do not usually fail at the tile. They fail at the junctions, where the roof meets a wall, a chimney, a valley, a skylight. Flashing and waterproofing are craft work. Cederhof covers planned waterproofing for new builds and renovation, and same-week emergency response when a summer storm finds a weakness.",
    whatsIncluded: [
      "On-site leak inspection with moisture reading where needed",
      "Torch-on and liquid membrane to current SABS standard",
      "Lead and zinc flashing, hand-dressed on site",
      "Chimney, parapet, and balcony detailing",
      "Valley re-line and upgrade",
      "Skylight and penetration waterproofing",
      "Emergency tarp-up response same week",
      "Five-year product warranty plus our 10-year workmanship guarantee",
    ],
    process: [
      { step: 1, title: "Inspection", body: "On-site diagnosis, not guesswork. We find the actual leak source before quoting." },
      { step: 2, title: "Quote", body: "Fixed-price itemised scope. Repairs priced separately from planned work." },
      { step: 3, title: "Schedule", body: "Emergencies same week. Planned work booked at your convenience." },
      { step: 4, title: "Execute", body: "Supervised application, product warranty documents retained for you." },
      { step: 5, title: "Sign-off", body: "Hose test on completion. Guarantee certificate. Post-rainy-season follow-up." },
    ],
    pricing: [
      { label: "Leak diagnosis and emergency tarp", range: "R1,800 – R4,500", note: "Fixed call-out fee, credited against any remedial work" },
      { label: "Chimney flashing replacement", range: "R12,000 – R38,000", note: "Lead and zinc work, hand-dressed" },
      { label: "Full torch-on waterproofing (flat roof, 100 m²)", range: "R38,000 – R72,000", note: "Strip, prime, two-layer torch-on, UV cap" },
      { label: "Parapet and balcony membrane", range: "R28,000 – R95,000", note: "Per run, dependent on length and detail" },
    ],
    pricingNote:
      "Waterproofing is where we see the most hidden costs in competitors' quotes, stripping existing membrane, timber repair under parapets, skylight re-bedding. We itemise all of it up front.",
    faqs: [
      {
        q: "How fast can you respond to an active leak?",
        a: "Same week for emergency tarp-up. Full repair typically within 2 weeks, depending on weather windows and material lead times.",
      },
      {
        q: "Can you waterproof over existing torch-on?",
        a: "Sometimes. We always strip where adhesion has failed and cap over where the old layer is sound. We do not skim over problems, that is how most waterproofing fails the second time.",
      },
      {
        q: "What is the guarantee on waterproofing?",
        a: "Five-year product warranty from the manufacturer, plus our 10-year workmanship guarantee on the application. We issue both certificates on completion.",
      },
      {
        q: "Do you work on flat concrete slab roofs?",
        a: "Yes. Concrete slab waterproofing is one of our most common projects on modernist architect homes in Sandton and Bryanston.",
      },
    ],
    hasBeforeAfter: false,
    heroImage: "luxury-home-exterior-2.jpg",
    detailImages: ["luxury-home-exterior-3.jpg", "roof-installation-worker-3.jpg"],
    related: ["re-roofing", "concrete-tile-roofing", "slate-roofing"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
