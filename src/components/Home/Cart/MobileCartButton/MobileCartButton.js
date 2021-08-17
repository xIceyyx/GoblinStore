// React
import { forwardRef, useState, useEffect } from "react";
//

// Redux
import { useSelector } from "react-redux";
//

// Styled Components
import styled from "styled-components";
//

// Components
import MainButton from "../../Utility/MainButton";
//

const MobileCartButton = (props, ref) => {
  const [showButton, setShowButton] = useState(false);
  const cart = useSelector((state) => state.commerce.cart);

  useEffect(() => {
    if (cart.total_items > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [cart.total_items]);

  return (
    <Wrapper showButton={cart.total_items > 0}>
      {showButton && (
        <MainButton
          text={`VIEW CART (${cart.total_items} ITEMS)`}
          theme={"dark"}
          type={"mobile-cart-button"}
          onClick={props.onClick}
          ref={ref}
        />
      )}
    </Wrapper>
  );
};
export default forwardRef(MobileCartButton);

const Wrapper = styled.div`
  display: ${(props) => (props.showButton ? "flex" : "none")};
  display: flex;
  justify-content: center;

  width: 100%;
  background-color: transparent;
  position: fixed;
  bottom: 30px;
  font-weight: 700;
  z-index: 2;
`;
