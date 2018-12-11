import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Div100vh from "react-div-100vh";

const ErrorPage = styled("section")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 120px);
  margin-left: auto;
  height: 100%;
  overflow: hidden;
  @media (max-width: 950px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const ErrorContent = styled("article")`
  text-align: center;
  z-index: 10;
  position: relative;
  @media (max-width: 950px) {
    text-align: left;
  }
  h2 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
    @media (max-width: 950px) {
      font-size: 32px;
    }
  }
  ul {
    li {
      margin: 0 15px;
      opacity: 0.8;
      transition: opacity 0.4s ease;
      &:hover {
        opacity: 1;
      }
      @media (max-width: 950px) {
        display: block;
        opacity: 1;
      }
      a {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 2px;
        @media (max-width: 950px) {
          line-height: 40px;
        }
      }
    }
  }
`;

const ErrorNumber = styled("div")`
  position: absolute;
  overflow: hidden;
  height: 532px;
  display: flex;
  align-items: flex-end;
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  transition: opacity 2s ease-in-out;
  &.error-number-show {
    opacity: 0.2;
  }
  &.error-number-1 {
    left: 0;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }
  &.error-number-2 {
    bottom: -70px;
    left: 0;
    right: 0;
    height: 373px;
    transition-delay: 0.5s;
    span {
      display: block;
      margin-left: 45.583%;
      transform: translateY(245px);
    }
  }
  &.error-number-3 {
    right: 0;
    top: 0;
    transition-delay: 0.9s;
    transform: translateX(32px);
  }
  @media (max-width: 1024px) {
    display: none;
  }
  span {
    font-size: 900px;
    color: #fff;
    font-weight: 700;
    transform: translateY(86px);
  }
`;

class NotFoundPage extends Component {
  componentDidMount() {
    document.querySelectorAll(".error-number").forEach(el => {
      el.classList.add("error-number-show");
    });
  }

  render() {
    return (
      <>
        <Div100vh>
          <ErrorPage>
            <ErrorContent>
              <h2>This page doesn't exist. Try one of these:</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/photography">Photography</Link>
                </li>
              </ul>
            </ErrorContent>
            <ErrorNumber className="error-number error-number-1">
              <span>4</span>
            </ErrorNumber>
            <ErrorNumber className="error-number error-number-2">
              <span>0</span>
            </ErrorNumber>
            <ErrorNumber className="error-number error-number-3">
              <span>4</span>
            </ErrorNumber>
          </ErrorPage>
        </Div100vh>
      </>
    );
  }
}

export default NotFoundPage;
