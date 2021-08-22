// React
import { Fragment, useRef } from "react";
//

// Redux
import { useSelector, useDispatch } from "react-redux";
import { overlayAcitons } from "../../../store/overlay-slice";
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

// Material UI Variables
const useStyles = makeStyles(() => ({
  badge: {
    fontSize: "12px",
    "background-color": "#38D178",
  },
}));
//

const Nav = (props) => {
  // React
  const mobileCartButton = useRef();
  //

  // Redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.commerce.cart);
  const showCart = useSelector((state) => state.overlay.cartActive);
  //

  // Material UI
  const classes = useStyles();
  //

  const cartHandler = () => {
    dispatch(overlayAcitons.toggleCart());
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
