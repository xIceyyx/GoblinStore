// React
import { Fragment } from "react";
import ReactDOM from "react-dom";
//

// Redux
import { useSelector } from "react-redux";
//

// Styled Components
import styled from "styled-components";
//

// Material UI
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
//

// Framer Motion
import { motion } from "framer-motion";
//

// Components
import MainButton from "../Utility/MainButton";
import CartItem from "./CartItem/CartItem";
//

// Framer Motion Variables
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const wrapperVariants = {
  hidden: { x: "100%" },
  visible: { x: "0%" },
};
//

const Cart = (props) => {
  // Redux
  const cart = useSelector((state) => state.commerce.cart);
  //

  const closeCartHandler = (data) => {
    props.cartHandler();
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <Backdrop
            onClick={closeCartHandler}
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
          >
            <div className="section-1">
              <p className="section-1__heading">Shopping Cart</p>
              <RemoveShoppingCartIcon
                className="section-1__cart-icon"
                onClick={closeCartHandler}
              />
            </div>
            <div className="section-2">
              {cart.line_items
                .slice()
                .reverse()
                ?.map((item) => (
                  <CartItem data={item} key={Math.random().toString(16)} />
                ))}
            </div>
            <div className="section-3">
              <MainButton
                text={"ADD SOMETHING ELSE"}
                theme={"light"}
                type={"normal"}
                onClick={closeCartHandler}
              />
              <MainButton
                text={"CHECKOUT"}
                theme={"dark"}
                type={"normal"}
                disabled={cart.line_items.length === 0}
              />
            </div>
          </Wrapper>
        </Fragment>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default Cart;

const Wrapper = styled(motion.div)`
  //
  width: 375px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  //

  border-left: 2px solid #e5e5e5;
  height: 100vh;
  position: fixed;
  right: 0;
  z-index: 1000;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .section-1 {
    //
    height: 80px;

    @media only screen and (max-width: 1080px) {
      height: 70px;
    }

    @media only screen and (max-width: 600px) {
      height: 60px;
    }
    //

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    padding: 0 20px;

    &__heading {
      //
      font-size: 22px;
      @media only screen and (max-width: 1280px) {
        font-size: 20px;
      }
      //

      font-weight: 600;
    }

    &__cart-icon {
      font-size: 40px;
      right: 50px;
      cursor: pointer;
      color: #fff;
      stroke: #000;

      @media only screen and (max-width: 600px) {
        font-size: 37.5px;
      }
    }
  }

  .section-2 {
    display: flex;
    flex-direction: column;

    height: 100%;
    overflow-y: auto;
  }

  .section-3 {
    background-color: #f5f5f5;
    border-top: 1px solid #e5e5e5;
    padding: 20px;
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;
