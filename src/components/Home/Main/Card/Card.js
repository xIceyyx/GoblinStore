// React
import { useState } from "react";
//

// Styled Components
import styled from "styled-components";
//

// Components
import MainButton from "../../Utility/MainButton";
//

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";
//

// Framer Motion Variables
const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const MotionMainButton = motion(MainButton);
//

const Card = (props) => {
  const [showButton, setShowButton] = useState(false);

  const onMouseOverHandler = () => {
    setShowButton(true);
  };

  const onMouseLeaveHandler = () => {
    setShowButton(false);
  };

  return (
    <Wrapper scale={props.data.name.includes("Shirt") ? false : true}>
      <div
        className="img-wrapper"
        onMouseOver={onMouseOverHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <img
          src={props.data.assets[0].url}
          alt=""
          className="img-wrapper__img"
        />
        <AnimatePresence>
          {showButton && (
            <MotionMainButton
              text={"CHECKOUT"}
              theme={"dark"}
              type={"card-button"}
              variants={buttonVariants}
              key={Math.random().toString(16)}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.125 }}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="card-info">
        <p className="card-info__heading">{props.data.name}</p>
        <p className="card-info__price">
          {props.data.price.formatted_with_symbol}
        </p>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  //
  width: 90%;
  @media only screen and (max-width: 960px) {
    width: 80.25%;
  }
  //

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  .img-wrapper {
    cursor: pointer;

    &__img {
      width: 100%;
      height: 100%;
      object-fit: contain;

      // Increase size of smaller images
      transform: ${(props) => props.scale && "scale(1.15)"};
      //
    }
  }

  .card-info {
    height: 75px;

    position: absolute;
    width: 100%;
    top: 100%;
    padding-top: 10px;

    &__heading {
      //
      font-size: 20px;
      @media only screen and (min-width: 600px) {
        font-size: 23px;
      }
      @media only screen and (min-width: 960px) {
        font-size: 24px;
      }
      @media only screen and (min-width: 1280px) {
        font-size: 27px;
      }
      //

      font-weight: 300;
      line-height: 38px;
      text-align: center;
      letter-spacing: -1.02857px;
    }

    &__price {
      //
      font-size: 20px;
      @media only screen and (min-width: 600px) {
        font-size: 21px;
      }
      @media only screen and (min-width: 960px) {
        font-size: 22px;
      }

      @media only screen and (min-width: 1280px) {
        font-size: 24px;
      }
      //

      font-style: normal;
      font-weight: 600;
      line-height: 38px;
      letter-spacing: -1.02857px;
    }
  }
`;
