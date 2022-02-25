import React, { Component, useEffect } from "react";
import Head from "next/head";
import { FeaturedWork } from '../../components/PortfolioFeatured/FeaturedWork.tsx'
import CardWithImage from "../../components/cards/CardWithImage";
import newsroom from "../../database/newsroom"
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import Section from "../../pageBuilder/Section";
import Title from "../../pageBuilder/Title";
import { Heading, Text, Box, Flex, SimpleGrid, Image } from "@chakra-ui/react";
import { dynamicSearch } from "../../../public/assets/js/searchFunctions"
import { useRouter } from 'next/router'
import ReactEditor from "../../components/ReactEditor";

function Blog() {
  const router = useRouter()
  return (
    <div className="article">
      <Head>
        <title>Blog | Codbrix Labs</title>
        <meta name="description" content="Some hard work from us">
        </meta>
        <meta property="og:title" content="Portfolio - Codbrix Labs" key="title" />
        <meta property="og:description" content="Get the latest updates from us" key="description"></meta>
      </Head>

      <Section position="relative" textAlign="left" bg={["gray.200", "#ffffff00"]} py={[0]} my={0}>
            <Image alt="" rounded={"lg"} my={8} objectFit="cover" src="https://media-exp1.licdn.com/dms/image/C5112AQGwVDA9axrryA/article-cover_image-shrink_600_2000/0/1574256672318?e=1649894400&v=beta&t=D9DaeBBogtKlVr3gW9iMEPy6nZKdr2z8UV0sMZ1z0Nk"></Image>
            <Title textAlign="center" zIndex="100" fontSize={["24px", "32px"]}>Simple, Easy & Quick ... Don't make me think.</Title>
            <Flex width={"100%"} justify="center">
                <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="brand.600" mt={8} textTransform="uppercase">Latest from us</Heading>
                <Heading zIndex="100" size="xs" mx={3} letterSpacing={1.8} textAlign="center" color="dark.500" mt={8} textTransform="uppercase"> • </Heading>
                <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" mt={8} textTransform="uppercase">7 December 2020</Heading>
            </Flex>
      </Section>

      <Section pt={0} mt={6} >
        {/* <Box fontSize="18px" fontWeight={"600"} color="gray.500" mx="auto" width="70%">
        I am going to talk about habits of human brain and how it sees new things. Our human brain is the most unique creation of god,
        <br></br>
            So, Let me start with an instance. For example, if a person wants to download an app, the first way is to search on it on google try different download links and then selecting the link which is spam-free OR the second way is to open a trusted website and simply download from the link. Of course we will choose the second way, it doesn’t matter if the app is a spam or not.

            <br></br>
            <br></br>
            But the Question is “WHY?”,

            <br></br>
            <br></br>
            1. Most people are risk-averse. Low odds of success with big sacrifices of time and effort is not a very safe bet. Most people don’t enjoy challenges because they know they are not prepared to for it and will likely not succeed without sacrificing.

            <br></br>
            <br></br>
            2. The second reason is our brain uses shortcuts, let’s take a example if I ask you to find 5 words whose first letter starts with ‘T’ ……………….
            <br></br>

            <br></br>
            OK, it was very easy, right! So, if I ask you to find 5 words whose third letter is ‘T’ it will be more difficult. Yes or NO?

            <br></br>
            <br></br>
            But, let’s change the question, if I ask you find words which rhymes with ‘Mat’?

            <br></br>
            <br></br>
            Easy right?
        </Box> */}
        <ReactEditor/>
      </Section>
    </div>
  );
}
export default Blog;
