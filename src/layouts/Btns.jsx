import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Btns = () => {
  return (
    <Box>
      <Flex alignItems={"center"} gap={10}>
        <Text color={"#5BB5A2"}>Login</Text>
        <Button
          fontSize={14}
          color={"#fff"}
          width={140}
          _hover={"none"}
          bg={"#5BB5A2"}
        >
          Open Account
        </Button>
      </Flex>
    </Box>
  );
};

export default Btns;
