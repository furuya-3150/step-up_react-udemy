import React from 'react';
import logo from './logo.svg';
import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal" colorSchemeType="string">ぼたん</Button>
    </ChakraProvider>
  );
}

export default App;
