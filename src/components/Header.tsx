import { 
  Box, 
  Flex, 
  HStack, 
  Icon, 
  Input, 
  Text, 
  Avatar 
} from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine } from 'react-icons/ri';

export default function Header() {
  return(
    <Flex 
      w="100%"
      as="header"
      maxH={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text 
        fontSize="2xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        Netflix
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="green.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input 
          color="gray.50"
          variant="unstyled"
          placeholder="O que deseja assistir?"
          px="4"
          mr="4"
          _placeholder={{
            color: 'gray.400'
          }}
        />
        <Icon
          color="gray.400"
          fontSize="20"
          as={RiSearchLine}
        />
      </Flex>
      <Flex
        align="center"
        ml="auto"
      >
        <HStack 
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon
            as={RiNotificationLine}
            fontSize="20"
          />
        </HStack>

        <Flex
          align="center"
        >
          <Box 
            mr="4"
            textAlign="right"
            
          >
            <Text>Luiz Gustavo</Text>
          </Box>
          <Avatar 
              size="md" 
              name="Luiz Gustavo" 
              src="https://occ-0-2779-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfa3LKkxA4ia-vJaRgt6sUtAhXQsp73siYB86eGVbHj1CeHSsn0N9KxMmkJfRCwFFbR95-2u_kquoSLnjcnwi4PNIy-L.png?r=c65"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}