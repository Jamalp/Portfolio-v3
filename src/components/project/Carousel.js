import React, { Component } from "react";
import styled from "@emotion/styled";
import { vars } from "../../utils/emotionVars";
import "../../styles/lib/flickity.scss";

const CarouselElWrapper = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: calc(100% - 240px);
  margin: 100px 120px 0;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 950px) {
    width: 100%;
    margin: 40px 0 0;
    padding: 0 ${vars.mobile_margin_sides} 4px;
    display: block;
  }
`;
const CarouselControls = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 950px) {
    justify-content: flex-end;
  }

  .carousel-controls {
    width: 30px;
    height: 16px;
    cursor: pointer;
    display: block;
    &.prev {
      background: url("/images/prev.png") center center no-repeat;
      background-size: contain;
      margin-right: 30px;
    }

    &.next {
      background: url("/images/next.png") center center no-repeat;
      background-size: contain;
    }
  }
`;
const CarouselEl = styled("div")`
  width: 77.25%;
  position: relative;
  height: 600px;
  @media (max-width: 1549px) {
    height: 500px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 20px;
  }
  @media (max-width: 767px) {
    height: 190px;
  }

  .carousel {
    width: 100%;
    height: 100%;
    @media (max-width: 600px) {
      height: 200px;
    }

    .flickity-viewport {
      height: 100% !important;
    }

    /* Make flickity accessible with keyboard input */
    &.flickity-enabled:focus .flickity-viewport {
      outline: thin dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }

    /* Hide flickity controls */
    .flickity-page-dots {
      bottom: -30px;
      .dot {
        background-color: ${vars.white};
        transition: opacity 0.2s ease;
      }
      .is-selected {
        background-color: ${vars.white};
        opacity: 1;
      }
    }
  }

  .carousel-item {
    height: 100%;
    width: 100%;
    overflow: hidden;
    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }
  }
`;
const CarouselSidebar = styled("div")`
  width: 20.25%;
  @media (max-width: 1024px) {
    margin-left: 12.5%;
    margin-top: 60px;
    width: calc(100% - 12.5%);
  }
  @media (max-width: 950px) {
    width: 100%;
    margin-left: 0;
  }
  p {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 22px;
    @media (max-width: 1024px) {
      margin-bottom: 0;
    }
  }
`;
class Carousel extends Component {
  constructor() {
    super();
    this.Flickity = null;
    this.carousel = null;
    this.state = {
      options: {
        contain: false,
        prevNextButtons: false,
        pageDots: true,
        lazyLoad: true,
        percentPosition: false,
        imagesLoaded: true,
        on: {
          ready: () => {
            if (this.element.querySelector("video")) {
              this.element.querySelector("video").play();
            }
          }
        }
      }
    };
    this.refreshCarousel = this.refreshCarousel.bind(this);
  }
  componentDidMount() {
    if (this.props.data.gallery) {
      this.element = document.querySelector(".carousel");
      this.Flickity = require("flickity");
      this.initiateFlickity();
      this.parallax();
      this.events();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("orientationchange", this.refreshCarousel);
  }

  events() {
    window.addEventListener("orientationchange", this.refreshCarousel);
  }

  refreshCarousel() {
    this.carousel.resize();
  }

  parallax() {
    const imgs = this.element.querySelectorAll(".carousel-item-media");
    const docStyle = document.documentElement.style;
    const transformProp =
      typeof docStyle.transform === "string" ? "transform" : "WebkitTransform";

    this.carousel.on("scroll", () => {
      this.carousel.slides.forEach((slide, i) => {
        const img = imgs[i];
        const x = ((slide.target + this.carousel.x) * -1) / 3;
        img.style[transformProp] = "translateX(" + x + "px)";
      });
    });
  }

  initiateFlickity() {
    this.carousel = new this.Flickity(this.element, this.state.options);
    this.carousel.resize();
  }

  goForward() {
    this.carousel.next(true, false);
  }

  goBackward() {
    this.carousel.previous(true, false);
  }

  render() {
    let sidebarCopy = null;
    if (this.props.data.gallery) {
      const galleryItems = this.props.data.gallery.map((item, index) => {
        if (item.file.contentType === "video/mp4") {
          return (
            <div className="carousel-item" key={item.id}>
              <video
                className="carousel-item-media"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={item.file.url} type={item.file.contentType} />
              </video>
            </div>
          );
        } else if (item.file.contentType !== "video/mp4") {
          return (
            <div className="carousel-item" key={item.id}>
              <img
                className="carousel-item-media"
                src={item.file.url}
                alt={item.file.fileName}
              />
            </div>
          );
        }
      });
      if (this.props.data.galleryCopy) {
        sidebarCopy = this.props.data.galleryCopy.childMarkdownRemark.html;
      }
      return (
        <CarouselElWrapper>
          <CarouselEl>
            <div className="carousel">{galleryItems}</div>
          </CarouselEl>
          <CarouselSidebar>
            <CarouselControls>
              <div
                className="carousel-controls prev"
                onClick={this.goBackward.bind(this)}
              />
              <div
                className="carousel-controls next"
                onClick={this.goForward.bind(this)}
              />
            </CarouselControls>
            <div dangerouslySetInnerHTML={{ __html: sidebarCopy }} />
          </CarouselSidebar>
        </CarouselElWrapper>
      );
    } else {
      return false;
    }
  }
}
export default Carousel;
