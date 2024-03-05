import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Checker from "../components/Checker";
import { ArrowRight } from "iconsax-react";

const Hero = () => {
  return (
    <Box mt={10}>
      <Flex justifyContent={"space-between"}>
        <Box width={500}>
          <Heading fontSize={"100px"} fontWeight={400}>
            Banking starts here.
          </Heading>
          <Text fontSize={20}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </Text>
          <Flex gap={7} my={4} flexWrap={"wrap"}>
            <Checker text={"Instant Transfer"} />
            <Checker text={"Payment Worldwide"} />
          </Flex>
          <Flex gap={5}>
            <Checker text={"Savings Account"} />
            <Checker text={"100% Mobile Banking"} />
          </Flex>
          <Flex alignItems={"center"} gap={5} mt={10}>
            <Button
              fontSize={14}
              color={"#fff"}
              width={140}
              _hover={"none"}
              bg={"#5BB5A2"}
            >
              Open Account
            </Button>
            <Button
              bg={"none"}
              _hover={"none"}
              color={"#5BB5A2"}
              rightIcon={<ArrowRight color="#5BB5A2" />}
            >
              Compare Cards
            </Button>
          </Flex>
        </Box>
        <Image width={"30%"} src="/cards.svg" />
      </Flex>
    </Box>
  );
};

export default Hero;
