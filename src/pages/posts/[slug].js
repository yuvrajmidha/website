import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import Head from 'next/head'
import Section from "../../pageBuilder/Section";
import Title from "../../pageBuilder/Title";
import { Heading, Text, Box, Flex, SimpleGrid, Image, VStack, HStack, Badge, Button, Avatar, Spacer } from "@chakra-ui/react";
import { CMS_NAME } from '../../lib/constants';


export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
//   return (
//     <div>
//         <header />
//         {router.isFallback ? (
//           <h1>Loading…</h1>
//         ) : (
//           <>
//             <article>
//               <Head>
//                 <title>
//                   {post.title} | Next.js Blog Example with {CMS_NAME}
//                 </title>
//                 <meta property="og:image" content={post.feature_image} />
//               </Head>
//               {console.log(post)}
//             </article>
//             {console.log(morePosts)}
//           </>
//         )}
//     </div>
//   )
  return  <div>
  <Head>
    <title>{post.title} | Codbrix Labs</title>
    <meta name="description" content={post.excerpt}>
    </meta>
    <meta property="og:title" content="Portfolio - Codbrix Labs" key="title" />
    <meta property="og:description" content="Get the latest updates from us" key="description"></meta>
  </Head>

  <Section position="relative" textAlign="left" bg={["gray.200", "gray.100"]} py={[0]} my={0}>
        {console.log(post)}
        <VStack align={"center"} mx="auto" pt={24} textAlign="center" pb={4}>
            <Heading zIndex="100" size="md" mb={10} letterSpacing={12} color="brand.600" textTransform="uppercase">Portfolio</Heading>
            <Title mt={6} zIndex="100" fontSize={["24px", "56px"]}>{post.title}</Title>
            <Text mt={6} fontSize={"24px"} maxW="2xl">
                {post.custom_excerpt}
            </Text>
            {/* <HStack spacing={4} pt={8}>
                <Button size="sm" variant={"outline"}>Design</Button>
                <Button size="sm" variant={"outline"}>React</Button>
                <Button size="sm" variant={"outline"}>UI/UX</Button>
            </HStack> */}
            <Box height={"160px"}></Box>
        </VStack>
  </Section>
  <Section mb={0} pb={0} mt="-160px" >
    <Image alt="" transform="scale(1)" rounded={"lg"} width={"100%"} objectFit="cover" src={post.feature_image}></Image>
  </Section>
  <Section pt={0} mb={0} align="center">
        <Flex justify={"space-between"} align={"center"} borderTopWidth={1} borderBottomWidth={1} p={12}>
            <Flex>
                <Avatar src={post.primary_author.profile_image} />
                <Box ml='3'>
                    <Text fontWeight='bold'>
                    {post.primary_author.name}
                    </Text>
                    <Text fontSize='sm'>{post.primary_author.bio}</Text>
                </Box>
            </Flex>
            <Heading size="sm" fontWeight={"600"} opacity=".6">
                {post.created_at.split('T')[0]}
            </Heading>
        </Flex>
        <Box maxW={"3xl"} mx="auto" className='article'>
            <div dangerouslySetInnerHTML={{__html: post.html}}/>
        </Box>
  </Section>
</div>
}

export async function getStaticProps({ params, preview = null }) {
  const { post, morePosts } = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post,
      morePosts: morePosts || [],
    },
  }
}

export async function getStaticPaths() {
  const allPosts = (await getAllPostsWithSlug()) || []
  return {
    paths: allPosts.map((post) => `/posts/${post.slug}`),
    fallback: true,
  }
}
