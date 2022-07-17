import React, { Component, useState } from "react";
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
    HStack,
    Image,
    Divider,
  } from '@chakra-ui/react'
import Title from "../pageBuilder/Title"
import Section from "../pageBuilder/Section"
import Head from "next/head";
import MyCount from "../components/Countup/main";
import { FaDotCircle } from "react-icons/fa";



const Service = () => {

    const [active, setActive] = useState("Branding")

    return(
        <>
        <Head>
            <title>Contact us - BG Unified Solutions</title>
        </Head>
        <Section position="relative" textAlign="left" bg={["gray.100", "gray.100"]} py={32} mt={0}>
          <Title textAlign="left" zIndex="100" fontSize={["44px", "64px", "80px"]}>Who We Are <span className="text-gradient">?</span></Title>
        </Section>
        <Section>
            <SimpleGrid spacing={12} columns={{base: 1, lg: 2}}>
                <Flex py={12} align={"center"}>
                    <Image rounded={"lg"} h="440px" width={"80%"} objectFit="cover" src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2396&q=80"></Image>
                </Flex>
                <Flex align={"center"}>
                    <Box>
                    <SimpleGrid mb={8} columns={3}>
                      <Box>
                          <Heading size="xl">
                            <MyCount endPoint={20} suffix="+"></MyCount>          
                          </Heading>      
                          <Heading mt={2} size="md">Projects</Heading>
                      </Box>
                      <Box>
                          <Heading size="xl">
                            <MyCount endPoint={10} suffix="+"></MyCount>          
                          </Heading>      
                          <Heading mt={2} size="md">Clients</Heading>
                      </Box>
                      <Box>
                          <Heading size="xl">
                            <MyCount endPoint={95} suffix="%"></MyCount>          
                          </Heading>      
                          <Heading mt={2} size="md">Success Rate</Heading>
                      </Box>
                    </SimpleGrid>
                    <Text fontWeight={"semibold"} color="blue.900" fontSize={"18px"}>
                      We not only build great websites but focus on user interactivity as well. This is where new business comes. If your website is old-fashioned or outdated, you tend to lose your customers within 5 seconds.
                    </Text>
                    <Text mt={8} fontWeight={"semibold"} color="blue.900" fontSize={"18px"}>
                    We are the solution to this problem:- A completely customized website designed strategically, regularly updated, and maintained. This is how you can convert your website into a valuable asset for your business.
                    </Text>
                    </Box>
                </Flex>
            </SimpleGrid>
        </Section>
       <Section w="100%" mt={0} pt={0}>
            <SimpleGrid columns={{base: 1, lg: 2}}>
                    <VStack direction="column" justify={"center"} align="center" px={16} py="12">
                          <VStack spacing={12} align="start">
                            {["Branding", "UI/UX Design", "Development"].map(item => <Heading onClick={() => setActive(item)} textAlign={"left"} cursor={"pointer"} _hover={{color: "purple.800"}} color={active === item ? "purple.800" : "gray.400"} size={"xl"}>
                              {item}
                            </Heading>)}
                          </VStack>
                    </VStack>
                    <VStack justify={"center"} align="start" p={8}>
                            <Box maxW="xl" mx="auto">
                              <Text fontWeight={"bold"} fontSize={"28px"}>
                                  We design elegant digital experiences that help brands build loyal and happy customers.
                              </Text>
                              <Flex pt={10} wrap="wrap">
                                    {["Logo Design", "Illustrations", "Social Media Design", "Brand Identity"].map(item => <HStack py={2} key="item" width={"50%"}>
                                        <Text>•</Text>
                                        <Text>
                                            {item}
                                        </Text>
                                    </HStack>)}
                              </Flex>
                            </Box>
                    </VStack>
            </SimpleGrid>
       </Section>
       <Section>
           <Box px={{base: 4, lg: 16}}>
            <Heading size="xl" textAlign="center">
                Our Clients
              </Heading>
              <SimpleGrid mt={12} columns={4} spacing={12}>
                {['https://cofoundersplanet.com/images/logo-dark.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2GtfNSHNIcBAlPFembU2c4jOMJgHS5MuL7FUxvbPPhtfPIPyJUaSDN2BR7YEI6Htcg&usqp=CAU', 'https://cdn.mews.li/media/image/cea79fa2-7eb7-4119-865d-ac1000d95247'].map(item => <Image 
                  py="12" 
                  key={item}
                  width={"160px"} 
                  src={item} />)}
              </SimpleGrid>
           </Box>
       </Section>
       <Section>
       <Divider borderColor={"dark.500"}/>
       </Section>
        </>
    )

}

export default Service;