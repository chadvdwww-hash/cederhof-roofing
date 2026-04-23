export type Testimonial = {
  id: string;
  rating: number;
  text: string;
  name: string;
  suburb: string;
  service: string;
  material: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    rating: 5,
    text: "We lost a chunk of the slate ridge in the 2025 November storm and had the roof fully re-bedded and flashed within three weeks. Cederhof's team were on site at 07:30 every morning, worked to a written scope, and left the garden cleaner than they found it. No surprises on the invoice. This is how tradesmen used to work.",
    name: "Sarah N.",
    suburb: "Hyde Park",
    service: "Slate ridge re-bedding + lead flashing",
    material: "Welsh slate",
    date: "March 2026",
  },
  {
    id: "t2",
    rating: 5,
    text: "Full re-roof on a 1974 ranch house. Cederhof stripped the original Double Roman clay, found two rotten trusses we did not know about, quoted the repair within an hour, and still finished on the original date. We interviewed four contractors and they were not the cheapest, they were the one I believed.",
    name: "Marius van der W.",
    suburb: "Bryanston",
    service: "Full re-roof with clay tile",
    material: "Marseille clay tile",
    date: "February 2026",
  },
  {
    id: "t3",
    rating: 5,
    text: "Dainfern HOA approval is a nightmare and Cederhof handled all of it without me having to chase anything. Slate work on a Cape-Dutch revival, sympathetic to the original pitch, finished to a showroom standard. I have already referred two neighbours.",
    name: "Priya D.",
    suburb: "Dainfern",
    service: "Slate roof on new addition",
    material: "South African slate",
    date: "January 2026",
  },
  {
    id: "t4",
    rating: 5,
    text: "Concrete tile re-roof on a double-storey in Sandton. What I appreciated most was the honest price range up front, they told us structural work might add 15% and it ended up adding 9%. No padding, no surprises. The site was swept every evening.",
    name: "Thandi M.",
    suburb: "Sandton",
    service: "Full concrete tile re-roof",
    material: "Coverland concrete tile",
    date: "December 2025",
  },
  {
    id: "t5",
    rating: 5,
    text: "Emergency leak on a Sunday evening during the big January storm. Cederhof had a tarp up on the Monday morning and the permanent repair done the following week. The flashing around the chimney had been wrong for twenty years; it has not leaked since.",
    name: "David and Anne K.",
    suburb: "Parkhurst",
    service: "Emergency waterproofing + chimney flashing",
    material: "Lead flashing",
    date: "January 2026",
  },
  {
    id: "t6",
    rating: 5,
    text: "We had three quotes for waterproofing on a flat concrete slab roof. Cederhof was in the middle on price but the only quote that explained why the existing torch-on had failed. The others just wanted to layer over it. Two years in, no leaks.",
    name: "Johan P.",
    suburb: "Rivonia",
    service: "Flat roof waterproofing",
    material: "Two-layer torch-on",
    date: "Ongoing since 2024",
  },
];
