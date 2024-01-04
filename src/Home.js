// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from './DataTable'; // Replace with your DataTable component

const data = [
  { id: 1, name: 'Item 1', description: 'Description 1', price: '$10' },
  { id: 2, name: 'Item 2', description: 'Description 2', price: '$20' },
  // Add more data as needed
];

const columns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Name', accessor: 'name' },
  {
    Header: 'Description',
    accessor: 'description',
    Cell: ({ row }) => (
      <Link to={`/details/${row.original.description}`}>{row.original.description}</Link>
    ),
  },
  { Header: 'Price', accessor: 'price' },
];

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default Home;
