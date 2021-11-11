import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Typography, Button, Container } from "@mui/material";
import Box from "@mui/material/Box";

const bannerBg = {
  background:
    "url(http://wordpress.zcube.in/wesecure/wp-content/uploads/2021/07/slider_img_bg.png)",

  backgroundSize: "cover",
  boxSizing: "border-box",
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <div style={bannerBg} sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            style={{ ...verticalCenter, textAlign: "left" }}
            xs={12}
            md={6}
          >
            <Box>
              <Typography variant="h3" style={{color:'white'}}>
                We are Digital <br />
                Security System
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div" style={{color:'silver'}}>
                Fusce id tortor ac justo ornare eleifend. Etiam vitae mattis
                dolor, at molestie mauris tiam ullamcorper semper arcu.{" "}
              </Typography>
              <Button 
                variant="contained"
                style={{ backgroundColor: "#004d40" }}
              >
              Explore
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
