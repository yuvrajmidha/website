import { Box, Divider, Flex, Grid, Heading, SimpleGrid, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { BlogCTA } from './BlogCTA'
import { BlogMedia } from './BlogMedia'
import { BlogMeta } from './BlogMeta'

export const FeaturedWork = (props) => {
  return (
      <Box maxW={{ base: 'xl', md: '5xl' }}  mx="auto" p={{ base: '4', md: '4' }}  >
          <SimpleGrid columns={{base: 1, md: 2}}>
            <Flex direction="column" py={{base: 2, md: 8}} h="full">
              <Box maxW="md" pr={{base: 0, lg: 12}}>
                {/* <BlogMeta 
                color={props.color}
                type={props.category} tags={props.tags} /> */}
                <Heading fontWeight={"900"} fontSize={{base:"md",md:"lg", lg:"5xl"}}  mb="4">
                  {props.title}
                </Heading>
                <Heading size="xs" textTransform={"uppercase"} fontWeight={"400"}>{props.tags.map((item:any) => <span key={item}>{item} &nbsp;</span>)}</Heading>
              </Box>
            </Flex>
            <Box py={{base: 2, md: 8}}>
                <Text fontSize="xl" color={mode('gray.600', 'gray.400')} fontWeight="semibold" mb={8} lineHeight="tall">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </Text>
                <BlogCTA
                  color={props.color}
                  case_study_link={props.link}
                  website_link="www.google.com"
                />
              </Box>
          </SimpleGrid>
          <BlogMedia
            alt={props.title}
            src={props.img}
          />
      </Box>
  )
}
