// React
import { Fragment, useState, useRef } from "react";
//

// Redux
import { useSelector } from "react-redux";
//

// Styled Components
import styled from "styled-components";
//

// Material UI
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";
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

// Material UI Variables
const useStyles = makeStyles(() => ({
  badge: {
    fontSize: "12px",
    "background-color": "#38D178",
  },
}));
//

const Nav = (props) => {
  const [showCart, setshowCart] = useState(false);
  const classes = useStyles();

  const cart = useSelector((state) => state.commerce.cart);

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

    setshowCart((prev) => !prev);
  };

  return (
    <Fragment>
      <Wrapper>
        <img src="./images/logo.png" alt="logo" className="logo" />
        <Badge
          badgeContent={cart.total_items}
          color="primary"
          className="badge"
          classes={{
            badge: classes.badge,
          }}
        >
          <ShoppingCartIcon className="cart-icon" onClick={cartHandler} />
        </Badge>
      </Wrapper>

      <AnimatePresence exitBeforeEnter>
        {showCart && <Cart cartHandler={cartHandler} />}
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

  .badge {
    position: fixed;
    z-index: 999;
    right: 15px;
    cursor: pointer;
    transform: scale(1);

    @media only screen and (max-width: 600px) {
      display: none;
    }

    .cart-icon {
      color: #fff;
      stroke: #000;
      font-size: 40px;
    }
  }
`;
