import React, { Component } from "react";
import Head from "next/head";
import { Image, Button,Stack, BoxProps,SimpleGrid, Heading, Box, Flex, Icon, Text, ButtonGroup, chakra, useColorModeValue as mode } from "@chakra-ui/react";
import SVG from "../components/svg/SVG";
import {FeaturedWork} from '../components/PortfolioFeatured/FeaturedWork.tsx'
import { PortfolioIndex } from '../components/PortfolioIndex/PortfolioIndex';
import { TestimonialsIndex } from '../components/Testimonial/TestimonialsIndex';

const Feature = (props) => {
  const { title, children, icon, border } = props
  return (
    <Flex rounded={8} bg="gray.50" p={2}  align="center">
      <Flex rounded={4} height="100%" align="center" borderLeftColor={border} borderLeftWidth="4px" py={4} px={7} color={mode('gray.800', 'gray.900')} fontSize="2.5rem">
        {icon}
      </Flex>
      <Stack py={3}>
        <Heading as="h3" my={0} color={mode('gray.700', 'gray.800')} fontSize="xl" fontWeight="bold">
          {title}
        </Heading>
        <Text style={{marginTop: 0}} paddingEnd="6">
          {children}
        </Text>
      </Stack>
    </Flex>
  )
}

const FeatureImage = (props) => (
    <Image
    display={{base: "none", md: "none", lg:"block"}}
      objectFit="contain"
      h="260px"
      w="660px"
      mb="48px"
      src="assets/images/illustrations/work-from-home.png"
      alt=""
    />
)

  
  function Landing() {
    return (

      <div className="landing overflow-hidden">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

          <title>BG Unified Solutions - IT & Infrastructure, Network, Cyber Security, Collaborative and Professional Services </title>
          <meta name="description" content="IT solutions and services. Australia's No. 1 IT service provider. Secured infrastructure with telco vendors. Backup and Recovery. Silver-Peak and Cisco. Data Center Locations. Affordable and secure. Load Balancing, DNS and Web Hosting. SD-WAN optimization, managed firewall, proxy, WAF">
          </meta>
          <meta property="og:title" content="BG Unified Solutions - IT & Infrastructure, Network, Cyber Security, Collaborative and Professional Services " key="title" />
          <meta property="og:description" content="IT solutions and services. Australia's No. 1 IT service provider. Secured infrastructure with telco vendors. Backup and Recovery. Silver-Peak and Cisco. Data Center Locations. Affordable and secure. Load Balancing, DNS and Web Hosting. SD-WAN optimization, managed firewall, proxy, WAF" />
        </Head>
      <Box pos="relative" as="section" bg={'gray.100'} py="8">
     
        <Flex
        width="100%"
        maxW="1920px"
        mx="auto"
          > 
        <Flex justify="end" width="25%">
        <Image
        display={{base: "none", md:"block"}}
        height="500px"
        minWidth="636px"
          src="assets/images/backgrounds/saas-assets.png"
          alt="Screenshot for Form builder"
          transform="translateX(100px)"
        />
        </Flex>
         
          <Box width={{base: "100%", lg: "50%"}} pt="6">
            <Box textAlign="center"  fontSize={["56px", "56px", "56px", "72px"]} fontFamily="Sora" lineHeight={1.2} maxWidth="100vw" mt="8" fontWeight="800">
            I can build <span className="text-gradient">digital experiences</span> for your brand.
            </Box>
            {/* <Text mt={5} fontSize="xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ea at non aliquam magnam quis, nihil ratione.
            </Text> */}
           <ButtonGroup w="100%" justifyContent="center">
           
           <Button
              mt="8"
              minW="14rem"
              colorScheme="primary"
              size="lg"
              height="14"
              px="8"
              fontSize="lg"
              fontWeight="bold"
            >
              Get Started
            </Button>
            <Button
              mt="8"
              minW="14rem"
              variant="outline"
              colorScheme="blue"
              size="lg"
              height="14"
              px="8"
              fontSize="lg"
              fontWeight="bold"
            >
              Get Started
            </Button>
           </ButtonGroup>
          </Box>
        <Box width="25%">
        <Image
        display={{base: "none", md:"block"}}
        height="600px"
        minW="464.8px"
          src="assets/images/backgrounds/saas-assets-2.png"
          alt="Screenshot for Form builder"
          // transform="translateX(-22%)"
        />
        </Box>
          {/* <Image
            pos="relative"
            marginEnd="-14rem"
            marginTop="-32px"
            w="50rem"
            src="assets/images/backgrounds/saas-assets.png"
            alt="Screenshot for Form builder"
          /> */}
        </Flex>
    </Box>
         
    <Box as="section"  py="0" >
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
          
            <Flex width="100%" justify="space-between" align="end">
              <Box mb={{ lg: '3rem', base: "1rem" }}>
                <Heading
                  lineHeight="shorter"
                  size="3xl"
                  letterSpacing="tight"
                  fontWeight="extrabold"
                >
                  What I <br/>
                  <Box as="span">
                    Can Do
                  </Box>&nbsp;
                  <span className="text-gradient">.</span>
                </Heading>
                <Text mt="4" fontSize="lg" fontWeight="600" color={'gray.600'} maxW={{ lg: 'md' }}>
                Have a Idea in mind or want to scale your business up? We deliver everything from making your logo to deploying your dream applications on a server.
                </Text>
              </Box>
              <FeatureImage></FeatureImage>
            </Flex>
            
            <SimpleGrid
              flex="1"
              columns={{ base: 1,md:2, lg: 3 }}
              spacing={{ base: '.4rem', md: '.8rem' }}
            >
                <Feature title="UI/UX Design" border="red.500" icon={<Image height="80px" src="assets/images/features/vectors/write-3d.png"/>}>
                For a User Specific App
              </Feature>
              <Feature title="Branding" border="blue.500" icon={<Image height="80px" src="assets/images/features/vectors/globe-3d.png"/>}>
                That Defines You!
              </Feature>
              <Feature title="Development" border="yellow.400" icon={<Image objectFit="contain" width="80px" height="80px" src="assets/images/features/vectors/laptop-3d.png"/>}>
                Ready. Steady. Code.
              </Feature>
            </SimpleGrid>
      </Box>
    </Box>
    <Box  as="section"  py="24" bg="gray.100">
      <FeaturedWork
        color="teal"
        category="Web Dev"
        tags={["React", "SCSS", "NodeJS"]}
        title="Building a Social App for CoFounders"
        link=""
        button_caption=""
        button_href=""
        img=""
        type="horizontal"
      ></FeaturedWork>
      <SimpleGrid maxW={{ base: 'xl', md: '7xl' }} mx="auto" columns={{base: 1, lg: 2}}>
      <FeaturedWork
         color="red"
        category="Web Dev"
        tags={["React", "SCSS", "NodeJS"]}
        title="Building a Social App for CoFounders"
        link=""
        button_caption=""
        button_href=""
        img=""
        type="vertical"
      ></FeaturedWork>
      <FeaturedWork
      color="blue"
      category="Web Dev"
      tags={["React", "SCSS", "NodeJS"]}
      title="Building a Social App for CoFounders"
      link=""
      button_caption=""
      button_href=""
      img=""
      type="vertical"
    ></FeaturedWork>
      </SimpleGrid>
    </Box>
    <Box as="section"  py="4" bg="gray.100">
      <Flex width="100%" justify="center" align="end">
              <Box mb={{ lg: '3rem', base: "1rem" }}>
                <Heading
                  lineHeight="shorter"
                  size="3xl"
                  letterSpacing="tight"
                  fontWeight="extrabold"
                >
                  Some Words Out There 
                  <span className="text-gradient"> .</span>
                </Heading>
                <Box mt="4" fontSize="lg" fontWeight="600" textAlign="center" color={'gray.600'}>
                We are working continuosly to make our clients and customers get what they need.
                </Box>
              </Box>
            </Flex>
      <TestimonialsIndex></TestimonialsIndex>
    </Box>
      </div>
    );
  }


export default Landing;
