// React
import { forwardRef } from "react";
//

// Styled Components
import styled from "styled-components";
//

// Components
import MainButton from "../../Utility/MainButton";
//

const MobileCartButton = (props, ref) => {
  return (
    <Wrapper>
      <MainButton
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
  display: flex;
  justify-content: center;

  width: 100%;
  background-color: transparent;
  position: fixed;
  bottom: 30px;
  font-weight: 700;
  z-index: 2;
`;
