import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/hero"
import FeaturesSection from "../components/features"
import AboutSection from "../components/about"


const IndexPage = () => (
  <Layout>
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
