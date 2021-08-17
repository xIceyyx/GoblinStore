// Styled Components
import styled from "styled-components";
//

const FooterBottom = () => {
  return (
    <Wrapper>
      <div className="content">
        <p className="content__section-1">
          © 2021 Merch for All LLC - All Rights Reserved
        </p>
        <span className="content__break">|</span>
        <p className="content__section-2">
          <a href="https://merchforall.com/legal/privacy/" target="_blank">
            Privacy Policy
          </a>
        </p>
        <span className="content__break">|</span>
        <p className="content__section-3">
          <a href="https://merchforall.com/legal/terms/" target="_blank">
            Terms of Service
          </a>
        </p>
      </div>
    </Wrapper>
  );
};

export default FooterBottom;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  min-height: 60px;
  background: #263238;
  padding: 22px 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -1.02857px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  //
  font-size: 14px;
  @media only screen and (min-width: 960px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 18px;
  }
  //

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    text-align: center;
    &__section {
      &-1 {
      }

      &-2 {
      }

      &-3 {
      }
    }

    &__break {
      margin: 0 8px;
    }

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;
