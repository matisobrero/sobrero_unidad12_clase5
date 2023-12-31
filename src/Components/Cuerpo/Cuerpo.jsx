import { Box, Text, Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

  const resetear = () => {
    setContador(0);
  };

  return (
    <Flex maxW="100%" minH="80vh" bg="pink.50" justifyContent="center" alignItems="center">
      <Box>
        <Text fontSize="48px" textAlign="center" fontWeight="bold" textDecorationLine="underline">
          Contador - Clase 5
        </Text>

        <Box>
          <Text fontSize="34px" textAlign="center" mt="120px" pb="1">
            Resultado: {contador}
          </Text>
        </Box>

        <Box textAlign="center" mt="4">
          <Button
            onClick={incrementar}
            colorScheme="pink"
            size="lg"
            mr="4"
            mt="50px"
            _hover={{ transform: 'scale(1.1)' }}
            _active={{ transform: 'scale(0.9)' }}
          >
            Incrementar
          </Button>

          <Button
            onClick={decrementar}
            colorScheme="blue"
            size="lg"
            mt="50px"
            isDisabled={contador === 0}
            _hover={{ transform: 'scale(1.1)' }}
            _active={{ transform: 'scale(0.9)' }}
          >
            Decrementar
          </Button>

          <Box textAlign="center" mt="4">
            <motion.div
              whileTap={{ scale: 1.5, rotate: 360, transition: { duration: 0.5 } }}
            >
              <Button
                onClick={resetear}
                bg="gray.700"
                color="white"
                size="lg"
                _hover={{ transform: 'scale(1.1)' }}
                _active={{ transform: 'scale(0.9)' }}
                isDisabled={contador === 0}
              >
                Resetear
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Flex>

  )
}

export default Cuerpo