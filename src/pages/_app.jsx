import React, { Component } from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import customTheme from "../../public/assets/js/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "flickity/dist/flickity.min.css";

import "../../public/assets/scss/styles.scss";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

import config from "react-reveal/globals";
config({ ssrFadeout: true });
export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    //   const { loading } = this.state;
    NProgress.configure({ showSpinner: false });
    Router.events.on("routeChangeStart", () => NProgress.start());
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());

    //   Router.events.on('routeChangeStart', () =>
    //       this.setState({ loading: true })
    //   );
    //   Router.events.on('routeChangeComplete', () =>
    //       this.setState({ loading: false })
    //   );
    //   Router.events.on('routeChangeError', () =>
    //       this.setState({ loading: false })
    //   );

    return (
      <ChakraProvider theme={customTheme}>
        <Head>
          {/* <script type="text/javascript" src="/assets/js/chatbot.js"></script> */}
          <link href="https://fonts.googleapis.com/css?family=Rubik"></link>
          <link
            rel="shortcut icon"
            href="/assets/images/icons/favicon/bg.ico"
            type="image/x-icon"
          />
        </Head>
        <CSSReset />
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </ChakraProvider>
    );
  }
}
