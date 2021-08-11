// React
import { Fragment } from "react";
import ReactDOM from "react-dom";
//

// Styled Components
import styled from "styled-components";
//

// Components
import MainButton from "../../../Utility/MainButton";
import CardModalSelect from "./CardModalSelect/CardModalSelect";
import CardModalSlider from "./CardModalSlider/CardModalSlider";
//

// Material UI
import CloseIcon from "@material-ui/icons/Close";
//

// Framer Motion
import { motion } from "framer-motion";
//

// Framer Motion Variables
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const wrapperVariants = {
  hidden: { opacity: 0, scale: 0.9, x: "-50%", y: "-50%" },
  visible: { opacity: 1, scale: 1, x: "-50%", y: "-50%" },
};
//

const CardModal = (props) => {
  const modalHandler = () => {
    props.setShowModal();
  };

  let info;
  if (props.data.name.toLowerCase().includes("shirt")) {
    info = "Please allow 2-3 weeks for production of this item.";
  }

  if (props.data.name.toLowerCase().includes("sticker")) {
    info = `Set of 3 stickers, all approximately 3" x 3" in size. Please allow 2-3 weeks for production of this item.`;
  }

  if (props.data.name.toLowerCase().includes("hoodie")) {
    info = "Please allow 2-3 weeks for production of this item.";
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <Backdrop
            onClick={props.setShowModal}
            variants={backdropVariants}
            key={Math.random().toString(16)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.125 }}
          />
          <Wrapper
            variants={wrapperVariants}
            key={Math.random().toString(16)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.125 }}
            centerButton={props.data.name.includes("Pack")}
          >
            <CloseIcon className="close-btn" onClick={modalHandler} />
            <div className="section-1">
              {props.data.id.length > 0 && (
                <CardModalSlider data={props.data.assets} scale={props.scale} />
              )}
            </div>

            <div className="section-2">
              <p className="section-2__heading">{props.data.name}</p>
              <p className="section-2__info">{info}</p>

              {!props.data.name.includes("Pack") && (
                <Fragment>
                  <CardModalSelect
                    options={[
                      "S",
                      "M",
                      "L",
                      "XL",
                      "XXL",
                      "XXXL",
                      "Youth S",
                      "Youth M",
                      "Youth L",
                      "Youth XL",
                    ]}
                    defaultOption={"Select size..."}
                    label={"Size"}
                  />

                  <CardModalSelect
                    options={[
                      "White",
                      "Black",
                      "Light Blue",
                      "Charity Pink",
                      "Grey",
                    ]}
                    defaultOption={"Select color..."}
                    label={"Color"}
                  />
                </Fragment>
              )}

              <div className="section-2__button-wrapper">
                <MainButton
                  text={`ADD TO CART`}
                  theme={"dark"}
                  type={"card-modal-button"}
                />
              </div>
            </div>
          </Wrapper>
        </Fragment>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default CardModal;

const Wrapper = styled(motion.div)`
  width: 100%;
  max-width: 940px;

  //
  height: 500px;
  @media only screen and (max-height: 600px) and (min-width: 960px) {
    height: calc(100vh - 105px);
  }
  @media only screen and (max-width: 500px) {
    height: 100%;
  }
  //

  z-index: 1200;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: #fff;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  font-family: Roboto, sans-serif;
  border-radius: 4px;
  max-height: 100%;
  overflow-y: auto;

  //
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  @media only screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 960px) {
    grid-template-rows: 1fr max-content;
  }
  //

  .section-1 {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  .section-2 {
    width: 100%;
    background-color: #fff;
    position: relative;
    padding: 35px 20px;
    text-align: center;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    &__heading {
      //
      font-size: 24px;

      @media only screen and (min-width: 960px) {
        font-size: 26px;
      }

      @media only screen and (min-width: 1280px) {
        font-size: 28px;
      }
      //

      margin-bottom: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: -0.06px;
    }

    &__info {
      //
      font-size: 17px;
      @media only screen and (min-width: 960px) {
        font-size: 19px;
      }
      //

      font-style: normal;
      font-weight: 400;
      color: #546e7a;
      margin-bottom: 30px;
    }

    &__button-wrapper {
      width: 100%;
      display: flex;
      justify-content: ${(props) =>
        props.centerButton ? "center" : "flex-end"};
    }
  }

  .close-btn {
    position: absolute;
    right: 12.5px;
    top: 10px;
    z-index: 10;
    transform: scale(2);
    cursor: pointer;
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1100;
  background-color: rgba(0, 0, 0, 0.5);
`;
