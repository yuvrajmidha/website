import React from 'react';
import { Text, List,Heading, ListItem, ListIcon,Box, Flex } from '@chakra-ui/react';

function Content(props) {
    return (
        <>
            {props.data.map(({fontSize="lg", fontWeight="500",image,title,titleSize="lg",titleFont, styleType="disc", stylePos="outside", opacity=.8, spacingY=2,icon, iconColor, list, text, ...props}) => (
                <>
                {title && <Heading fontFamily={titleFont} my={4} fontSize={titleSize}>{title}</Heading>}
                {image && <Flex justifyContent={props.imageJustify} >
                    {image}
                </Flex>
                    }
                {text && <Text 
                    fontSize={fontSize} 
                    fontWeight={fontWeight}
                    opacity={opacity}
                    my={spacingY}
                    {...props}
                    >
                    {text}
                </Text>}
                {list && <List 
                    fontSize={fontSize} 
                    fontWeight={fontWeight}
                    opacity={opacity}
                    px={4}
                    my={spacingY}
                    styleType={styleType}
                    stylePos={stylePos} {...props}
                    >
                    {list.map((item, index) => (
                          <ListItem key={index}>{icon && <ListIcon icon={icon} mr={4} color={iconColor}></ListIcon>}{item}</ListItem>
                    ))}
                </List>}
                </>
            ))}
        </>
    );
}

export default Content;