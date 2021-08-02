import { Fragment } from "react";

// Components
import Nav from "./Nav/Nav";
import Carousel from "./Carousel/Carousel";
import Main from "./Main/Main";
//

const Home = () => {
  return (
    <Fragment>
      <Nav />
      <Carousel />
      <Main />
    </Fragment>
  );
};

export default Home;
