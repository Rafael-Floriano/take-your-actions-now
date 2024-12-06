import React from 'react';
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
  StatArrow,
  Divider,
} from '@chakra-ui/react';
import ActionChart from '../../components/ActionChart/ActionChart';
import { useParams } from 'react-router-dom';

const ActionsDetails = () => {
  const { symbol } = useParams();

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
              BR
            </Heading>
          </Box>
          <Heading size="lg">PETR4</Heading>
        </HStack>
        <Text fontSize="sm" color="gray.600">
          Petroleo Brasileiro S.A. Petrobras
        </Text>
      </Flex>

      <Stack direction={{ base: 'column', md: 'row' }} spacing={8} mb={8}>
        <Stat>
          <StatLabel>Cotação</StatLabel>
          <StatNumber>R$ 39,64</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Variação (12M)</StatLabel>
          <StatNumber>
            33,63% <StatArrow type="increase" />
          </StatNumber>
        </Stat>
        <Stat>
          <StatLabel>P/L</StatLabel>
          <StatNumber>6,11</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>P/VP</StatLabel>
          <StatNumber>1,31</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>DY</StatLabel>
          <StatNumber>12,47%</StatNumber>
        </Stat>
      </Stack>

      <Divider mb={8} />

      <VStack align="stretch" spacing={4}>
        <Box h="600px" borderRadius="md">
            <ActionChart/>
        </Box>

        <Text textAlign="center" fontSize="sm" color="gray.500">
          Se você tivesse investido R$ 1.000,00 há 30 dias, hoje você teria: R$ 1.122,35*
        </Text>
      </VStack>
    </Box>
  );
};

export default ActionsDetails;
