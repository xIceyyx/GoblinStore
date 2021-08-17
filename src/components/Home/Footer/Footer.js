// Styled Components
import styled from "styled-components";
//

// Components
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";
//

const Footer = () => {
  return (
    <Wrapper>
      <FooterTop />
      <FooterBottom />
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  font-family: Roboto, sans-serif;
`;
