import { Box, Button, Flex, Text } from "@chakra-ui/react";
import ActionCard from "../ActionCard/ActionCard";
import { useEffect, useState } from "react";
import pagination, { StockData } from "../../client/PaginationGateway";

const Home = () => {
    const [data, setData] = useState<StockData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsByPage] = useState(8);
    const [isLoading, setIsLoading] = useState(false); 

    const fetchData = async (page: number) => {
        setIsLoading(true);
        const result = await pagination(page, resultsByPage);
        if (result && result.items) {
            setData(result.items);
        } else {
            setData([]);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const handleNextPage = () => setCurrentPage((prev) => prev + 1);

    const handlePreviousPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <>
            <Box h='100%' w='100%' p='8vh 8vw'>
                <Flex flexDirection='column' gap='6vh'>
                    <Flex flexDirection='column' gap='2vh'>
                        <Text fontSize='2xl'>Lista Geral</Text>
                        {isLoading ? (
                            <Text>Carregando...</Text>
                        ) : (
                            <Flex flexDirection='row' gap='1vw' wrap="wrap">
                                {data.map((item, index) => (
                                    <ActionCard key={index} data={item} image={item.logourl} value={item.regularMarketPrice} name={item.symbol} />
                                ))}
                            </Flex>
                        )}
                    </Flex>

                    <Flex justifyContent="space-between" mt="4">
                        <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
                            Página Anterior
                        </Button>
                        <Text>Página {currentPage}</Text>
                        <Button onClick={handleNextPage}>
                            Próxima Página
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

export default Home;
