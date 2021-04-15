import { FormControl } from '@chakra-ui/core'
import { Flex, Button, Stack} from '@chakra-ui/react'
import {Input} from '../components/Form/Input';
import Head from 'next/head'

export default function Home() {
  return (
    <Flex 
      w="100vw" 
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex 
        as="form" 
        width="100%" 
        maxW={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack 
          spacing="4"
        >
          <Input name="email" label="E-mail" type="email"/>
          <Input name="password" label="Senha" type="password"/>
        </Stack>

        <Button 
          type="submit" 
          marginTop="6"
          size="lg"
          colorScheme="red"
        >
            Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
