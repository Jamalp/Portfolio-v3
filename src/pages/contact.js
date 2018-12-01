import React from "react";
import styled from "@emotion/styled";
import PageTitle from "../components/pageTitle";
import { vars } from "../utils/emotionVars";

const ContactBlurb = styled("article")`
  padding-left: 9.52%;
  width: calc(100% - 240px);
  margin: 92px auto 110px;
  @media (max-width: 950px) {
    padding-left: 30px;
    padding-right: 30px;
    height: 100%;
    width: 100%;
    margin-top: 24px;
  }
  p {
    width: 70%;
    max-width: 790px;
    font-size: 24px;
    font-weight: normal;
    color: ${vars.white};
    @media (max-width: 950px) {
      width: 100%;
      font-size: 18px;
    }
    .link--primary {
      font-size: inherit;
      display: inline-block;
      vertical-align: text-bottom;
    }
  }
`;

const ConnectBlurb = styled("aside")`
  margin-top: 52px;
  p {
    margin-bottom: 12px;
  }
`;

const SocialLinks = styled("div")`
  @media (max-width: 950px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 321px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .link--primary {
    font-size: 24px;
    @media (max-width: 950px) {
      font-size: 18px;
    }
    &:not(:last-child) {
      margin-right: 30px;
      @media (max-width: 950px) {
        margin-right: 0;
      }
      @media (max-width: 321px) {
        margin-bottom: 6px;
      }
    }
  }
`;

const ContactPage = () => (
  <>
    <PageTitle title="Contact" />
    <ContactBlurb>
      <p>
        For general inquiries or if you'd like to work together, please email me
        at{" "}
        <a
          className="link--primary"
          href="mailto:jamalkpowell@gmail.com?Subject=Hey%20Jamal"
        >
          jamalkpowell@gmail.com
        </a>
      </p>
      <ConnectBlurb>
        <p>Connect with me on my photography blog & Instagram:</p>
        <SocialLinks>
          <a
            className="link--primary"
            href="http://photography.jamalpowell.com/"
            target="_blank"
          >
            Photography
          </a>
          <a
            className="link--primary"
            href="http://turkey.jamalpowell.com/"
            target="_blank"
          >
            Travel
          </a>
          <a
            className="link--primary"
            href="https://www.instagram.com/jamalpowell/"
            target="_blank"
          >
            Instagram
          </a>
        </SocialLinks>
      </ConnectBlurb>
    </ContactBlurb>
  </>
);

export default ContactPage;
