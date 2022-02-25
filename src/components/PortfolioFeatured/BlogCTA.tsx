import { Flex, HStack, Img, StackProps, Text, Button, IconButton, Box, Heading } from '@chakra-ui/react'
import * as React from 'react'
import { BsArrowRight } from 'react-icons/bs'

interface BlogAuthorProps extends StackProps {
  website_link: string
  case_study_link: string
  color: string
}

export const BlogCTA = (props: BlogAuthorProps) => {
  const { website_link, case_study_link,color, ...rest } = props
  return (
    <HStack spacing="4" {...rest}>
      <Box color={props.color + ".500"} _hover={{color: props.color + ".400", cursor: "pointer"}} display={"flex"} alignItems="center" colorScheme={color}><Text fontFamily="Sora" fontWeight="700" mr="8px" size="xl">View Project</Text> <BsArrowRight size="24px"/></Box>
      {/* <Button variant="ghost">Visit Website</Button> */}
    </HStack>
  )
}
