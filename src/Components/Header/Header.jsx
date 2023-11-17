import { Box, Flex, Heading, Image, Spacer } from '@chakra-ui/react'
import React from 'react'
import logo from "../Header/icono.png";

function Header() {
  return (
    <Flex p="4" bg="blue.500" color="white" alignItems="center">
      <Box>
        <Heading size="md"><Image src={logo} boxSize={12} ml="15px"/></Heading>
      </Box>
      <Spacer />
      <Box>
        <Heading size="md">Inicio</Heading>
      </Box>
      <Box ml="4">
        <Heading size="md">Redes</Heading>
      </Box>
      <Box ml="4">
        <Heading size="md">Contacto</Heading>
      </Box>
    </Flex>
  )
}

export default Header