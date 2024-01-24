import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/hero"
import { Faq } from "@/components/faq"
import { About } from "@/components/about"
import { Blog } from "@/components/blog"


const IndexPage = () => (
  <Layout>
    <HeroSection />
    <About />
    {/* <Blog /> */}
    <Faq />
  </Layout>
)


export const Head = () => <Seo title="Home" description="Website description" children={<div />} />

export default IndexPage