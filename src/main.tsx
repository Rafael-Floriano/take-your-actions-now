import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <StrictMode>
      <Header/>
    </StrictMode>
  </ChakraProvider>
)
