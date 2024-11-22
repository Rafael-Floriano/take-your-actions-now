import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Text, WrapItem } from "@chakra-ui/react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
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
        <Flex w='28vw' h='46vh' borderWidth='1px' borderRadius='lg' p={9} flexDirection='row' justifyContent='center' gap='10vw'>
            <FormControl>
                <Flex flexDirection='column' gap='2vh' alignItems='center'>
                    <Flex className="conteiner-icon-with-title" flexDirection='row' gap='.1vw' alignItems='center'>
                        <Image
                            boxSize='80px'
                            objectFit='cover'
                            src='./src/logo.png'
                            alt='Logo do Take your actions Now'
                            />
                            <Text className="header-title">Take your actions Now</Text>
                    </Flex>
                    <Flex direction='column' gap='4vh' w='100%'>
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
                </Flex>
            </FormControl>
        </Flex>
        </>
    )
}

export default Login;