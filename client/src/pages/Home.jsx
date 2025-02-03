import "../App.scss";
import React, { memo } from "react";
import Sidebar from "../components/Sidebar.jsx";
import LandingPage from "../components/LandingPage.jsx";
import Info from "../components/Info.jsx";
import { Flex } from "@chakra-ui/react";
import { UserData } from "../hooks/context/User.jsx";


 function HomePage() {

  const {user} = UserData()
 
  

  return (
    <div>
      <Flex display={"flex"} width={"full"} gap={8} bg={"gray.50"}>
        <Sidebar/>
        <LandingPage user={user} />
        <Info />
      </Flex>
    </div>
  );
}

export default memo(HomePage);