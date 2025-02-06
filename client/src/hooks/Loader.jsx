import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

function Loader() {
  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Spinner size="2xl" color="blue.500" thickness="4px" speed="0.88s" />
    </Flex>
  );
}

export default Loader;
