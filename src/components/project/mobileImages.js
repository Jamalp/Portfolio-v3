import React, { Component } from "react";
import styled from "@emotion/styled";
import { vars } from "../../utils/emotionVars";

const MobileImagesWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(71.667% - 240px);
  margin-left: calc(120px + 9.5%);
  margin-right: auto;
  margin-top: 100px;
  @media (max-width: 1024px) {
    width: calc(100% - 240px - 9.5%);
  }
  @media (max-width: 950px) {
    width: 100%;
    margin-left: 0;
    margin-top: ${vars.mobile_margin_down};
    padding: 0 30px;
  }

  & > div {
    width: 25.86%;
    @media (max-width: 950px) {
      width: 31.3%;
    }
  }
`;

class MobileImages extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.data) {
      const mobileImageRow = this.props.data.map((item, index) => {
        return (
          <div key={`mobile-image-${index}`}>
            <img src={item.url} alt={item.alt} />
          </div>
        );
      });
      return <MobileImagesWrapper>{mobileImageRow}</MobileImagesWrapper>;
    } else {
      return false;
    }
  }
}

export default MobileImages;
