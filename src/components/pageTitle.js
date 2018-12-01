import styled from "@emotion/styled";
import React, { Component } from "react";
import { vars } from "../utils/emotionVars";

const Title = styled("div")`
  padding-top: 102px;
  width: calc(100% - 240px);
  margin-right: auto;
  padding-left: 9.52%;
  margin-left: auto;
  @media (max-width: 950px) {
    width: 100%;
    padding-left: 0;
    padding-top: 98px;
  }

  h1 {
    font-weight: 700;
    font-size: 72px;
    @media (max-width: 950px) {
      position: relative;
      padding-left: 30px;
      font-size: ${vars.f_title_mobile};
    }
  }
  .title-multi-line {
    display: inline-block;
    span {
      text-align: right;
      display: block;
      font-weight: 700;
      font-size: 72px;
      @media (max-width: 950px) {
        text-align: left;
        font-size: ${vars.f_title_mobile};
      }
    }
  }
`;

class PageTitle extends Component {
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
    if (title.trim().indexOf(" ") != -1) {
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

export default PageTitle;
