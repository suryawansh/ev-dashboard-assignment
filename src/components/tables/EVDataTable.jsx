import React from "react";

const EVDataTable = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg overflow-auto">
      <h2 className="text-xl font-semibold mb-4">
        Electric Vehicle Population Data Table
      </h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border p-2">Make</th>
            <th className="border p-2">Model</th>
            <th className="border p-2">Year</th>
            <th className="border p-2">Type</th>
            {/* Add additional headers based on your CSV columns */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.Make}</td>
              <td className="border p-2">{item.Model}</td>
              <td className="border p-2">{item.Year}</td>
              <td className="border p-2">{item.Type}</td>
              {/* Add additional columns based on your CSV data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EVDataTable;
