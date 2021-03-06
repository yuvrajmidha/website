
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Container from './Container';

function Section({ my = 8, py = 8, blend, align="center", bgAttachment, containerWidth, children = "Section", ...props }) {
    return (
        <Flex
            my={my}
            py={py}
            width="100%"
            justify={align}
            direction="column"
            backgroundPosition="center"
            backgroundAttachment={bgAttachment}
            backgroundSize="cover"
            style={{ backgroundBlendMode: blend }}
            {...props}>
            <Container width={containerWidth}>
                {children}
            </Container>
        </Flex>
    );
}

export default Section;