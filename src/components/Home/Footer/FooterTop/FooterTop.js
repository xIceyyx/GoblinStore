// Styled Components
import styled from "styled-components";
//

const FooterTop = () => {
  return (
    <Wrapper>
      <div className="content">
        <p className="content__section-1">
          <a href="https://merchforall.com/pages/sizes/" target="_blank">
            Sizes and Fit
          </a>
        </p>

        <span className="content__break">|</span>

        <p className="content__section-2">
          <a
            href="https://merchforall.com/pages/shipping-and-returns/"
            target="_blank"
          >
            Shipping & Returns
          </a>
        </p>

        <span className="content__break">|</span>

        <p className="content__section-3">
          <a href="https://merchforall.com/contact/" target="_blank">
            Contact Us
          </a>
        </p>
      </div>
    </Wrapper>
  );
};

export default FooterTop;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  min-height: 60px;
  padding: 22px 10px;
  padding-top: 100px;
  font-style: normal;
  font-weight: 300;
  line-height: 23px;
  letter-spacing: -1.02857px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  //
  font-size: 18px;
  @media only screen and (min-width: 600px) {
    font-size: 20px;
  }

  @media only screen and (min-width: 960px) {
    font-size: 22px;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 24px;
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
      color: #263238;
    }

    a {
      color: #263238;
      text-decoration: none;
      font-weight: 300;
      line-height: 30px;
      letter-spacing: -0.5px;
    }
  }
`;
