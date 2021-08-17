// React
import { Fragment, useEffect } from "react";
//

// Redux
import { getCart, getProducts } from "../../store/commerce-slice";
import { useDispatch } from "react-redux";
//

// Components
import Nav from "./Nav/Nav";
import Carousel from "./Carousel/Carousel";
import Main from "./Main/Main";
//

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
    dispatch(getProducts());
  }, []);

  //commerce.cart.empty();

  return (
    <Fragment>
      <Nav />
      <Carousel />
      <Main />
    </Fragment>
  );
};

export default Home;
