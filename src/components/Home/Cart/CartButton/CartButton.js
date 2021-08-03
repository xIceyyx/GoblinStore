// React
import { forwardRef } from "react";
//

// Styled Components
import styled from "styled-components";
//

// Material UI
import Button from "@material-ui/core/Button";
//

const CartButton = (props, ref) => {
  return (
    <Wrapper
      theme={props.theme}
      type={props.type}
      onClick={props.onClick}
      ref={ref}
    >
      {props.text}
    </Wrapper>
  );
};
export default forwardRef(CartButton);

const Wrapper = styled(Button)`
  && {
    padding: 8px 22px;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    z-index: 100;
    width: 100%;

    color: ${(props) => (props.theme === "light" ? "#263238" : "#fff")};
    display: ${(props) => (props.theme === "light" ? "none" : "")};
    background-color: ${(props) =>
      props.theme === "light" ? "#e0e0e0" : "#38d178"};

    ${(props) =>
      props.type === "absolute" &&
      `

    max-width: max-content;

    position: fixed;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: auto;
    padding: 8px 22px !important;
      white-space: nowrap;
    overflow: hidden;
    
      
    @media only screen and (min-width: 600px) {
      display: none;
    }
    `}

    &:hover {
      background-color: ${(props) =>
        props.theme === "light" ? "#d5d5d5" : "#279254"};
    }

    @media only screen and (max-width: 600px) {
      display: ${(props) => (props.theme === "light" ? "block" : "")};
      margin-top: ${(props) => (props.theme === "light" ? "0px" : "20px")};
      font-size: 12px;
    }
  }
`;
