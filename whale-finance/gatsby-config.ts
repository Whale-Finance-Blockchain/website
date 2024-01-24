import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Whale Finance`,
    description: `Whale Finance Website`,
    author: `@whalefinance`,
    siteUrl: `https://whale-finance.netlify.app/`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "assets",
        "path": "./src/assets/"
      },
      __key: "assets"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Whale Finance`,
        short_name: `Whale`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/assets/whale_logo_green.png`, 
      },
    },
  ]
};

export default config;
