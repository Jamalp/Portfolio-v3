import React, { Component } from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { vars } from "../../utils/emotionVars";
const ImageRow = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: calc(120px + 9.5%);
  width: calc(100% - 9.5% - 240px);
  @media (max-width: 950px) {
    margin-left: 0;
    flex-direction: column;
    width: 100%;
    padding: 0 ${vars.mobile_margin_sides};
  }
  .wide {
    width: 61.2994%;
  }
  .tall {
    width: 35.781544256%;
  }

  .wide,
  .tall {
    &:only-child {
      width: 100%;
    }
    @media (max-width: 950px) {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

class ImageSideBySide extends Component {
  render() {
    if (this.props.data) {
      let imageRight = null;
      if (this.props.data.rightImage) {
        imageRight = (
          <div
            className={`image-side-by-side-right ${
              this.props.data.imageRowTallLeft ? "wide" : "tall"
            }`}
          >
            <Img
              fluid={this.props.data.rightImage.fluid}
              key={this.props.data.rightImage.id}
            />
          </div>
        );
      }
      return (
        <ImageRow>
          <div
            className={`image-side-by-side-left ${
              this.props.data.imageRowTallLeft ? "tall" : "wide"
            }`}
          >
            <Img
              fluid={this.props.data.leftImage.fluid}
              key={this.props.data.leftImage.id}
            />
          </div>
          {imageRight}
        </ImageRow>
      );
    } else {
      return false;
    }
  }
}

export default ImageSideBySide;
