import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const EVCharts = ({ data }) => {
  const vehicleTypeData = [
    // Aggregate data based on vehicle types
  ];

  const growthData = [
    // Aggregate data for growth over time
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">
          Electric Vehicle Types Distribution
        </h2>
        <PieChart width={400} height={300}>
          <Pie
            data={vehicleTypeData}
            dataKey="value"
            nameKey="type"
            cx="50%"
            cy="50%"
            outerRadius={100}
          >
            {vehicleTypeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2">
          Population Growth Over Time
        </h2>
        <LineChart width={400} height={300} data={growthData}>
          <XAxis dataKey="year" />
          <YAxis />
          <Line type="monotone" dataKey="count" stroke="#82ca9d" />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default EVCharts;
