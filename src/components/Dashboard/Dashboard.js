import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import DashboardHome from "./DashboardHome/DashboardHome";
import useAuth from "../../hooks/useAuth";
import AdminRoute from "./../AdminRoute/AdminRoute";
import AddService from "./../AddService/AddService";
import ManageAllOffers from "../ManageAllOffers/ManageAllOffers";
import Review from "./../Review/Review";
import AllBookings from "../AllBookings/AllBookings";
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const drawerWidth = 200;

function Dashboard(props) {
  const {  logout } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      
      <Toolbar />
      <Divider />
      <Typography style={{  color: "red",margin:"20px" }}>User DashBoard</Typography>
      <Divider />
      <Link to={`${url}`} style={{ textDecoration: "none", color: "black" }}>
        <Button color="inherit">Dashboard</Button>
      </Link>
      <Divider />
      <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
        <Button color="inherit">Back To Home</Button>
      </Link>
      <Divider />
      <Link to="/explore" style={{ textDecoration: "none", color: "black" }}>
        <Button color="inherit">Explore Product</Button>
      </Link>
     
      <Divider />
     
      <Link to={`${url}/review`}style={{ textDecoration: "none", color: "black" }}>
        <Button color="inherit">Review</Button>
      </Link>
      <Divider />
      
      {admin && (
        <Box>
          <Typography style={{  color: "red",margin:"20px" }}>Admin Part</Typography>
          <Divider />
          <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none", color: "black" }}>
            <Button color="inherit">Make Admin</Button>
          </Link>
          <Divider />
          <Link
            to={`${url}/addProduct`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button color="inherit">Add Product</Button>
          </Link>
          <Divider />
          <Link
            to={`${url}/allOffers`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button color="inherit">Manage Product</Button>
          </Link>
          <Link
            to={`${url}/allOrders`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button color="inherit">Manage Orders</Button>
          </Link>
          
        </Box>
      )}

      <Divider />
      <button
                    onClick={logout}
                    className="btn btn-outline-danger logout-btn mt-5"
                  >
                    Log Out
                  </button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
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
        Dashboard
      </Typography>
    </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
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

        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddService></AddService>
          </AdminRoute>
          <AdminRoute path={`${path}/allOffers`}>
            <ManageAllOffers></ManageAllOffers>
          </AdminRoute>
          <AdminRoute path={`${path}/allOrders`}>
            <AllBookings></AllBookings>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
    
    </>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
