import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { vars } from "../utils/emotionVars";
import Img from "gatsby-image";
import Title from "../components/project/projectTitle";
import CopyRow from "../components/project/copyRow";
import PageTour from "../components/project/pageTour";
import ImageRow from "../components/project/imageRow";
import Quote from "../components/project/quote";
import Carousel from "../components/project/carousel";
import MobileImages from "../components/project/mobileImages";
import Footer from "../components/project/footer";
const ProjectPage = styled("section")`
  @media (max-width: 950px) {
    padding-top: ${vars.header_height};
  }
`;

const HeroImage = styled("div")`
  width: calc(100% - 120px);
  margin-left: 120px;
  margin-top: 88px;
  background-color: ${vars.black};
  margin-bottom: 116px;
  max-height: 850px;
  height: 100vh;
  .gatsby-image-wrapper {
    height: 100%;
  }
  @media (max-width: 1549px) {
    max-height: 650px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 56px;
  }

  @media (max-width: 950px) {
    width: 100%;
    margin: 46px 0 ${vars.mobile_margin_down};
    height: 40vh;
  }

  picture,
  img {
    height: 100%;
    object-fit: cover;
  }
`;

class Project extends Component {
  render() {
    const {
      projectTitle,
      heroImage,
      agency,
      copyRowLeft,
      copyRowRight,
      projectUrl,
      projectUrlDisplay,
      pageTour,
      pageTourDescriptions,
      imageRowTallLeft,
      imageRow,
      quote,
      quoteAuthor,
      gallery,
      galleryCopy,
      mobileImages,
      nextProject
    } = this.props.data.contentfulProject;

    return (
      <div>
        <ProjectPage>
          <Title title={projectTitle} />
          <HeroImage>
            <Img
              fluid={heroImage.fluid}
              alt={`${projectTitle} Intro image`}
              key={heroImage.id}
            />
          </HeroImage>
          <CopyRow
            data={{
              copyRowLeft,
              copyRowRight,
              agency,
              projectUrl,
              projectUrlDisplay
            }}
          />
          <ImageRow
            data={{
              imageRowTallLeft,
              leftImage: imageRow[0],
              rightImage: imageRow[1]
            }}
          />
          <PageTour data={{ pageTour, pageTourDescriptions }} />
          <Quote data={{ quote, quoteAuthor }} />
          <Carousel data={{ gallery, galleryCopy }} />
          <MobileImages data={mobileImages} />
          <Footer data={nextProject} />
        </ProjectPage>
      </div>
    );
  }
}

Project.propTypes = {
  data: PropTypes.object.isRequired
};

export default Project;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      id
      projectTitle
      slug
      heroImage {
        fluid(maxWidth: 1800, quality: 100) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      agency
      projectUrl
      projectUrlDisplay
      copyRowLeft {
        childMarkdownRemark {
          html
        }
      }
      copyRowRight {
        childMarkdownRemark {
          html
        }
      }
      copyRowRight {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      imageRowTallLeft
      imageRow {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      pageTour {
        file {
          url
        }
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      pageTourDescriptions
      quote
      quoteAuthor
      gallery {
        id
        fluid(quality: 100) {
          src
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        file {
          url
          contentType
        }
      }
      galleryCopy {
        childMarkdownRemark {
          html
        }
      }
      mobileImages {
        id
        file {
          fileName
        }
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      nextProject {
        id
        projectTitle
        slug
        footerImage {
          fluid(quality: 100, maxWidth: 1600) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`;
