import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { vars } from "../utils/emotionVars";
import { TweenMax } from "gsap";

const CircleEl = styled("div")`
  .circle {
    background-color: ${vars.white};
    margin: 0 auto;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    display: block;
    opacity: 0;
    transform: translate3d(0, -10px, 0);
    backface-visibility: hidden;
    will-change: transform;
    transition: transform 0.3s ease, background-color 0.3s ease;
    border: 1px solid #fff;
    &:hover {
      background-color: ${vars.black};
      transform: scale(1.2) !important;
    }
    @media (max-width: 950px) {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

class Circle extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (
      this.props.data.isMobileDevice === true ||
      !document.querySelector("body").classList.contains("mobile-device")
    ) {
      this.circleEl = document.querySelector("#navigation_circle_wrapper");
      this.addEvent();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", e => {
      this.magnetize(e);
    });
  }

  addEvent() {
    document.addEventListener("mousemove", e => {
      this.magnetize(e);
    });
  }

  magnetize(e) {
    let mX = e.pageX;
    let mY = e.pageY;

    const customDist = 100;
    const centerX = this.circleEl.offsetLeft + this.circleEl.clientWidth / 2;
    const centerY = this.circleEl.offsetTop + this.circleEl.clientHeight / 2;

    let deltaX = Math.floor(centerX - mX) * -0.3;
    let deltaY = Math.floor(centerY - mY) * -0.3;

    let distance = this.calculateDistance(this.circleEl, mX, mY);

    if (distance < customDist) {
      TweenMax.to(this.circleEl, 0.3, { y: deltaY, x: deltaX, scale: 1.1 });
      this.circleEl.classList.add("magnet");
    } else {
      TweenMax.to(this.circleEl, 0.45, { y: 0, x: 0, scale: 1 });
      this.circleEl.classList.remove("magnet");
    }
  }

  calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offsetLeft + elem.clientWidth / 2), 2) +
          Math.pow(mouseY - (elem.offsetTop + elem.clientHeight / 2), 2)
      )
    );
  }

  render() {
    return (
      <CircleEl id="navigation_circle_wrapper">
        <Link to="/" id="navigation_cirle" className="circle" />
      </CircleEl>
    );
  }
}

export default Circle;
