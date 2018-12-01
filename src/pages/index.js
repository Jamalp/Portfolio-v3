import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { TweenMax, Power2, Expo } from "gsap";

const Introduction = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 9.52%;
  opacity: 0;
  width: calc(100% - 240px);
  margin: 0 auto;
  @media (max-width: 950px) {
    padding-left: 30px;
    padding-right: 30px;
    height: 100vh;
    width: 100%;
  }
  p {
    width: 70%;
    max-width: 790px;
    font-size: 36px;
    font-weight: 400;
    line-height: 42px;
    &:first-child {
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
    @media (max-width: 950px) {
      font-size: 24px;
      margin-top: 20px;
    }
  }
`;

class HomePage extends React.Component {
  componentDidMount() {
    TweenMax.to("#introduction_copy", 1.4, {
      opacity: 1,
      ease: Expo.easeInOut
    });
  }

  render() {
    return (
      <>
        <Introduction id="introduction_copy">
          <div>
            <p>
              Hey, I'm a Web Developer & Creative Technologist based in
              Portland, Oregon.
            </p>
            <p>
              {" "}
              I've had the privilege to work with companies and organizations
              such as The New York Times, Umbro, Tracksmith, Master & Dynamic,
              R+Co & RED.
            </p>
          </div>
          <div className="cta-wrapper">
            <Link to="/work" className="link--primary">
              View My Work
            </Link>
          </div>
        </Introduction>
      </>
    );
  }
}

export default HomePage;
