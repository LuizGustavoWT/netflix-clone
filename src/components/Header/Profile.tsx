import {Flex, Box, Text, Avatar} from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps){
  return(
    <Flex
      align="center"
    >
      {(showProfileData) && (
          <Box mr="4" textAlign="right">
            <Text>Luiz Gustavo</Text>
          </Box>
      )}
      <Avatar 
          size="md" 
          name="Luiz Gustavo" 
          src="https://occ-0-2779-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfa3LKkxA4ia-vJaRgt6sUtAhXQsp73siYB86eGVbHj1CeHSsn0N9KxMmkJfRCwFFbR95-2u_kquoSLnjcnwi4PNIy-L.png?r=c65"
      />
    </Flex>
  );
}