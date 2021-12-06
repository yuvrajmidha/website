import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
    colors: {
        transparent: "transparent",
        primary: {
            500: "#4E19B9"
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
        heading: "Sora",
        body: "Nunito Sans Regular",
        button: "Sora"
    },
    styles: {
        global: {
            body: {
                color: "gray.800",
                bg: "gray.100"
            }
        },
    },
    components: {
        Button: {
            baseStyle:{
                fontFamily: "Sora",
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