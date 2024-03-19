import React from "react";
import { Box, Flex, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  // Hypothetical prices for the Lindt Excellence 100g
  const prices = {
    alza: 79.99,
    billa: 99.99,
    kosik: 89.99,
  };

  // Find the maximum price to normalize bar chart height
  const maxPrice = Math.max(...Object.values(prices));

  const Bar = ({ retailer, price }) => (
    <VStack>
      <Box
        bg="chocolate"
        width="50px"
        height={`${(price / maxPrice) * 200}px`}
        borderRadius="5px"
        transition="height 0.3s"
        _hover={{
          bg: "tomato",
        }}
      />
      <Text fontSize="sm" fontWeight="semibold">
        {retailer}
      </Text>
      <Text fontSize="sm">{price} CZK</Text>
    </VStack>
  );

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={5}>
      <Heading mb={6}>Lindt Excellence 100g Price Comparison</Heading>
      <Flex justify="space-around" align="flex-end" width="100%" maxW="600px">
        {Object.entries(prices).map(([retailer, price]) => (
          <Bar key={retailer} retailer={retailer} price={price} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Index;
