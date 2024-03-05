import { Box, Text } from "@chakra-ui/react";
import { Flash } from "iconsax-react";
import React from "react";

const Card = () => {
  return (
    <Box border={"2px solid #ddd"} borderRadius={20} width={"fit-content"}>
      <Box p={5}>
        <Box p={2} bg={"#E8F2EE"} width={"fit-content"} borderRadius={40}>
          <Flash variant="Bold" color="#5BB5A2" />
        </Box>
        <Box pt={5} width={250}>
          <Text fontSize={20}>
            Instant <br /> Transactions
          </Text>
          <Text>
            Odio euismod lacinia at quis. Amet purus gravida quis blandit
            turpis.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
