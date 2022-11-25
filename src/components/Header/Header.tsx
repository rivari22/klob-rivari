import { Box, Grid, styled, Theme, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

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

const Header = (props: Props) => {
  return (
    <header style={{ width: "100%" }}>
      <BoxStyled>
        <Typography>
          <Link to="/">Home</Link>
        </Typography>
        <Grid container width="auto" gap={"12px"}>
          <Typography>
            <Link to="/buat-lowongan-pekerjaan">Buat Lowongan</Link>
          </Typography>
          <Typography>
            <Link to="/lamaran-terkirim">Lamaran Terikirim</Link>
          </Typography>
        </Grid>
      </BoxStyled>
    </header>
  );
};

export default Header;
