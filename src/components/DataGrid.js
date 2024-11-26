import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';


export default function DataGridDemo() {
  const [rows, setRows] = useState([
  { id: 1, firstName: 'Jon', lastName: 'Snow', age: 14, role: 'User', permissions: ['Read'], status: 'Active' },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 31, role: 'Admin', permissions: ['Read', 'Write', 'Delete'], status: 'Active' },
  { id: 3, firstName: 'Arya', lastName: 'Stark', age: 11, role: 'Editor', permissions: ['Read', 'Write'], status: 'Active' },
  { id: 4, firstName: 'Daenerys', lastName: 'Targaryen', age: 25,role: 'Editor', permissions: ['Read', 'Write', 'Delete'], status: 'Active' },
  { id: 5, firstName: 'Tyrion', lastName: 'Lannister', age: 35, role: 'Editor', permissions: ['Read', 'Write'], status: 'Active' },
  { id: 6, firstName: 'Sansa', lastName: 'Stark', age: 22, role: 'Viewer', permissions: ['Read'], status: 'Inactive' },
  { id: 7, firstName: 'Bran', lastName: 'Stark', age: 17,role: 'Editor', permissions: ['Write'], status: 'Active' },
  { id: 8, firstName: 'Joffrey', lastName: 'Baratheon', age: 20,role: 'Viewer', permissions: [], status: 'Inactive' },
  { id: 9, firstName: 'Robb', lastName: 'Stark', age: 25,role: 'Editor', permissions: ['Write'], status: 'Active' },
  { id: 10, firstName: 'Jaime', lastName: 'Lannister', age: 42,role: 'Editor', permissions: ['Delete'], status: 'Active' },
  { id: 11, firstName: 'Samwell', lastName: 'Tarly', age: 29,role: 'Editor', permissions: ['Read', 'Write', 'Delete'], status: 'Active' },
  { id: 12, firstName: 'Gendry', lastName: 'Baratheon', age: 24, role: 'Viewer', permissions: ['Read'], status: 'Active' },
  { id: 13, firstName: 'Podrick', lastName: 'Payne', age: 21, role: 'Editor', permissions: ['Write', 'Read'], status: 'Inactive' },
  { id: 14, firstName: 'Varys', lastName: 'Targaryen', age: 45, role: 'Editor', permissions: ['Read', 'Write'], status: 'Active' },
  { id: 15, firstName: 'Missandei', lastName: 'Naath', age: 27, role: 'Editor', permissions: ['Read', 'Write'], status: 'Active' }
  ]);
 

  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    id: rows.length + 1,
    firstName: '',
    lastName: '',
    age: '',
    role: '',
    permissions: [],
    status: 'Active',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: name === 'permissions' ? value.split(',') : value, // Handle permissions as an array
    }));
  };

  const handleAddUser = () => {
    setRows((prevRows) => [...prevRows, { ...newUser, id: rows.length + 1 }]);
    setNewUser({ id: rows.length + 2, firstName: '', lastName: '', age: '', role: '', permissions: [], status: 'Active' });
    handleClose();
  };

  const handleEdit = (id) => {
    alert(`Editing user with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete user with ID: ${id}?`)) {
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
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
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 60,
      editable: true,
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 130,
      editable: true,
    },
    {
        field: 'permissions',
        headerName: 'Permissions',
        width: 150,
        editable: true,
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 200,
        editable: true,
      },
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
    <Box sx={{ height: '90%', width: '100%' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <h2>User Management</h2>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpen}>
          Add User
        </Button>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="First Name"
            name="firstName"
            fullWidth
            value={newUser.firstName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Last Name"
            name="lastName"
            fullWidth
            value={newUser.lastName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Age"
            name="age"
            type="number"
            fullWidth
            value={newUser.age}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Role"
            name="role"
            fullWidth
            value={newUser.role}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Permissions (comma-separated)"
            name="permissions"
            fullWidth
            value={newUser.permissions.join(',')}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddUser} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
