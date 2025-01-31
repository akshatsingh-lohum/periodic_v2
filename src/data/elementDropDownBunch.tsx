export interface elementDropdownBunch {
  number: number;
  name: string;
  description: string;
  total_resources: string;
  state_resources: string[];
  total_reserves: string;
  total_reserves_state: string[];
  primary_sources: string;
  primary_capacity: string;
  primary_production: string;
  industrial_consumption: string[];
  secondary_sources: string[];
  secondary_capacity: string;
  main_companies: string[];
  hsn_codes: string[];
  hsn_description: string[];
  total_imports: string;
  imports_by_hsn: string[];
  total_exports: string;
  exports_by_hsn: string[];
}

const elementDropdownBunch: elementDropdownBunch[] = [
  {
    number: 1001,
    name: "Platinum Group Metals (PGM)",
    description:
      "Platinum Group Metals (PGMs) consist of six elements: platinum, palladium, rhodium, ruthenium, iridium, and osmium. These metals are highly valuable for their exceptional catalytic, corrosion-resistant, and high-temperature properties. PGMs are widely used in catalytic converters for vehicles, electronics, jewelry, and industrial processes like chemical manufacturing and fuel cells. Their scarcity and critical role in clean energy technologies make them essential for modern industries.",
    total_resources: "0.02092",
    state_resources: [
      "Karnataka - 0.0015",
      "Kerala - 0.00018",
      "Odisha - 0.0142",
      "Tamil Nadu - 0.00169",
      "Uttar Pradesh - 0.00335",
    ],
    total_reserves: "0",
    total_reserves_state: ["-"],
    primary_sources: "Chromite, Ferro Chromite\nLimonite",
    primary_capacity: "NA",
    primary_production: "0.3506",
    industrial_consumption: [
      "Automotive - 65.2%",
      "Jewellery - 7.2%",
      "Chemicals - 6.6%",
      "Electrical & Electronics - 5.6%",
      "Glass - 3.8%",
      "Biomedical - 2.3%",
      "Others - 9.2%",
    ],
    secondary_sources: ["Anode Slime", "Catalytic Converters", "E-Waste"],
    secondary_capacity: "0.1348",
    main_companies: [
      "Hindustan Platinum",
      "Ravindra Heraeus pvt. ltd",
      "Vineeth Chemicals",
      "Evonik",
      "Johnson Mathey",
    ],
    hsn_codes: [
      "71101110",
      "71101120",
      "71101900",
      "71102100",
      "71102900",
      "71103100",
      "71103900",
      "71104100",
      "71104900",
      "38151210",
      "28439012",
      "28439019",
      "71129990",
      "71129200",
      "71123000",
    ],
    hsn_description: [
      "Platinum, Unwrought Or In Semi-Manufactured Form, Or In Powder Form - Platinum : Unwrought Or In Powder Form: Unwrought Form",
      "Platinum, Unwrought Or In Semi-Manufactured Form, Or In Powder Form - Platinum : Unwrought Or In Powder Form: In Powder Form",
      "Platinum, Unwrought Or In Semi-Manufactured Form, Or In Powder Form - Platinum : Other",
      "Platinum, Unwrought Or In Semi-Manufactured Form, Or In Powder Form - Palladium: Unwrought Or In Powder Form",
      "Platinum, Unwrought Or In Semi-Manufactured Form, Or In Powder Form - Palladium: Other",
      "Platinum, Unwrought Or In Semi-Manufactured Form, Or In Powder Form - Rhodium: Unwrought Or In Powder From",
      "Platinum, Unwrought Or In Semi-Manufactured Form, Or In Powder Form - Rhodium: Other",
      "Platinum, Unwrought Or In Semi-Manufactured Form, Or In Powder Form - Iridium, Osmium And Ruthenium: Unwrought Or In Powder From",
      "Platinum, Unwrought Or In Semi-Manufactured Form, Or In Powder Form - Iridium, Osmium And Ruthenium: Other",
      "Platinum or palladium catalysts that have an activated carbon base.",
      "Noble metal solutions of platinum, rhodium and palladium.",
      "Colloidal precious metals; inorganic or organic compounds of precious metals, whether or not chemically defined; amalgams of precious metals - other compounds",
      "Waste and scrap of precious metal or of metal clad with precious metal; other",
      "Waste and scrap of precious metal or of metal clad with precious metal; other waste and scrap containing precious metal or precious metal compounds, of a kind used principally for the recovery of precious metal - other : of platinum, including metal clad.",
      "Waste and scrap of precious metal or of metal clad with precious metal; other waste and scrap containing precious metal or precious metal compounds, of a kind used principally for the recovery of precious metal - ash containing precious metal or precious",
    ],
    total_imports: "1500.98",
    imports_by_hsn: [
      "46.37",
      "7.73",
      "54.05",
      "58.13",
      "107.20",
      "7.23",
      "4.84",
      "6.38",
      "2.28",
      "37.12",
      "1033.76",
      "118.06",
      "17.83",
      "0.00",
      "0.00",
    ],
    total_exports: "235.94",
    exports_by_hsn: [
      "7.22",
      "0.18",
      "8.72",
      "9.15",
      "2.60",
      "3.72",
      "0.12",
      "1.63",
      "0.45",
      "7.79",
      "15.97",
      "72.64",
      "89.48",
      "4.66",
      "11.61",
    ],
  },
  {
    number: 1002,
    name: "Rare Earth Elements (REE)",
    description:
      "Rare Earth Elements (REEs) are a group of 17 elements, including the 15 lanthanides, plus scandium and yttrium. Known for their unique magnetic, luminescent, and electrochemical properties, REEs are critical for advanced technologies. They are essential components in renewable energy systems, electric vehicles, electronics, and defense applications, such as permanent magnets, batteries, and optical devices. Despite their name, REEs are relatively abundant but challenging to extract and refine economically.",
    total_resources: "7200",
    state_resources: [
      "Andhra Pradesh - 2135.7",
      "Gujarat - 39.55",
      "Jharkhand - 118.65",
      "Kerala - 1039.6",
      "Maharashtra - 2.26",
      "Odisha - 1785.4",
      "Tamil Nadu - 1395.55",
      "West Bengal - 678",
    ],
    total_reserves: "0",
    total_reserves_state: ["-"],
    primary_sources: "Monazite Sands\nPlacer Deposits",
    primary_capacity: "15",
    primary_production: "2.0",
    industrial_consumption: [
      "Magnets - 45.36%",
      "Catalysts - 17.63%",
      "Polishing Powders - 11.44%",
      "Metallurgical - 6.8%",
      "Glass - 6.49%",
      "Battery alloys - 2.68%",
      "Phosphors - 0.52%",
      "Pigments - 0.31%",
      "Others - 8.76%",
    ],
    secondary_sources: [
      "Waste Magnets",
      "Automotive Parts",
      "Electronic Waste",
      "Coal Fly Ash",
    ],
    secondary_capacity: "NA",
    main_companies: ["IREL", "KMML", "Toyotsu Rare Earth India Pvt. Ltd."],
    hsn_codes: [
      "25309040",
      "26140031",
      "28053000",
      "28469010",
      "28469020",
      "28469030",
    ],
    hsn_description: [
      "Ores and concentrates of rare earth metals",
      "Rare earth oxides including rutile sand",
      "Rare-earth metals, scandium and yttrium, whether or not intermixed or interalloyed",
      "Rare-earth oxides not elsewhere included or specified",
      "Rare-earth fluorides not elsewhere included or specified",
      "Rare-earth chlorides not elsewhere included or specified",
    ],
    total_imports: "18.79",
    imports_by_hsn: ["0", "12.92", "5.28", "0.56", "0", "0.03"],
    total_exports: "1.9",
    exports_by_hsn: ["0.00", "0.39", "0.04", "0.00", "0.00", "1.47"],
  },
];

export default elementDropdownBunch;
