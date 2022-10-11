import React from "react";
import { Box } from "@mui/material";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";

const ViewHoc = ({ children }) => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Box>
        <NavBar />
        {children}
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default ViewHoc;
