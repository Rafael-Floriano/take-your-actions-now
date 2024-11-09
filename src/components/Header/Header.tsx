import { Box, Flex, Text } from "@chakra-ui/react";
import "./Header.css";

const Header = () => {
    return (
        <>
            <div className="header-conteiner">
                <div className="header-content">
                    <Text>Take your actions Now</Text>
                    <div className="site-actions">
                        <Text>Explorar</Text>
                        <Text>Minhas ações</Text>
                    </div>
                    <div className="account-actions">
                        <Text>Minha conta</Text>
                        <Text>Logout</Text>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;