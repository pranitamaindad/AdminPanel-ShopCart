import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainCategary from "./MainCategary";
import { useDispatch, useSelector } from "react-redux";
import "./Categary.css";
import Categary from "./Categary";
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

export default function Catagories() {
  const selector = useSelector((state) => state.categary.data);
  const navigate = useNavigate();

  // const handlecategaryclick = () => {
  //   navigate("maincategary");
  // };
  return (
    <>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            navigate("maincatagary");
          }}
        >
          +Add Categary
        </Button>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {/* {" "} */}
            <TableHead>
              <TableRow>
                <TableCell>Categary</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>createdAt</TableCell>
                <TableCell>Action </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {selector.map((val, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{val.Categary}</TableCell>
                    <TableCell>{val.Description}</TableCell>
                    <TableCell>{val.createdAt}</TableCell>
                    <TableCell>
                      <EditOutlinedIcon />
                      <DeleteOutlineOutlinedIcon />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
