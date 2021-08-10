// React
import { forwardRef } from "react";
//

// Styled Components
import styled from "styled-components";
//

// Material UI
import Button from "@material-ui/core/Button";
//

const MainButton = (props, ref) => {
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
export default forwardRef(MainButton);

const Wrapper = styled(Button)`
  && {
    padding: 8px 22px;
    font-size: 18px;
    font-weight: 700;
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
      props.type === "mobile-cart-button" &&
      `
    width: max-content;            
    @media only screen and (min-width: 600px) {
      display: none;
    }
    `}

    ${(props) =>
      props.type === "card-button" &&
      `
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-radius:0px;
      letter-spacing: 0.02857em;
      font-size: 20px;

      @media only screen and (max-width: 600px) {
          display: block ;
          margin-top: 0px ;
          font-size: 16px ;
        }
    `}

${(props) =>
      props.type === "card-modal-button" &&
      `
      width: 300px;
  
      right: 0;


      @media only screen and (max-width: 960px) {
      width: 75%;
    }

    && {
        @media only screen and (max-width: 600px) {
          display: block ;
          margin-top: 0px ;
          font-size: 16px ;
        }
    }

  
    `}



    &:hover {
      background-color: ${(props) =>
        props.theme === "light" ? "#d5d5d5" : "#279254"};
    }

    @media only screen and (max-width: 600px) {
      display: ${(props) => (props.theme === "light" ? "block" : "")};
      margin-top: ${(props) => (props.theme === "light" ? "0px" : "20px")};
      font-size: 13px;
    }
  }
`;
