import React, { useEffect, useState } from "react";
import { loadCSVData } from "./data/DataLoader";
import EVDataTable from "./components/tables/EVDataTable";
import EVCharts from "./components/tables/EVCharts";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadCSVData()
      .then((fetchedData) => {
        console.log("Fetched Data in App:", fetchedData); // Log to check data structure
        setData(fetchedData);
      })
      .catch((error) => console.error("Error in App loading data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Electric Vehicle Population Dashboard
      </h1>
      {data.length > 0 ? (
        <div className="space-y-6">
          <EVCharts data={data} />
          <EVDataTable data={data} />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
