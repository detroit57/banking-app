import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import Nav from "./Nav";
import Btns from "./Btns";

const Header = () => {
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Logo />
        <Nav />
        <Btns />
      </Flex>
    </Box>
  );
};

export default Header;
