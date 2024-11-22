import {
  Box,
  Flex,
  Img,
  Link,
  Text,
  useMediaQuery,
  Spacer,
  Button,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import Logo from "../asset/logo.png";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { BsEnvelope, BsCart } from "react-icons/bs";
import { LuLayoutGrid } from "react-icons/lu";
import { FaSignOutAlt } from "react-icons/fa";

import {  Link as RouterLink, useNavigate } from "react-router-dom";
import { UserData } from "../hooks/context/User";



export default function Sidebar() {
  const {logoutUser} = UserData()
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  const linkFontSize = useBreakpointValue({ base: "lg", md: "lg" });
  const navigate =useNavigate()


  const handleLogout = async ()=>{
    logoutUser();
    navigate("/login")

  }

  return (
    <Flex
      display={"flex"}
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      w={isSmallScreen ? "70px" : "180px"}
      height={"105vh"}  
      bg="rgba(255, 255, 255, 0.64)"
      overflowY="auto" 
      borderBottomRightRadius={10} 
      boxShadow=" 0px 1px 25px  #F0FFF4"
    >
      {/* Logo */}
      <Box
        display={"flex"}
        bg={"#ffff"}
        width={"full"}
        alignItems={"center"}
        mt={0}
        mb={8}
      >
        <Img
          src={Logo}
          alt="logo-image"
          width={"60px"}
          height={"auto"}
          my={4}
          ms={{ base: 1, md: 4 }}
        />
        {!isSmallScreen && (
          <Text
            color="#2c5282"
            ms={2}
            mt={4}
            fontSize={24}
            fontWeight={"bold"}
            fontFamily={"Montserrat"}
          >
            Life120
          </Text>
        )}
      </Box>

      {/* Link di navigazione */}
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent="flex-start"
        alignItems={isSmallScreen ? "center" : "flex-start"}
        bg={"#F7FAFC"}
        width={"full"}
        height={"auto"}
        ps={isSmallScreen ? 0 : 8}
        mt={8}
        gap={6}
      >
        {/* Chi siamo */}
        <RouterLink to="/error">
        <Link
          display={"flex"}
          alignItems={"center"}
          color={"#3182ce"}
          _hover={{ textDecoration: "none", color: "#2c5282" }}
          mb={4}
          fontSize={linkFontSize} 
        >
          <BsInfoCircle fontSize={16} />
          {!isSmallScreen && <Text ms={2} fontFamily={"Poppins"}>Chi siamo</Text>}
        </Link>
        </RouterLink>

        {/* Contatti */}
        <RouterLink to="/error">
        <Link
          display={"flex"}
          alignItems={"center"}
          color={"#3182ce"}
          _hover={{ textDecoration: "none", color: "#2c5282" }}
          mb={4}
          fontSize={linkFontSize}
        >
          <BsEnvelope fontSize={16} />
          {!isSmallScreen && <Text ms={2} fontFamily={"Poppins"}>Contatti</Text>}
        </Link>
       </RouterLink>

        {/* Ordini */}
        <RouterLink to="/error">
        <Link
          display={"flex"}
          alignItems={"center"}
          color={"#3182ce"}
          _hover={{ textDecoration: "none", color: "#2c5282" }}
          mb={4}
          fontSize={linkFontSize}
        >
          <BsCart fontSize={16} />
          {!isSmallScreen && <Text ms={2} fontFamily={"Poppins"}>Ordini</Text>}
        </Link>
        </RouterLink>

        {/* Prodotti */}
        <RouterLink to="/error">
        <Link
          display={"flex"}
          alignItems={"center"}
          color={"#3182ce"}
          _hover={{ textDecoration: "none", color: "#2c5282" }}
          mb={4}
          fontSize={linkFontSize}
        >
          <LuLayoutGrid fontSize={16} />
          {!isSmallScreen && <Text ms={2} fontFamily={"Poppins"}>Prodotti</Text>}
        </Link>
        </RouterLink>
      </Box>
     

      <Spacer />

      <Divider mb={4} />

      {/* Logout */}
      <Button
        as={Link}
        href="/login"
        display={"flex"}
        alignItems={"center"}
        colorScheme="green"
        mb={4}
        p={2}
        w={"80%"}
        ms={4}
        justifyContent={isSmallScreen ? "center" : "flex-start"}
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        {!isSmallScreen && (
          <Text ms={2} color="whiteAlpha.800" _hover={{ textDecoration: "none", color:"gray.300" }}>
            Logout
          </Text>
        )}
      </Button>
    </Flex>
  );
}
