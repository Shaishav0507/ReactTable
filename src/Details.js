// Details.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();

  // Dummy data for the table
  const tableData = [
    { id: 1, prop1: 'Value 1', prop2: 'Value 2' },
    { id: 2, prop1: 'Value 3', prop2: 'Value 4' },
    // Add more data as needed
  ];

  return (
    <div>
      <h1>Details</h1>
      <Link to="/">Go Back</Link>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Property 1</th>
            <th>Property 2</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.prop1}</td>
              <td>{item.prop2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
