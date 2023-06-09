import React from 'react';
import DataTable from './components/DataTable';

const App = () => {
  const data = [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
  ];

  return (
    <div>
      <h1>Data Table with Drag and Drop</h1>
      <DataTable data={data} />
    </div>
  );
};

export default App;