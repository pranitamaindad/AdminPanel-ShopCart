import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Products from "./Products/Products";
import Catagories from "./Categories/Catagories";
import Dashboard from "./Dashboard";
import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import PropTypes from "prop-types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Orders from "./Orders";
import { useNavigate } from "react-router-dom";
import Users from "./Users";
import Newsletter from "./Newsletter";
import Settings from "./Settings";
import CategoryIcon from "@mui/icons-material/Category";
import "./Pages.css";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { pink } from "@mui/material/colors";
import Categary from "./Categories/Categary";
import Productroute from "./Products/productroute";
import Header from "./Header";

const drawerWidth = 240;

export default function Pages() {
  // const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [changeName, setChangename] = useState("dashboard");

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const [menuMapping, setMenuMapping] = useState({
    Categories: true,
    Product: true,
  });

  const menu = [
    { name: "dashboard", icon: <DashboardIcon />, route: "dashboard" },

    {
      name: "categories",
      icon: <CategoryIcon />,
      route: "categories",
      children: [
        {
          name: "MainCatagary",
          route: "maincatagary",
        },
        // {

        //   name: "Subcatagary",
        //   route: "subcatagary",
        // }
      ],
    },
    {
      name: "MainCatagary",

      route: "maincatagary",
    },
    {
      name: "SubCatagary",

      route: "subcatagary",
    },

    { name: "products", icon: <Inventory2OutlinedIcon />, route: "products" },
    {
      name: "orders",
      icon: <ProductionQuantityLimitsOutlinedIcon />,
      route: "orders",
    },
    { name: "users", icon: <GroupAddOutlinedIcon />, route: "users" },
    { name: "Newsletter", icon: <EmailOutlinedIcon />, route: "newsletter" },
    { name: "settings", icon: <SettingsOutlinedIcon />, route: "settings" },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menu.map((text, index) => (
          <ListItem
            key={text.name}
            className="listitem"
            onClick={() => setChangename(text.name)}
            disablePadding
            sx={{ hover: { color: "red" } }}
          >
            <ListItemButton
              onClick={() => {
                menuMapping[menu.name] = !menuMapping[menu.name];
                setMenuMapping({ ...menuMapping });
                navigate(text.route);
              }}
            >
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
     <Header drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}/>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="categories/*" element={<Categary />}></Route>
          <Route path="products/*" element={<Productroute></Productroute>}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="newsletter" element={<Newsletter />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Routes>
      </Box>
    </Box>
  );
}
