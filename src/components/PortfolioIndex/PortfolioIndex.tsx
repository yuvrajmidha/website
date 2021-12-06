import {
    Box,
    Flex,
    Heading,
    Img,
    Link,
    LinkBox,
    LinkOverlay,
    SimpleGrid,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { BsArrowRight, } from 'react-icons/bs'

  
  export const PortfolioIndex = () => {
    return (
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" mt={12} px={{ base: '6', md: '8' }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="12" mb="10">
            <Box pos="relative" cursor="pointer" className="group" h="300px" rounded={12} overflow="hidden" >
                <Img
                    w="full"
                    h="full"
                    objectFit="cover"
                    htmlWidth="336"
                    htmlHeight="228"
                    src={"https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
                    alt={"BG Unified Solutions"}
                    transition="all 0.2s"
                    _groupHover={{ transform: 'scale(1.05)' }}
                />
            </Box>
            <Box pos="relative" cursor="pointer" className="group" h="300px" rounded={12} overflow="hidden" >
                <Img
                    w="full"
                    h="full"
                    objectFit="cover"
                    htmlWidth="336"
                    htmlHeight="228"
                    src={"https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
                    alt={"BG Unified Solutions"}
                    transition="all 0.2s"
                    _groupHover={{ transform: 'scale(1.05)' }}
                />
            </Box>
            <Box pos="relative" cursor="pointer" className="group" h="300px" rounded={12} overflow="hidden" >
                <Img
                    w="full"
                    h="full"
                    objectFit="cover"
                    htmlWidth="336"
                    htmlHeight="228"
                    src={"https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
                    alt={"BG Unified Solutions"}
                    transition="all 0.2s"
                    _groupHover={{ transform: 'scale(1.05)' }}
                />
            </Box>
          </SimpleGrid>
          <Link fontSize="xl" fontWeight="bold" color={mode('blue.600', 'blue.400')}>
            <span>View all works</span>
            <Box as={BsArrowRight} display="inline-block" ms="2" />
          </Link>
        </Box>
    )
  }
  