import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/hero"
import FeaturesSection from "../components/features"
import LineSection from "../components/line"


const IndexPage = () => (
  <Layout>
    <HeroSection />
    <LineSection />
    <FeaturesSection />
    <h1 className="mt-96">Hello</h1>
  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
