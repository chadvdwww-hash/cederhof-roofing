export type Area = {
  slug: string;
  name: string;
  priority: "P1" | "P2";
  kmFromBase: number;
  keyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  subheadline: string;
  intro: string;
  localContext: string;
  typicalProperty: string;
  architecturalStyles: string[];
  nearbyAreas: string[];
  heroImage: string;
};

export const areas: Area[] = [
  {
    slug: "dainfern",
    name: "Dainfern",
    priority: "P1",
    kmFromBase: 15,
    keyword: "roofing Dainfern",
    title: "Roofing Contractor in Dainfern | Cederhof Roofing",
    metaDescription:
      "Heritage and estate-home roofing in Dainfern. Slate, clay tile, re-roofing. Free on-site quote within 48 hours.",
    h1: "Roofing Contractor in Dainfern",
    subheadline:
      "Slate, clay tile, and full re-roofing for Dainfern Valley and Dainfern Ridge estate homes.",
    intro:
      "Dainfern is the most consistent brief Cederhof works to. Large-footprint estate homes, long straight ridges, visible roofs from the street and the golf course. The material standard is high and the expectation is that the installer understands what that means for the finish. We have worked on Cape-Dutch, Tuscan, and contemporary estate homes across both the Valley and Ridge phases, and on properties fronting the golf course where the roof line is seen constantly.",
    localContext:
      "Estate HOA rules, security escort for material deliveries, and boom-gate coordination are standard. We handle these on every Dainfern project without passing the admin back to you.",
    typicalProperty: "R8m – R40m estate homes, 400-900 m² roof areas, often steep pitch",
    architecturalStyles: ["Cape-Dutch", "Tuscan", "Contemporary Estate", "Mediterranean"],
    nearbyAreas: ["fourways", "bryanston", "sandton"],
    heroImage: "luxury-home-exterior-1.jpg",
  },

  {
    slug: "sandton",
    name: "Sandton",
    priority: "P1",
    kmFromBase: 6,
    keyword: "roofing Sandton",
    title: "Premium Roofing Contractor in Sandton | Cederhof Roofing",
    metaDescription:
      "Slate, clay tile, and re-roofing in Sandton. MBSA member, 17 years experience, 10-year guarantee. Free quote.",
    h1: "Roofing Contractor in Sandton",
    subheadline:
      "Premium residential roofing for Sandton, Sandhurst, Sandown, and Morningside.",
    intro:
      "Sandton's residential roof stock spans 1960s ranch houses, 1990s Cape-Dutch revival, and contemporary architect-led builds. The pitch, profile, and access considerations vary wildly from street to street. What is consistent is the expectation of a clean site and a finished look worthy of the property. Cederhof has delivered on all three categories across the suburb.",
    localContext:
      "Sandton properties often have mature indigenous gardens and sensitive landscaping around the drip line. We board and protect the garden at the start of every project and re-plant where damage is unavoidable.",
    typicalProperty: "R5m – R25m homes, 250-550 m² roof areas, mixed pitch",
    architecturalStyles: ["Cape-Dutch", "Modernist", "Ranch", "Contemporary"],
    nearbyAreas: ["bryanston", "hyde-park", "rivonia"],
    heroImage: "luxury-home-exterior-2.jpg",
  },

  {
    slug: "bryanston",
    name: "Bryanston",
    priority: "P1",
    kmFromBase: 0,
    keyword: "roofing Bryanston",
    title: "Roofing Contractor in Bryanston | Cederhof Roofing",
    metaDescription:
      "Premium residential roofing for Bryanston homes. Free on-site assessment, craft finish, MBSA member.",
    h1: "Roofing Contractor in Bryanston",
    subheadline:
      "Our home suburb. Premium residential roofing for Bryanston, Epsom Downs, and Bryanston East.",
    intro:
      "Bryanston is where Cederhof is based. Most of our tradesmen live within 15 minutes of the suburb, which means our response time for repair calls is the tightest in our service area. The residential roof stock is predominantly tiled, with a growing proportion of slate on architect-designed extensions. We know the mature oak and jacaranda canopy, and we know which streets flood-risk in December.",
    localContext:
      "Being local means we can diagnose most leaks within a morning of the call. Larger re-roof projects book further out, but emergency response is always the same week.",
    typicalProperty: "R4m – R18m homes, 200-500 m² roof areas, many mature trees",
    architecturalStyles: ["Ranch", "Cape-Dutch Revival", "Contemporary", "Thatched conversions"],
    nearbyAreas: ["sandton", "fourways", "hyde-park"],
    heroImage: "luxury-home-exterior-3.jpg",
  },

  {
    slug: "hyde-park",
    name: "Hyde Park",
    priority: "P1",
    kmFromBase: 8,
    keyword: "roofing Hyde Park",
    title: "Heritage Roofing in Hyde Park | Cederhof Roofing",
    metaDescription:
      "Heritage and estate roofing in Hyde Park. Slate and clay tile specialists. 10-year workmanship guarantee.",
    h1: "Roofing Contractor in Hyde Park",
    subheadline:
      "Heritage and period-home roofing for Hyde Park's oldest residential streets.",
    intro:
      "Hyde Park has the densest concentration of heritage homes in Joburg North. Early 20th-century period houses with clay tile, slate, and thatch. The material standard is higher here and sympathetic repair matters as much as new work. Cederhof has restored slate and clay tile roofs on houses dating to the 1930s across Hyde Park and neighbouring Parkview.",
    localContext:
      "Many Hyde Park properties have period features that deserve sympathetic materials. We will source reclaimed clay and slate where an exact match matters, and we work with heritage architects on listed properties.",
    typicalProperty: "R6m – R30m period homes, 200-450 m² roof areas, often complex valleys",
    architecturalStyles: ["Period", "Herbert Baker-inspired", "Cape-Dutch Revival", "Neo-Classical"],
    nearbyAreas: ["sandton", "parkhurst", "rosebank"],
    heroImage: "golden-hour-modern-house-1.jpg",
  },

  {
    slug: "fourways",
    name: "Fourways",
    priority: "P2",
    kmFromBase: 12,
    keyword: "roofing Fourways",
    title: "Roofing Contractor in Fourways | Cederhof Roofing",
    metaDescription:
      "Premium roofing in Fourways. Slate, clay, concrete tile, re-roofing, waterproofing. Free quote.",
    h1: "Roofing Contractor in Fourways",
    subheadline:
      "Residential roofing across Fourways, Fourways Gardens, and Cedar Lakes.",
    intro:
      "Fourways residential development spans 1990s tile-roof estates and newer architect-led builds on Cedar Lakes and Fourways Gardens. Cederhof handles both re-roofs on the older stock and new installation on recent builds.",
    localContext: "Complex estate with multiple HOAs. We manage the administration up front.",
    typicalProperty: "R3m – R15m homes, 200-450 m² roof areas",
    architecturalStyles: ["Cape-Dutch Revival", "Tuscan", "Contemporary Estate"],
    nearbyAreas: ["dainfern", "bryanston", "rivonia"],
    heroImage: "golden-hour-modern-house-2.jpg",
  },

  {
    slug: "rivonia",
    name: "Rivonia",
    priority: "P2",
    kmFromBase: 4,
    keyword: "roofing Rivonia",
    title: "Roofing Contractor in Rivonia | Cederhof Roofing",
    metaDescription:
      "Residential roofing in Rivonia. MBSA contractor, 17 years experience. Get a free on-site quote.",
    h1: "Roofing Contractor in Rivonia",
    subheadline:
      "Residential roofing for Rivonia and River Club homes.",
    intro:
      "Rivonia's residential stock is predominantly 1970s to 1990s tile with a growing proportion of modern extension and re-roof work. Cederhof has completed concrete tile re-roofs and localised slate extensions across both sides of the Rivonia Road spine.",
    localContext: "Rivonia roads are narrow; we schedule larger material deliveries outside peak traffic.",
    typicalProperty: "R3m – R12m homes, 200-400 m² roof areas",
    architecturalStyles: ["Ranch", "Modernist", "Contemporary"],
    nearbyAreas: ["sandton", "bryanston", "hurlingham"],
    heroImage: "golden-hour-modern-house-3.jpg",
  },

  {
    slug: "hurlingham",
    name: "Hurlingham",
    priority: "P2",
    kmFromBase: 5,
    keyword: "roofing Hurlingham",
    title: "Roofing Contractor in Hurlingham | Cederhof Roofing",
    metaDescription:
      "Premium residential roofing in Hurlingham. Craft finish, 10-year workmanship guarantee. Free quote.",
    h1: "Roofing Contractor in Hurlingham",
    subheadline:
      "Premium residential roofing across Hurlingham and Hurlingham Manor.",
    intro:
      "Hurlingham sits between the heritage stock of Hyde Park and the mid-century Sandton pattern. Our work here is split evenly between sympathetic repair on older properties and full re-roof on 1980s and 1990s homes reaching end-of-life on their original tile.",
    localContext: "Established suburb with mature gardens. Site protection matters more here than most areas.",
    typicalProperty: "R4m – R16m homes, 200-420 m² roof areas",
    architecturalStyles: ["Mid-century", "Cape-Dutch Revival", "Contemporary"],
    nearbyAreas: ["sandton", "rivonia", "hyde-park"],
    heroImage: "luxury-home-exterior-1.jpg",
  },

  {
    slug: "parkhurst",
    name: "Parkhurst",
    priority: "P2",
    kmFromBase: 10,
    keyword: "roofing Parkhurst",
    title: "Roofing Contractor in Parkhurst | Cederhof Roofing",
    metaDescription:
      "Heritage and modern roofing in Parkhurst. MBSA member since 2009. Free on-site assessment.",
    h1: "Roofing Contractor in Parkhurst",
    subheadline:
      "Heritage 1930s bungalow and contemporary renovation roofing in Parkhurst.",
    intro:
      "Parkhurst has the tightest-knit residential character in our service area. 1930s bungalows on small stands, most originally clay tile. The work here is predominantly heritage-sensitive repair and sympathetic re-roof, with a growing slice of contemporary loft extensions that need new flashing detailing.",
    localContext: "Small stands and narrow streets mean scaffold and material delivery need careful planning. We neighbour-notify in writing before scaffold goes up.",
    typicalProperty: "R3m – R9m bungalows, 120-250 m² roof areas, heritage clay tile",
    architecturalStyles: ["1930s Bungalow", "Period", "Contemporary conversion"],
    nearbyAreas: ["hyde-park", "rosebank", "sandton"],
    heroImage: "clay-tile-roof-2.jpg",
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getP1Areas(): Area[] {
  return areas.filter((a) => a.priority === "P1");
}
