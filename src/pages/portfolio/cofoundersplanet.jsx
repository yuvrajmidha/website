import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Row from '../../pageBuilder/Row'
import Section from '../../pageBuilder/Section'
import Title from '../../pageBuilder/Title'

export default function portfolio_page() {
  return (
    <div>
        <Section position="relative" textAlign="left" bg={["#ffffff00"]} py={[8]} mt={16} my={0}>
            <Title textAlign="left" zIndex="100" fontSize={["32px", "32px", "48px"]}>Co-Founders Planet</Title>
            <Text fontSize={"xl"} m={1}>Web Development</Text>
        </Section>
        <Section position="relative" textAlign="left" bg={["#ffffff00"]} py={0} my={0}>
            <Image src="/assets/portfolio/cofounders.jpg" rounded="xl"></Image>
        </Section>
        <Section position="relative" textAlign="left" bg={["gray.200", "#ffffff00"]} py={0} my={0}>
            <Row mt={8} justify="start" mb={4}>
              <Box width={{base:"100%", md:"50%"}} ml={"auto"} textAlign="left">
                <Text fontSize="24px" fontWeight="bold">
                  "A platform for startup entrepreneurs for finding their startup-mate for the journey. Understanding all the aspects of the product manager, we managed to make the design and frontend application in one go."
                </Text>
              </Box>
          </Row> 
        </Section>
        <Section position="relative" textAlign="left" bg={["#ffffff00"]} py={0} my={0}>
            <SimpleGrid spacing={4} columns={{base: 1, md:"2"}} mt={8} mb={4}>
              <Box textAlign="left">
                <Image Image src="/assets/portfolio/cofounders1.jpg" rounded="xl"></Image>
              </Box>
              <Box textAlign="left">
                <Image src="/assets/portfolio/cofounders2.jpg" rounded="xl"></Image>
              </Box>
          </SimpleGrid> 
        </Section>
        <Section position="relative" textAlign="left" bg={["#ffffff00"]} py={0} my={0}>
            <Row mt={8} justify="start" mb={4}>
              <Box width={{base:"100%", md:"50%"}} textAlign="left">
                <Text fontSize="24px" fontWeight="bold">
                  Understanding the target audience and needs of the user, the web platform is reponsive on each and every device and browser. We used ReactJS and NextJS for server side rendering. With ChakraUI it was possible to make the UI in the darkmode too.
                </Text>
              </Box>
          </Row> 
        </Section>
        <Section position="relative" textAlign="left" bg={["#ffffff00"]} py={0} my={0}>
            <Image src="/assets/portfolio/cofounders3.jpg" rounded="xl"></Image>
        </Section>
    </div>
  )
}
