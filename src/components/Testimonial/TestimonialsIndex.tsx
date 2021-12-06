import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  SimpleGrid,
  Divider,
  Stack,
  Flex,
  StackProps,
  Image,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs'
import * as React from 'react'
import { Testimonial } from './Testimonial'

const Feature = (props: StackProps) => {
  const { title, children } = props
  return (
    <Stack>
      <Text fontWeight="bold">{title}</Text>
      <Text>{children}</Text>
    </Stack>
  )
}

export const TestimonialsIndex = () => {
  return (
    <>
      <Box maxW="7xl" mx="auto" px={{ base: '6', md: '8' }}>
        <Flex align={{ lg: 'center' }} direction={{ base: 'column', md: 'row' }}>
          <Box
            flex="1"
            pos="relative"
            maxW={{ lg: '480px' }}
            as="button"
            aria-label="Play Testimonial video"
          >
            <Image
              w="full"
              h="full"
              objectFit="cover"
              alt="Teaser Video Image"
              loading="lazy"
              rounded="4px"
              overflow="hidden"
              src="https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=90"
            />
            <Center
              w="20"
              h="20"
              rounded="full"
              fontSize="40px"
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bg="blackAlpha.600"
              color="white"
            >
              <BsFillPlayFill />
            </Center>
          </Box>

          <Box
            flex="1"
            paddingStart={{ md: '16' }}
            paddingEnd={{ md: '12' }}
            mt={{ base: '8', md: '0' }}
          >
            <Stack
              align={{ base: 'flex-start', lg: 'center' }}
              direction={{ base: 'column', lg: 'row' }}
              spacing={{ base: '2', lg: '4' }}
            >
              <Box as="h5" color="gray.500" fontSize="lg">
                Tim Collins, Marketing Director
              </Box>
              <Box h="4" display={{ base: 'none', lg: 'block' }}>
                <Divider orientation="vertical" />
              </Box>
            </Stack>
            <Box fontFamily="Sora" mt="4" fontWeight="700" fontSize={{ base: 'xl', lg: '2xl' }} as="blockquote">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip.&quot;
            </Box>
          </Box>
        </Flex>
    </Box>
      <Box maxW={{ base: 'xl', md: '7xl' }} mt={8} mx="auto" px={{ base: '6', md: '8' }}>
        <SimpleGrid py="16" columns={{ base: 1, lg: 2 }} spacing={{ base: '16', lg: '32' }}>
          <Testimonial
            name="Jane Cooper"
            role="Marketing Manager @ Freeko.com"
            image="https://images.unsplash.com/photo-1571175351749-e8d06f275d85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTk0fHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Testimonial>
          <Testimonial
            name="Matt Godin"
            role="Engineering Manager @ Freezone"
            image="https://images.unsplash.com/photo-1603987248955-9c142c5ae89b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhbmRzb21lJTIwbWFuJTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          >
            Accumsan tortor posuere ac ut consequat semper. Turpis cursus in hac habitasse platea.
            Hendrerit dolor magna eget est
          </Testimonial>
        </SimpleGrid>
      </Box>
      </>
  )
}
