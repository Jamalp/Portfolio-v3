import React from "react";
import styled from "@emotion/styled";
import PageTitle from "../components/PageTitle";
import { vars } from "../utils/emotionVars";

const AboutContent = styled("article")`
  width: calc(100% - 240px);
  padding-left: 9.52%;
  margin: 22px auto 0;
  @media (max-width: 950px) {
    width: 100%;
    padding: 0 ${vars.mobile_margin_sides};
    margin: 22px auto 0;
  }
  p {
    width: 87.119%;
    max-width: 926px;
    @media (max-width: 950px) {
      width: 100%;
    }
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
const AboutClients = styled("aside")`
  width: calc(100% - 240px);
  padding-left: 9.52%;
  margin: 6px auto 0;
  padding-bottom: 110px;
  @media (max-width: 950px) {
    width: 100%;
    padding: 0 ${vars.mobile_margin_sides} 40px;
    margin: 0 auto;
  }
  p,
  ul {
    width: 87.119%;
    max-width: 926px;
    @media (max-width: 950px) {
      width: 100%;
      margin: 0 auto;
    }
  }
  p {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 10px;
  }
  li {
    font-size: 24px;
    line-height: 32px;
  }
`;
const AboutLine = styled("div")`
  width: calc(100% - 240px);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 66px;
  margin: 0 auto;

  span {
    width: 45px;
    height: 1px;
    background-color: ${vars.white};
  }
`;

const AboutPage = () => (
  <>
    <PageTitle title="About" />
    <AboutContent>
      <p>
        Jamal Powell is an independent web developer, photographer & creative
        hailing from Honolulu and currently based in Portland, Oregon. Motivated
        by a genuine curiosity in the world, Jamal thrives in collaborative
        environments that fuse cutting-edge technology with creative thinking
        and design.
      </p>
      <p>
        Jamal is passionate about partnering with agencies to deliver beautiful
        & thoughtful experiences with a close attention to detail. He
        specializes in creating elegant digital experiences that are engaging,
        responsive and interactive.
      </p>
      <p>
        As an experienced team leader he has worked with multi-disciplinary
        teams in New York, LA and Portland to deliver world class digital
        content on multiple platforms.
      </p>
    </AboutContent>
    <AboutLine>
      <span />
    </AboutLine>
    <AboutClients>
      <p>Clients & brands I've had the opportunity to worked with:</p>
      <ul>
        <li>Apple, </li>
        <li>The New York Times, </li>
        <li>Becca Cosmetics, </li>
        <li>Milk, </li>
        <li>Luma, </li>
        <li>Natural Retreats, </li>
        <li>Smirnoff, </li>
        <li>House of Marley, </li>
        <li>Fader, </li>
        <li>Tracksmith, </li>
        <li>Master & Dynamic, </li>
        <li>Hodinkee, </li>
        <li>Nintendo, </li>
        <li>Greats, </li>
        <li>Marriot, </li>
        <li>BBH, </li>
        <li>Life, </li>
        <li>General Assembly, </li>
        <li>Red, </li>
        <li>White House, </li>
        <li>Luxury Brand Partners, </li>
        <li>Umbro, </li>
        <li>R+Co, </li>
        <li>Inkjoy, </li>
        <li>Playstation, </li>
        <li>& Bode</li>
      </ul>
    </AboutClients>
  </>
);

export default AboutPage;
