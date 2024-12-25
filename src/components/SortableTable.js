import React, { useState } from "react";

const SortableTable = () => {
  const [data, setData] = useState([
    { name: "John", age: 25 },
    { name: "Jane", age: 22 },
    { name: "Bob", age: 30 },
  ]);
  
  const handleSort = (key) => {
    const sortedData = [...data].sort((a, b) => a[key] > b[key] ? 1 : -1);
    setData(sortedData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>Name</th>
          <th onClick={() => handleSort("age")}>Age</th>
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
