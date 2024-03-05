import { Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card";

const Banking = () => {
  return (
    <Box mt={100}>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Heading fontSize={"100px"} fontWeight={400}>
            One app. <br /> One Banking
          </Heading>
          <Grid gridTemplateColumns={"1fr 1fr"} gridGap={10} mt={10}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid>
        </Box>
        <Image src="/app.svg" />
      </Flex>
    </Box>
  );
};

export default Banking;
