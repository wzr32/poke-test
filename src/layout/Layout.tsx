import { type FC } from "react";
import { Box, Container } from "@mui/material";
import { Navbar } from "./components/navbar";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ paddingTop: "2em" }} component="main">
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default Layout;
