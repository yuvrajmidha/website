import { Flex, HStack, Img, StackProps, Text, Button } from '@chakra-ui/react'
import * as React from 'react'

interface BlogAuthorProps extends StackProps {
  website_link: string
  case_study_link: string
  color: string
}

export const BlogCTA = (props: BlogAuthorProps) => {
  const { website_link, case_study_link,color, ...rest } = props
  return (
    <HStack spacing="4" {...rest}>
      <Button variant="solid" colorScheme={color}>Read Case Study</Button>
      <Button variant="ghost">Visit Website</Button>
    </HStack>
  )
}
