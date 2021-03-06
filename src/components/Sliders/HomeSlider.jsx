import { Box, Button, Flex,Image, Heading, ButtonGroup, Text, Icon, Slide, Slider, SliderTrack, SliderFilledTrack } from '@chakra-ui/react';
import Fade from "react-reveal/Fade"
import React, { memo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Controller, Navigation} from 'swiper';
import Section from '../../pageBuilder/Section';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaChevronRight } from 'react-icons/fa';

const sliderInfo = [
    {
      title: "Welcome to BG Unified Solutions",
      imgSrc: "/assets/images/backgrounds/landing-1.png",
      subTitle: "Your go-to partner for all IT solutions and services that deliver value and enable substantial corporate growth.",
      btnPrimaryText: "Explore Now",
      btnSecondaryText: "Get a quote",
      btnPrimaryLink: "/solutions",
      btnSecondaryLink: "/contact"
    },
    {
      title: "Protecting Online Presence of your Business",
      imgSrc: "/assets/images/backgrounds/landing-2.png",
      subTitle: "Fast, friendly and delivery oriented web services, driven by our commitment of customer satisfaction.",
      btnPrimaryText: "Explore Now",
      btnSecondaryText: "Get a quote",
      btnPrimaryLink: "/solutions",
      btnSecondaryLink: "/contact"
    },
    {
      title: "Geographical Redundant Infrastructure",
      imgSrc: "/assets/images/backgrounds/globe.png",
      subTitle: "Highly Redundant Solutions. Connectivity with highly secured infrastructure with multiple telco vendors.",
      btnPrimaryText: "Explore Now",
      btnSecondaryText: "Get a quote",
      btnPrimaryLink: "/solutions",
      btnSecondaryLink: "/contact"
    },
    {
      title: <p>Creating Impact Together</p>,
      imgSrc: "/assets/images/backgrounds/landing-3.png",
      subTitle: <span><b className="text-primary">Consultel Group</b> coming together with BGUS, for efficient and intelligent business solutions with authentic integrity.</span>,
      btnSecondaryText: "Read Customer Stories",
      btnSecondaryLink: "/stories"
    
    },
    {
      title: <p>Intelligent Business<br/> Solutions</p>,
      imgSrc: "/assets/images/backgrounds/landing5.png",
      subTitle: <span><b className="text-primary">Radware</b> and BGUS providing highly secured WAF and DDoS Solutions to the end-customers collaboratively.</span>,
      btnSecondaryText: "Read Customer Stories",
      btnSecondaryLink: "/stories"
    
    },
    {
      title: <p>Bright Solutions. Comprehensive Results.</p>,
      imgSrc: "/assets/images/backgrounds/city.png",
      subTitle: <span><b className="text-primary">Huawei</b> working collaboratively with BG Unified Solutions to extend BG's services offerings and enhance growth.</span>,
      btnSecondaryText: "Read Customer Stories",
      btnSecondaryLink: "/stories"
    
    },
    {
      title: <p>Client Focused. Results Driven.</p>,
      imgSrc: "/assets/images/backgrounds/landing-7.png",
      subTitle: <span><b className="text-primary">Infin8IT</b> working as the technology partner  with BGUS to extend service offerings to the end-customers.</span>,
      btnSecondaryText: "Read Customer Stories",
      btnSecondaryLink: "/stories"
    
    }
  ]

  const roller = [
    {
      tranform: "translateZ(96px) rotateX(0deg)",
      number: 1,
    },
    {
      tranform: "translateY(68px) translateZ(68px) rotateX(-45deg)",
      number: 2,
    },
    {
      tranform: "translateY(96px) rotateX(-90deg)",
      number: 3,
    },
    {
      tranform: "translateY(68px) translateZ(-68px) rotateX(-135deg)",
      number: 4,
    },
    {
      tranform: "translateZ(-96px) rotateX(-180deg)",
      number: 1,
    },
    {
      tranform: "translateY(-68px) translateZ(-68px) rotateX(-225deg)",
      number: 2,
    },
    {
      tranform: "translateY(-96px) rotateX(-270deg)",
      number: 3,
    },
    {
      tranform: "translateY(-68px) translateZ(68px) rotateX(-315deg)",
      number: 4,
    },
  ]

SwiperCore.use([Controller]);
SwiperCore.use([Navigation]);


// install Swiper's Controller component

const RollerNumbers = () => {
  const numbers = []
  for (let index = 0; index < 6; index++) {
    numbers.push(
      <Box transform={`rotate(${((index) * -60)}deg)`} transformOrigin="0px 200px" pos="absolute" top="0px" left="0px">
        <Heading transform="rotate(0deg)" fontFamily="Nexa Bold">0{(index % sliderInfo.length) + 1}</Heading>
      </Box>)
  }
  return numbers
}


