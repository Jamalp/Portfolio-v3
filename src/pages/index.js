import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { TweenMax, Expo } from "gsap";
import backgroundImage from "../images/home-background.jpg";
import { vars } from "../utils/emotionVars";
import Div100vh from "react-div-100vh";

const Introduction = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 9.52%;
  opacity: 0;
  width: calc(100% - 240px);
  margin: 0 auto;
  position: relative;
  @media (max-width: 950px) {
    padding: 80px ${vars.mobile_margin_sides} 0;
    height: 100%;
    width: 100%;
  }
  & > div:first-of-type {
    z-index: 3;
    position: relative;
  }
  p {
    width: 70%;
    max-width: 790px;
    font-size: 36px;
    font-weight: 400;
    line-height: 42px;
    &:first-of-type {
      margin-bottom: 43px;
      @media (max-width: 950px) {
        margin-bottom: 20px;
      }
    }
    @media (max-width: 950px) {
      width: 100%;
      font-size: 24px;
    }
  }
  .cta-wrapper {
    margin-top: 40px;
    z-index: 2;
    @media (max-width: 950px) {
      margin-top: 20px;
      .link--primary {
        font-size: 24px;
      }
    }
  }
`;

const BackgroundImage = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.8s ease;
  &.home-link-hover {
    opacity: 1;
  }
  .background-image-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
    .background-image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
    }
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
`;

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState({ isHovered: !this.state.isHovered });
  }

  componentDidMount() {
    TweenMax.to("#introduction_copy", 1.4, {
      opacity: 1,
      ease: Expo.easeInOut
    });
  }

  render() {
    const hoverClass = this.state.isHovered ? "home-link-hover" : "";
    return (
      <>
        <Div100vh>
          <Introduction id="introduction_copy">
            <div>
              <p>
                Hey, I'm Jamal. A web developer, creative technologist &
                photographer with over seven years of experience working in
                digital & advertising agencies.
              </p>
              <p>
                {" "}
                I've had the privilege of working with brands and organizations
                such as, The New York Times, Umbro, R+Co, Becca RED & The White
                House.
              </p>
            </div>
            <div className="cta-wrapper">
              <Link
                to="/work"
                className="link--primary"
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
              >
                View My Work
              </Link>
            </div>
          </Introduction>
        </Div100vh>
        <BackgroundImage className={`${hoverClass} background-image-hover`}>
          <div className="background-image-wrapper">
            <img src={backgroundImage} alt="Visit my work page" />
            <div className="background-image-overlay" />
          </div>
        </BackgroundImage>
      </>
    );
  }
}

export default HomePage;
