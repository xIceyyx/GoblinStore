// Styled Components
import styled from "styled-components";
//

// Components
import Card from "./Card/Card";
import CardSkeleton from "./Card/CardSkeleton/CardSkeleton";
//

// Redux
import { useSelector } from "react-redux";
//

const Main = (props) => {
  // Redux
  const products = useSelector((state) => state.commerce.products);
  //

  return (
    <Wrapper>
      <div className="title-wrapper">
        <h1 className="title-wrapper__heading">
          The Official Goblin Merch Store
        </h1>
      </div>

      <div className="products-wrapper">
        {products.length === 0 &&
          Array.from(new Array(8)).map(() => (
            <CardSkeleton key={Math.random().toString(16)} />
          ))}

        {products.length > 0 &&
          products.map((product) => <Card data={product} key={product.id} />)}
      </div>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.main`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color: #000;
  overflow: hidden;
  height: max-content;

  .title-wrapper {
    padding: 30px 5px;
    width: 100%;

    &__heading {
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

  .products-wrapper {
    display: grid;
    justify-content: space-between;
    justify-items: center;
    align-items: center;

    margin: 0 auto;

    //
    width: 85%;
    @media only screen and (max-width: 960px) {
      width: 100%;
    }
    //

    //
    grid-template-columns: repeat(2, minmax(20%, 1fr));
    @media only screen and (min-width: 960px) {
      grid-template-columns: repeat(3, minmax(20%, 1fr));
    }

    @media only screen and (min-width: 1280px) {
      grid-template-columns: repeat(4, minmax(20%, 1fr));
    }
    //
  }
`;
