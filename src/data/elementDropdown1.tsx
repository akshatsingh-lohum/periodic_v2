export interface ElementDropdownItem {
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

const elementDropdown1: ElementDropdownItem[] = [
  {
    number: 27,
    name: "Cobalt",
    description:
      "Cobalt is a critical industrial metal that has diverse applications in the Indian market. From lithium-ion batteries to special alloys, cobalt gets used extensively in the industry.\n\nCobalt has a high melting point of approx. 1500°C, and wear-resistant, and corrosion-resistant properties making it an important additive within the alloying industry.",
    total_resources: "134.73",
    state_resources: ["Jharkhand - 27", "Nagaland - 15", "Odisha - 93"],
    total_reserves: "0",
    total_reserves_state: ["-"],
    primary_sources: "Nickel Limonite/Laterite Ores",
    primary_capacity: "2.060",
    primary_production: "0",
    industrial_consumption: [
      "Lithium-Ion Batteries - 71%",
      "Metallurgical Applications  13%",
      "Catalysts - 3%",
      "Ceramics - 3%",
      "Others - 10%",
    ],
    secondary_sources: [
      "Lithium-ion Battery Scrap",
      "Industrial Scrap - Tungsten Carbide",
      "Copper Slag",
    ],
    secondary_capacity: "1.2",
    main_companies: ["Vedanta", "Lohum", "Rubamin"],
    hsn_codes: [
      "26050000",
      "28220010",
      "28220020",
      "28220030",
      "72029913",
      "72249030",
      "81052010",
      "81052020",
      "81052030",
    ],
    hsn_description: [
      "COBALT ORES AND CONCENTRATES",
      "Cobalt oxides",
      "Cobalt hydroxides",
      "Commercial cobalt oxides",
      "Ferro-cobalt",
      "Cobalt bearing high speed steel quality",
      "Cobalt mattes and other intermediate products of cobalt metallurgy",
      "Cobalt unwrought",
      "Cobalt unwrought and mattes",
    ],
    total_imports: "56.99",
    imports_by_hsn: [
      "0.01",
      "7.05",
      "3.83",
      "0.71",
      "0.05",
      "1.70",
      "15.35",
      "10.82",
      "17.47",
    ],
    total_exports: "17.88",
    exports_by_hsn: [
      "0.00",
      "0.46",
      "0.98",
      "0.00",
      "0.00",
      "0.09",
      "1.26",
      "0.56",
      "14.53",
    ],
  },
  {
    number: 3,
    name: "Lithium",
    description:
      "Lithium is the central element of modern energy storage solutions, Lithium-ion cells. It is used in EV batteries, renewable energy storage systems, stationary storage, etc. However, India’s domestic lithium reserves and production are currently minimal, making the country highly dependent on imports.\n\nLithium is the lightest metal and the least dense solid element, known for its high reactivity and ability to form compounds like lithium carbonate and lithium hydroxide. Its high electrochemical potential makes it ideal for energy storage applications, particularly in lithium-ion batteries.",
    total_resources: "59",
    state_resources: [
      "Jammu & Kashmir - 59",
      "Jharkhand - 1.6",
      "Rajasthan and Karnataka - Unexplored",
    ],
    total_reserves: "0",
    total_reserves_state: ["-"],
    primary_sources: "Spodumene Pegamites\nLithium mica and clay",
    primary_capacity: "0",
    primary_production: "0",
    industrial_consumption: [
      "Lithium-ion Batteries - 87%",
      "Ceramics and Glass - 4%",
      "Lubricating Grease - 2%",
      "Others - 7%",
    ],
    secondary_sources: ["Lithium-ion Battery Scrap", "Spent Lithium Grease"],
    secondary_capacity: "0.189189189189189",
    main_companies: ["Lohum"],
    hsn_codes: [
      "28252000",
      "28369100",
      "29043300",
      "29043400",
      "85065000",
      "85076000",
    ],
    hsn_description: [
      "Lithium oxide and hydroxide",
      "Lithium carbonates",
      "Lithium perfluorooctane sulphonate",
      "Lithium perfluorooctane sulphonate",
      "Lithium primary cells and primary batteries",
      "Lithium-ion",
    ],
    total_imports: "3029.96",
    imports_by_hsn: ["29.95", "24.62", "0.0", "0.0", "33.41", "2,941.98"],
    total_exports: "155.06",
    exports_by_hsn: ["4.12", "7.39", "0.00", "0.00", "6.03", "137.52"],
  },
  {
    number: 28,
    name: "Nickel",
    description:
      "Nickel is a silvery industrial metal that has been a key component of our daily lives for decades. It is primarily used in stainless steel production, high-performance alloys, and as a key component in rechargeable batteries, including nickel-rich lithium-ion cathodes. While India has limited domestic production and relies heavily on imports, nickel demand is rapidly growing due to its critical role in the industry.\n\nNickel is a strong, corrosion-resistant metal known for its high melting point and excellent thermal and electrical conductivity. It is widely used in alloys for its durability and ability to withstand extreme conditions. Nickel’s electrochemical properties make it a key component in rechargeable batteries.",
    total_resources: "1301",
    state_resources: [
      "Jharkhand - 60",
      "Karnataka - 1",
      "Nagaland - 30",
      "Odisha - 1210",
    ],
    total_reserves: "0",
    total_reserves_state: ["-"],
    primary_sources: "Nickeliferous limonite\nUranium Deposits",
    primary_capacity: "6.65",
    primary_production: "NA",
    industrial_consumption: [
      "Stainless Steel - 66%",
      "Batteries - 17%",
      "Nickel Alloys - 6%",
      "Plating - 5%",
      "Alloy Steel - 3%",
      "Others - 3%",
    ],
    secondary_sources: ["Lithium-ion Battery Scrap", "Spent Catalyst"],
    secondary_capacity: "1",
    main_companies: ["Vedanta", "Lohum"],
    hsn_codes: [
      "26040000",
      "28254000",
      "28273500",
      "28332400",
      "38151100",
      "72026000",
      "72192212",
      "72192292",
      "72192320",
      "72193220",
      "72193320",
      "72193420",
      "72193520",
      "72201122",
      "72201222",
      "72202022",
      "72209022",
      "72210012",
      "72221112",
      "72221192",
      "72221912",
      "72221992",
      "72222012",
      "72222092",
      "72223012",
      "72223092",
      "74040025",
      "74094000",
      "74112200",
      "74199920",
      "75011000",
      "75012000",
      "75021000",
      "75022010",
      "75022030",
      "75022040",
      "75030010",
      "75040000",
      "75052100",
      "75052200",
      "75061000",
      "75062000",
      "75071100",
      "75071200",
      "75081000",
      "75089010",
      "75089020",
      "75089030",
      "75089090",
      "84829111",
      "85073000",
      "85074000",
      "85075000",
    ],
    hsn_description: [
      "NICKEL ORES AND CONCENTRATES",
      "Nickel oxides and hydroxides",
      "Of nickel Chlorides",
      "Of nickel sulphates",
      "With nickel or nickel compounds as the active substance",
      "Ferro-nickel",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Nickel chromium austenitic type",
      "Copper nickel scrap, including the following: new cupro nickel covered by ISRI code word Dandy",
      "Of copper-nickel base alloys (cupro-nickel) or copper-nickel-zinc base alloys (nickel silver)",
      "Of copper-nickel base alloys (cupro-nickel) or copper-nickel-zinc base alloys (nickel silver)",
      "Articles of copper alloys electro-plated with nickel-silver",
      "Nickel mattes",
      "Nickel oxide sinters and other intermediate products of nickel metallurgy",
      "Nickel, not alloyed",
      "Cupro-nickel containing more than 40%",
      "Nickel alloys containing more than 40% by weight of nickel",
      "Nickel alloys containing more than 10 % but not more than 40 % by weight of nickel",
      "Nickel scrap",
      "NICKEL POWDERS AND FLAKES",
      "Of nickel, not alloyed",
      "Of nickel alloys",
      "Of nickel, not alloyed",
      "Of nickel alloys",
      "Of nickel, not alloyed",
      "Of nickel alloys",
      "Cloth, grill and netting, of nickel wire",
      "Electroplating anodes of nickel",
      "Blanks ordinarily used for manufacturing tubes and pipes of nickel",
      "Nickel screen",
      "Other articles of nickel and nickel alloy",
      "Of nickel alloys",
      "Nickel-cadmium",
      "Nickel-iron",
      "Nickel-metal hydride",
    ],
    total_imports: "1709.5",
    imports_by_hsn: [
      "0.00",
      "42.29",
      "1.70",
      "7.94",
      "67.70",
      "284.71",
      "5.69",
      "0.01",
      "0.13",
      "1.58",
      "53.58",
      "26.31",
      "12.10",
      "0.00",
      "1.49",
      "5.38",
      "7.78",
      "0.46",
      "1.34",
      "0.16",
      "0.06",
      "0.47",
      "3.46",
      "0.42",
      "0.08",
      "0.34",
      "20.93",
      "7.67",
      "2.37",
      "0.00",
      "0.00",
      "0.27",
      "686.74",
      "0.18",
      "0.91",
      "0.02",
      "44.22",
      "22.78",
      "0.24",
      "49.24",
      "15.56",
      "159.32",
      "1.09",
      "79.34",
      "0.20",
      "0.37",
      "0.00",
      "0.32",
      "81.36",
      "0.20",
      "4.36",
      "0.00",
      "6.63",
    ],
    total_exports: "1330.63",
    exports_by_hsn: [
      "0.04",
      "0.50",
      "0.32",
      "3.44",
      "69.95",
      "63.62",
      "81.30",
      "0.02",
      "18.72",
      "38.60",
      "106.76",
      "37.95",
      "3.77",
      "0.48",
      "0.88",
      "62.03",
      "0.01",
      "37.15",
      "7.6",
      "4.85",
      "0.6",
      "47.62",
      "369.86",
      "0.63",
      "190.05",
      "0.02",
      "1.86",
      "5.33",
      "22.19",
      "0.00",
      "0.11",
      "0.12",
      "7.32",
      "0.00",
      "2.58",
      "0.00",
      "13.75",
      "15.49",
      "8.85",
      "32.96",
      "0.28",
      "5.31",
      "0.04",
      "22.25",
      "0.01",
      "0.05",
      "0.00",
      "7.75",
      "8.14",
      "0.24",
      "28.94",
      "0.00",
      "0.29",
    ],
  },
  {
    number: 29,
    name: "Copper",
    description:
      "Copper is a versatile, highly conductive metal known for its excellent electrical and thermal properties. It is widely used in electrical wiring, electronics, plumbing, and renewable energy technologies such as solar panels and wind turbines. Copper is also essential for alloy production, including brass and bronze, and plays a key role in industrial applications due to its durability, corrosion resistance, and recyclability.",
    total_resources: "12197",
    state_resources: [
      "Andhra Pradesh - 113.7",
      "Arunachal Pradesh - 0.02",
      "Gujarat - 200.74",
      "Haryana - 179.01",
      "Jharkhand - 2779.66",
      "Karnataka - 245.86",
      "Madhya Pradesh - 3666.86",
      "Maharashtra - 158.08",
      "Meghalaya - 9",
      "Nagaland - 15",
      "Odisha - 97.03",
      "Rajasthan - 4635.6",
      "Sikkim - 21.47",
      "Tamil Nadu - 3.81",
      "Telangana - 9.12",
      "Uttarakhand - 60.04",
      "West Bengal - 2.09",
    ],
    total_reserves: "2161",
    total_reserves_state: [
      "Jharkhand - 107.45",
      "Madhya Pradesh - 1571.04",
      "Rajasthan - 483.08",
    ],
    primary_sources: "Chalcopyrite\nCopper ore (below 1.85% Cu)",
    primary_capacity: "1028",
    primary_production: "509",
    industrial_consumption: [
      "Equipment - 32%",
      "Construction - 28%",
      "Infrastructure - 16%",
      "Transportation - 12%",
      "Industrial - 12%",
    ],
    secondary_sources: [
      "Copper Industrial Scrap",
      "Lithium-ion Battery Scrap",
      "Electronic Scrap",
      "Copper Mattes",
    ],
    secondary_capacity: "107",
    main_companies: ["HCL", "Sterlite Copper", "Hindalco Industries", "Birla"],
    hsn_codes: [
      "26030000",
      "28255000",
      "28274110",
      "28332500",
      "38089250",
      "72299016",
      "74010010",
      "74010090",
      "74020010",
      "74032100",
      "74032900",
      "74040012",
      "74040025",
      "74050000",
      "74071010",
      "74071020",
      "74071030",
      "74071040",
      "74081110",
      "74081910",
      "74082210",
      "74094000",
      "74099000",
      "74101100",
      "74101200",
      "74102100",
      "74102200",
      "74111000",
      "74112100",
      "74112200",
      "74121000",
      "74122090",
      "74130000",
      "74181022",
      "74181023",
      "74191021",
      "74199920",
      "74199940",
      "74199990",
      "76020010",
      "84425040",
    ],
    hsn_description: [
      "COPPER ORES AND CONCERTRATES",
      "Copper oxides and hydroxides",
      "Copper oxychloride",
      "Of copper",
      "Copper oxychloride",
      "Copper coated wire",
      "Copper mattes",
      "Cement copper (precipitated copper)",
      "Blister copper",
      "Copper-zinc base alloys (brass)",
      "Other copper alloys (other than master alloys of heading 7405)",
      "Copper scrap, namely the following copper wire scrap covered by ISRI code words Barley, Berry and Birch; heavy copper scrap covered by ISRI code word Candy;unalloyed copper scrap covered by ISRI code word Cliff; copper wire nodules scrap covered by ISRI code words Clove, Cobra and Cocoa; light copper scrap covered by ISRI Code word Dream; muntz metal tubes covered by ISRI code word Palms",
      "Copper nickel scrap, including the following: new cupro nickel clips and solids covered by ISRI code word Dandy; cupro nickel solids covered by ISRI code word Daunt; soldered cupro-nickel solids covered by ISRI code word Delta; cupro nickel spinnings, turnings, borings covered by ISRI code word Decoy;",
      "MASTER ALLOYS OF COPPER",
      "Electrolytic copper rods or black copper rods",
      "Other copper rods",
      "Copper bars (excluding hollow bars)",
      "Hollow bars of copper",
      "Copper weld wire",
      "Copper weld wire",
      "Silver plated flattened wire of copper (lametta)",
      "Copper-nickel base alloys (cupro-nickel) or copper-nickel-zinc base alloys (nickel silver)",
      "Of other copper alloys",
      "Of refined copper",
      "Of copper alloys",
      "Of refined copper",
      "Of copper alloys",
      "Of refined copper",
      "Of copper-zinc base alloys (brass)",
      "Of copper-nickel base alloys (cupro-nickel) or copper-nickel-zinc base alloys (nickel silver)",
      "Of refined copper",
      "Fittings of bronze or other alloys of copper",
      "STRANDED WIRE, CABLES, PLATED BANDS AND THE LIKE, OF COPPER, NOT ELECTRICALLY INSULATED",
      "Utensils of Copper",
      "Utensils of other copper alloys",
      "Of copper chains",
      "Articles of copper alloys electro-plated with nickel-silver",
      "Copper worked articles",
      "Other articles of copper",
      "Aluminium scrap, namely the following clean aluminium lithographic sheets covered by ISRI code word Tablet; new, clean aluminium lithographic sheets covered by ISRI code word Tabloid; mixed low copper aluminium clippings and solids covered by ISRI code word Taboo; clean mixed old alloy sheet aluminium covered by ISRI code word Taint/Tabor; new aluminium can stock covered by ISRI code word Take; old can stock covered by ISRI code word Talap; shredded aluminium used beverages can (U) scrap covered",
      "Highly polished copper sheets for making blocks",
    ],
    total_imports: "8778.31",
    imports_by_hsn: [
      "3,133.22",
      "3.51",
      "0.00",
      "0.18",
      "0.00",
      "3.01",
      "0.00",
      "0.12",
      "4.16",
      "1.41",
      "3.66",
      "1,058.64",
      "20.93",
      "2.73",
      "30.16",
      "9.84",
      "9.09",
      "1.70",
      "0.48",
      "1.52",
      "0.01",
      "7.67",
      "33.42",
      "7.71",
      "1.48",
      "68.39",
      "9.89",
      "823.18",
      "9.95",
      "2.37",
      "2.79",
      "14.03",
      "15.5",
      "0.02",
      "0.01",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "3497.53",
      "0.00",
    ],
    total_exports: "512.21",
    exports_by_hsn: [
      "29.34",
      "4.81",
      "5.02",
      "5.98",
      "7.87",
      "4.96",
      "15.50",
      "0.00",
      "0.00",
      "61.35",
      "38.41",
      "64.60",
      "1.86",
      "4.18",
      "4.95",
      "7.58",
      "9.45",
      "0.01",
      "0.12",
      "6.95",
      "0.03",
      "5.33",
      "12.29",
      "43.63",
      "9.10",
      "0.04",
      "0.08",
      "51.10",
      "27.17",
      "22.19",
      "2.27",
      "17.70",
      "34.67",
      "5.37",
      "0.47",
      "0.00",
      "0.00",
      "0.00",
      "0.00",
      "7.83",
      "0.00",
    ],
  },
  {
    number: 50,
    name: "Tin",
    description:
      "Tin is a versatile, corrosion-resistant metal primarily used as a protective coating in tin-plating and soldering applications. Its malleability and low melting point make it ideal for joining electronic components in circuits. Tin is also a key material in manufacturing alloys such as bronze and pewter. With emerging uses in energy storage and advanced materials, tin plays an essential role in traditional and modern industries.",
    total_resources: "103.756",
    state_resources: [
      "Chhattisgarh - 16.883",
      "Haryana - 86.220",
      "Odisha - 0.652",
    ],
    total_reserves: "0.974",
    total_reserves_state: ["Chattisgarh - 0.974"],
    primary_sources: "Cassiterite\nOther Mineral Ores like Topaz, Fluorite",
    primary_capacity: "NA",
    primary_production: "0.004868",
    industrial_consumption: [
      "Solders - 50%",
      "Chemicals - 16%",
      "Tinplate - 12%",
      "Batteries - 7%",
      "Tin-copper alloys - 7%",
      "Others - 8%",
    ],
    secondary_sources: [
      "Tin plate Scrap",
      "Tin Plate Manufacturing Waste",
      "Alloys",
      "Lead Acid Battery Scrap",
    ],
    secondary_capacity: "NA",
    main_companies: ["Chhattisgarh Mineral", " Precious Minerals and Smelting"],
    hsn_codes: [
      "26090000",
      "28259010",
      "72043000",
      "72299011",
      "73101010",
      "73102110",
      "73102910",
      "80011090",
      "80012000",
      "80020010",
    ],
    hsn_description: [
      "TIN ORES AND CONCENTRATES",
      "Tin oxide",
      "Waste and scrap of tinned iron or steel",
      "Tinned wire",
      "Tin plate containers",
      "Tin plate containers",
      "Tin plate containers",
      "Ingots, pigs, slabs and other primary forms of tin",
      "Tin alloys",
      "Tin scrap, namely the following block tin covered by ISRI code word Ranch; high tin base babbit covered by ISRI code word Raves; pewter covered by ISRI code word Ranks",
    ],
    total_imports: "339.51",
    imports_by_hsn: [
      "0.00",
      "3.28",
      "0.38",
      "0.22",
      "0.33",
      "2.72",
      "10.92",
      "318.66",
      "3.00",
      "0.00",
    ],
    total_exports: "30.75",
    exports_by_hsn: [
      "0.00",
      "1.27",
      "0.02",
      "1.90",
      "1.34",
      "2.36",
      "12.80",
      "2.41",
      "8.65",
      "0.00",
    ],
  },
  {
    number: 42,
    name: "Molybdenum",
    description:
      "Molybdenum is a durable, high-strength metal known for its excellent resistance to heat and corrosion. It is widely used as an alloying element in steel to enhance strength, toughness, and wear resistance, making it essential in construction, aerospace, and energy industries. Molybdenum also plays a critical role in catalysts, electronics, and chemical applications, demonstrating its versatility and importance in modern technology.",
    total_resources: "10.1232373336665",
    state_resources: [
      "Karnataka - 1.032",
      "Madhya Pradesh - 3.012",
      "Tamil Nadu - 6.09",
    ],
    total_reserves: "0",
    total_reserves_state: ["-"],
    primary_sources: "Copper Ore\nLead Ore\nZinc Ore",
    primary_capacity: "NA",
    primary_production: "0.436",
    industrial_consumption: [
      "Stainless Steel - 25%",
      "Engineering Steel - 38%",
      "Chemicals - 13%",
      "Foundries - 8%",
      "Tool Steels - 8%",
      "Mo-Metals - 5%",
      "Nickel Alloys - 3%",
    ],
    secondary_sources: ["Steel Scrap", "Alloy Scrap"],
    secondary_capacity: "0",
    main_companies: [
      "Uranium Corporation of India Ltd",
      "Bharati Ferro Alloys",
      "Oswal Minerals Ltd",
    ],
    hsn_codes: ["28257010", "72027000", "81029400"],
    hsn_description: [
      "Molybdenum trioxide",
      "Ferro-molybdenum",
      "Unwrought molybdenum, including bars and rods obtained simply by sintering",
    ],
    total_imports: "127.88",
    imports_by_hsn: ["2.29", "105.91", "19.68"],
    total_exports: "57.26",
    exports_by_hsn: ["32.53", "24.52", "0.21"],
  },
  {
    number: 23,
    name: "Vanadium",
    description:
      "Vanadium is a durable and corrosion-resistant metal primarily used as an alloying agent in steel to enhance strength, toughness, and heat resistance. It is essential in producing high-strength steel for construction, automotive, and aerospace industries. Vanadium is also gaining prominence in energy storage, particularly in vanadium redox flow batteries (VRFBs), due to its stability and efficiency in large-scale renewable energy storage systems. Its versatility makes it a critical material for modern applications.",
    total_resources: "36.1833654167583",
    state_resources: [
      "Karnataka - 27.72",
      "Maharashtra - 0.86",
      "Odisha - 7.59",
    ],
    total_reserves: "0",
    total_reserves_state: ["-"],
    primary_sources: "Titaniferous Magnetite",
    primary_capacity: "NA",
    primary_production: "NA",
    industrial_consumption: [
      "HSLA steel - 50%",
      "Special steels - 38%",
      "Superalloys - 5%",
      "Chemicals - 3%",
      "Cast Iron - 2%",
      "Others - 2%",
    ],
    secondary_sources: [
      "Steel Slag",
      "Spent Catalyst",
      "Fly Ash",
      "Vanadium Slag (Bauxite Processing)",
    ],
    secondary_capacity: "0",
    main_companies: ["NALCO", "Vedanta", "Arth Metallurgicals"],
    hsn_codes: ["26159010", "28253010", "72029200"],
    hsn_description: [
      "Vanadium ores and concentrates",
      "Vanadium pentaoxide flakes",
      "Ferro-vanadium",
    ],
    total_imports: "43.91",
    imports_by_hsn: ["0.93", "12.54", "30.44"],
    total_exports: "1.06",
    exports_by_hsn: ["0.00", "0.22", "0.84"],
  },
  {
    number: 22,
    name: "Titanium",
    description:
      "Titanium is a strong, lightweight, and corrosion-resistant metal widely used in aerospace, medical, and industrial applications. Known for its high strength-to-weight ratio and biocompatibility, it is ideal for aircraft, implants, and high-performance alloys. Titanium's resistance to extreme temperatures and harsh environments also makes it valuable in chemical processing and marine industries. Its unique properties position it as a critical material for advanced technologies.",
    total_resources: "29940",
    state_resources: [
      "Andhra Pradesh",
      "Kerala",
      "Maharashtra",
      "Gujarat",
      "Odisha",
      "Tamil Nadu",
    ],
    total_reserves: "N/A",
    total_reserves_state: ["-"],
    primary_sources: "Ilmenite\nRutile",
    primary_capacity: "59.8142714046027",
    primary_production: "0.3",
    industrial_consumption: [
      "Titanium pigment - 93%",
      "Titanium metal - 2.5%",
      "Other refined products - 4.5%",
    ],
    secondary_sources: [
      "Titanium Scrap",
      "Titanium Sponge Scrap",
      "Titanium Turnings",
      "Rutile Scraps",
    ],
    secondary_capacity: "NA",
    main_companies: [
      "Travancore Titanium Products Limited (TTPL)",
      "VV Titanium Pigments",
    ],
    hsn_codes: ["28230010", "32061110", "72029100", "81082000", "81089010"],
    hsn_description: [
      "Titanium dioxide",
      "Pearlsent pigment (titanium dioxide, coated micananeous and lustres pearl pigment)",
      "Ferro-titanium and Ferro-silico-titanium",
      "Unwrought titanium; powders",
      "Titanium, wrought",
    ],
    total_imports: "676.95",
    imports_by_hsn: ["57.05", "587.13", "6.41", "9.45", "16.91"],
    total_exports: "27.77",
    exports_by_hsn: ["12.83", "4.05", "8.68", "0.03", "2.18"],
  },
  {
    number: 40,
    name: "Zirconium",
    description:
      "Zirconium is a corrosion-resistant, strong, and heat-tolerant metal widely used in nuclear reactors due to its low neutron absorption and stability at high temperatures. It is also employed in chemical processing, aerospace, and medical applications, including surgical instruments and implants. Zirconium's high resistance to corrosion makes it valuable for advanced ceramics, coatings, and industrial processes, positioning it as a critical material in modern industries.",
    total_resources: "33710",
    state_resources: [
      "Andhra Pradesh",
      "Kerala",
      "Maharashtra",
      "Gujarat",
      "Odisha",
      "Tamil Nadu",
    ],
    total_reserves: "0",
    total_reserves_state: ["-"],
    primary_sources: "Ilmenite\nRutile\nMonazite",
    primary_capacity: "1.464",
    primary_production: "0.65",
    industrial_consumption: [
      "Ceramics - 46%",
      "Chemicals - 20%",
      "Refractories - 16%",
      "Foundry - 12%",
      "Other - 6%",
    ],
    secondary_sources: ["Zircaloy Scrap", "Zirconium Alloy Scrap"],
    secondary_capacity: "0",
    main_companies: ["IREL", "KMML", "V.V. Minerals"],
    hsn_codes: ["26151000", "28256020", "72029915", "72029921", "81092000"],
    hsn_description: [
      "Zirconium ores and concentrates",
      "Zirconium dioxide",
      "Ferro-zirconium",
      "Ferro-silico-zirconium",
      "Unwrought zirconium; powders",
    ],
    total_imports: "204.45",
    imports_by_hsn: ["168.39", "34.66", "0.00", "1.40", "0.00"],
    total_exports: "0.91",
    exports_by_hsn: ["0.60", "0.16", "0.00", "0.15", "0.00"],
  },
  {
    number: 6,
    name: "Graphite",
    description:
      "Graphite is a versatile, naturally occurring form of carbon known for its excellent conductivity, lubricity, and thermal stability. Widely used in batteries (especially lithium-ion), refractories, and electrodes, it is essential in industries like energy storage, metallurgy, and electronics. Its unique properties make it indispensable for modern technologies and emerging applications like electric vehicles and renewable energy systems.",
    total_resources: "211623",
    state_resources: [
      "Andhra Pradesh - 1138.275",
      "Arunachal Pradesh - 76318.275",
      "Chhattisgarh - 6.612",
      "Gujarat - 3355.805",
      "Jammu & Kashmir - 62740.555",
      "Jharkhand - 20006.367",
      "Karnataka - 992.632",
      "Kerala - 1434.975",
      "Madhya Pradesh - 12640",
      "Maharashtra - 1160",
      "Odisha - 19981.121",
      "Rajasthan - 1913.554",
      "Tamil Nadu - 9705.279",
      "Telangana - 219.455",
      "Uttarakhand - 10.7",
    ],
    total_reserves: "8563",
    total_reserves_state: [
      "Chattisgarh - 5.282",
      "Jharkhand - 2604.079",
      "Kerala - 15.443",
      "Odhisa - 2838.414",
      "Tamil Nadu - 3100.193",
    ],
    primary_sources: "Sedimentary Deposits",
    primary_capacity: "98",
    primary_production: "57",
    industrial_consumption: [
      "Lithium-ion Battery Anodes - 25%",
      "Refractories - 40%",
      "Lubricants, Brushes, Gasket, Retardants etc. - 35%",
    ],
    secondary_sources: ["Lithium-ion Battery Scrap", "Spent Electrode"],
    secondary_capacity: "NA",
    main_companies: [
      "Graphite India Ltd.",
      " Tamil Nadu Minerals Limited",
      " Pradhan Industries",
    ],
    hsn_codes: [
      "25041010",
      "25041020",
      "25049010",
      "38011000",
      "38012000",
      "68151010",
      "68151020",
      "69029020",
      "69029040",
    ],
    hsn_description: [
      "Graphite, crystalline",
      "Graphite, amorphous",
      "Graphite, micronised",
      "Artificial graphite",
      "Colloidal or semi-colloidal graphite",
      "Graphite filter candle",
      "Non-electrical articles of graphite",
      "Graphite bricks and shapes",
      "Clay graphite stopper heads",
    ],
    total_imports: "82.25",
    imports_by_hsn: [
      "7.30",
      "3.12",
      "0.00",
      "66.90",
      "3.61",
      "0.00",
      "0.00",
      "1.32",
      "0.00",
    ],
    total_exports: "28.51",
    exports_by_hsn: [
      "0.28",
      "0.03",
      "0.00",
      "28.02",
      "0.00",
      "0.00",
      "0.00",
      "0.03",
      "0.15",
    ],
  },
];

export default elementDropdown1;
