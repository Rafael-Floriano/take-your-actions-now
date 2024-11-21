import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Header from './components/Header/Header.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login.tsx'
import Home from './components/Home/Home.tsx'
import Bookmark from './pages/Bookmark/Bookmark.tsx'

createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <StrictMode>
      <Header/>
      <Flex justifyContent='center' alignItems='center' h='100%' w='100%'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}> </Route>
            <Route path='/home' element={<Home/>}> </Route>
            <Route path='/bookmark' element={<Bookmark/>}> </Route>
          </Routes>
        </BrowserRouter>
      </Flex>
    </StrictMode>
  </ChakraProvider>
)
