import React, { Component } from "react";
import styled from "@emotion/styled";
import { vars } from "../../utils/emotionVars";

const QuoteEl = styled("div")`
  margin-left: calc(120px + 9.5%);
  margin-top: 92px;
  @media (max-width: 950px) {
    margin-left: 0;
    padding: 0 30px;
    margin-top: ${vars.mobile_margin_down};
  }
  blockquote {
    font-size: 48px;
    margin: 0;
    width: 62.807432%;
    margin-bottom: 15px;
    @media (max-width: 1024px) {
      font-size: 36px;
    }
    @media (max-width: 950px) {
      width: 100%;
    }
  }
  blockquote,
  span {
    font-style: italic;
    color: #fff;
  }
`;

class Quote extends Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.data) {
      return (
        <QuoteEl>
          <blockquote>{this.props.data.quote}</blockquote>
          <span>- {this.props.data.quoteAuthor}</span>
        </QuoteEl>
      );
    } else {
      return false;
    }
  }
}

export default Quote;
