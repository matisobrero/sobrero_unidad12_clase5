import { Box, Container, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

function Cuerpo() {

 const [contador, setContador] = useState(0);

 const incrementar = () => {
   setContador(contador + 1);
 };

 const decrementar = () => {
  if (contador > 0) {
    setContador(contador - 1);
  }
 };


  return (
    <Container maxW="100%" minH="80vh" pt="8" bg="pink.50">
    <Box>
      <Text fontSize="32px" textAlign="center" fontWeight="bold" mb="4">
        Contador - Clase 5
      </Text>

    <Box>
    <Text fontSize="30px" textAlign="center" mt="100px" pb="1">
        Resultado: {contador}
      </Text>

      <Box textAlign="center" mt="4">
      
      <Button onClick={incrementar} colorScheme="pink" size="lg" mr="4" mt="100px">
          Incrementar
        </Button>

        <Button onClick={decrementar} colorScheme="blue" size="lg" mt="100px" isDisabled={contador === 0}>
          Decrementar
        </Button>
      </Box>
      </Box>
    </Box>
  </Container>

  )
}

export default Cuerpo