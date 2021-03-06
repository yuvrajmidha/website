import {
  Badge,
  Box,
  HStack,
  Stack,
  StackDivider,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

interface BlogMetaProps {
  type: string
  tags: string[]
  color: string
}

export const BlogMeta = (props: BlogMetaProps) => {
  const { type, tags, color } = props
  return (
    <Stack
      spacing={{ base: '4', md: '6' }}
      direction={'row'}
      textTransform="uppercase"
      fontSize="xs"
      letterSpacing="wider"
      fontWeight="semibold"
    >
      <Badge colorScheme={color}rounded={8} px={2} variant="solid" alignSelf="flex-start">
        {type}
      </Badge>
      <HStack
        divider={<StackDivider h="3" alignSelf="center" />}
        spacing="3"
        color={mode('gray.600', 'gray.400')}
      >
        {tags.map((tag, index) => (
          <Box key={index}>{tag}</Box>
        ))}
      </HStack>
    </Stack>
  )
}
