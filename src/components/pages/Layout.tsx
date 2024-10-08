import { Box } from "@chakra-ui/react";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box padding={5}>
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
