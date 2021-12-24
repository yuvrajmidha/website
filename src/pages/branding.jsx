import React, { Component } from "react";
import {
    Breadcrumb,
    Text,
    Box,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BoxProps,
    Stack,
    VStack,
    Flex,
    Heading,
    Img,
    Grid,
    SimpleGrid,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
import Title from "../pageBuilder/Title"
import Section from "../pageBuilder/Section"
import { FaChevronRight } from 'react-icons/fa';
import { HiBadgeCheck, HiTemplate, HiChartSquareBar, HiCurrencyDollar } from 'react-icons/hi'
import {BlogCard} from '../components/BlogWithTile/BlogCard'

const data = [
    {
      image:
        'https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzaWduZXIlMjB3b3JraW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: '2020 Chakra UI Developer Survey',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt fugiat nulla pariatur.',
      type: 'article',
      tags: ['community', 'research'],
      author: {
        image:
          'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Z3V5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Sammy Tom',
        title: 'Director of Relations',
      },
    },
    {
      image:
        'https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVzaWduZXIlMjB3b3JraW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Women in Tech learning Chakra UI',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur fugiat nulla pariatur.',
      type: 'video',
      tags: ['firebase'],
      author: {
        image:
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Angelina Gates',
        title: 'Director of Relations',
      },
    },
    {
      image:
        'https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzaWduZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Using Chakra UI in Sketch',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      type: 'webinar',
      tags: ['animations', 'ionic'],
      author: {
        image:
          'https://images.unsplash.com/photo-1514836894203-facaaeba1140?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGFmcmljYSUyMHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Busola Banks',
        title: 'Director of Relations',
      },
    },
  ]
  

const Feature = (props) => {
    const { title, children, icon } = props
    return (
      <Box>
        <Box color={mode('blue.600', 'blue.400')} fontSize="2.5rem">
          {icon}
        </Box>
        <Stack mt="4">
          <Text as="h3" color={mode('blue.600', 'blue.400')} fontSize="xl" fontWeight="bold">
            {title}
          </Text>
          <Text paddingEnd="6" lineHeight="tall">
            {children}
          </Text>
        </Stack>
      </Box>
    )
  }

  const FeatureImage = (props) => (
    <Box flex="1" rounded={12} overflow="hidden" {...props}>
      <Img
        objectFit="cover"
        h="100%"
        w="100%"
        src="https://images.unsplash.com/photo-1573878737226-4f9572c22b69?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
        alt=""
      />
    </Box>
  )
  



const Service = () => {

    return(
        <>
        <Section>
            <Breadcrumb mb={2} spacing='8px' separator={<FaChevronRight size="12px" color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Services</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Title className="text-gradient" fontWeight="900" textAlign="left">Branding</Title>
            <Box mt={4} maxW="3xl">
                <Text >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ullam nihil quas quis deleniti nesciunt corporis eius labore illo quasi aliquam laborum reprehenderit pariatur ad cumque totam, sapiente voluptate facere.</Text>
            </Box>
        </Section>
        <Section bg={mode('gray.100', 'gray.800')} py="24">
        <Flex justify="space-between" direction={{ base: 'column', lg: 'row' }}>
          <Box maxW={{ lg: 'lg' }}>
            <Box mb={{ lg: '8rem' }}>
              <Heading
                lineHeight="shorter"
                size="2xl"
                letterSpacing="tight"
                fontWeight="extrabold"
              >
                Manage — <br />
                  everything <span className="text-gradient">.</span>
              </Heading>
              <Text mt="4" fontSize="2xl" color={mode('gray.600', 'gray.400')} maxW={{ lg: 'md' }}>
                One mission control for your business, wherever you go.
              </Text>
            </Box>
            <FeatureImage my={{ base: '14', lg: '0' }} display={{ base: 'block', lg: 'none' }} />
            <SimpleGrid
              flex="1"
              columns={{ base: 1, md: 2 }}
              spacing={{ base: '3rem', md: '2rem' }}
            >
              <Feature title="Order fulfillment" icon={<HiBadgeCheck />}>
                Sed sit amet velit pharetra, viverra ligula scelerisque, neque.
              </Feature>
              <Feature title="Simple Payment" icon={<HiCurrencyDollar />}>
                Sed sit amet velit pharetra, viverra ligula scelerisque, neque.
              </Feature>
              <Feature title="Consumer Insight" icon={<HiChartSquareBar />}>
                Sed sit amet velit pharetra, viverra ligula scelerisque, neque.
              </Feature>
              <Feature title="Intuitive Dashboard" icon={<HiTemplate />}>
                Sed sit amet velit pharetra, viverra ligula scelerisque, neque.
              </Feature>
            </SimpleGrid>
          </Box>
          <FeatureImage maxW={{ lg: '560px' }} display={{ base: 'none', lg: 'block' }} />
        </Flex>
        </Section>
        <Section>
            <VStack spacing="1.5rem">
            <Box mb={12} width="100%">
                <Heading textAlign="left" size="2xl">Our Approach <span className="text-gradient">.</span></Heading>
            </Box>
            <Grid templateColumns={{base: "auto", xl: "480px auto"}}>
                <Heading size="lg">Research {"&"} Planning</Heading>
                <Box>
                    <Text fontSize="xl" fontWeight="800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ullam a, tenetur, officia omnis quis.</Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ullam a, tenetur, officia omnis quis soluta error dolorem ipsa, nemo molestias? Mollitia sed eum quisquam laudantium accusamus quam maiores repellendus!
                </Box>
            </Grid>
            <Grid templateColumns={{base: "auto", xl: "480px auto"}}>
                <Heading size="lg">Content Creation</Heading>
                <Box>
                    <Text fontSize="xl" fontWeight="800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ullam a, tenetur, officia omnis quis.</Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ullam a, tenetur, officia omnis quis soluta error dolorem ipsa, nemo molestias? Mollitia sed eum quisquam laudantium accusamus quam maiores repellendus!
                </Box>
            </Grid>
            <Grid templateColumns={{base: "auto", xl: "480px auto"}}>
                <Heading size="lg">Development {"&"} Launch</Heading>
                <Box>
                    <Text fontSize="xl" fontWeight="800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ullam a, tenetur, officia omnis quis.</Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ullam a, tenetur, officia omnis quis soluta error dolorem ipsa, nemo molestias? Mollitia sed eum quisquam laudantium accusamus quam maiores repellendus!
                </Box>
            </Grid>
            </VStack>
        </Section>
        <Section>
            <Title fontSize="5xl" textAlign="left">Latest Case Studies <span className="text-gradient">.</span></Title>

            <SimpleGrid mt={8} columns={{base:1, lg:3}} spacing={"1.5rem"}>
                {data.map(blog => <BlogCard data={blog}></BlogCard>)}
            </SimpleGrid>

        </Section>
        </>
    )

}

export default Service;