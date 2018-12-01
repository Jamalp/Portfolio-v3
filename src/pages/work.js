import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

const Project = ({ node }) => {
  return (
    <li>
      <Link to={`work/${node.slug}`}>{node.projectTitle}</Link>
      <div>
        <Img
          fluid={node.heroImage.fluid}
          alt={node.projectTitle}
          key={node.heroImage.id}
        />
      </div>
    </li>
  );
};

const WorkPage = ({ data }) => (
  <>
    <div>
      <ul>
        {data.allContentfulProject.edges.map(project => (
          <Project node={project.node} key={project.node.id} />
        ))}
      </ul>
    </div>
  </>
);

export default WorkPage;

export const pageQuery = graphql`
  query pageQuery {
    allContentfulProject(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          projectTitle
          slug
          heroImage {
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            file {
              url
            }
          }
        }
      }
    }
  }
`;
