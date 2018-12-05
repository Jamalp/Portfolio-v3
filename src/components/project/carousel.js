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
    padding: 0 30px 4px;
    display: block;
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
    height: 180px;
  }
  .carousel-controls {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    z-index: 1;
    @media (max-width: 950px) {
      display: none;
    }
    &.prev {
      left: 0;
      &:hover {
        cursor: url("/static/images/prev.png"), auto;
      }
    }

    &.next {
      right: 0;
      &:hover {
        cursor: url("/static/images/next.png"), auto;
      }
    }
  }
  .carousel {
    width: 100%;
    height: 100%;
    @media (max-width: 600px) {
      height: 180px;
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
    margin-top: 28px;
    width: calc(100% - 12.5%);
  }
  @media (max-width: 950px) {
    width: 100%;
    margin-left: 0;
    margin-top: 28px;
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
        imagesLoaded: true
      }
    };
  }
  componentDidMount() {
    if (this.props.data.gallery) {
      this.element = document.querySelector(".carousel");
      this.Flickity = require("flickity");
      this.initiateFlickity();
      this.parallax();
    }
  }

  events() {
    // not being fired
    window.addEventListener(
      "orientationchange",
      this.refreshCarousel.bind(this)
    );
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
            {/* <div
              className="carousel-controls prev"
              onClick={this.goBackward.bind(this)}
            />
            <div
              className="carousel-controls next"
              onClick={this.goForward.bind(this)}
            /> */}
            <div className="carousel">{galleryItems}</div>
          </CarouselEl>
          <CarouselSidebar>
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
