import { Button, Flex, Image, Text } from "@chakra-ui/react";
import "./Header.css";
import { FaHeart, FaRegCompass, FaUserAlt } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Header = () => {

    const navigate = useNavigate()

    const routerChanger = (path:string) => {
        if (path === '/') {
            window.localStorage.removeItem('token');
        }
        navigate(path);
    }

    const isClientLogged = () => {
        const token:string | null = window.localStorage.getItem("token");
        if (token != null && token != undefined && token != '') {
            return true
        }
        return false;
    }

    return (
        <>
            {isClientLogged() &&
                        <div className="header-conteiner">
                        <div className="header-content">
                            <Flex className="conteiner-icon-with-title" flexDirection='row' gap='2vw' alignItems='center' onClick={() =>routerChanger('/home')}>
                                <Image
                                    boxSize='100px'
                                    objectFit='cover'
                                    src='./src/logo.png'
                                    alt='Logo do Take your actions Now'
                                />
                                <Text className="header-title">Take your actions Now</Text>
                            </Flex>
                            <div className="site-actions">
                                <Button className="button-conteiner" colorScheme="teal" variant="solid" onClick={() =>routerChanger('/home')}>
                                    <FaRegCompass /> Explorar
                                </Button>
                                <Button className="button-conteiner" colorScheme="teal" variant="solid" onClick={() =>routerChanger('/bookmark')}>
                                    <FaHeart /> Minhas ações
                                </Button>
                            </div>
                            <div className="account-actions">
                                <Button className="button-conteiner" colorScheme="teal" variant="solid">
                                    <FaUserAlt /> Minha conta
                                </Button>
                                <Button className="button-conteiner" colorScheme="red" variant="solid" onClick={() =>routerChanger('/')}>
                                    <IoIosLogOut /> Logout
                                </Button>
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}

export default Header;