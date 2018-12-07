import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Navigation from "./Navigation";
import Initials from "./Initials";
import Transition from "./Transition";
import "../styles/base.scss";
const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            canonicalUrl
            image
            author
            ogImage
            organization {
              name
              url
              logo
            }
            social {
              twitter
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          key="app-head"
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        >
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,400i,700,700i"
            rel="stylesheet preconnect"
          />
          <html lang="en" />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta name="image" content={data.site.siteMetadata.image} />

          {/* OpenGraph tags */}
          <meta
            property="og:url"
            content={data.site.siteMetadata.canonicalUrl}
          />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta
            property="og:description"
            content={data.site.siteMetadata.description}
          />
          <meta property="og:image" content={data.site.siteMetadata.ogImage} />
          <meta property="og:image:height" content="1257" />
          <meta property="og:image:width" content="2400" />
          {/* Twitter Card tags */}
          <meta
            name="twitter:card"
            content="data.site.siteMetadata.summary_large_image"
          />
          <meta
            name="twitter:creator"
            content={data.site.siteMetadata.social.twitter}
          />
          <meta name="twitter:title" content={data.site.siteMetadata.title} />
          <meta
            name="twitter:description"
            content={data.site.siteMetadata.description}
          />
          <meta name="twitter:image" content={data.site.siteMetadata.image} />
          {/* Favicon stuff */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <Navigation />
        <Initials />
        <Transition location={location}>{children}</Transition>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
