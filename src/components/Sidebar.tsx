import { Box, Icon, Link, Stack, Text} from "@chakra-ui/react";
import { RiFileList2Line, RiHome2Line, RiPlayLine, RiSlideshow3Line } from "react-icons/ri";

export function Sidebar() {
  return(
    <Box 
      as="aside"
      w="64"
      mr="8"
    >
      <Stack 
        spacing="12" 
        align="flex-start"
      >

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            Conteúdos
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
          <Link display="flex" aliign="center">
              <Icon 
                as={RiHome2Line}
                fontSize="20"
              />
              <Text ml="4" fontWeight="medium">Inicio</Text>
            </Link>
            <Link display="flex" aliign="center" _hover={{
              
            }}>
              <Icon 
                as={RiSlideshow3Line}
                fontSize="20"
              />
              <Text ml="4" fontWeight="medium">Filmes</Text>
            </Link>
            <Link display="flex" aliign="center">
              <Icon 
                as={RiSlideshow3Line}
                fontSize="20"
              />
              <Text ml="4" fontWeight="medium">Séries</Text>
            </Link>
            <Link display="flex" aliign="center">
              <Icon 
                as={RiPlayLine}
                fontSize="20"
              />
              <Text ml="4" fontWeight="medium">Mais Vistos</Text>
            </Link>
            <Link display="flex" aliign="center">
              <Icon 
                as={RiFileList2Line}
                fontSize="20"
              />
              <Text ml="4" fontWeight="medium">Minha Lista</Text>
            </Link>
          </Stack>
        </Box>

      </Stack>
    </Box>
  )
}