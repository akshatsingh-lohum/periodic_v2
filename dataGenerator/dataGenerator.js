const fs = require("fs");
const Papa = require("papaparse");

const transformCSVToElements = () => {
  const data = fs.readFileSync("sample.csv", "utf8");
  const parsedData = Papa.parse(data, {
    header: true,
    skipEmptyLines: true,
  });

  return parsedData.data
    .filter((row) => row[""] && row["_1"] && row["_2"])
    .map((row) => ({
      name: row[""],
      description: row["_1"] || "",
      total_resources: row["_6"] || "0",
      total_resources_by_state: row["_7"] || "-",
      total_reserves: row["_8"] || "0",
      total_reserves_by_state: row["_9"] || "-",
      other_description: row["_16"] || "",
    }));
};

const elementDropdown = transformCSVToElements();
console.log(
  "const elementDropdown1 =",
  JSON.stringify(elementDropdown, null, 2)
);
