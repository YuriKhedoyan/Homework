import React, { useState } from 'react'
import './components/Assets/style.css';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import SpeedDial from '@mui/material/SpeedDial';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FaceIcon from '@mui/icons-material/Face';
import KeyIcon from '@mui/icons-material/Key';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import NativeSelect from '@mui/material/NativeSelect';

function App() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newUserLastName, setNewUserLastName] = useState('');
  const [newUserEmail, setUserEmail] = useState('');
  const [newUserRole, setUserRole] = useState('User');
  const [users, addUsers] = useState([]);
  const [deleteWindow, setDeleteWindow] = useState(false);
  const [deleteUserName, setDeleteUserName] = useState('');
  const [settingsWindow, setSettingsWindow] = useState(false);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = () => setOpen(true);
  const handleOpenDeleteWindow = () => setDeleteWindow(true);
  const handleCloseDeleteWindow = () => setDeleteWindow(false);
  const handleOpenSettingsWindow = () => setSettingsWindow(true);
  const handleCloseSettingsWindow = () => setSettingsWindow(false);

  const createNewUser = (id, userName, userLastName, userEmail, userRole) => {
    users.push({ id, userName, userLastName, userEmail, userRole, status: true });
  };

  const deleteUser = e => {
    e.preventDefault();
    users.forEach((el, i) => {
      if (el.userName === deleteUserName && deleteUserName !== '') {
        users.splice(i, 1);
        setDeleteUserName('');
        handleCloseDeleteWindow();
      }
    })
  }

  const handleUserNameChange = e => setNewUserName(e.target.value.trim());

  const handleLastNameChange = e => setNewUserLastName(e.target.value.trim());

  const handleEmailChange = e => setUserEmail(e.target.value.trim());

  const submit = e => {
    e.preventDefault();
    if (newUserName !== '' && newUserLastName !== '' && newUserEmail !== '') {
      createNewUser(id, newUserName, newUserLastName, newUserEmail, newUserRole);
      setOpen(false);
      setId(id + 1);
      setNewUserName('');
      setNewUserLastName('');
      setUserEmail('');
      setUserRole('User');
    } else {
      alert('Fill in all fileds');
    }
  }

  return (
    <>
      <div id="sc1">
        <Grid container spacing={2}>
          <Grid item md={8} id="grid1">
            <h1 id="headerText">Project Access</h1>
            <IconButton aria-label="delete" onClick={handleOpen} id="btn">
              <AddIcon />
            </IconButton>
            <br></br>
            <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
              <Box sx={style}>
                <form onSubmit={submit}>
                  <h1>Invite New User</h1>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    <span style={{ display: "flex" }}>
                      <div style={{ padding: "15px" }}><FaceIcon></FaceIcon></div>
                      <TextField id="filled-basic" label="* First Name" variant="filled" style={{ width: "300px" }} value={newUserName} onChange={handleUserNameChange} />
                      <p> </p>
                      <TextField id="filled-basic" label="* Last Name" variant="filled" style={{ width: "300px" }} value={newUserLastName} onChange={handleLastNameChange} />
                    </span>
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    <span style={{ display: "flex" }}>
                      <div style={{ padding: "15px" }}><AlternateEmailIcon></AlternateEmailIcon></div>
                      <TextField id="filled-basic" label="* Email" variant="filled" style={{ width: "610px" }} value={newUserEmail} onChange={handleEmailChange} />
                    </span>
                  </Typography>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    <span style={{ display: "flex" }}>
                      <div style={{ padding: "15px" }}><KeyIcon></KeyIcon></div>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Role" variant="filled" style={{ width: "310px" }} value={newUserRole} onChange={e => setUserRole(e.target.value)} >
                          <MenuItem value={"Admin"}>Admin</MenuItem>
                          <MenuItem value={"User"}>User</MenuItem>
                        </Select>

                      </FormControl>
                    </span>
                  </Typography>
                  <Button variant='contained' type='submit'>Submit</Button>
                  {newUserName !== '' && newUserLastName !== '' && newUserEmail !== '' ? <><p id='success' className='texts'>Good to go</p></> : <><p id='error' className='texts'>Fill in all fileds</p></>}
                </form>
              </Box>
            </Modal>
          </Grid>
          <Grid item md={4}>
            <div id="asd">
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={users.map((option) => option.label)}
                renderInput={(params) => (
                  <TextField id="standard-basic" label="Type to filter table" variant="standard" InputProps={{ ...params.InputProps, type: 'search' }} />
                )}
              />
              <p><SearchIcon></SearchIcon></p>
            </div>
          </Grid>
        </Grid>
      </div>
      <div id="sc2">
        <div className='sc2MainDiv'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" className='tableText' id='useName'><b>USER</b></TableCell>
                  <TableCell align="center" className='tableText tc'>ROLE</TableCell>
                  <TableCell align="center" className='tableText tc'>STATUS</TableCell>
                  <TableCell align="center" className='tableText tc'>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users ? users.map((user, i) => (
                  <>
                    <TableRow
                      key={user?.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      {/* <span>
                      <AccountCircleRoundedIcon className='AccountCircleRoundedIcon' sx={{ fontSize: 50, color: "gray" }}></AccountCircleRoundedIcon>
                    </span> */}
                      <TableCell component="th" scope="row">
                        <div className='accountCircle'>
                          <div>
                            <p className='name'>{user?.userName}</p>
                            <p className='email'>{user?.userEmail}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="center" className='tableText'>{user?.userRole === 'Admin' ? <div className='userRoleSection'><KeyIcon className='keyIcon'></KeyIcon><p className='userRole'>{user?.userRole}</p></div> : <div className='userRoleSection'><p className='userRole'>{user?.userRole}</p></div>}</TableCell>
                      <TableCell align="center" className='tableText'>{<Switch checked={user?.status} />}</TableCell>
                      <TableCell align="center" className='tableText'>
                        <SettingsIcon className='settingsIcon' onClick={handleOpenSettingsWindow}>
                          <Modal open={true} onClose={handleCloseSettingsWindow} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                            {user.role}
                          </Modal>
                        </SettingsIcon>
                        <DeleteIcon className='deleteIcon' onClick={handleOpenDeleteWindow}></DeleteIcon>
                        <Modal open={deleteWindow} onClose={handleCloseDeleteWindow} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                          <Box sx={style}>
                            <form onSubmit={deleteUser}>
                              <h1>Delete User</h1>
                              <TextField id="filled-basic" title='Write username to delete' label="Delete User" variant="filled" style={{ width: "620px", marginTop: '25px', marginBottm: '25px' }} value={deleteUserName} onChange={e => setDeleteUserName(e.target.value.trim())} />
                              <Button variant='contained' type='submit'>Submit</Button>
                            </form>
                          </Box>
                        </Modal>

                      </TableCell>
                    </TableRow>
                  </>

                )) : <></>}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <br></br>
    </>
  );
}

export default App;
