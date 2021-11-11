import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import { Container } from "@mui/material";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
       <Container>
       <Toolbar  color="inherit">
        <Typography component="div" sx={{ flexGrow: 1 }}>
         <img style={{width:"200px"}} src="http://wordpress.zcube.in/wesecure/wp-content/themes/wesecure/inc/assets/images/logo.png" alt="" />
          </Typography>
          
          
          <Link
            to="/appointment"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Appointment</Button>
           
          </Link>
          <Link
            to="/myOrders"
            style={{ textDecoration: "none", color: "white" }}
          >
 <Button color="inherit">My Orders</Button>           
          </Link>
          {user?.email ? (
            <Box>
              <NavLink
                to="/dashboard"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit">Dashboard</Button>
              </NavLink>
              <Button onClick={logout} color="inherit">
                LogOut
              </Button>
              <Button color="inherit">name:{user.name}</Button>
            </Box>
          ) : (
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
       </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;
