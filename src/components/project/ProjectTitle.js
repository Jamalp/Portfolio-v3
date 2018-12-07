import styled from "@emotion/styled";
import React, { Component } from "react";
import { vars } from "../../utils/emotionVars";

const Title = styled("div")`
  padding-top: 102px;
  margin-left: ${vars.c_left_1};
  margin-right: auto;
  z-index: 10;
  position: relative;
  @media (max-width: 950px) {
    padding-top: 40px;
    margin-left: 0;
    margin-bottom: 40px;
  }
  h1 {
    font-weight: 700;
    font-size: 72px;
    text-align: left;
    position: absolute;
    @media (max-width: 950px) {
      padding-left: ${vars.mobile_margin_sides};
      font-size: ${vars.f_title_mobile};
    }
  }
  .title-multi-line {
    display: inline-block;
    span {
      text-align: left;
      display: block;
      font-weight: 700;
      font-size: 72px;
      &:last-child {
        transform: translate3d(60px, 0, 0);
        @media (max-width: 950px) {
          transform: translate3d(20px, 0, 0);
        }
      }
      @media (max-width: 950px) {
        font-size: ${vars.f_title_mobile};
      }
    }
  }
`;

class ProjectTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  componentDidMount() {
    this.handleTitle();
  }

  handleTitle() {
    const { title } = this.props;
    if (title.trim().indexOf(" ") !== -1) {
      const str1 = title.substr(0, title.indexOf(" "));
      const str2 = title.substr(title.indexOf(" ") + 1);
      this.createNewLine(str1, str2);
    } else {
      this.setState({ title: <h1>{title}</h1> });
    }
  }

  createNewLine(str1, str2) {
    const newTitle = (
      <h1 className="title-multi-line">
        <span>{str1}</span>
        <span>{str2}</span>
      </h1>
    );
    this.setState({
      title: newTitle
    });
  }
  render() {
    return <Title>{this.state.title}</Title>;
  }
}

export default ProjectTitle;
