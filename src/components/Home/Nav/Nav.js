// React
import { Fragment, useState, useRef } from "react";
//

// Styled Components
import styled from "styled-components";
//

// Material UI
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
//

// Components
import Cart from "../Cart/Cart";
import MobileCartButton from "../Cart/MobileCartButton/MobileCartButton";
//

// Framer Motion
import { AnimatePresence } from "framer-motion";
//

// CSS
import styles from "../Home.module.css";
//

const Nav = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const mobileCartButton = useRef();

  const cartHandler = () => {
    if (
      window.innerWidth > document.body.clientWidth ||
      document.body.classList.contains(styles["scrollbar-on"])
    ) {
      // User has scrollbar
      document.body.classList.toggle(styles["scrollbar-on"]);
      mobileCartButton.current.classList.toggle(styles["show-cart-button"]);
    } else {
      // User has no scrollbar
      document.body.classList.toggle(styles["scrollbar-off"]);
    }

    setCartOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <Wrapper>
        <img src="./images/logo.png" alt="logo" className="logo" />
        <ShoppingCartIcon className="cart-icon" onClick={cartHandler} />
      </Wrapper>

      <AnimatePresence exitBeforeEnter>
        {cartOpen && <Cart cartHandler={cartHandler} />}
      </AnimatePresence>

      <MobileCartButton onClick={cartHandler} ref={mobileCartButton} />
    </Fragment>
  );
};

export default Nav;

const Wrapper = styled.nav`
  //
  height: 80px;

  @media only screen and (max-width: 1080px) {
    height: 70px;
  }

  @media only screen and (max-width: 600px) {
    height: 60px;
  }
  //

  width: 100%;
  background-color: #fff;
  // box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    //
    width: 100px;

    @media only screen and (max-width: 1080px) {
      width: 85px;
    }

    @media only screen and (max-width: 600px) {
      width: 70px;
    }
    //
  }

  .cart-icon {
    font-size: 40px;
    position: fixed;
    z-index: 999;
    right: 15px;
    cursor: pointer;
    color: #fff;
    stroke: #000;

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`;
