import React from "react";
import { Image,Heading, Flex, Icon, Box } from "@chakra-ui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function WhatsNew(props) {
  return (
    <Flex
      onClick={props.click}
      p={3}
      my={1}
      align="center"
      borderRadius="lg"
    >
      <Image alt=""        objectFit="cover"
        src={props.image}
        className="rounded-8 mt-1"
        height="56px"
        width="80px"
      ></Image>
      <Box onClick={props.onClick}>
        <Link  href="/newsroom/[bid]" as={props.link}><a className="link"><Heading mx={5} fontFamily="Nexa Bold" fontSize="md">{props.heading}{" "}<FaArrowRight /></Heading></a></Link>
      </Box>
    </Flex>
  );
}

export default WhatsNew;
