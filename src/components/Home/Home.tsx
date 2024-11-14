import { Box, Flex, Text } from "@chakra-ui/react";
import ActionCard from "../ActionCard/ActionCard";

const Home = () => {
    return (
        <>
            <Box h='100%' w='100%' p='8vh 8vw'>
                <Flex flexDirection='column' gap='6vh'>
                    <Flex flexDirection='column' gap='2vh'>
                        <Text fontSize='2xl'>Lista Geral</Text>
                        <Flex flexDirection='row' gap='1vw'>
                            <ActionCard/>
                            <ActionCard/>
                            <ActionCard/>
                            <ActionCard/>
                        </Flex>
                    </Flex>
                    <Flex flexDirection='column' gap='2vh'>
                        <Text fontSize='2xl'>Lista Preferida</Text>
                        <Flex flexDirection='row' gap='1vw'>
                            <ActionCard/>
                            <ActionCard/>
                            <ActionCard/>
                            <ActionCard/>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default Home;
