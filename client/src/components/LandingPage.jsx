import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Video from "../asset/video.mp4";
import React from "react";

export default function LandingPage({ user }) {
  
  return (
    <Box height="100vh" overflowY="auto" width={{ base: "75%", md: "60%" }}>
      <Flex
        display={"flex"}
        flexDir={"column"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        mt={8}
        gap={16}
        mr={4}
      >
        <Box display="block" color="blackAlpha.800">
          <Heading
            fontFamily={"Poppins"}
            fontWeight={"bold"}
            letterSpacing={0.5}
            color={"blue.900"}
          >
            Benvenuto su
            <Text as={"span"} color={"green.400"} letterSpacing={1}>
              Life120
            </Text>
          </Heading>

          <Text
            color={"blackAlpha.600"}
            fontFamily={"Montserrat"}
            fontWeight={500}
            fontSize={14}
          >
            Ciao
            <Text as={"span"} color={"blue.400"} fontWeight={"700"} ms={2}>
              {user.name}
            </Text>
            , come stai ?
          </Text>
        </Box>

        {/* Hero Section */}
        <Box
          position="relative"
          height={{ base: "200px", md: "300px" }}
          width="full"
          overflow="hidden"
          borderRadius={16}
          boxShadow={"0 1px 4px "}
        >
          <video
            src={Video}
            autoPlay
            loop
            muted
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />

          <Flex
            position="absolute"
            top="0"
            left="0"
            width="full"
            height="full"
            backgroundColor="rgba(0, 0, 0, 0.5)" // Overlay scuro
            alignItems="center"
            justifyContent="center"
            color="white"
            textAlign="center"
          >
            <Text
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              textAlign={"left"}
              p={{ base: 4, md: 0 }}
            >
              Un Mondo Verde <br />
              per un Futuro Pulito
            </Text>
          </Flex>
        </Box>
        <Text
          fontFamily={"Poppins"}
          fontSize={24}
          fontWeight={800}
          letterSpacing={1}
          color={"#1A365D"}
        >
          Lista
        </Text>
        {/* Lista Piante con Scroll */}
        <Divider />
        <Box width={"full"} borderRadius={8} p={4}>
          <Flex
            flexDir={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            width={"full"}
            wrap={"wrap"}
            gap={8}
          >
            <Card maxW="xs">
              <CardBody>
                <Image
                  src="https://images.pexels.com/photos/28787264/pexels-photo-28787264/free-photo-of-vaso-in-ceramica-colorata-con-cactus-su-parete-rosa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="pianta--img"
                  borderRadius="lg"
                  height={"300px"}
                  width={"300px"}
                />

                <Stack mt="6" spacing="3">
                  <Heading
                    size="md"
                    textAlign={"center"}
                    fontFamily={"Poppins"}
                    color={"blue.700"}
                  >
                    Cactus Siciliano
                  </Heading>
                </Stack>
              </CardBody>
            </Card>

            <Card maxW="xs">
              <CardBody>
                <Image
                  src="https://images.pexels.com/photos/28865277/pexels-photo-28865277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="pianta--img"
                  borderRadius="lg"
                  height={"300px"}
                  width={"300px"}
                />

                <Stack mt="6" spacing="3">
                  <Heading
                    size="md"
                    textAlign={"center"}
                    fontFamily={"Poppins"}
                    color={"blue.700"}
                  >
                    Germoglio
                  </Heading>
                </Stack>
              </CardBody>
            </Card>

            <Card maxW="xs">
              <CardBody>
                <Image
                  src="https://images.pexels.com/photos/28866238/pexels-photo-28866238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="pianta-img"
                  borderRadius="lg"
                  height={"300px"}
                  width={"300px"}
                />

                <Stack mt="6" spacing="3">
                  <Heading
                    size="md"
                    textAlign={"center"}
                    fontFamily={"Poppins"}
                    color={"blue.700"}
                  >
                    Tulipano
                  </Heading>
                </Stack>
              </CardBody>
            </Card>

            <Card maxW="xs">
              <CardBody>
                <Image
                  src="https://images.pexels.com/photos/28862112/pexels-photo-28862112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="pianta--img"
                  borderRadius="lg"
                  height={"300px"}
                  width={"300px"}
                />

                <Stack mt="6" spacing="3">
                  <Heading
                    size="md"
                    textAlign={"center"}
                    fontFamily={"Poppins"}
                    color={"blue.700"}
                  >
                    Canapa
                  </Heading>
                </Stack>
              </CardBody>
            </Card>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
