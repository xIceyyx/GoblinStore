// React
import { Fragment } from "react";
//

// Styled Components
import styled from "styled-components";
//

// Material UI
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
//

// React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//

const CardModalSlider = (props) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    infinite: false,
    customPaging: () => <FiberManualRecordIcon />,
  };

  return (
    <Fragment>
      <Wrapper {...settings} scale={props.scale}>
        {props.data.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt="product" key={image.id} />
          </div>
        ))}
      </Wrapper>
    </Fragment>
  );
};

export default CardModalSlider;

const Wrapper = styled(Slider)`
  height: 100%;
  width: 100%;

  @media only screen and (max-height: 600px) and (min-width: 960px) {
    min-height: 500px;
  }

  //
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 450px) {
    align-items: flex-end;
  }
  //

  .slick-dots {
    color: #546e7a;
    position: absolute;

    //
    bottom: 40px;
    @media only screen and (max-width: 960px) {
      bottom: -7px;
    }
    //

    .slick-active {
      color: #263238;
    }
  }

  div {
    height: 100%;
    width: 100%;

    img {
      margin: 0 auto;
      height: 100%;
      object-fit: contain;
      width: 82.5%;

      @media only screen and (max-width: 960px) {
        transform: ${(props) =>
          props.scale === "true" ? "scale(1.04)" : "scale(0.9)"};
        width: 100%;
      }

      transform: ${(props) => props.scale === "true" && "scale(1.14)"};
    }
  }
`;
