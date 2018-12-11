import React from "react";
import styled from "@emotion/styled";

const InitialsEl = styled("h4")`
  position: fixed;
  bottom: 35px;
  right: 40px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  z-index: 100;
  cursor: pointer;
  @media (max-width: 950px) {
    display: none;
  }

  .i-name-rest,
  .i-contact {
    white-space: nowrap;
    display: inline-block;
    vertical-align: bottom;
    width: 0;
    overflow: hidden;
    transition: width 1.4s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1.4s cubic-bezier(0.19, 1, 0.22, 1);
  }
  .i-contact {
    position: absolute;
    top: -25px;
    left: 0;
    opacity: 0;
    a {
      font-size: 18px;
    }
  }
  body:not(.mobile-device) & {
    &:hover {
      .i-contact {
        width: 58px;
        opacity: 1;
      }
      .i-first-name {
        .i-name-rest {
          width: 49px;
          padding-right: 4px;
        }
      }
      .i-last-name {
        .i-name-rest {
          width: 52px;
        }
      }
    }
  }
`;

const Initials = ({ siteTitle }) => (
  <InitialsEl>
    <span className="i-contact">
      <a href="mailto:jamalkpowell@gmail.com?Subject=Hey%20Jamal">Contact</a>
    </span>
    <a href="mailto:jamalkpowell@gmail.com?Subject=Hey%20Jamal">
      <span className="i-first-name">
        <span className="i-first">J</span>
        <span className="i-name-rest">amal </span>
      </span>
      <span className="i-last-name">
        <span className="i-last">P</span>
        <span className="i-name-rest">owell</span>
      </span>
      <span>.</span>
    </a>
  </InitialsEl>
);

export default Initials;
