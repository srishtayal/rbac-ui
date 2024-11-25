import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

export default function Permissions() {
  const [rows, setRows] = useState([
  { id: 1, firstName: 'Jon', lastName: 'Snow', age: 14, role: 'User', permissions: ['Read'] },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 31, role: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
  { id: 3, firstName: 'Arya', lastName: 'Stark', age: 11, role: 'Editor', permissions: ['Read', 'Write'] },
  { id: 4, firstName: 'Daenerys', lastName: 'Targaryen', age: 25, permissions: ['Read', 'Write', 'Delete'] },
  { id: 5, firstName: 'Tyrion', lastName: 'Lannister', age: 35, permissions: ['Read', 'Write'] },
  { id: 6, firstName: 'Sansa', lastName: 'Stark', age: 22, permissions: ['Read'] },
  { id: 7, firstName: 'Bran', lastName: 'Stark', age: 17, permissions: ['Write'] },
  { id: 8, firstName: 'Joffrey', lastName: 'Baratheon', age: 20, permissions: [] },
  { id: 9, firstName: 'Robb', lastName: 'Stark', age: 25, permissions: ['Write'] },
  { id: 10, firstName: 'Jaime', lastName: 'Lannister', age: 42, permissions: ['Delete'] },
  { id: 11, firstName: 'Samwell', lastName: 'Tarly', age: 29, permissions: ['Read', 'Write', 'Delete'] },
  { id: 12, firstName: 'Gendry', lastName: 'Baratheon', age: 24, permissions: ['Read'] },
  { id: 13, firstName: 'Podrick', lastName: 'Payne', age: 21, permissions: ['Write', 'Read'] },
  { id: 14, firstName: 'Varys', lastName: 'Targaryen', age: 45, permissions: ['Read', 'Write'] },
  { id: 15, firstName: 'Missandei', lastName: 'Naath', age: 27, permissions: ['Read', 'Write'] },
  { id: 16, firstName: 'Theon', lastName: 'Greyjoy', age: 30, permissions: ['Read', 'Write'] },
  { id: 17, firstName: 'Yara', lastName: 'Greyjoy', age: 28, permissions: ['Delete'] },
  { id: 18, firstName: 'Tormund', lastName: 'Giantsbane', age: 34, permissions: ['Read', 'Write'] },
  { id: 19, firstName: 'Jorah', lastName: 'Mormont', age: 40, permissions: ['Read', 'Write'] },
  { id: 20, firstName: 'Brienne', lastName: 'Tarth', age: 35, permissions: ['Write', 'Delete'] }
  ]);

  const handleEdit = (id) => {
    alert(`Editing user with ID: ${id}`);
    // Implement the logic to edit the user here.
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete user with ID: ${id}?`)) {
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 150,
      editable: true,
    },
    {
        field: 'permissions',
        headerName: 'Permissions',
        width: 200,
        editable: true,
      }
      ,
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => handleEdit(params.row.id)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="tertiary"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
