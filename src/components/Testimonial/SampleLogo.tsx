import { Box, HStack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { MdBook, MdBookmark } from 'react-icons/md'

export const SampleLogo = () => (
  <HStack spacing="3">
    <Box as={MdBookmark} fontSize="3xl" />
    <Text textTransform="uppercase" fontWeight="bold">
      Logo
    </Text>
  </HStack>
)
