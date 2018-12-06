import React, { Component } from "react";
import { Link, graphql } from "gatsby";
import { vars } from "../../utils/emotionVars";
import styled from "@emotion/styled";
import Img from "gatsby-image";

const FooterEl = styled("footer")`
  display: flex;
  position: relative;
  height: 320px;
  overflow: hidden;
  width: calc(100% - 240px);
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 120px;
  padding-top: 120px;
  @media (max-width: 950px) {
    width: 100%;
    margin: 30px auto 0;
    padding-top: 27px;
    height: auto;
    flex-direction: column-reverse;
  }
  & > a {
    display: block;
    width: 77.25%;
    position: relative;
    cursor: pointer;
    @media (max-width: 950px) {
      width: 100%;
      height: 120px;
    }
    &:hover {
      .overlay {
        background-color: rgba(0, 0, 0, 0.8);
      }
      .title-wrapper {
        transform: translate3d(0, -50%, 0);
        opacity: 1;
      }
      p:after {
        transform: translate3d(0, 0, 0);
      }
    }
    .gatsby-image-wrapper {
      height: 100%;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 2;
      transition: background-color 1.4s cubic-bezier(0.19, 1, 0.22, 1);
      @media (max-width: 950px) {
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
    .title-wrapper {
      position: absolute;
      top: 50%;
      left: 14.3%;
      opacity: 0;
      transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1),
        opacity 1.4s cubic-bezier(0.19, 1, 0.22, 1);
      transform: translate3d(-20px, -50%, 0);
      z-index: 3;
      @media (max-width: 950px) {
        transform: translate3d(0, -50%, 0);
        opacity: 1;
        left: ${vars.mobile_margin_sides};
      }
    }
    p {
      font-weight: 700;
      font-size: 64px;
      line-height: 1;
      letter-spacing: 1px;
      overflow: hidden;
      position: relative;
      @media (max-width: 950px) {
        font-size: 24px;
      }
      &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10px;
        height: 1px;
        width: 100%;
        background-color: #fff;
        backface-visibility: hidden;
        transform: translate3d(-100%, 0, 0);
        transition: transform 0.5s cubic-bezier(1, 0.01, 0.7, 0.93);
        transition-delay: 0.2s;
        @media (max-width: 950px) {
          display: none;
        }
      }
    }
    img {
      object-fit: cover;
      height: 100%;
    }
  }
  .footer-contact {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 22.75%;
    padding-left: 30px;
    @media (max-width: 950px) {
      width: 100%;
      padding: 0 ${vars.mobile_margin_sides} 20px;
      margin: 0 auto;
      align-items: flex-start;
    }
    .link--primary {
      font-size: 24px;
      white-space: nowrap;
      font-weight: 700;
    }
  }
`;

const FooterLine = styled("div")`
  height: 1px;
  background-color: ${vars.white};
  width: 30%;
  margin-left: 11.3%;
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 950px) {
    width: calc(100% - 40px);
    padding: 0 ${vars.mobile_margin_sides};
    right: 0;
    margin: 0 auto;
  }
`;

class Footer extends Component {
  render() {
    if (this.props.data) {
      return (
        <FooterEl>
          <FooterLine />
          <Link to={`/work/${this.props.data.slug}`}>
            <div className="title-wrapper">
              <p>{this.props.data.projectTitle}</p>
            </div>
            <div className="overlay" />
            <Img
              fluid={this.props.data.footerImage.fluid}
              key={this.props.data.id}
            />
          </Link>
          <div className="footer-contact">
            <div>
              <p>Lets work together.</p>
              <a
                className="link--primary"
                href="mailto:jamalkpowell@gmail.com?Subject=Hey%20Jamal"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </FooterEl>
      );
    } else {
      return false;
    }
  }
}

export default Footer;
