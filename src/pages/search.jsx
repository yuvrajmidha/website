import React, { Component, useEffect } from "react";
import Head from "next/head";
import {Box, Input, InputGroup, Text, Heading, InputLeftElement, Icon} from "@chakra-ui/react"
import Fade from "react-reveal/Fade";
import {dynamicSearch} from "../../public/assets/js/searchFunctions"
import Link from "next/link";
import {useRouter} from "next/router";
import { SearchIcon } from '@chakra-ui/icons'


function search(props) {
    const router = useRouter();
    var {search} = router.query;
    const [text, setText] = React.useState("");
    const handleValue = (e) => {
        setText(e.target.value)
        setData(dynamicSearch(e.target.value))
    }
    const [data, setData] = React.useState({
        pages: [],
        articles: []
    })


    
    
    //Set text and data
    useEffect(() => {if(search){setText(search);setData(dynamicSearch(search))}}, [search]) 

    return (
      <div className="newsroom">
        <Head>
          <title>Search | Codbrix Labs</title>
        </Head>
        <Fade duration={500} distance="10%"  top>
         <Box mt={30} mb={2} pb="10px" pt={["30px","50px","72px"]}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <InputGroup>
                            <InputLeftElement p={[8,12]}  children={<SearchIcon color="gray.300" h={["20px","24px"]} w={["20px","24px"]} />} />
                            <Input type="text" py={[8,12]}  onChange={handleValue} value={text}  variant="flushed" focusBorderColor="primary.500" color="primary.500" fontWeight="700" fontSize={["2xl","32px"]} pl={[16,24]} placeholder="Search" />
                        </InputGroup>
                    </div>
                </div>
            </div>
         </Box>
         </Fade>
       <div className="container">
           <div className="row">
               <div className="col-xl-10 offset-xl-1">
               <Fade duration={400} delay={300} top>
                    {text === "" && <Heading size="sm" mt={6} zIndex={100} className="text-primary" textTransform="uppercase" mb={2}>Most Popular</Heading>}
                </Fade>
                {text != "" && <div>
                {data.articles.length > 0 && <Heading size="sm" mt={6} className="text-primary" textTransform="uppercase" mb={2}>Articles</Heading>}
                {data.articles.length > 0 && data.articles.map(blog => ( 
                <Box mt={3}>
                    <Heading size="md" mb={2}>{blog.title}</Heading>
                    <Text fontSize="md" overflow="hidden">
                        {blog.description}
                    </Text>
                    <Link href="/newsroom/[bid]" as={"/newsroom/" + blog.link}><a onClick={props.toggle} className="link text-secondary">Read More</a></Link>
                </Box>
                ))}
                {(data.articles.length === 0 && text != "") && 
                <div className="w-100 d-flex justify-content-center">
                    <Heading mt={3} opacity={.5}>No Result Found</Heading>
                </div>}
                </div>}
                <Box h="160px"></Box>
               </div>
           </div>
       </div>
      </div>
    );
  }
export default search;
