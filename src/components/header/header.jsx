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

            <Section className="headerBox" top="0px" bg="gray.100"  my={0} py={1} zIndex={1000}>
                    <Box className="p-3 transition-3 d-flex justify-content-between align-items-center layer-4">
                    
                        {/* <Hyperlink href="/"><a>
                            <Image alt="" src="/assets/logo.png" height="45px" className="mr-3 d-sm-none"></Image>
                        </a></Hyperlink> */}
                        <Flex mb={1} align={"left"} width="40%">
                            
                            <Box>
                                <Hyperlink href="/"><a>
                                    <Image alt="" src="/logo.svg" height="28px"></Image>
                                </a>
                                </Hyperlink>
                            </Box>

                            
                        </Flex>
                        <HStack width="30%" spacing={"32px"} justifyContent="end">
                            <Hyperlink href="/">
                                <Link display={["none", "none", "none", "flex"]} color="gray.700" fontWeight="800" fontSize="md" _hover={{ color: "primary.500", textDecoration: "none" }}>Home</Link>
                            </Hyperlink>
                            <Hyperlink href="#work">
                                <Link display={["none", "none", "none", "flex"]} color="gray.700" fontWeight="800" fontSize="md" _hover={{ color: "primary.500", textDecoration: "none" }}>Work</Link>
                            </Hyperlink>
                            <Hyperlink href="/about">
                                <Link display={["none", "none", "none", "flex"]} color="gray.700" fontWeight="800" fontSize="md" _hover={{ color: "primary.500", textDecoration: "none" }}>About</Link>
                            </Hyperlink>
                            <Hyperlink href="/contact">
                                <Button display={["none", "none", "none", "flex"]} variant="solid" colorScheme={"brand"}>Contact</Button>
                            </Hyperlink>
                            <Menu></Menu>
                        </HStack>
                       
                    </Box>

                <CookieNotice></CookieNotice>
            </Section>

            {show ? <Box className="overlay" onClick={overlayClick} /> : ""}
        </>
    )
}

export default header;
