import {
  Box,
  Drawer,
  Grid,
  IconButton,
  styled,
  Theme,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavLink } from "react-router-dom";

const BoxStyled = styled(Box)(({ theme }: { theme: Theme }) => ({
  borderBottom: "1px solid grey",
  backgroundColor: "white",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
    padding: "8px 12px",
  },
  [theme.breakpoints.up("sm")]: {
    justifyContent: "space-around",
    padding: "12px",
  },
}));

const DrawerStyled = styled(Drawer)(({ theme }: { theme: Theme }) => ({
  "& .MuiPaper-root": {
    padding: "16px",

    "& > p": {
      marginBottom: "10px",
    },
    "& > div": {
      "& > p": {
        marginBottom: "10px",
      },
    },
  },
}));

const nonActiveTab = {
  color: "black",
  textDecoration: "none",
};

const activeTab = {
  textDecoration: "underline",
};

const Header = () => {
  const [state, setState] = React.useState(false);
  const matchesMobileDisplay = useMediaQuery("(max-width:600px)");

  const toggleDrawer =
    (anchor: any, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState((prev) => !prev);
    };

  const ListHeader = () => (
    <>
      <Typography>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeTab : nonActiveTab)}
          onClick={toggleDrawer("left", false)}
        >
          Home
        </NavLink>
      </Typography>
      <Grid
        container={matchesMobileDisplay ? false : true}
        width="auto"
        gap={"12px"}
      >
        <Typography>
          <NavLink
            to="/buat-lowongan-pekerjaan"
            style={({ isActive }) => (isActive ? activeTab : nonActiveTab)}
            onClick={toggleDrawer("left", false)}
          >
            Buat Lowongan
          </NavLink>
        </Typography>
        <Typography>
          <NavLink
            to="/lamaran-terkirim"
            style={({ isActive }) => (isActive ? activeTab : nonActiveTab)}
            onClick={toggleDrawer("left", false)}
          >
            Lamaran Terikirim
          </NavLink>
        </Typography>
      </Grid>
    </>
  );

  return (
    <header style={{ width: "100%" }}>
      <BoxStyled>
        {matchesMobileDisplay ? (
          <>
            <IconButton onClick={toggleDrawer("left", true)}>
              <MenuIcon />
            </IconButton>
            <DrawerStyled
              anchor={"left"}
              open={state}
              onClose={toggleDrawer("left", false)}
              style={{ padding: "8px", margin: "40px" }}
            >
              <ListHeader />
            </DrawerStyled>
          </>
        ) : (
          <ListHeader />
        )}
      </BoxStyled>
    </header>
  );
};

export default React.memo(Header);
