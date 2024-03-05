import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Checker from "../components/Checker";

const Money = () => {
  return (
    <Box mt={150} bg={"#E8F2EE"} height={"100vh"}>
      <Flex py={40} px={100} justifyContent={"center"} gap={150}>
        <Box width={500}>
          <Heading fontSize={"70px"} fontWeight={400}>
            Send & recieve money instantly
          </Heading>
          <Text mt={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </Text>
          <Box pt={5}>
            <Checker text={"Malesuada Ipsum"} />
          </Box>
          <Box pt={5}>
            <Checker text={"Vestibulum"} />
          </Box>
          <Box pt={5}>
            <Checker text={"Parturient Lorem"} />
          </Box>
        </Box>
        <Image src="/transactions.svg" width={"30%"} />
      </Flex>
    </Box>
  );
};

export default Money;
