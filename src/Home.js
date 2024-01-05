// Home.js

import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link as RouterLink } from 'react-router-dom';

const data = [
  { id: 1, name: 'Item 1', description: 'Description 1', price: '$10' },
  { id: 2, name: 'Item 2', description: 'Description 2', price: '$20' },
  // Add more data as needed
];

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 200 },
  {
    field: 'description',
    headerName: 'Description',
    width: 250,
    renderCell: (params) => {
      const handleDescriptionClick = (event) => {
        const description = params.row.description;
        window.location.href = `/details/${description}`;
      };

      return (
        <div>
          <RouterLink
            to={`/details/${params.row.description}`}
            component="button"
            onClick={handleDescriptionClick}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            {params.value}
          </RouterLink>
        </div>
      );
    },
  },
  { field: 'price', headerName: 'Price', width: 150 },
];

const Home = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>Home</h1>
      <DataGrid rows={data} columns={columns} pageSize={5} />
    </div>
  );
};

export default Home;
