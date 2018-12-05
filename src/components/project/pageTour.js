import React, { Component } from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
const PageTourElement = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 100px;
  margin-left: 120px;
  margin-right: 120px;
  @media (max-width: 950px) {
    margin: 0;
    display: block;
    padding: 0 30px;
  }
  .image {
    width: 77.25%;
    @media (max-width: 950px) {
      width: 100%;
    }
  }
  .sidebar {
    width: 20.25%;
    margin-top: 40px;
    @media (max-width: 950px) {
      width: 100%;
      margin-top: 20px;
    }
    .sidebar-content {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 40px;
      @media (max-width: 950px) {
        margin-bottom: 10px;
        justify-content: flex-start;
      }
      .line {
        height: 1px;
        width: 20px;
        background-color: #fff;
        margin-top: 9px;
        @media (max-width: 950px) {
          margin-top: 12px;
          margin-right: 10px;
          width: 10px;
        }
      }
      p {
        font-size: 18px;
        width: 78%;
      }
    }
  }
`;

class PageTour extends Component {
  render() {
    if (this.props.data.pageTour) {
      let sidebarContent = null;
      if (this.props.data.pageTourDescriptions) {
        sidebarContent = this.props.data.pageTourDescriptions.map((el, i) => {
          return (
            <div className="sidebar-content" key={`sidebar_content_${i}`}>
              <div className="line" />
              <p>{el}</p>
            </div>
          );
        });
      } else {
        return false;
      }
      return (
        <PageTourElement>
          <div className="image">
            <Img
              fluid={this.props.data.pageTour.fluid}
              key={this.props.data.pageTour.id}
            />
          </div>
          <div className="sidebar">{sidebarContent}</div>
        </PageTourElement>
      );
    } else {
      return false;
    }
  }
}

export default PageTour;
