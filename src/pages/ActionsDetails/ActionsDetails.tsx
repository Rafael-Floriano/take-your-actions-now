import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Stack,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Divider,
} from '@chakra-ui/react';
import ActionChart from '../../components/ActionChart/ActionChart';
import { useParams } from 'react-router-dom';
import { StockData } from '../../client/PaginationGateway';
import findActionBySymbol from '../../client/FindActionGateway';

const ActionsDetails = () => {
  const { symbol } = useParams();
  const [actionData, setActionData] = useState<StockData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
      const fetchData = async () => {
          if (symbol) {
              setLoading(true);
              const data = await findActionBySymbol(symbol);
              setActionData(data);
              setLoading(false);
          }
      };
      fetchData();
  }, [symbol]);
  

  return (
    <Box p={8} minH="100vh" minW="70vw">
        <Flex justify="space-between" align="center" mb={8}>
            <HStack spacing={4}>
                <Box
                    bg="yellow.400"
                    w="40px"
                    h="40px"
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Heading size="md" color="white">
                        {actionData?.currency}
                    </Heading>
                </Box>
                <Heading size="lg">{actionData?.symbol}</Heading>
            </HStack>
            <Text fontSize="sm" color="gray.600">
                {actionData?.longName}
            </Text>
        </Flex>

        <Stack direction={{ base: 'column', md: 'row' }} spacing={8} mb={8}>
            <Stat>
                <StatLabel>Cotação</StatLabel>
                <StatNumber>R$ {actionData?.regularMarketPrice.toFixed(2)}</StatNumber>
            </Stat>
            <Stat>
                <StatLabel>P/L</StatLabel>
                <StatNumber>{actionData?.priceEarnings?.toFixed(2) || 'N/A'}</StatNumber>
            </Stat>
            <Stat>
                <StatLabel>P/VP</StatLabel>
                <StatNumber>{actionData?.marketCap ? (actionData?.marketCap / actionData?.regularMarketPrice).toFixed(2) : 'N/A'}</StatNumber>
            </Stat>
        </Stack>

        <Divider mb={8} />

        <VStack align="stretch" spacing={4}>
            <Box h="600px" borderRadius="md">
                <ActionChart />
            </Box>
        </VStack>
    </Box>
);

};

export default ActionsDetails;
