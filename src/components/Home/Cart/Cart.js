// React
import { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
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
import CartButton from "./CartButton/CartButton";
//

// Framer Motion Variants
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
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Fragment>
          <Backdrop
            onClick={props.cartHandler}
            variants={backdropVariants}
            key={Math.random().toString(16)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.1 }}
          />
          <Wrapper
            variants={wrapperVariants}
            key={Math.random().toString(16)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.1 }}
          >
            <div className="section-1">
              <p>Shopping Cart</p>
              <RemoveShoppingCartIcon
                className="cart-icon"
                onClick={props.cartHandler}
              />
            </div>
            <div className="section-2">
              <h1>CART ITEMS</h1>
            </div>
            <div className="section-3">
              <CartButton
                text={"ADD SOMETHING ELSE"}
                theme={"light"}
                type={"normal"}
              />
              <CartButton text={"CHECKOUT"} theme={"dark"} type={"normal"} />
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
  width: 350px;
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

  overflow-y: auto;

  max-height: 100%;

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
    p {
      font-size: 22px;
    }

    .cart-icon {
      font-size: 40px;
      right: 50px;
      cursor: pointer;

      color: #fff;
      stroke: #000;
    }
  }

  .section-2 {
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
