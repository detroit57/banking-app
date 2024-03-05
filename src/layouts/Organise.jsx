import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { AddCircle, ArrowRight } from "iconsax-react";
import React from "react";

const Organise = () => {
  return (
    <Box mt={10}>
      <Box width={600}>
        <Text fontSize={20}>Saving Accounts</Text>
        <Heading fontSize={"70px"} fontWeight={400}>
          Organize your money the right way
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
      <Flex justifyContent={"right"}>
        <Button
          color={"#5BB5A2"}
          bg={"none"}
          _hover={"none"}
          rightIcon={<ArrowRight />}
        >
          All Features
        </Button>
      </Flex>
      <Box>
        <Flex gap={10}>
          <Image src="/laptop.svg" />
          <Image src="/plane.svg" />
          <Image src="/bike.svg" />
          <Image src="/camera.svg" />
          <Box
            width={350}
            height={210}
            cursor={"pointer"}
            borderRadius={20}
            p={90}
            bg={"#E8F2EE"}
          >
            <AddCircle variant="Bold" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Organise;
