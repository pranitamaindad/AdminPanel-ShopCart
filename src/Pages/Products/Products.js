import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Addproducts from "./Addproducts";
import { useDispatch, useSelector } from "react-redux";
import { addproduct } from "../Slices/ProductSlice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Chip } from "@mui/material";
import Rating from '@mui/material/Rating';
import Switch from '@mui/material/Switch';
import './Products.css'

export default function Products() {
  const selector = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const statusColorMapping = {
    ["In Stock"]: "success",
    ["Low Stock"]: "warning",
    ["No Stock"]: "error",
  };

  const handleaddproduct = () => {
    navigate("Addproducts");
  };
  return (
    <div>
      <div className="btn" onClick={handleaddproduct}>
        {" "}
        <Button variant="contained"> + Add product </Button>
      </div>
      <h1>this is product</h1>

      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>CreatedAt</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Feature</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selector.map((val, i) => {
                return (
                  <TableRow key={i}>
                      <TableCell component="th" scope="row">
                  <img src={val.image} className="product-image"></img>
                  {val.title}
                </TableCell>
                    {/* <TableCell>{val.Product}</TableCell> */}
                    <TableCell>{val.createdAt}</TableCell>
                    <TableCell>
                      <Chip
                        label={val.status}
                        color={statusColorMapping[val.status]}
                      />
                    </TableCell>{" "}
                    <TableCell><Rating name="read-only"  readOnly /></TableCell>
                    <TableCell>{val.Price}</TableCell>
                    <TableCell><Switch checked={val.featured} /></TableCell>
                    <TableCell> <EditOutlinedIcon />
                      <DeleteOutlineOutlinedIcon /></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Routes>
        <Route path="Addproducts" element={<Addproducts />}></Route>
      </Routes>
    </div>
  );
}
