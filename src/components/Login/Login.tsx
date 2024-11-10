import { Box, Button, Flex, FormControl, FormLabel, Input, WrapItem } from "@chakra-ui/react";
import "./Login.css";

const Login = () => {
    return (
        <>
        <Box w='28vw' h='42vh' borderWidth='1px' borderRadius='lg' p={4} flexDirection='column' justifyContent='center'>
            <FormControl>
                <Flex direction='column' gap='4vh'>
                    <Flex direction='column'>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' />
                    </Flex>
                    <Flex direction='column'>
                        <FormLabel>Senha</FormLabel>
                        <Input type='password' />
                    </Flex>
                    <Flex w='100%' justifyContent='center'>
                        <Button colorScheme='purple'>Entrar</Button>
                    </Flex>
                </Flex>
            </FormControl>
        </Box>
        </>
    )
}

export default Login;