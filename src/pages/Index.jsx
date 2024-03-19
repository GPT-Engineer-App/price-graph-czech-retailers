import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const Index = () => {
  const priceData = {
    alza: [79.99, 78.5, 80.99, 79.99, 82.0],
    billa: [99.99, 99.5, 100.99, 98.99, 97.0],
    kosik: [89.99, 87.5, 86.99, 85.99, 88.0],
  };

  const LineGraph = ({ data }) => {
    const maxValue = Math.max(...data.flat());
    const minValue = Math.min(...data.flat());
    const graphHeight = 200;
    const graphWidth = 400;
    const verticalScale = graphHeight / (maxValue - minValue);

    const calculatePoints = (prices) =>
      prices
        .map((price, index) => {
          const x = (graphWidth / (prices.length - 1)) * index;
          const y = graphHeight - (price - minValue) * verticalScale;
          return `${x},${y}`;
        })
        .join(" ");

    const lines = Object.entries(data).map(([retailer, prices]) => <polyline key={retailer} fill="none" stroke="currentColor" strokeWidth="2" points={calculatePoints(prices)} />);

    return (
      <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`}>
        {lines}
      </svg>
    );
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={5}>
      <Heading mb={6}>Lindt Excellence 100g Price Over Time</Heading>
      <LineGraph data={priceData} />
    </Flex>
  );
};

export default Index;
