import { Box, BoxProps, Img } from '@chakra-ui/react'
import * as React from 'react'
import { PlayButton } from './PlayButton'

interface BlogMediaProps extends BoxProps {
  src: string
  alt: string
}

export const BlogMedia = (props: BlogMediaProps) => {
  const { src, alt, ...rest } = props
  return (
    <Box pos="relative" cursor="pointer" className="group" h="100%"  {...rest}>
      <Img
        w="full"
        h="448px"
        objectFit="cover"
        htmlWidth="672"
        htmlHeight="448"
        src={'https://cdn.dribbble.com/users/8037018/screenshots/17494874/media/aadc327f558cc017890e258ee4233683.jpg'}
        alt={alt}
        transition="all 0.2s"
      />
    </Box>
  )
}