function main(props) {
    var interval = null;
    const [animate, setAnimation] = useState(0);
    const [isActive, setIsActive] = useState(true);

    function stop() {
      setIsActive(false);
    }
    React.useEffect(() => {
      interval = setInterval(() => {
        var memory = animate + 1
        if(memory == sliderInfo.length) memory = 0
        setAnimation(animate => animate + 1)
        
      }, 10000)
    }, [])
    return (
        <div>
            <Box pos="relative" height={["440px","520px","720px"]}>
                {sliderInfo.map((slide, index) => 
                  <Image src={slide.imgSrc} transition="1s" opacity={animate % sliderInfo.length === index ? "1" : "0"} minH="448px"  height={["440px","520px","720px"]} objectFit="cover" pos="absolute" top={0} left={0} width="100%"></Image>
                )}
                {/* <Box top={0} left={0} opacity={.7} pos="absolute" width="100%" height="100%" bg="black"></Box> */}
                <Section  pos="absolute" left={0} color="white" width="100%" height="100%" px={8} py={0} my={0} mt={[0,0,0,"-56px","-32px"]}>
                <Flex my={0}>
                  <Box display={["none","none","block"]} pos="relative" minW="180px" color="white">
                  {sliderInfo.map((slide, index) =>
                    <Box p={3}>
                      <Heading cursor="pointer" onClick={() => {setAnimation(index); clearInterval(interval)}} transition=".6s" fontSize={animate % sliderInfo.length === index ? "28px" : "18px"} opacity={animate % sliderInfo.length === index ? "1" : ".4"} fontFamily="Nexa Bold">0{index + 1}</Heading>
                    </Box>
                  )}
                  {/* <Box height="80px" width="80px" style={{perspective:"160px"}}>
                    <Box height="80px" width="80px" pos="relative" style={{transformStyle:"preserve-3d"}} transform={`translateZ(-100px) rotateX(${animate * 45}deg)`} transition="1s">
                      {roller.map((roll, index) => <Box 
                      fontFamily="Nexa Bold" 
                      fontSize="32px"
                      cursor="pointer" 
                      onClick={() => setAnimation(index)}
                      // opacity={animate === index ? "1" : ".3"}
                      p="20px" 
                      bg={animate === index ? "black" : "gray.900"}
                      height="80px" 
                      width="80px" 
                      pos="absolute" 
                      transform={roll.tranform}>
                        0{roll.number}
                      </Box>)}
                    </Box>
                  </Box> */}
                  </Box>
                  <Box>
                    <Heading textShadow="xl" fontSize={["3xl","4xl","48px","64px"]} width={["100%","100%","80%"]} fontFamily="Nexa Bold">
                        {sliderInfo[animate % sliderInfo.length].title} 
                    </Heading>
                    <Text textShadow="xl" width={["100%","100%","72%"]} mt={4} fontSize={["md","lg","2xl"]}>
                        {sliderInfo[animate % sliderInfo.length].subTitle}
                    </Text>
                    <ButtonGroup mt={6}>
                      {sliderInfo[animate % sliderInfo.length].btnPrimaryLink && 
                        <Link href={sliderInfo[animate % sliderInfo.length].btnPrimaryLink}><a><Button fontSize={["12px","18px"]} mr={[1,2]} padding={["18px","24px"]} variant="solid" className="primary-btn" colorScheme="primary" size="lg" >{sliderInfo[animate % sliderInfo.length].btnPrimaryText}</Button></a></Link>
                        }
                      {sliderInfo[animate % sliderInfo.length].btnSecondaryLink && <Link href={sliderInfo[animate % sliderInfo.length].btnSecondaryLink}><a><Button rightIcon={<FaChevronRight />} padding={["18px","24px"]} ml={[1,2]} fontSize={["12px","18px"]} variant="outline" color="white" _hover={{ color: "black", bg: "white" }} size="lg">{sliderInfo[animate % sliderInfo.length].btnSecondaryText}</Button></a></Link>}
                    </ButtonGroup>
                  </Box>
                </Flex>
                </Section>
               
          
            {/* <Flex display={["none", "none","none", "flex"]} pos="absolute" bottom={0} left={0} width="100%" color="white">
                  {sliderInfo.map((slide, i) => <Box 
                  px={6} 
                  py={8} 
                  cursor="pointer"
                  onClick={() => {setAnimation(i)}}
                  fontWeight={animate % sliderInfo.length == i && "700"}
                  opacity={animate % sliderInfo.length != i && ".4"}
                  bg={animate % sliderInfo.length === i && "#ffffff22"}
                  width={1/sliderInfo.length}
                  borderTopWidth={1}>
                        {slide.title}
                  </Box>)}
            </Flex> */}
            {/* <Box pos="absolute" bottom={0} p={5} right={0}>
                <Button onClick={() => setAnimation(animate - 1)} mx={2} rounded={0} fontSize="24px" py={6}><FaArrowLeft /></Button>
                <Button onClick={() => setAnimation(animate + 1)} mx={2} rounded={0} fontSize="24px" py={6}><FaArrowRight /></Button>
            </Box> */}
            </Box>
        </div>
    );
}

export default main;
