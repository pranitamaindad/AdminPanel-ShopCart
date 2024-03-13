import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addproduct } from "../Slices/ProductSlice";
import Switch from '@mui/material/Switch';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CardActions, TextField } from "@mui/material";
import "./Addproducts.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FileDragDrop } from "../FileDrag-Drop/FileDrag-Drop";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';

export default function Addproducts() {
  const selector = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [addproductnew, setAddproduct] = useState("");
  const [addproductdes, setAddproductdes] = useState("");
  const [select, setSelect] = useState("");

  const handleproductnamechange = (e) => {
    setAddproduct(e.target.value);
    console.log(e.target.value);
  };

  const handledescriptionchange = (e) => {
    setAddproductdes(e.target.value);
  };

  const handleonClick = () => {
    dispatch(addproduct(addproductnew));
  };

  // const handleclick=()=>{
  //   dispatch
  // }
  const handleChangeselect = (e) => {
    setSelect(addproduct(e.target.value));
  };

  return (
    <div className="mainfield ">
     

      <Card sx={{ padding: 3 }}>
        <CardContent>
          <div className="textfields">
            <TextField
              label="product name"
              variant="outlined"
              onChange={handleproductnamechange}
            />
            <TextField
              label="description"
              variant="outlined"
              onChange={handledescriptionchange}
            />
            <div className="brand">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                onChange={handleChangeselect}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>

              <TextField label="Brand"></TextField>

             
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <TextField label="Sizes"></TextField>
              <TextField label="Colors"></TextField>
              <TextField label="Tags"></TextField>
            </div>
            <div>Image</div>
                <FileDragDrop></FileDragDrop>
          </div>
          
        </CardContent>
       
        <CardActions>
          <Button onClick={handleonClick}>Add Product</Button>
        </CardActions>
      </Card>
      <div className="col-4  d-flex flex-row">
          <Card sx={{ padding: 3, width: "100%"  }}>
          <CardContent>
          <InputLabel id="demo-simple-select-label">
                  Parent Category
                </InputLabel>
                <TextField
              label="product code"
              variant="outlined"
              // onChange={handleproductnamechange}
            />
            <TextField
              label="Product SKU"
              variant="outlined"
              // onChange={handledescriptionchange}
            />
              <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
    <TextField
              label="Quantity"
              variant="outlined"
              onChange={handledescriptionchange}
            />
            
                </CardContent>
          </Card>
          <Card sx={{ padding: 3, width: "100%"  }}>
          <CardContent>
          <TextField
              label="Regular price"
              variant="outlined"
              onChange={handledescriptionchange}
            />
             <TextField
              label="Sell price"
              variant="outlined"
              onChange={handledescriptionchange}
            />
            <Switch />
            <Button variant="contained">Create product</Button>
            </CardContent></Card>
          </div>
    </div>
  );
}
