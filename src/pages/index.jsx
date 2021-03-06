import React, { Component } from "react";
import Head from "next/head";
import { Image, Button,Stack, BoxProps,SimpleGrid, Heading, Box, Flex, Icon, Text, ButtonGroup, chakra, useColorModeValue as mode, Divider } from "@chakra-ui/react";
import SVG from "../components/svg/SVG";
import {FeaturedWork} from '../components/PortfolioFeatured/FeaturedWork.tsx'
import { PortfolioIndex } from '../components/PortfolioIndex/PortfolioIndex';
import { TestimonialsIndex } from '../components/Testimonial/TestimonialsIndex';
import CTAWithInput from '../components/CtaWithInput/CTAWithInput';
import Section from "../pageBuilder/Section";

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

          <title>Codbrix Labs</title>
          <meta name="description" content="IT solutions and services. We have expertise in CMS and ECommerce Solutions.">
          </meta>
          <meta property="og:title" content="Codbrix Labs" key="title" />
          <meta property="og:description" content="IT solutions and services. We have expertise in CMS and ECommerce Solutions." />
        </Head>
      <Box pos="relative" as="section" bg="gray.100" py={{base: 0, lg: "8"}} pb={16}>
     
        <Flex
        width="100%"
        maxW="1920px"
        mx="auto"
          > 
        <Flex justify="end" pt={16} width="25%">
        <Image
        display={{base: "none", md:"block"}}
        height="500px"
        minWidth="636px"
          src="assets/images/backgrounds/saas-assets.png"
          alt="Screenshot for Form builder"
          transform="translateX(100px)"
        />
        </Flex>
         
          <Box width={{base: "100%", lg: "50%"}} mx={4} pt={{base: 0, lg :"20"}}>
            <Heading textAlign={{base:"left", lg: "center"}}  fontSize={["36px", "56px", "56px", "72px"]} lineHeight={1.2} maxWidth="100vw" mt="8" fontWeight="900">
            We can <br className="d-block d-md-none"/> build <span className="text-gradient">digital experiences</span> for your brand.
            </Heading>
            {/* <Text mt={5} fontSize="xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ea at non aliquam magnam quis, nihil ratione.
            </Text> */}
           <ButtonGroup w="100%" justifyContent={{base:"left", lg: "center"}}>
           
           <Button
              mt="8"
              colorScheme="brand"
              fontWeight="bold"
            >
              Get Started
            </Button>
            <Button
              mt="8"
              variant="outline"
              colorScheme="blue"
              fontWeight="bold"
            >
              Get Started
            </Button>
           </ButtonGroup>
          </Box>
        <Box width="25%" pt={8}>
        <Image
        display={{base: "none", sm:"block"}}
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
         
    <Section  py="20" >
      <Box px={{ base: '2', md: '8' }}>
          
            <Flex width="100%" justify="space-between" align="end">
              <Box mb={{ lg: '3rem', base: "1rem" }}>
                <Heading
                  lineHeight="shorter"
                  size="3xl"
                  letterSpacing="tight"
                  fontWeight={"800"}
                >
                  What We <br/>
                  <span>
                    Can Do
                  </span>&nbsp;
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
                <Feature title="UI/UX Design" border="red.500" icon={<Image height={{base:"48px", md:"80px"}} src="assets/images/features/vectors/write-3d.png"/>}>
                For a User Specific App
              </Feature>
              <Feature title="Branding" border="blue.500" icon={<Image height={{base:"48px", md:"80px"}} src="assets/images/features/vectors/globe-3d.png"/>}>
                That Defines You!
              </Feature>
              <Feature title="Development" border="yellow.400" icon={<Image objectFit="contain" width={{base:"48px", md:"80px"}} height={{base:"48px", md:"80px"}} src="assets/images/features/vectors/laptop-3d.png"/>}>
                Ready. Steady. Code.
              </Feature>
            </SimpleGrid>
      </Box>
    </Section>
    <Section id="work"  py="24" bg="white">
    <Box px={4}>
      <Divider mb={2} borderBottomColor={"dark.500"}></Divider>
    </Box>
      <FeaturedWork
        color="teal"
        category="Web Dev"
        tags={["React", "SCSS", "NodeJS"]}
        title="CoFounders Planet"
        link=""
        button_caption=""
        button_href=""
        img="/assets/portfolio/cofounders.jpg"
        type="vertical"
      ></FeaturedWork>
      <Divider mt={12} borderBottomColor="dark.500"></Divider>
      <FeaturedWork
        color="teal"
        category="Web Dev"
        tags={["React", "SCSS", "NodeJS"]}
        title="CoFounders Planet"
        link=""
        button_caption=""
        button_href=""
        img="/assets/portfolio/cofounders.jpg"
        type="vertical"
      ></FeaturedWork>
    </Section>
    {/* <Section  py="4" bg="white">
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
    </Section> */}
    <Section py={4} my={0}>
      <CTAWithInput/>
    </Section>
      </div>
    );
  }


export default Landing;
