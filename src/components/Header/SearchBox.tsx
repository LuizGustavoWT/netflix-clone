import {Flex, Input, Icon} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox(){
  return(
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
      <Icon color="gray.400" fontSize="20" as={RiSearchLine}/>
    </Flex>
  )
}