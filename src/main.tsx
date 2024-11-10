import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Header from './components/Header/Header.tsx'
import Login from './components/Login/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <StrictMode>
      <Header/>
      <Flex justifyContent='center' alignItems='center' h='100%'>
        <Login/>
      </Flex>
    </StrictMode>
  </ChakraProvider>
)
