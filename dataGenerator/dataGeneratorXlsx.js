import XLSX from "xlsx";

export const parseExcelFile = (file) => {
  const workbook = XLSX.readFile(file);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  const elements = rawData
    .slice(1)
    .filter((row) => row[0] && row[1] && row[0] != "Atomic Number") // Ensure row has at least number and name
    .map((row) => ({
      number: row[0]?.toString() || "",
      name: row[1]?.toString() || "",
      description: row[2]?.toString() || "",
      total_resources: row[3]?.toString() || "0",
      state_resources: row[4]
        ? row[4].toString().split("\n").filter(Boolean)
        : [],
      total_reserves: row[5]?.toString() || "0",
      total_reserves_state: row[6]
        ? row[6].toString().split("\n").filter(Boolean)
        : [],
      primary_sources: row[7]?.toString() || "",
      primary_capacity: row[8]?.toString() || "0",
      primary_production: row[9]?.toString() || "0",
      industrial_consumption: row[10]
        ? row[10].toString().split("\n").filter(Boolean)
        : [],
      secondary_sources: row[11]
        ? row[11].toString().split("\n").filter(Boolean)
        : [],
      secondary_capacity: row[12]?.toString() || "0",
      main_companies: row[13]
        ? row[13].toString().split("\n").filter(Boolean)
        : [],
      hsn_codes: row[14] ? row[14].toString().split("\n").filter(Boolean) : [],
      hsn_description: row[15]
        ? row[15].toString().split("\n").filter(Boolean)
        : [],
      total_imports: row[16]?.toString() || "0",
      imports_by_hsn: row[17]
        ? row[17].toString().split("\n").filter(Boolean)
        : [],
      total_exports: row[18]?.toString() || "0",
      exports_by_hsn: row[19]
        ? row[19].toString().split("\n").filter(Boolean)
        : [],
    }));

  return elements;
};

const elementDropdown = parseExcelFile("sample.xlsx");
console.log(
  "const elementDropdown1 =",
  JSON.stringify(elementDropdown, null, 2)
);
