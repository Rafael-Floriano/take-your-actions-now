import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";

const ActionCard = () => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                src='https://s3-symbol-logo.tradingview.com/banco-do-brasil--big.svg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>BRASIL ON NM</Heading>
                <Text color='blue.600' fontSize='2xl'>
                    R$25,37
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Detalhes
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Adicionar aos favoritos
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default ActionCard;