import { Box, Image } from "@chakra-ui/react";

interface MovieItemProps {
  isLargeRow?: boolean;
}

export function MovieItem({isLargeRow}: MovieItemProps) {
  return(
    <Box 
      p="2" 
      w={{ base: "150px", md: "200px" }} 
      flexShrink={0}
    >
      <Image
        src={isLargeRow ? 
          "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/w8Hi3GI4q1oR6EImrDWrAQFn8Ha.jpg": 
          "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hsbINBE0sImmrXtrTxp0YDSh7tD.jpg"}
        onClick={() => {}}
        rounded={4}
        borderRadius={8}
        alt="Filme"
        w="100%"
        maxH={isLargeRow ? "250px" : { base: "150px", md: "200px"  }}
        objectFit="contain"
        transition="transform 500ms"
        _hover={{ transform: isLargeRow ? "scale(1.09)" : "scale(1.07)" }}
      />
    </Box>
  )
}