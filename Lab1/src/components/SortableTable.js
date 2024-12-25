import React, { useState } from "react";

const SortableTable = () => {
  const [data, setData] = useState([
    { name: "John", age: 25 },
    { name: "Jane", age: 22 },
    { name: "Bob", age: 30 },
  ]);
  const [sortConfig, setSortConfig] = useState(null);

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <table>
      <thead>
        <tr>
          <th 
            onClick={() => handleSort("name")} 
            style={{ color: sortConfig?.key === "name" ? "blue" : "black" }}
          >
            Name
          </th>
          <th 
            onClick={() => handleSort("age")}
            style={{ color: sortConfig?.key === "age" ? "blue" : "black" }}
          >
            Age
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SortableTable;
