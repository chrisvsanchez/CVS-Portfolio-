import React from "react";
import Layout from "../components/layout";

import Header from "../components/Header";
import About from "../components/About";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";
import PortProjects from "../components/PortProjects";
import Stack from "../components/Stack";

export default () => {
  return (
    <Layout>
      <Header />
      <LandingPage />
      <About />
      <Stack />
      <PortProjects />
      <Footer />
    </Layout>
  );
};
