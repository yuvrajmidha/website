import React, { Component } from "react";
import ContactForm from "../components/contactForm/main";
import Head from "next/head";
import Fade from 'react-reveal/Fade';
import Section from "../pageBuilder/Section";
import Title from "../pageBuilder/Title";
import { Heading, Text, Box, Icon, Image, Flex} from "@chakra-ui/react";
import Row from "../pageBuilder/Row";
import Description from "../pageBuilder/Description";
import Shapes from '../components/Shapes/Shapes'
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="contact">
          <Head>
            <title>Contact us - BG Unified Solutions</title>
          </Head>
        <Section position="relative" textAlign="left" bg={["gray.200", "#ffffff00"]} py={8} mt={24}>
          <Title textAlign="left" zIndex="100" fontSize={["44px", "64px", "80px"]}>Contact Us <span className="text-gradient">.</span></Title>
      </Section>
        <Section py={0} my={0}>
          <Row mt={8} justify="start" mb={4}>
              <Box width="50%" textAlign="left">
                <Text fontSize="32px" fontWeight="bold">
                  Call Us
                </Text>
                <a href="tel::1300002487"><Text color="brand.500" fontSize={["sm", "md","md", "4xl"]}>+91 7087362779</Text></a>
              </Box>
              <Box width="50%" textAlign="left">
                <Text fontSize="32px" fontWeight="bold">
                  Call Us
                </Text>
                <a href="tel::1300002487"><Text color="brand.500" fontSize={["sm", "md","md", "4xl"]}>+91 7087362779</Text></a>
              </Box>
          </Row> 
        </Section>
        <Section>
          <Box  px={8} py={16} borderTopWidth={2} borderBottomWidth={2}>
            <Title  textAlign="left" mb={2} fontSize="3xl">Reach out to us, </Title>
            <Text mb={8} fontSize="20px" color="gray.500" fontWeight="bold">
              in case anything comes up..
            </Text>
            <ContactForm />
          </Box>
        </Section>  
        </div>  
      </>
    );
  }
}
export default Contact;
