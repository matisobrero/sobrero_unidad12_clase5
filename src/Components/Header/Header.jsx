import { Box, Flex, Heading, Image, Spacer, Img } from '@chakra-ui/react'
import React from 'react'
import Icono from '../Header/icono.png'


function Header() {
  return (
    <Flex p="4" bg="blue.500" color="white" alignItems="center">
      <Box _hover={{ cursor: "pointer", transform: "scale(1.1)" }}>
        <Heading size="md"><Image src={Icono} boxSize={12} ml="2em" /></Heading>
      </Box>
      <Spacer />
      <Box mr="1em" _hover={{ textDecoration: "underline", cursor: "pointer" }}>
        <Heading size="md">Inicio</Heading>
      </Box>
      <Box mr="1em" _hover={{ textDecoration: "underline", cursor: "pointer" }}>
        <Heading size="md">Redes</Heading>
      </Box>
      <Box mr="1em" _hover={{ textDecoration: "underline", cursor: "pointer" }}>
        <Heading size="md">Contacto</Heading>
      </Box>
    </Flex>
  )
}

export default Header