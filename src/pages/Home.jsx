import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Banking from "../layouts/Banking";
import Money from "../layouts/Money";
import Organise from "../layouts/Organise";

const Home = () => {
  return (
    <Box>
      <Box py={"50px"} px={"120px"}>
        <Header />
        <Hero />
        <Banking />
      </Box>
      <Money />
      <Box py={"50px"} px={"120px"}>
        <Organise />
      </Box>
    </Box>
  );
};

export default Home;
