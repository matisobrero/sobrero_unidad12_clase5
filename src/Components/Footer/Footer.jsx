import { Box, Flex, Text} from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Flex pt="10" bg="pink.400" color="white" flexDirection="column" alignItems="center" maxW="100%" minH="15vh">
      <Box>
        <Text>&copy; Sobrero Matias Eduardo</Text>
      </Box>
      <Box>
        <Text>Argenmtina Programa 4.0 | React Js - Vite</Text>
      </Box>
    </Flex>
    
  )
}

export default Footer