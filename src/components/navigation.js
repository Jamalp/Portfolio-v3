import { Link } from "gatsby";
import React, { Component } from "react";
import styled from "@emotion/styled";
import { vars } from "../utils/emotionVars";
import Circle from "./circle";
import { TweenMax, Expo, TimelineLite } from "gsap";

const Header = styled("header")`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${vars.black};
  color: ${vars.white};
  transform: translate3d(calc(-100% + 120px), 0, 0);
  z-index: 1000;
  @media (max-width: 950px) {
    bottom: auto;
    right: 0;
    height: ${vars.header_height};
    transform: translate3d(0, 0, 0);
    border-bottom: 1px solid ${vars.white};
  }

  .navigation-sidebar {
    position: relative;
    padding-top: 100px;
    height: 100%;
    width: 120px;
    @media (max-width: 950px) {
      width: 100%;
      height: 100%;
      padding-top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
    }
    #navigation_line {
      width: 1px;
      height: 0;
      top: 0;
      right: 0;
      opacity: 0;
      background-color: #fff;
      position: absolute;
      @media (max-width: 950px) {
      }
    }
  }
  .circle {
    background-color: #fff;
    margin: 0 auto;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    display: block;
    opacity: 0;
    transform: translate3d(0, -10px, 0);
    backface-visibility: hidden;
    will-change: transform;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  .menu-trigger {
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 6px;
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    transform: translate3d(-10px, -50%, 0) rotate(-90deg);
    opacity: 0;
    backface-visibility: hidden;
    will-change: transform;
    cursor: pointer;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 950px) {
      transform: translate3d(0, 0, 0) rotate(0) !important;
      height: auto;
      position: static;
      width: auto;
      letter-spacing: 2px;
    }
  }
`;

const NavigationInner = styled("div")`
  width: calc(100% - 120px);
  display: flex;
  align-items: center;
  @media (max-width: 950px) {
    display: none;
  }
  .navigation-inner-line {
    width: 10.33%;
    margin-left: 120px;
    margin-right: 10.33%;
    height: 260px;
    position: relative;
    overflow: hidden;
    & > div {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      border-right: 1px solid ${vars.white};
      height: 100%;
      width: 1px;
      transform: translate3d(0, 100%, 0);
    }
  }

  nav {
    div {
      overflow: hidden;
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    a {
      font-size: 64px;
      display: block;
    }
  }
`;

class Navigation extends Component {
  constructor() {
    super();
    this.anim_header = null;
    this.state = {
      isNavigationOpen: false,
      header_hide_amount: null
    };
    this.navigationAnimation = new TimelineLite({
      paused: true,
      onReverseComplete: () => {
        document.getElementById("header").removeAttribute("style");
      }
    });

    this.link_wrapper = null;
    this.links = null;
  }

  resize() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          header_hide_amount: -window.innerWidth + 120
        });
      },
      false
    );
  }

  getSlug(url) {
    const parts = url.split("/");
    return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  toggleMenu = () => {
    this.setState({ isNavigationOpen: !this.state.isNavigationOpen });
    this.handleMenu();
  };

  introAnimation() {
    TweenMax.to("#navigation_line", 1.4, {
      opacity: 1,
      height: "100%",
      ease: "cubic-bezier(1, 0.01, 0.7, 0.93)"
    });
    TweenMax.to("#navigation_cirle", 1.4, {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      ease: Expo.easeInOut
    });
    TweenMax.to(".menu-trigger", 1.4, {
      opacity: 1,
      transform: "translate3d(0,-50%,0) rotate(-90deg)",
      ease: "cubic-bezier(1, 0.01, 0.7, 0.93)"
    });
  }

  initiateNavigationAnimation() {
    this.link_wrapper = [].slice.call(
      document.querySelectorAll(".navigation-link-wrapper")
    );
    this.links = this.link_wrapper.map(el => el.querySelector("a"));
    const anim_links = new TweenMax.staggerFrom(
      this.links,
      1,
      { skewY: 4, y: "100%", ease: Expo.easeOut, delay: 0.1 },
      // { skewY: 0, y: "-120%", ease: Expo.easeOut, delay: 0 },
      0.1
    );
    const anim_line = new TweenMax.fromTo(
      "#navigationInnerLine",
      0.8,
      {
        transform: "translate3d(0,100%,0)"
      },
      {
        transform: "translate3d(0,0,0)",
        ease: Expo.easeInOut
      }
    );
    this.anim_header = new TweenMax.fromTo(
      "#header",
      1.3,
      { transform: `translate3d(calc(-100% + 120px), 0, 0)` },
      { transform: "translate3d(0,0,0)", ease: Expo.easeInOut }
    );
    this.navigationAnimation.add(this.anim_header);
    this.navigationAnimation.add([anim_links, anim_line], "sequence");
  }

  handleMenu() {
    if (this.state.isNavigationOpen === true) {
      this.navigationAnimation.reverse(-0.5);
    } else if (this.state.isNavigationOpen === false) {
      this.navigationAnimation.play();
    }
  }

  componentWillUnmount() {
    console.log(240);
  }

  componentDidMount() {
    this.introAnimation();
    this.initiateNavigationAnimation();
    this.resize();
  }

  render() {
    return (
      <Header id="header" key="Header">
        <NavigationInner className="navigation-inner">
          <div className="navigation-inner-line">
            <div id="navigationInnerLine" />
          </div>
          <nav>
            <div className="navigation-link-wrapper">
              <Link onClick={this.toggleMenu} to="/">
                Home
              </Link>
            </div>
            <div className="navigation-link-wrapper">
              <Link onClick={this.toggleMenu} to="/about">
                About
              </Link>
            </div>
            <div className="navigation-link-wrapper">
              <Link onClick={this.toggleMenu} to="/work">
                Work
              </Link>
            </div>
            <div className="navigation-link-wrapper">
              <Link onClick={this.toggleMenu} to="/contact">
                Contact
              </Link>
            </div>
            <div className="navigation-link-wrapper">
              <Link onClick={this.toggleMenu} to="/photography">
                Photography
              </Link>
            </div>
          </nav>
        </NavigationInner>
        <div className="navigation-sidebar">
          <div id="navigation_line" />
          <Circle />
          <div className="menu-trigger" onClick={this.toggleMenu}>
            <span className="menu-closed">Menu</span>
            {/* <span className="menu-open">Close</span> */}
          </div>
        </div>
      </Header>
    );
  }
}

export default Navigation;
