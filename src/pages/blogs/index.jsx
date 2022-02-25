import React, { Component,useEffect } from "react";
import Head from "next/head";
import CardWithImage from "../../components/cards/CardWithImage";
import newsroom from "../../database/newsroom"
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import Section from "../../pageBuilder/Section";
import Title from "../../pageBuilder/Title";
import { Heading, Text, Box, InputGroup, InputLeftElement, Button, Icon, Input, Image, Avatar, Badge, Flex, Grid, MenuList, Menu, MenuButton, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import {dynamicSearch} from "../../../public/assets/js/searchFunctions"
import { Divider } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { FaSearch } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

function Newsroom(){
  const router = useRouter()
    const [category, setCategory] = React.useState("All")
    const [tabIndex, setTabIndex] = React.useState(0)
    const [search, setSearch] = React.useState("")
    const [data, setData] = React.useState({
      articles: []
    })
    const handleValue = (e) => {
      setSearch(e.target.value)
      setData(dynamicSearch(e.target.value))
    }
    const { tab } = router.query;
    useEffect(() => {switch(tab){
      case "Design":
        setTabIndex(1);
        break;
      case "Technology":
        setTabIndex(2);
        break;
      case "Case Study":
        setTabIndex(3);
        break;
    }}
                      , [tab]) 
    
    return (
      <div className="newsroom">
        <Head>
          <title>Blogs | Codbrix Labs</title>
          <meta name ="description" content = "Get the latest updates from us">
          </meta>
          <meta property="og:title" content="Newsroom - BG Unified Solutions" key="title" />
          <meta property="og:description" content="Get the latest updates from us" key ="description"></meta>
        </Head>
        {/* <Box  zIndex="10" pos="relative" bg="dark.500">
          <Image position="absolute" height="100%" zIndex="0" top={0} left={0} style={{mixBlendMode:"overlay"}}  opacity="1" objectFit="cover" width="100%" src="/assets/images/backgrounds/tech.jpg"></Image>
            <Fade distance="5%" duration={500} top>
            <Section position="relative" textAlign="center" color="white" py={[24, 32]} my={0}>
            <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="center" color="primary.500" mb={4} textTransform="uppercase">News from us</Heading>
            <Title zIndex="100" fontSize={["44px","64px"]}>Our Newsroom</Title>
            <Text zIndex="100" fontSize="xl" mt={2}>Get the latest updates from us.</Text>
            <Box  zIndex="1000" display={["none", "block"]} pos="relative">
              <InputGroup  mx="auto" mt={8} width={["100%","100%","520px"]}>
                <InputLeftElement m="6px"><FaSearch size="14px" color="dark.500"/></InputLeftElement>
                <Input boxShadow="xl" py={6} focusBorderColor="primary.500" pl={12} onChange={handleValue} value={search}  fontSize="xl" placeholder="Search here..."></Input>
              </InputGroup>
              {search && <Flex pos="absolute" zIndex="1000"  mt={4} justifyContent="center" width="100%">
                  <Box bg="white" width={["100%","100%","520px"]} boxShadow="lg">
                    {data.articles.length > 0 && data.articles.map(blog => (  <Link href="/newsroom/[bid]" as={"/newsroom/" + blog.link}>
                    <Heading size="md" textAlign="left" color="dark.500"  className="hover-effect" p={3}>{blog.title}</Heading>
                    </Link> ) )}
                  </Box>
              </Flex>}
            </Box>
            </Section>
            </Fade>
          </Box> */}
        <Section  bg={["gray.200", "#ffffff00"]} pt={[4]} pb={0} my={0}>
            <Box rounded={"2xl"} pb={28} overflow="hidden" px={8} pt={16}>
            {/* <Image alt="" transform={"rotate(-28deg)"} zIndex="10"  h="400px"  objectFit="cover" right={"0px"} position="absolute" top={0} src="/assets/images/vectors/codbricks.svg"></Image> */}
            <Heading zIndex="100" size="xs" letterSpacing={1.8} textAlign="left"  mb={2} textTransform="uppercase">Latest from us</Heading>
            <Title zIndex="100" textAlign="left" fontSize={["32px","64px"]}>Our Blogs <span className="text-gradient">.</span></Title>
            {/* <Box display={["none", "block"]} pos="relative">
              <InputGroup mt={8} width={["100%","100%","400px"]}>
                <InputLeftElement m="1px"><BsSearch size="12px" /></InputLeftElement>
                <Input borderWidth={1} borderColor="gray.300" rounded={"xl"} py={4} focusBorderColor="primary.500" pl={12} onChange={handleValue} value={search}  color="dark.500" fontSize="lg" placeholder="Search here..."></Input>
              </InputGroup>
              {search && <Flex pos="absolute" zIndex="600"  mt={4} justifyContent="start" width="100%">
                  <Box bg="white" rounded={"lg"} width={["100%","100%","400px"]} boxShadow="lg">
                    {data.articles.length > 0 && data.articles.map(blog => (  <Link href="/newsroom/[bid]" as={"/newsroom/" + blog.link}>
                    <Heading size="xs" textAlign="left" className="hover-effect" p={3}>{blog.title}</Heading>
                    </Link> ) )}
                  </Box>
              </Flex>}
            </Box> */}
            </Box>
        </Section>
        {/* CardWithImage have weird width, bad component, pls fix */}

        <Section pt={0} mt={0} >
              {/* <Flex mx={3} height="80px" justify="center">
                {["All", "Updates", "Case Study"].map(text => <Button 
                color="white"
                variant="unstyled"
                py={4}
                mx={4}
                borderBottomWidth={category === text ? 2 : 0} 
                ustifyContent="start" 
                onClick={() => setCategory(text)}>
                {text}
                </Button>)}
              </Flex> */}
              <Fade duration={100} distance="5%" bottom>
              <Tabs index={tabIndex} onChange={setTabIndex} align="center">
                <TabList px={8} mt="-67px" justifyContent={"start"} mb={8} borderBottomWidth={0}>
                  {["All", "Design", "Technology", "Case Studies"].map(text => <Tab p={5} color="gray.500" _selected={{ color: "dark.500", fontWeight:"600", borderBottomColor:"dark.500", borderBottomWidth: 3}} >{text}</Tab>)}
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Fade duration={300} cascade distance="5%" bottom>
                      <Flex wrap="wrap">
                  {newsroom.map(blog =>
                    <Box width={["100%","100%","50%","50%","50%"]} px={3} my={3} fontWeight="500">
                        <Link href="/blogs/[bid]" as={"/blogs/" + blog.link}><a>
                          <CardWithImage
                          src={blog.image}
                          title={blog.headertitle || blog.title}
                          columns={["128px auto", "auto"]}
                          height={["96px", "300px"]}
                          >
                          <Text mt={1} opacity={.7} fontSize={["sm","md"]} overflow="hidden" height={["40px", "auto"]}>{blog.description}</Text>
                          {/* <Flex display={["none","flex"]} mt={4}>
                          <Avatar src={blog.avatar} />
                          <Box ml="3">
                            <Text fontWeight="bold">
                              by<br/>{blog.by || "Team"}
                            </Text>
                            <Text fontSize="sm">Posted On {blog.date}</Text>
                          </Box>
                          </Flex> */}
                        </CardWithImage>
                        </a>
                        </Link>
                        </Box>)}
                        </Flex>
                        </Fade>
                      
                  </TabPanel>
                  {["Design", "Technology", "Case Study"].map(text => <TabPanel>
                  <Fade duration={300} cascade distance="5%" bottom>
                      <Flex wrap="wrap">
                    {newsroom.map(blog =>{if(blog.category === text) {
                      return <Box width={["100%","100%","50%","50%", "50%"]} px={3} my={3} fontWeight="500">
                        <Link href="/blogs/[bid]" as={"/blogs/" + blog.link}><a>
                          <CardWithImage
                          src={blog.image}
                          title={blog.headertitle || blog.title}
                          columns={["128px auto", "auto"]}
                          height={["96px", "300px"]}
                          >
                          <Text mt={1} opacity={.7} fontSize={["sm","md"]} overflow="hidden" height={["40px", "auto"]}>{blog.description}</Text>
                          {/* <Flex display={["none","flex"]} mt={4}>
                          <Avatar src={blog.avatar} />
                          <Box ml="3">
                            <Text fontWeight="bold">
                              by<br/>{blog.by || "Team"}
                            </Text>
                            <Text fontSize="sm">Posted On {blog.date}</Text>
                          </Box>
                        </Flex> */}
                        </CardWithImage>
                        </a>
                        </Link>
                        </Box>
                        }})}
                        </Flex>
                        </Fade>
                  </TabPanel>)}
                </TabPanels>
              </Tabs>
              </Fade>
              <Flex mt={8} wrap="wrap">
                
              </Flex>
        </Section>
      </div>
    );
}
export default Newsroom;
