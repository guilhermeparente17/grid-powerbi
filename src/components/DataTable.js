import React, { useState } from 'react';

const DataTable = () => {
  const [rows, setRows] = useState([
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
  ]);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, index) => {
    event.preventDefault();

    const draggedRowIndex = event.dataTransfer.getData('text/plain');
    const draggedRow = rows[draggedRowIndex];

    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows.splice(draggedRowIndex, 1);
      updatedRows.splice(index, 0, draggedRow);
      return updatedRows;
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr
            key={row.id}
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, index)}
          >
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
