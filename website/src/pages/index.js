import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <h1>Hello</h1>
    <div className="bg-primary h-[2000px]">
      aaaaaa test
    </div>
  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
