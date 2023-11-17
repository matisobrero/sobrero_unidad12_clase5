import { Box, Flex, Text} from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Flex p="4" bg="pink.400" color="white" flexDirection="column" alignItems="center">
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