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
    <Box width={"100%"} pos="relative" cursor="pointer" className="group" h="100%"  {...rest}>
      <Img
        w="100%"
        maxH="448px"
        objectFit="cover"
        htmlWidth="672"
        htmlHeight="448"
        src={src}
        alt={alt}
        transition="all 0.2s"
      />
    </Box>
  )
}
