// Styled Components
import styled from "styled-components";
//

// Material UI

//

const Main = () => {
  return (
    <Wrapper>
      <div className="title-wrapper">
        <h1>The Official Goblin Merch Store</h1>
      </div>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.main`
  width: 100%;
  text-align: center;
  font-family: "Open Sans", sans-serif;

  .title-wrapper {
    padding: 27.5px 5px;
    width: 100%;
    h1 {
      //
      font-size: 24px;
      @media only screen and (min-width: 600px) {
        font-size: 26px;
      }
      @media only screen and (min-width: 960px) {
        font-size: 28px;
      }

      @media only screen and (min-width: 1280px) {
        font-size: 30px;
      }

      //
      line-height: 41px;
      text-align: center;
      color: #263238;
      text-decoration: underline 1px #bbb;
      text-underline-offset: 15px;
      font-weight: 700;
      letter-spacing: -1.02857px;
    }
  }
`;
