import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent={"space-between"}
      background="black"
      color="white"
      height="50px"
      padding={"10px"}
    >
      <Box>
        <Link to="/login">login</Link>
      </Box>
      <Box>
        <Link to="/signup">Signup</Link>
      </Box>
      <Box>
        <Link to="/dashboard">Dashboard</Link>
      </Box>
    </Box>
  );
};

export default Navbar;
