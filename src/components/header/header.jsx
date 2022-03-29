import React from 'react';
import WhatsNew from './whatsnew'
import Menu from './menu'
import {
    Image,
    Box,
    Button,
    Collapse,
    Icon,
    Flex,
    Text,
    HStack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Stack, Link, Heading, Grid, Divider, useDisclosure, Tabs, TabList, TabPanels, Tab, TabPanel, useColorMode
} from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa"
import Fade from 'react-reveal/Fade';
import Hyperlink from 'next/link';
import Router from 'next/router';
import Container from '../../pageBuilder/Container';
import CookieNotice from './CookieNotice';
import Row from '../../pageBuilder/Row';
import SVG from '../svg/SVG';
import Section from '../../pageBuilder/Section';

function ToggleColor() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>
    )
  }

function header(props) {
    const initRef = React.useRef();
    const [show, setShow] = React.useState(0);
    const [search, setSearch] = React.useState(false)
    Router.events.on('routeChangeComplete', () => setShow(false));
    const overlayClick = () => {
        setShow(0);
    }
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isOpen2, setIsOpen2] = React.useState(false);
    const onOpen2 = () => setIsOpen2(true);
    const onClose2 = () => setIsOpen2(false);
    return (
        <>

            <Section className="headerBox" top="0px" borderBottomColor="gray.400" borderBottomWidth={0} my={0} py={0} zIndex={1000}>
                    <Box className="p-3 transition-3 d-flex justify-content-between align-items-center layer-4">
                        <Box className="d-flex align-items-center" width="30%">
                            <Menu></Menu>
                            <Hyperlink href="/"><a>
                                <Image alt="" src="/logo.svg" height="28px" className="d-none d-sm-block mr-3"></Image>
                            </a></Hyperlink>

                            
                        </Box>
                        {/* <Hyperlink href="/"><a>
                            <Image alt="" src="/assets/logo.png" height="45px" className="mr-3 d-sm-none"></Image>
                        </a></Hyperlink> */}
                         <HStack spacing="32px"  align="center">
                            <Box className="header-menu">
                            <Link className="header-link" display={["none", "none", "none", "flex"]} color="gray.700" fontFamily="Sora" fontWeight="800" fontSize="md" _hover={{ color: "primary.500", textDecoration: "none" }}>Services</Link>
                                <Box className="header-dropdown">

                                <Container  maxW="480px">
                                    <Fade duration={300} distance="5%" top>
                                        <Box rounded={4}  shadow="lg" bg="gray.50" overflow="hidden">

                                            <Row>
                                                <Box p={12} w="100%">
                                                    <Grid templateColumns="auto" templateRows="72px" wrap="wrap">
                                                        <Box className="design" height="48px" py={4}>
                                                            <Hyperlink href="/uiux-design" ><Flex className="link" align="center">
                                                                <Box rounded="8" bg="gray.100" padding={2}><SVG size={6} color="yellow.400" src="/assets/images/icons/library/layout/layout-right-panel-1.svg"></SVG></Box>
                                                                <Box onClick={onClose} ml="3">
                                                                    <Heading className="text" size="sm" >UI/UX Design</Heading>
                                                                    <Text fontSize="sm" fontWeight="500" opacity=".7">For a User Specific App</Text>
                                                                </Box>
                                                            </Flex></Hyperlink>
                                                        </Box>
                                                        <Box className="branding link" height="48px" py={4}>
                                                            <Hyperlink href="/branding" ><Flex align="center">
                                                                <Box rounded="8" bg="gray.100" padding={2}><SVG size={6} color="purple.400" src="/assets/images/icons/library/design/brush.svg"></SVG></Box>
                                                                <Box onClick={onClose} ml="3">
                                                                    <Heading className="text" size="sm" >Branding</Heading>
                                                                    <Text fontSize="sm" fontWeight="500" opacity=".7">That Defines You!</Text>
                                                                </Box>
                                                            </Flex></Hyperlink>
                                                        </Box>
                                                        <Box className="development" height="48px" py={10}>
                                                            <Hyperlink href="/web-dev" ><Flex className="link" align="center">
                                                                <Box rounded="8" bg="gray.100" padding={2}><SVG size={6} color="green.500" src="/assets/images/icons/monotone/webdev.svg"></SVG></Box>
                                                                <Box onClick={onClose} ml="3">
                                                                    <Heading className="text" size="sm" >Development</Heading>
                                                                    <Text fontSize="sm" fontWeight="500" opacity=".7">Ready. Steady. Code.</Text>
                                                                </Box>
                                                            </Flex></Hyperlink>
                                                        </Box>
                                                        {/* <Box height="48px" my={4}>
                                                            <a className="link"><Flex align="center">
                                                                <Box rounded="8" bg="gray.100" padding={2}><SVG size={6} color="purple.400" src="/assets/images/icons/library/layout/layout-top-panel-5.svg"></SVG></Box>
                                                                <Box onClick={onClose} ml="3">
                                                                    <Heading size="sm" >Blogs</Heading>
                                                                    <Text fontSize="sm" fontWeight="500" opacity=".7">What we are up to!</Text>
                                                                </Box>
                                                            </Flex></a>
                                                        </Box> */}
                                                        
                                                    </Grid>
                                                   </Box>
                                            </Row>
                                        </Box>
                                    </Fade>
                                </Container>
                                </Box>                                      
                            </Box>
                            <Hyperlink href="/portfolio">
                                <Link display={["none", "none", "none", "flex"]} color="gray.700" fontFamily="Sora" fontWeight="800" fontSize="md" _hover={{ color: "primary.500", textDecoration: "none" }}>Portfolio</Link>
                            </Hyperlink>
                            <Hyperlink href="/blogs">
                                <Link display={["none", "none", "none", "flex"]} color="gray.700" fontFamily="Sora" fontWeight="800" fontSize="md" _hover={{ color: "primary.500", textDecoration: "none" }}>Blog</Link>
                            </Hyperlink>
                            {/* <Search toggle ={() => setSearch(!search)} searching={search}></Search> */}
                            {/*propper syntax to use link with dynamic routing*/}
                           
                        </HStack>
                        <HStack width="30%" spacing={4} justifyContent="end">
                            <Hyperlink href={`/search?search=`}>
                                <Button bg="transparent" p={2} rounded={4} onClick={props.toggle}>
                                    <FaSearch size="18px"/>
                                </Button>
                            </Hyperlink>
                            <Hyperlink href={`/contact`}>
                                <Button minW={"192px"} className="d-none d-sm-block" variant={"solid"} colorScheme="brand" >Start Your Project</Button>
                            </Hyperlink>
                        </HStack>
                       
                    </Box>

                <CookieNotice></CookieNotice>
            </Section>

            {show ? <Box className="overlay" onClick={overlayClick} /> : ""}
        </>
    )
}

export default header;
