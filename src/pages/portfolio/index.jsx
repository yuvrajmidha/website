import React, { Component, useEffect } from "react";
import Head from "next/head";
import { FeaturedWork } from '../../components/PortfolioFeatured/FeaturedWork.tsx'
import CardWithImage from "../../components/cards/CardWithImage";
import newsroom from "../../database/newsroom"
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import Section from "../../pageBuilder/Section";
import Title from "../../pageBuilder/Title";
import { Heading, Text, Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { dynamicSearch } from "../../../public/assets/js/searchFunctions"
import { useRouter } from 'next/router'

function Newsroom() {
  const router = useRouter()
  const [category, setCategory] = React.useState("All")
  const [tabIndex, setTabIndex] = React.useState(0)
  const [search, setSearch] = React.useState("")
  const [data, setData] = React.useState({
    pages: [],
    services: [],
    articles: []
  })
  const handleValue = (e) => {
    setSearch(e.target.value)
    setData(dynamicSearch(e.target.value))
  }
  const { tab } = router.query;
  useEffect(() => {
    switch (tab) {
      case "Design":
        setTabIndex(1);
        break;
      case "Branding":
        setTabIndex(2);
        break;
      case "Web Development":
        setTabIndex(3);
        break;
    }
  }, [tab])

  return (
    <div className="newsroom">
      <Head>
        <title>Portfolio | Codbrix Labs</title>
        <meta name="description" content="Some hard work from us">
        </meta>
        <meta property="og:title" content="Portfolio - Codbrix Labs" key="title" />
        <meta property="og:description" content="Get the latest updates from us" key="description"></meta>
      </Head>

      <Section position="relative" textAlign="left" bg={["gray.200", "#ffffff00"]} py={[16]} mx="32px" my={0}>
        <Title textAlign="left" zIndex="100" fontSize={["44px", "64px", "80px"]}>Our <br></br>Portfolio <span className="text-gradient">.</span></Title>
        {/* <Box display={["none", "block"]}pos="relative">
              <InputGroup mx="auto" mt={8} width={["100%","100%","520px"]}>
                <InputLeftElement m="6px"><FaSearch size="14px" color="dark.500"/></InputLeftElement>
                <Input boxShadow="xl" py={6} focusBorderColor="primary.500" pl={12} onChange={handleValue} value={search}  color="dark.500" fontSize="xl" placeholder="Search here..."></Input>
              </InputGroup>
              {search && <Flex pos="absolute" zIndex="600"  mt={4} justifyContent="center" width="100%">
                  <Box bg="white" width={["100%","100%","520px"]} boxShadow="lg">
                    {data.articles.length > 0 && data.articles.map(blog => (  <Link href="/newsroom/[bid]" as={"/newsroom/" + blog.link}>
                    <Heading size="md" textAlign="left" className="hover-effect" p={3}>{blog.title}</Heading>
                    </Link> ) )}
                  </Box>
              </Flex>}
            </Box> */}
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


        <SimpleGrid maxW={{ base: 'xl', md: '7xl' }} mx="auto" columns={{ base: 1, lg: 2 }}>
          <Fade duration={300} cascade distance="5%" bottom>
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
          </Fade>
          <Fade duration={300} cascade distance="5%" bottom>

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
          </Fade>

        </SimpleGrid>
      </Section>
    </div>
  );
}
export default Newsroom;
