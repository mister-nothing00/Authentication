import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mb={4}>
        Errore
      </Heading>
      <Text fontSize="lg" mb={6}>
        La pagina non è stata ancora creata.
      </Text>
      <Link to="/">
        <Button colorScheme="blue">Torna alla Home</Button>
      </Link>
    </Box>
  );
};

export default ErrorPage;
