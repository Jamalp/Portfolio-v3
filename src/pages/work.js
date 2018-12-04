import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import PageTitle from "../components/pageTitle";

const WorkGrid = styled("section")`
  margin-left: 120px;
  margin-top: 78px;
  @media (max-width: 950px) {
    margin: 0 auto 30px;
  }
`;

const ProjectEl = styled("div")`
  margin-bottom: 110px;
  @media (max-width: 950px) {
    margin: 0 auto 20px;
    padding: 0 30px;
  }
  &.project-hero {
    width: calc(100% - 120px);
    @media (max-width: 950px) {
      width: 100%;
    }
  }

  &.project-row {
    display: flex;
    margin-right: 120px;
    margin-left: 10.4%;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 950px) {
      width: 100%;
      margin: 0 auto;
      display: block;
    }
    & > a {
      width: 48.6%;
      @media (max-width: 950px) {
        width: 100%;
        margin: 0 auto 20px;
      }
    }
  }

  &.project-row-3,
  &.project-row-5 {
    margin-left: 20.650529501%;
    @media (max-width: 950px) {
      margin-left: 0;
    }
  }

  &.project-row-5 {
    margin-right: 120px;
    @media (max-width: 950px) {
      margin-right: 0;
    }
  }

  .project-link {
    position: relative;
    display: block;
    &:hover {
      .project-hover {
        pointer-events: auto;
        background-color: rgba(0, 0, 0, 0.6);
        .project-name {
          opacity: 1;
          &:after {
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }

  .project-hover {
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    pointer-events: none;
    transition: background-color 0.5s ease;
    z-index: 1;
    @media (max-width: 950px) {
      pointer-events: auto;
      background-color: rgba(0, 0, 0, 0.6);
    }
    .project-name {
      opacity: 0;
      transition: opacity 0.5s ease;
      position: relative;
      margin-left: 40px;
      margin-bottom: 60px;
      display: inline-block;
      overflow: hidden;
      font-size: 36px;
      font-weight: 700;
      letter-spacing: 1px;
      @media (max-width: 950px) {
        opacity: 1;
        margin-left: 20px;
        margin-bottom: 20px;
      }
      &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 3px;
        height: 1px;
        background-color: #fff;
        width: 100%;
        transform: translate3d(-100%, 0, 0);
        transition: transform 0.5s cubic-bezier(1, 0.01, 0.7, 0.93);
        will-change: transform;
        @media (max-width: 950px) {
          transform: translate3d(0, 0, 0);
        }
      }
    }
  }
`;

const WorkPage = ({ data }) => (
  <>
    <PageTitle title="Selected Work" />
    <WorkGrid className="work-grid">
      <ProjectEl className="project-hero">
        <Link
          className="project-link"
          to={`/work/${data.allContentfulProject.edges[0].node.slug}`}
        >
          <div className="project-hover">
            <h3 className="project-name">
              {data.allContentfulProject.edges[0].node.projectTitle}
            </h3>
          </div>
          <Img
            fluid={data.allContentfulProject.edges[0].node.gridImage.fluid}
            alt={data.allContentfulProject.edges[0].node.projectTitle}
            key={data.allContentfulProject.edges[0].node.gridImage.id}
          />
        </Link>
      </ProjectEl>
      <ProjectEl className="project-row project-row-2">
        <Link to={`/work/${data.allContentfulProject.edges[1].node.slug}`}>
          <a className="project-link">
            <div className="project-hover">
              <h3 className="project-name">
                {data.allContentfulProject.edges[1].node.projectTitle}
              </h3>
            </div>
            <Img
              fluid={data.allContentfulProject.edges[1].node.gridImage.fluid}
              alt={data.allContentfulProject.edges[1].node.projectTitle}
              key={data.allContentfulProject.edges[1].node.gridImage.id}
            />
          </a>
        </Link>
        <Link to={`/work/${data.allContentfulProject.edges[2].node.slug}`}>
          <a className="project-link">
            <div className="project-hover">
              <h3 className="project-name">
                {data.allContentfulProject.edges[2].node.projectTitle}
              </h3>
            </div>
            <div className="cover-image">
              <Img
                fluid={data.allContentfulProject.edges[2].node.gridImage.fluid}
                alt={data.allContentfulProject.edges[2].node.projectTitle}
                key={data.allContentfulProject.edges[2].node.gridImage.id}
              />
            </div>
          </a>
        </Link>
      </ProjectEl>
      <ProjectEl className="project-single project-row-3">
        <Link to={`/work/${data.allContentfulProject.edges[3].node.slug}`}>
          <a className="project-link">
            <div className="project-hover">
              <h3 className="project-name">
                {data.allContentfulProject.edges[3].node.projectTitle}
              </h3>
            </div>
            <Img
              fluid={data.allContentfulProject.edges[3].node.gridImage.fluid}
              alt={data.allContentfulProject.edges[3].node.projectTitle}
              key={data.allContentfulProject.edges[3].node.gridImage.id}
            />
          </a>
        </Link>
      </ProjectEl>
      <ProjectEl className="project-row project-row-4">
        <Link to={`/work/${data.allContentfulProject.edges[4].node.slug}`}>
          <a className="project-link">
            <div className="project-hover">
              <h3 className="project-name">
                {data.allContentfulProject.edges[4].node.projectTitle}
              </h3>
            </div>
            <Img
              fluid={data.allContentfulProject.edges[4].node.gridImage.fluid}
              alt={data.allContentfulProject.edges[4].node.projectTitle}
              key={data.allContentfulProject.edges[4].node.gridImage.id}
            />
          </a>
        </Link>
        <Link to={`/work/${data.allContentfulProject.edges[5].node.slug}`}>
          <a className="project-link">
            <div className="project-hover">
              <h3 className="project-name">
                {data.allContentfulProject.edges[5].node.projectTitle}
              </h3>
            </div>
            <Img
              fluid={data.allContentfulProject.edges[5].node.gridImage.fluid}
              alt={data.allContentfulProject.edges[5].node.projectTitle}
              key={data.allContentfulProject.edges[5].node.gridImage.id}
            />
          </a>
        </Link>
      </ProjectEl>
      <ProjectEl className="project-single project-row-5">
        <Link to={`/work/${data.allContentfulProject.edges[6].node.slug}`}>
          <a className="project-link">
            <div className="project-hover">
              <h3 className="project-name">
                {data.allContentfulProject.edges[6].node.projectTitle}
              </h3>
            </div>
            <Img
              fluid={data.allContentfulProject.edges[6].node.gridImage.fluid}
              alt={data.allContentfulProject.edges[6].node.projectTitle}
              key={data.allContentfulProject.edges[6].node.gridImage.id}
            />
          </a>
        </Link>
      </ProjectEl>
      <ProjectEl className="project-single project-row-6">
        <Link to={`/work/${data.allContentfulProject.edges[7].node.slug}`}>
          <a className="project-link">
            <div className="project-hover">
              <h3 className="project-name">
                {data.allContentfulProject.edges[7].node.projectTitle}
              </h3>
            </div>
            <Img
              fluid={data.allContentfulProject.edges[7].node.gridImage.fluid}
              alt={data.allContentfulProject.edges[7].node.projectTitle}
              key={data.allContentfulProject.edges[7].node.gridImage.id}
            />
          </a>
        </Link>
      </ProjectEl>
    </WorkGrid>
  </>
);

export default WorkPage;

export const pageQuery = graphql`
  query pageQuery {
    allContentfulProject(
      sort: { fields: [order] }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          id
          projectTitle
          slug
          gridImage {
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
