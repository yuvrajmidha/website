import { Box, Divider, Flex, Grid, Heading, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { BlogCTA } from './BlogCTA'
import { BlogMedia } from './BlogMedia'
import { BlogMeta } from './BlogMeta'

export const FeaturedWork = (props) => {
  return (
      <Box maxW={{ base: 'xl', md: '7xl' }}  mx="auto" p={{ base: '4', md: '4' }}  >
        <Grid
          templateColumns={{ base: '1fr', md: props.type === 'horizontal' ? '1fr 24rem' : '1fr' }}
          columnGap={{ base: '12', lg: '20' }}
          rowGap="2" 
        >
         
       
          <BlogMedia
            alt={props.title}
            src={props.img}
          />
          <Flex direction="column" py={{base: 2, md: 8}}  pl={{base:2, md:props.type === 'horizontal' ? 2 : 6}} pr={{base:6, md:props.type === 'horizontal' ? 0 : 6}} h="full">
            <Box flex="1">
              {/* <BlogMeta 
              color={props.color}
              type={props.category} tags={props.tags} /> */}
              <Heading fontSize={{base:"md",md:"lg", lg:"2xl"}} mb="4">
                {props.title}
              </Heading>
              {/* <Text fontSize="lg" color={mode('gray.600', 'gray.400')} lineHeight="tall">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text> */}
            </Box>
            <BlogCTA
              color={props.color}
              case_study_link={props.link}
              website_link="www.google.com"
            />
          </Flex>
        </Grid>
        <Divider mt={props.type === 'horizontal' ? 8 : {base: 8, lg: 0}} borderBottomColor={"dark.500"}></Divider>
      </Box>
  )
}
