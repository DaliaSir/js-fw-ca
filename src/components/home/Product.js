import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Product({ id, name, image, currency, price }) {

  return (
    <Col sm={6} md={4} className="g-4" key={id}>
      <Link to={`/detail/${id}`}>
        <Card border="light" >
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Price: {currency} {price}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.oneOfType([PropTypes.symbol, PropTypes.string]).isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};


Product.defaultProps = {
  name: "Product"
}

export default Product;