// React
import { Fragment, useState, useRef } from "react";
import ReactDOM from "react-dom";
//

// Redux
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../store/commerce-slice";
import { overlayAcitons } from "../../../../../store/overlay-slice";
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

// Normal Variables
let info;
let finalSize;
let finalColor;
//

const CardModal = (props) => {
  // React
  const [color, setColor] = useState(
    props.data.variant_groups[1].options[0].name
  );
  const [size, setSize] = useState("");

  const selectSizeRef = useRef();
  const selectColorRef = useRef();
  //

  // Redux
  const dispatch = useDispatch();
  //

  // Normal
  const sizes = [];
  const colors = [];
  //

  const modalHandler = () => {
    props.setShowModal();
  };

  const setSelectedVariantHandler = (data) => {
    if (data === "Select color...") {
      setColor("");
    }

    if (data === "Select size...") {
      setSize("");
    }

    sizes.forEach((size) => {
      if (size === data) {
        setSize(size);
      }
    });

    colors.forEach((color) => {
      if (color === data) {
        setColor(data);
      }
    });
  };

  const addToCartHandler = () => {
    if (
      size === "Select size..." ||
      size === "" ||
      color === "Select color..." ||
      color === ""
    ) {
      if (size === "Select size..." || size === "") {
        if (selectSizeRef.current !== undefined) {
          selectSizeRef.current.focus();
          return;
        }
      }

      if (color === "Select color..." || color === "") {
        if (selectColorRef.current !== undefined) {
          selectColorRef.current.focus();
          return;
        }
      }
    }

    // Sizes
    if (selectSizeRef.current !== undefined) {
      props.data.variant_groups[0].options.forEach((curr) => {
        if (curr.name === size) {
          finalSize = curr.id;
        }
      });
    }

    // Colors
    if (selectColorRef.current !== undefined) {
      props.data.variant_groups[1].options.forEach((curr) => {
        if (curr.name === color) {
          finalColor = curr.id;
        }
      });
    }

    if (
      selectSizeRef.current !== undefined ||
      selectColorRef.current !== undefined
    ) {
      const variants = {};
      const finalSizeKey = props.data.variant_groups[0].id;
      const finalColorKey = props.data.variant_groups[1].id.toString();

      variants[finalSizeKey] = finalSize;
      variants[finalColorKey] = finalColor;

      dispatch(
        addToCart({
          productId: props.data.id,
          quantity: 1,
          variants,
        })
      );
    } else {
      dispatch(
        addToCart({
          productId: props.data.id,
          quantity: 1,
        })
      );
    }

    props.setShowModal();
    dispatch(overlayAcitons.toggleCart());
  };

  // Setting product info
  if (
    props.data.name.toLowerCase().includes("notorious") ||
    props.data.name.toLowerCase().includes("blotter")
  ) {
    info = "Please allow 2-3 weeks for production of this item.";
  }

  if (props.data.name.toLowerCase().includes("mugshot")) {
    info =
      "This item is made to order. Please allow 3-4 weeks for production of this item.";
  }

  // Sizes
  props.data.variant_groups[0]?.options.forEach((option) => {
    !sizes.includes(option.name) && sizes.push(option.name);
  });

  // Colors
  props.data.variant_groups[1]?.options.forEach((option) => {
    !colors.includes(option.name) && colors.push(option.name);
  });

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <Backdrop
            onClick={modalHandler}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.125 }}
          />
          <Wrapper
            variants={wrapperVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.125 }}
            centerButton={props.data.name.includes("Pack")}
          >
            <CloseIcon className="close-btn" onClick={modalHandler} />
            <div className="section-1">
              {props.data.id.length > 0 && (
                <CardModalSlider
                  data={props.data.assets}
                  scale={props.scale}
                  activeSlideColor={selectColorRef}
                />
              )}
            </div>

            <div className="section-2">
              <p className="section-2__heading">{props.data.name}</p>
              <p className="section-2__info">{info}</p>

              {!props.data.name.includes("Pack") && (
                <Fragment>
                  <CardModalSelect
                    options={sizes}
                    defaultOption={"Select size..."}
                    label={"Size"}
                    setSelected={setSelectedVariantHandler}
                    ref={selectSizeRef}
                  />

                  <CardModalSelect
                    options={colors}
                    defaultOption={props.data.variant_groups[1].options[0].name}
                    label={"Color"}
                    setSelected={setSelectedVariantHandler}
                    ref={selectColorRef}
                  />
                </Fragment>
              )}

              <div className="section-2__button-wrapper">
                <MainButton
                  text={`ADD TO CART`}
                  theme={"dark"}
                  type={"card-modal-button"}
                  onClick={addToCartHandler}
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
