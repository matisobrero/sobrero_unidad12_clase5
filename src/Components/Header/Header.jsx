import { Box, Flex, Heading, Image, Spacer } from '@chakra-ui/react'
import React from 'react'


function Header() {
  return (
    <Flex p="4" bg="blue.500" color="white" alignItems="center" >
      <Box>
        <Heading size="md"><Image boxSize={12} ml="2em"/></Heading>
      </Box>
      <Spacer />
      <Box mr="1em">
        <Heading size="md">Inicio</Heading>
      </Box>
      <Box  mr="1em">
        <Heading size="md">Redes</Heading>
      </Box>
      <Box mr="1em">
        <Heading size="md">Contacto</Heading>
      </Box>
    </Flex>
  )
}

export default Header