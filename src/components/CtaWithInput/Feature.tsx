import { Box, HStack, StackProps, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiCheckCircle } from 'react-icons/hi'

export const Feature = (props: StackProps) => {
  const { children, ...stackProps } = props
  return (
    <HStack {...stackProps}>
      <Box as={HiCheckCircle} color="brand.400" fontSize="xl" />
      <Text fontSize="sm" fontWeight="semibold">
        {children}
      </Text>
    </HStack>
  )
}
