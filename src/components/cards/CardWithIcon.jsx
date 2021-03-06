import React from "react";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link"
import SVG from "../svg/SVG";
import { FaArrowRight } from "react-icons/fa";
//props.icon is an element (can be image,icon etc.)

function CardWithIcon(props) {
  var iconbox = (
    <Box
      className="text-white d-flex justify-content-center shadow-lg align-items-center"
      rounded="12px"
      w="128px"
      h="128px"
      bg={props.iconBg || "Blue"}
    >
      <SVG size="40px" color="light.500" src={props.icon}></SVG>
    </Box>
  );
  if (props.fullIcon) {
    iconbox = (
      <Box className="text-white" rounded="12px" w="48px" h="48px">
        {props.fullIcon}
      </Box>
    );
  }
  return (

    <Link href="/solutions/[name]" as={`${props.link}`}>
      <Box pt="64px" h="100%">
        <Box h="100%" className="card-with-icon shadow-lg align-items-center d-flex flex-column bg-white rounded p-3">
          <div className="row iconbox mb-3">{iconbox}</div>
          <div className="row display6 py-3 text-center mx-2">{props.title}</div>
          <div className="row cardContent flex-fill py-2 mx-3 text-center">
            {props.children}
          </div>
          <div className="row mx-3 my-3">
            <Link href="/solutions/[name]" as={`${props.link}`}>
              <Button py={8} px={12} bg="dark.500" color="white" _hover={{ color: "white", bg: "dark.400" }} borderRadius="0px 12px" rightIcon={<FaArrowRight />}>
                Learn More
            </Button>
            </Link>
          </div>
        </Box>
      </Box>
    </Link>
  );
}

export default CardWithIcon;
