import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
  
const theme = extendTheme({
    config,
    colors: {
        transparent: "transparent",
        brand: {
            600: "#4E19B9",
            500: "#4E19B9",
            400: "#4E19B9"
        },
        primary: {
            600: "#4E19B9",
            500: "#4E19B9",
            400: "#4E19B9"
        },
        secondary: {
            500: "#EFB617"
        },
        dark:{
            500: "#051133",
            400: "#2B3244"
        },
        light:{
            500: "#FAFAFC",
            400: "#F3F3F8"
        },
    },
    fonts: {
        heading: "Plus Jakarta Sans",
        body: "Plus Jakarta Sans",
        button: "Plus Jakarta Sans"
    },
    styles: {
        global: {
            body: {
                color: "gray.800",
                bg: "white"
            }
        },
    },
    components: {
        Button: {
            baseStyle:{
                fontFamily: "Plus Jakarta Sans",
            }
        },
        Box : {
            baseStyle: {
                fontFamily: "Plus Jakarta Sans"
            }
        },
        Heading: {
            baseStyle: {
                color: "purple.900"
            }
        }
    }
  }) ;

  export default theme;