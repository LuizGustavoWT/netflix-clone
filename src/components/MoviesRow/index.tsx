import { Box } from "@chakra-ui/react";
import { Heading } from "./Heading";
import { MoviesScroll } from "./MoviesScroll";

export function MoviesRow(){
  return(
    <Box my="2">
      <Heading sectionTitle="Teste"/>
      <MoviesScroll/>
    </Box>
  )
}