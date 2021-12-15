import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Heading from "../layout/Heading";
import Product from "./Product";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = BASE_URL + "wc/store/products/";

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          setProducts(json);
        } else {
          setError("An error occurred");
        }

      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }

    }
    fetchProducts();

  }, [url]);
  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <Alert variant="danger">An error occurred: {error}</Alert>;
  }

  return (
    <>
      <Heading content="Home Page" />
      <Row >
        {products.map((product) => {
          const { id, name, images, prices } = product;
          return <Product key={id} id={id} name={name} image={images.map(img => img.src)} currency={prices.currency_symbol} price={prices.price} />
        })}
      </Row>
    </>
  );
}

export default HomePage;