// React
import { useState, Fragment } from "react";
//

// Styled Components
import styled from "styled-components";
//

// Components
import MainButton from "../../Utility/MainButton";
import CardModal from "./CardModal/CardModal";
//

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";
//

// Framer Motion Variables
const MotionMainButtonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const MotionMainButton = motion(MainButton);
//

const Card = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onMouseOverHandler = () => {
    setShowButton(true);
  };

  const onMouseLeaveHandler = () => {
    setShowButton(false);
  };

  const modalHandler = () => {
    if (!showModal) {
      const x = window.scrollX;
      const y = window.scrollY;
      window.onscroll = () => {
        window.scrollTo(x, y);
      };
    } else {
      window.onscroll = () => {};
    }
    setShowModal((prev) => !prev);
  };

  return (
    <Fragment>
      <Wrapper scale={props.data.name.includes("Shirt") ? "false" : "true"}>
        <div
          className="img-wrapper"
          onMouseOver={onMouseOverHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <img src={props.data.assets[0].url} alt="" onClick={modalHandler} />
          <AnimatePresence>
            {showButton && (
              <MotionMainButton
                text={"SELECT OPTIONS"}
                theme={"dark"}
                type={"card-button"}
                variants={MotionMainButtonVariants}
                key={Math.random().toString(16)}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.125 }}
                onClick={modalHandler}
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

      <AnimatePresence>
        {showModal && (
          <CardModal setShowModal={modalHandler} data={props.data} />
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 100%;
  padding: 12px;
  padding-bottom: 0;
  height: 100%;

  //
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 300px max-content;
  grid-template-areas:
    "a"
    "b";

  @media only screen and (max-width: 960px) {
    grid-template-rows: 450px max-content;
  }
  @media only screen and (max-width: 800px) {
    grid-template-rows: 375px max-content;
  }
  @media only screen and (max-width: 650px) {
    grid-template-rows: 325px max-content;
  }
  @media only screen and (max-width: 575px) {
    grid-template-rows: 275px max-content;
  }
  @media only screen and (max-width: 500px) {
    grid-template-rows: 250px max-content;
  }
  @media only screen and (max-width: 450px) {
    grid-template-rows: 225px max-content;
  }
  @media only screen and (max-width: 400px) {
    grid-template-rows: 200px max-content;
  }
  //

  .img-wrapper {
    grid-area: a;
    cursor: pointer;
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;

      // Increase size of smaller images
      transform: ${(props) => props.scale === "true" && "scale(1.14)"};
      //
    }
  }

  .card-info {
    grid-area: b;
    min-height: 100px;
    width: 100%;
    padding: 12px 0;
    bottom: 0;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

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
