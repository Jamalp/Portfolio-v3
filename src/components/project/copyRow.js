import React, { Component } from "react";
import styled from "@emotion/styled";
import { vars } from "../../utils/emotionVars";

const CopyRowWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 94px;
  margin-left: calc(120px + 9.5%);
  width: calc(100% - 9.5% - 240px);
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 950px) {
    width: 100%;
    padding: 0 30px;
    margin-bottom: ${vars.mobile_margin_down};
    margin-left: 0;
  }
`;

const CopyRowEl = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 74.3879%;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 950px) {
    display: block;
  }
  & > div {
    width: 48%;
    @media (max-width: 950px) {
      width: 100%;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 28px;
    }
  }
  p {
    font-size: 24px;
    line-height: 32px;
  }
`;

const ProjectMeta = styled("div")`
  text-align: right;
  color: #fff;
  @media (max-width: 1024px) {
    margin-bottom: ${vars.mobile_margin_down};
    text-align: left;
  }
  & > div:first-of-type {
    margin-bottom: ${vars.mobile_margin_down};
    @media (max-width: 950px) {
      margin-bottom: 14px;
    }
  }
  h4 {
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: 700;
    margin-bottom: 8px;
    @media (max-width: 950px) {
      font-size: 16px;
    }
  }
  p,
  a.link--primary {
    font-size: 24px;
    color: #fff;
    @media (max-width: 950px) {
      font-size: 20px;
    }
  }
`;

class CopyRow extends Component {
  render() {
    if (this.props.data) {
      return (
        <CopyRowWrapper>
          <CopyRowEl>
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.data.copyRowLeft.childMarkdownRemark.html
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.data.copyRowRight.childMarkdownRemark.html
              }}
            />
          </CopyRowEl>
          <ProjectMeta className="project-meta">
            <div>
              <h4>Visit</h4>
              <a
                className="link--primary"
                href={this.props.data.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.data.projectUrlDisplay}
              </a>
            </div>
            <div>
              <h4>Agency</h4>
              <p>{this.props.data.agency}</p>
            </div>
          </ProjectMeta>
        </CopyRowWrapper>
      );
    } else {
      return false;
    }
  }
}

export default CopyRow;
