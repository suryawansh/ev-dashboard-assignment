import Papa from "papaparse";

const DATA_URL =
  "https://raw.githubusercontent.com/vedant-patil-mapup/analytics-dashboard-assessment/refs/heads/main/data-to-visualize/Electric_Vehicle_Population_Data.csv";

export const loadCSVData = async () => {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const csvText = await response.text();
    const parsedData = Papa.parse(csvText, { header: true }).data;

    console.log("Parsed Data:", parsedData); // For debugging
    return parsedData;
  } catch (error) {
    console.error("Error loading CSV data:", error);
    return [];
  }
};
