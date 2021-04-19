import { Box, Flex, SimpleGrid, Text, Heading, Image, Stack, Icon, IconButton, transition} from "@chakra-ui/react";
import { useState } from "react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

import Header from "../components/Header";
import { MoviesRow } from "../components/MoviesRow";
import { Sidebar } from "../components/Sidebar";

export default function Home(){
  const [scrollX, setScrollX] = useState(0)
  return(
    <Flex 
      direction="column"
      h="100vh"
    >
      <Header/>
      <Flex
         
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar/>
        <Flex flex="1" mr="auto" flexDir="column">
          <MoviesRow/>
          <MoviesRow/>
        </Flex>
      </Flex>
    </Flex>
  )
}