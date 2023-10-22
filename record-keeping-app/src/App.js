import React, { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fatherN, setFatherN] = useState("");

  const [record, setRecord] = useState([]);

  const savedata = () => {
    setRecord([... record , {name,fatherN,email}]);
    setName("");
    setEmail("");
    setFatherN("");
  }

  const removeitem = (index) => {
    let array = record;
    array.splice(index, 1);
    setRecord([...array])
  }

  return (
    <div className="App">
      
      <div className='header'>
        <h1>Record Keeping System</h1>
      </div>

      <div className="form">
        <Stack direction="row" spacing={2}>

          <TextField
            value={name} 
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic" 
            label="Name" 
            variant="outlined"
          />

          <TextField
            value={fatherN} 
            onChange={(e) => setFatherN(e.target.value)}
            id="outlined-basic" 
            label="Father Name" 
            variant="outlined"
          />

          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
          />

          <Button 
            onClick={savedata}
            color="success" 
            variant="contained"
          >
            <AddCircleOutlineIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="datafeild">
          <h3>NAME</h3>
          <h3>FATHER NAME</h3>
          <h3>EMAIL</h3>
          <h3>REMOVE </h3>
        </div>
        {
          record.map((element,index) => {
            return (
              <div className="datafeild" key={index} >
                <h3>{element.name}</h3>
                <h3>{element.fatherN}</h3>
                <h3>{element.email}</h3>
                <Button 
                  onClick={() => removeitem(index)}
                  variant="outlined" 
                  startIcon={<DeleteIcon />} 
                  color='error'>
                </Button>
              </div>
            );
          })
        }
      </div>

    </div>
  );
}

export default App;