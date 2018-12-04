import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

class Project extends Component {
  render() {
    const { projectTitle, copyRowLeft } = this.props.data.contentfulProject;
    return (
      <div>
        <h1>{projectTitle}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: copyRowLeft.childMarkdownRemark.html
          }}
        />
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
      order
      slug
      heroImage {
        file {
          url
        }
        children {
          id
        }
      }
      copyRowLeft {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      copyRowRight {
        childMarkdownRemark {
          html
          excerpt
        }
      }
      pageTour {
        file {
          url
        }
      }
      pageTourDescriptions
      imageRow {
        file {
          url
        }
      }
    }
  }
`;
