import React from 'react';
import { Box } from '@chakra-ui/react';

function Container({ width = ["100%", "100%", "720px", "1080px", "1300px"], children, ...props }) {
    return (
        <Box px={4} mx="auto" width={width} {...props}>
            {children}
        </Box>
    );
}

export default Container;