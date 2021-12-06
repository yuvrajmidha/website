import { Box, Flex, Grid, Heading, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { BlogCTA } from './BlogCTA'
import { BlogMedia } from './BlogMedia'
import { BlogMeta } from './BlogMeta'

export const FeaturedWork = (props) => {
  return (
      <Box maxW={{ base: 'xl', md: '7xl' }}  mx="auto" p={{ base: '6', md: '8' }}>
        <Grid
          rounded="12" bg={props.color + ".100"}
          templateColumns={{ base: '1fr', md: props.type === 'horizontal' ? '24rem 1fr' : '1fr' }}
          columnGap={{ base: '12', lg: '20' }}
          rowGap="10"
          overflow="hidden"
        >
         
          <Flex direction="column" py={16}  pl={{base:6, md:props.type === 'horizontal' ? 16 : 6}} pr={{base:6, md:props.type === 'horizontal' ? 0 : 6}} h="full">
            <Box flex="1">
              <BlogMeta 
              color={props.color}
              type={props.category} tags={props.tags} />
              <Heading size="xl" mt="6" mb="4">
                {props.title}
              </Heading>
              {/* <Text fontSize="lg" color={mode('gray.600', 'gray.400')} lineHeight="tall">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text> */}
            </Box>
            <BlogCTA
              mt="8"
              color={props.color}
              case_study_link={props.link}
              website_link="www.google.com"
            />
          </Flex>
          <BlogMedia
            alt={props.title}
            src={props.img}
          />
        </Grid>
      </Box>
  )
}
