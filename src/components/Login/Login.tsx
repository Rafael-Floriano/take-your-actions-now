import { Box, Button, Flex, FormControl, FormLabel, Input, WrapItem } from "@chakra-ui/react";
import "./Login.css";
import { redirect } from "react-router-dom";
import login from "../../client/LoginGateway";

const Login = () => {

    const handleSubmit = (event: any) => {
        event.preventDefault();
        redirect('/home');
    }

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
                        <Button colorScheme='purple' onClick={()=> login("rafael.floriano@gmail.com", "xDRx!v8I@7M[:G?VY,;|n\"W$ti#_2-#E2#nm,TQ>")}>Entrar</Button>
                    </Flex>
                </Flex>
            </FormControl>
        </Box>
        </>
    )
}

export default Login;