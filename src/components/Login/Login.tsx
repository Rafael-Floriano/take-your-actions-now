import { Box, Button, Flex, FormControl, FormLabel, Input, WrapItem } from "@chakra-ui/react";
import "./Login.css";
import { redirect, useNavigate } from "react-router-dom";
import login, { LoginResponse } from "../../client/LoginGateway";

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        login(email, password).then((result) => {
            const response:LoginResponse | null = result;
            if (response != null && response.token != null) {
                window.localStorage.setItem('token', response.token);
                navigate('/home');
            }
        }).catch((error) => {
            console.log(error);
            console.log("Deu Pau");
        });
    }

    const email:string = 'rafael.floriano@gmail.com';
    const password:string = 'xDRx!v8I@7M[:G?VY,;|n\"W$ti#_2-#E2#nm,TQ>';

    return (
        <>
        <Box w='28vw' h='42vh' borderWidth='1px' borderRadius='lg' p={4} flexDirection='column' justifyContent='center'>
            <FormControl>
                <Flex direction='column' gap='4vh'>
                    <Flex direction='column'>
                        <FormLabel>Email</FormLabel>
                        <Input value={email} type='email' />
                    </Flex>
                    <Flex direction='column'>
                        <FormLabel>Senha</FormLabel>
                        <Input value={password} type='password' />
                    </Flex>
                    <Flex w='100%' justifyContent='center'>
                        <Button colorScheme='purple' onClick={handleSubmit}>Entrar</Button>
                    </Flex>
                </Flex>
            </FormControl>
        </Box>
        </>
    )
}

export default Login;