import React from "react";
import { Icon,Image, Heading, Button, Box } from "@chakra-ui/react";
import Slider from "react-flickity-component";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

class CaseStudy extends React.Component {
  constructor(props){
    super(props)
    this.state = {i: 0}
  }


  next = () => {
    this.flkty.next()
    this.setState({i: this.flkty.selectedIndex})
  }
  prev = () => {
    this.flkty.previous()
    this.setState({i: this.flkty.selectedIndex})
  }
  render(){
  return (
      <Box
        className="case-study position-relative"
        rounded="lg"
      >
        {/* 
        */}
        <Slider
        flickityRef={(c) => this.flkty = c}
        options={{
          draggable: false,
          pageDots: false,
          prevNextButtons: false,
          contain: true,
        }}>
          {this.props.caseStudyDetails.map((caseStudy, index) => (
            <Image alt="" key={index} src={caseStudy.image} py={12} height={600} objectFit="cover" className="image w-100 my-3"></Image>
          ))}
        </Slider>
        <Box boxShadow="lg" bottom={0} top={0} minWidth="50%" height="100%" left="10%" bg="white" position="absolute" className="case-box d-flex align-items-center justify-content-center flex-column">
          <Heading size="sm" className="text-primary text-center" letterSpacing={1.5} textTransform="uppercase" mb={2}>Featured Case Study</Heading>
          <div className="display5 text-center title mt-3">
            <h6>{this.props.caseStudyDetails[this.state.i].title}</h6>
          </div>
          <div className="content text-center text-secondary mt-2">
            {this.props.caseStudyDetails[this.state.i].description}
          </div>
          <Link href="/newsroom/[bid]" as={"/newsroom/"+this.props.caseStudyDetails[this.state.i].link}><a className="mt-4 link">Read More</a>
          </Link>
        </Box>
        <Box boxSize="64px" onClick={this.prev} className={this.state.i==0 ? "left-nav bg-disabled" : "left-nav bg-primary primary-btn"} mt="-32px" position="absolute" top="50%" p="20px" left="-32px"><FaArrowLeft color="white" size="24px" /></Box>
        <Box boxSize="64px" onClick={this.next} className={this.state.i==this.props.caseStudyDetails.length-1 ? "right-nav bg-disabled" : "right-nav bg-primary primary-btn"} mt="-32px" position="absolute" top="50%" p="20px" right="-32px"><FaArrowRight color="white" size="24px" /></Box>
        {/* <div className="content">
          <p>{props.content}</p>
        </div> */}
        {/* <Button
          variant="outline"
          rightIcon={<FaArrowRight />}
          size="lg"
          className="btn btn-outline-light mt-4"
        >
          Read More
        </Button> */}
      </Box>
      
  )
}
}



export default CaseStudy;
