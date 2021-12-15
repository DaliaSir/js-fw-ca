import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Heading from "../layout/Heading";

export default function DetailsPage() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { id } = useParams();

  const url = BASE_URL + `wc/store/products/${id}`;

  useEffect(function () {
    async function getData() {
      try {
        const response = await axios.get(url);
        console.log("response", response);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getData();

  }, [url]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{ }</div>;

  const description = { __html: `${product.description}` };

  return (
    <>
      <Heading content="Page Details" />
      <div className="breadcrumb">
        <Link to={`/`}>Back</Link>
      </div>

      <Card border="light" >
        <Card.Img variant="top" src={product.images.map(img => img.src)} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Price: {product.prices.currency_symbol} {product.prices.price}
            <div dangerouslySetInnerHTML={description}></div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
