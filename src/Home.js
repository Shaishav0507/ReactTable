// // Home.js

// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Link as RouterLink } from 'react-router-dom';

// const data = [
//   { id: 1, name: 'Item 1', description: 'Description 1', price: '$10' },
//   { id: 2, name: 'Item 2', description: 'Description 2', price: '$20' },
//   // Add more data as needed
// ];

// const columns = [
//   { field: 'id', headerName: 'ID', width: 100 },
//   { field: 'name', headerName: 'Name', width: 200 },
//   {
//     field: 'description',
//     headerName: 'Description',
//     width: 250,
//     renderCell: (params) => {
//       const handleDescriptionClick = (event) => {
//         const description = params.row.description;
//         window.location.href = `/details/${description}`;
//       };

//       return (
//         <div>
//           <RouterLink
//             to={`/details/${params.row.description}`}
//             component="button"
//             onClick={handleDescriptionClick}
//             style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
//           >
//             {params.value}
//           </RouterLink>
//         </div>
//       );
//     },
//   },
//   { field: 'price', headerName: 'Price', width: 150 },
// ];

// const Home = () => {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <h1>Home</h1>
//       <DataGrid rows={data} columns={columns} pageSize={5} />
//     </div>
//   );
// };

// export default Home;






// import React, { useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70, editable: false },
//   { field: 'firstName', headerName: 'First Name', width: 130, editable: true },
//   { field: 'lastName', headerName: 'Last Name', width: 130, editable: true },
//   { field: 'age', headerName: 'Age', type: 'number', width: 90, editable: true },
//   { field: 'email', headerName: 'Email', width: 200, editable: true },
//   { field: 'phone', headerName: 'Phone', width: 150, editable: true },
//   { field: 'address', headerName: 'Address', width: 200, editable: true },
//   { field: 'city', headerName: 'City', width: 130, editable: true },
//   {
//     field: 'country',
//     headerName: 'Country',
//     width: 130,
//     editable: false,
//     renderCell: (params) => (
//       <div style={{ cursor: 'pointer' }} onClick={() => alert(`Clicked country: ${params.value}`)}>
//         {params.value}
//       </div>
//     ),
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 35,
//     email: 'john@example.com',
//     phone: '123456789',
//     address: '1234 Elm St',
//     city: 'Springfield',
//     country: 'USA',
//   },
//   // Add more rows as needed...
// ];

// const Home = () => {
//   const [pinnedColumns, setPinnedColumns] = useState([]);

//   const handleEditCellChangeCommitted = (params) => {
//     const updatedRows = rows.map((row) =>
//       row.id === params.id ? { ...row, [params.field]: params.props.value } : row
//     );
//     console.log(updatedRows);
//     // Handle updatedRows according to your application logic (e.g., update state)
//   };

//   const handleColumnPinned = (column) => {
//     const isColumnPinned = pinnedColumns.includes(column.field);
//     if (isColumnPinned) {
//       const updatedColumns = pinnedColumns.filter((col) => col !== column.field);
//       setPinnedColumns(updatedColumns);
//     } else {
//       setPinnedColumns([...pinnedColumns, column.field]);
//     }
//   };

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns.map((column) => ({
//           ...column,
//           pinned: pinnedColumns.includes(column.field),
//         }))}
//         pageSize={5}
//         checkboxSelection
//         disableSelectionOnClick
//         onEditCellChangeCommitted={handleEditCellChangeCommitted}
//         onColumnPinned={handleColumnPinned}
//       />
//     </div>
//   );
// };

// export default Home;





import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70, editable: false, pinned: true },
  { field: 'firstName', headerName: 'First Name', width: 130, editable: true },
  { field: 'lastName', headerName: 'Last Name', width: 130, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 90, editable: true },
  { field: 'email', headerName: 'Email', width: 200, editable: true, pinned: true },
  { field: 'phone', headerName: 'Phone', width: 150, editable: true },
  { field: 'address', headerName: 'Address', width: 200, editable: true },
  { field: 'city', headerName: 'City', width: 130, editable: true, pinned: true },
  {
    field: 'country',
    headerName: 'Country',
    width: 130,
    editable: false,
    renderCell: (params) => (
      <div style={{ cursor: 'pointer' }} onClick={() => alert(`Clicked country: ${params.value}`)}>
        {params.value}
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
    email: 'john@example.com',
    phone: '123456789',
    address: '1234 Elm St',
    city: 'Springfield',
    country: 'USA',
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
    email: 'john@example.com',
    phone: '123456789',
    address: '1234 Elm St',
    city: 'Springfield',
    country: 'Abu Dhabi',
  },
  // Add more rows as needed...
];

const Home = () => {
  const handleEditCellChangeCommitted = (params) => {
        const updatedRows = rows.map((row) =>
          row.id === params.id ? { ...row, [params.field]: params.props.value } : row
        );
        console.log(updatedRows);
        // Handle updatedRows according to your application logic (e.g., update state)
      };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        onEditCellChangeCommitted={handleEditCellChangeCommitted}
      />
    </div>
  );
};

export default Home;
