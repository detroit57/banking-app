import { Box, Flex, Text } from "@chakra-ui/react";
import { TickCircle } from "iconsax-react";
import React from "react";

const Checker = ({ text }) => {
  return (
    <Box>
      <Flex gap={2}>
        <TickCircle variant="Bold" color="#5BB5A2" />
        <Text>{text}</Text>
      </Flex>
    </Box>
  );
};

export default Checker;
