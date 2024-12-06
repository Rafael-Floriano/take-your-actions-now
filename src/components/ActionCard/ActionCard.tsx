import React from 'react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { saveAction } from '../../service/ActionService';

const ActionCard = ({ image, name, value }) => {

    const navigate = useNavigate()
    
    const handleDetailsClick = () => {
        navigate(`/actionsDetails/${name}`);
    };

    const handleSaveAction = () => {
        saveAction(name);
    };

    return (
        <Card maxW="sm">
            <CardBody>
                <Image
                    src={image}
                    alt={`${name} image`}
                    borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{name}</Heading>
                    <Text color="blue.600" fontSize="2xl">
                        {value}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue" onClick={handleDetailsClick}>
                        Detalhes
                    </Button>
                    <Button variant="ghost" colorScheme="blue" onClick={handleSaveAction}>
                        Adicionar aos favoritos
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default ActionCard;
