// Styled Components
import styled from "styled-components";
//

// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//

const Carousel = () => {
  // Normal
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    swipe: false,
    arrows: false,
    autoplaySpeed: 7000,
  };
  //

  return (
    <Wrapper {...settings}>
      <div className="slide-1">
        <img
          src={
            "https://cdn.merchforall.com/60a6ccb3515b6f000a9c6e7b/b8bbc332-b917-4a89-b288-1e7f67a3bd0b"
          }
          alt="slide-1-img"
          className="slide-1__img"
        />
      </div>
      <div className="slide-2">
        <img
          src={
            "https://cdn.merchforall.com/60a6ccb3515b6f000a9c6e7b/e31635c3-51c2-42fb-a930-5968dcf16ed5"
          }
          alt="slide-2-img"
          className="slide-2__img"
        />
      </div>
    </Wrapper>
  );
};

export default Carousel;

const Wrapper = styled(Slider)`
  width: 100%;

  .slide-1 {
    width: 100%;

    &__img {
      width: 100%;
    }
  }

  .slide-2 {
    width: 100%;

    &__img {
      width: 100%;
    }
  }
`;
