const fs = require("fs");
const Papa = require("papaparse");

const transformCSVToElements = () => {
  const data = fs.readFileSync("sample.csv", "utf8");
  const parsedData = Papa.parse(data, {
    header: true,
    skipEmptyLines: true,
  });

  return parsedData.data
    .filter((row) => row[""] !== "Atomic Number" && row["_1"] && row["_2"])
    .map((row) => ({
      number: row[""] || "",
      name: row["_1"].replace(/\*/g, "").trim(), // Remove asterisks
      description: row["_2"] || "",
      total_resources: row["_3"] || "0",
      state_resources: row["_4"]
        ? row["_4"].split(/\s+(?=\w+\s*-)/g).filter(Boolean)
        : [], // Split on state names
      total_reserves: row["_5"] || "0",
      total_reserves_state: row["_6"]
        ? row["_6"].split(/\s+(?=\w+\s*-)/g).filter(Boolean)
        : [],
      primary_sources: row["_7"] || "",
      primary_capacity: row["_8"] || "",
      primary_production: row["_9"] || "0",
      industrial_consumption: row["_10"]
        ? row["_10"].split(/\s*-\s*/g).filter(Boolean)
        : [], // Split on dashes
      secondary_sources: row["_11"] || "",
      secondary_capacity: row["_12"] || "0",
      main_companies: row["_13"] ? row["_13"].split(/\s+/).filter(Boolean) : [], // Split on whitespace
      hsn_codes: row["_14"] ? row["_14"].split(/\s+/).filter(Boolean) : [],
      hsn_description: row["_15"]
        ? row["_15"].split(/\s+(?=[A-Z])/g).filter(Boolean)
        : [], // Split on capital letters
      total_imports: row["_16"] || "0",
      imports_by_hsn: row["_17"] ? row["_17"].split(/\s+/).filter(Boolean) : [],
      total_exports: row["_18"] || "0",
      exports_by_hsn: row["_19"] ? row["_19"].split(/\s+/).filter(Boolean) : [],
    }));
};

const elementDropdown = transformCSVToElements();
console.log(
  "const elementDropdown1 =",
  JSON.stringify(elementDropdown, null, 2)
);
