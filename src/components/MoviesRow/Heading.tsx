import {Heading as ChakarHeading, HeadingProps as ChakraHeadingProps  } from '@chakra-ui/react';

interface HeadingProps extends ChakraHeadingProps {
  sectionTitle: string
}

export function Heading({sectionTitle, ...rest}: HeadingProps) {
  return(
    <ChakarHeading 
      fontWeight="semibold"
      fontSize="2xl"
      ml="inherit"
      {...rest}
    >
      {sectionTitle}
    </ChakarHeading>
  )
}