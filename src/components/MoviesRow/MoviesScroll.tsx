import { Stack   } from "@chakra-ui/react";
import { MovieItem } from "./MovieItem";

interface MoviesScrollProps {

}

export function MoviesScroll() {
  return(
    <Stack 
      maxW={{base: 360,lg: 1000, md: 700 }} 
      overflowX="auto" 
      overflowY="hidden" 
      spacing="2" 
      padding="1" 
      isInline
      css={{
        scrollbars: "invisible"
      }}
    >
      <MovieItem isLargeRow/>
      <MovieItem isLargeRow/>
      <MovieItem isLargeRow/>
      <MovieItem isLargeRow/>
      <MovieItem isLargeRow/>
      <MovieItem isLargeRow/>
      <MovieItem isLargeRow/>
      <MovieItem isLargeRow/>
      <MovieItem isLargeRow/>
      <MovieItem isLargeRow/>
      <MovieItem isLargeRow/>
      <MovieItem isLargeRow/>
    </Stack>
  );
}