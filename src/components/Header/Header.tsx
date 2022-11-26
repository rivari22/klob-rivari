import { Box, Grid, styled, Theme, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const BoxStyled = styled(Box)(({ theme }: { theme: Theme }) => ({
  borderBottom: "1px solid grey",
  padding: "16px",
  backgroundColor: "white",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
}));

const nonActiveTab = {
  color: "black",
  textDecoration: "none",
};

const activeTab = {
  textDecoration: "underline",
};

const Header = () => {
  return (
    <header style={{ width: "100%" }}>
      <BoxStyled>
        <Typography>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeTab : nonActiveTab)}
          >
            Home
          </NavLink>
        </Typography>
        <Grid container width="auto" gap={"12px"}>
          <Typography>
            <NavLink
              to="/buat-lowongan-pekerjaan"
              style={({ isActive }) => (isActive ? activeTab : nonActiveTab)}
            >
              Buat Lowongan
            </NavLink>
          </Typography>
          <Typography>
            <NavLink
              to="/lamaran-terkirim"
              style={({ isActive }) => (isActive ? activeTab : nonActiveTab)}
            >
              Lamaran Terikirim
            </NavLink>
          </Typography>
        </Grid>
      </BoxStyled>
    </header>
  );
};

export default Header;
