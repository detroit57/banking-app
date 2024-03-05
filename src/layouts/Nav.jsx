import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Nav = () => {
  return (
    <Box>
      <Flex alignItems={"center"} gap={10}>
        <Text>Features</Text>
        <Text>Compare</Text>
        <Text>Support</Text>
        <Text>Blog</Text>
      </Flex>
    </Box>
  );
};

export default Nav;
