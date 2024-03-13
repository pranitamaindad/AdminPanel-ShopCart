import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  AppBar,
  Breadcrumbs,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from 'react';

export default function Header({drawerWidth,handleDrawerToggle}) { 
  let location = useLocation();
  const [breadCrums, setBreadCrumbs] = useState([]);

  const routeMap = {
    pages: "Dashboard",
    categories: "Categories",
    products: "Products",
    "maincatagary": "Main Categories",
    "sub-categories": "Sub Categories",
    Addproducts: "Addproducts",
  };

  useEffect(() => {
    //"/pages/categories/main-categories"
    const routes = location.pathname.split("/").filter((route) => route !== "");
    setBreadCrumbs(routes.map((route) => routeMap[route]));
  }, [location]);




  return (
    <div>
       <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: { sm: "pink" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {/* {changeName} */}
          
          <Breadcrumbs aria-label="breadcrumb" separator=".">
            {breadCrums.map((item) => (
              <div>{item}</div>
            ))}
          </Breadcrumbs>
          </Typography>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}
