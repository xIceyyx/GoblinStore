// React
import { Fragment, useState, useEffect } from "react";
//

// Commerce
import { commerce } from "../../lib/commerce";
//

// Components
import Nav from "./Nav/Nav";
import Carousel from "./Carousel/Carousel";
import Main from "./Main/Main";
//

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Fragment>
      <Nav />
      <Carousel />
      <Main products={products} />
    </Fragment>
  );
};

export default Home;
