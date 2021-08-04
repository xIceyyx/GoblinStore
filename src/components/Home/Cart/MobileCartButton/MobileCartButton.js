// React
import { forwardRef } from "react";
//

// Styled Components
import styled from "styled-components";
//

// Components
import CartButton from "../CartButton/CartButton";
//

const MobileCartButton = (props, ref) => {
  return (
    <Wrapper>
      <CartButton
        text={`VIEW CART (1 ITEMS)`}
        theme={"dark"}
        type={"mobile-cart-button"}
        onClick={props.onClick}
        ref={ref}
      />
    </Wrapper>
  );
};
export default forwardRef(MobileCartButton);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
  position: fixed;
  bottom: 30px;
`;
