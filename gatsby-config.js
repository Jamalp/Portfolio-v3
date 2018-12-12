let env = process.env.NODE_ENV || "development";

// This adds dotenv (for storing environment variables) to gatsby
require("dotenv").config({ path: `./.env.${env}` });

module.exports = {
  siteMetadata: {
    title: "Jamal Powell · Web Developer, Creative & Photographer.",
    siteUrl: `https://jamalpowell.com`,
    titleAlt: "Jamal Powell Portfolio", // This allows an alternative site title for SEO schema.
    publisher: "Jamal Powell", // Organization name used for SEO schema
    description:
      "Jamal Powell is an independent web developer, photographer & creative hailing from Honolulu and currently based in Portland, Oregon. Motivated by a genuine curiosity in the world, Jamal thrives in collaborative environments that fuse cutting - edge technology with creative thinking and design.",
    canonicalUrl: "https://jamalpowell.com",
    image: "https://jamalpowell.com/images/jamal-powell.jpg",
    ogImage: "https://jamalpowell.com/images/og-image.jpg",
    organization: {
      name: "Jamal Powell",
      url: "https://jamalpowell.com",
      logo: "https://jamalpowell.com/android-chrome-512x512.png"
    },
    author: "Jamal Powell", // Author for RSS author segment and SEO schema
    authorUrl: "https://jamalpowell.com/about", // URL used for author and publisher schema, can be a social profile or other personal site
    social: {
      twitter: "@jamalpowell"
    },
    shortTitle: "Jamal Powell", // Used for App manifest e.g. Mobile Home Screen
    logo: "/src/images/favicon.png", // Logo used for SEO, RSS, and App manifest
    backgroundColor: "#000000", // Used for Offline Manifest
    themeColor: "#ffffff", // Used for Offline Manifest
    copyright: "Copyright © 2019 Jamal Powell" // Copyright string for the RSS feed
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.js`)
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `${process.env.SPACE_ID}`,
        accessToken: `${process.env.ACCESS_TOKEN}`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `white`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `http://jamalpowell.com`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-60064927-1",
        head: true,
        anonymize: false,
        respectDNT: true,
        exclude: ["/preview/**"]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jamal Powells Portfolio",
        short_name: "Jamal Powells Portfolio",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: "src/images/favicon.png" // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    "gatsby-plugin-offline"
  ]
};
