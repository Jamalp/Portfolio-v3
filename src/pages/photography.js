import React, { Component } from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Div100vh from "react-div-100vh";
import "../styles/lib/flickity.scss";

const PhotoGallery = styled("section")`
  height: 100%;
  width: calc(100% - 120px);
  margin-left: auto;
  @media (max-width: 950px) {
    width: 100%;
  }
  .flickity-prev-next-button {
    top: 20px;
    -webkit-transform: none;
    transform: none;
    width: 30px;
    height: 30px;
    @media (max-width: 950px) {
      top: auto;
      bottom: 20px;
    }
  }

  .flickity-prev-next-button.previous {
    left: auto;
    right: 60px;
  }

  .flickity-prev-next-button.next {
    right: 20px;
  }
  .carousel {
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 2s ease;
    &.is-hidden {
      display: none;
    }
    &.flickity-enabled {
      opacity: 1;
    }
    .carousel-item {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      picture,
      img {
        max-height: 100%;
        margin: 0 auto;
        max-width: 100%;
        width: auto;
      }
    }
    .carousel-item-media {
      transition: opacity 0.4s ease;
      opacity: 0;
      &.flickity-lazyloaded {
        opacity: 1;
      }
      &.flickity-lazyerror {
        display: none;
      }
    }
  }
`;

class PhotographyPage extends Component {
  constructor() {
    super();
    this.Flickity = null;
    this.carousel = null;
    this.state = {
      options: {
        contain: false,
        prevNextButtons: true,
        pageDots: false,
        lazyLoad: 2,
        percentPosition: false,
        imagesLoaded: true,
        wrapAround: true
      }
    };
    this.refreshCarousel = this.refreshCarousel.bind(this);
    this.stopRightClick = this.stopRightClick.bind(this);
  }

  componentDidMount() {
    this.element = document.querySelector(".carousel");
    this.Flickity = require("flickity");
    this.element.classList.remove("is-hidden");
    window.setTimeout(() => {
      this.initiateFlickity();
      this.element.focus();
      this.events();
    }, 900);
  }

  componentWillUnmount() {
    window.removeEventListener("orientationchange", this.refreshCarousel);
    document.removeEventListener("contextmenu", this.stopRightClick);
  }

  events() {
    window.addEventListener("orientationchange", this.refreshCarousel);
    document.addEventListener("contextmenu", this.stopRightClick);
  }

  stopRightClick(event) {
    event.preventDefault();
  }

  refreshCarousel() {
    this.carousel.resize();
  }

  initiateFlickity() {
    this.carousel = new this.Flickity(this.element, this.state.options);
  }

  render() {
    const photos = this.props.data.allContentfulPhotography.edges[0].node
      .photos;
    const photoGallery = photos.map(item => {
      return (
        <div className="carousel-item" key={item.id}>
          <img
            className="carousel-item-media"
            data-flickity-lazyload={item.file.url}
            alt={item.file.fileName}
          />
        </div>
      );
    });
    return (
      <Div100vh>
        <PhotoGallery>
          <div className="carousel is-hidden">{photoGallery}</div>
        </PhotoGallery>
      </Div100vh>
    );
  }
}

export default PhotographyPage;

export const pageQuery = graphql`
  query {
    allContentfulPhotography {
      edges {
        node {
          photos {
            file {
              url
              fileName
            }
            id
          }
        }
      }
    }
  }
`;
