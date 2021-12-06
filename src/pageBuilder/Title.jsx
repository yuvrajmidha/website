import React from 'react';
import { Heading } from '@chakra-ui/react';

function Title({fontSize = ["4xl","48px","56px","64px"], children = "Lorem Ipsum", ...props}) {
    return (
    
    <Heading 
        textAlign="center"
        fontFamily="Sora" 
        fontSize={fontSize}
        {...props}>
            {children}
            
        </Heading>
    );
}

export default Title;