import { Box, createIcon, Flex, Icon, Text } from "@chakra-ui/react";
import { HiHeart } from "react-icons/hi"
import ActionCard from "../../components/ActionCard/ActionCard";


const HeartIcon = createIcon({
    displayName: "HeartIcon",
    path: (
      <>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          fill="currentColor"
          d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
        />
      </>
    ),
  })

const Bookmark = () => {
    return (
        <>
            <Box h='100%' w='100%' p='8vh 8vw'>
                <Flex flexDirection='column' gap='6vh'>
                    <Flex flexDirection='column' gap='2vh'>
                    <Flex flexDirection='row' gap='1vw' alignItems='center'>
                        <HeartIcon boxSize="40px" color="blue.400" />
                        <Text fontSize='2xl'>Ações favoritadas</Text>
                    </Flex>
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

export default Bookmark;