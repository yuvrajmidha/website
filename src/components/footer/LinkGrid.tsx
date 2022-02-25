import { Box, Link, SimpleGrid, SimpleGridProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading'

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Company</FooterHeading>
      <Stack>
        <Link>Our Portfolio</Link>
        <Link>Blogs</Link>
        <Link>Contact Us</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Services</FooterHeading>
      <Stack>
        <Link>UI/UX Design</Link>
        <Link>Branding</Link>
        <Link>Development</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)
