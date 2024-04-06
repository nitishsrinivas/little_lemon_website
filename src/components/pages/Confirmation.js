import FoodImage from "../../assets/food/food5.jpeg";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function Confirmation(props) {
  let { id } = useParams();
  return (
    <header className="confirmation-header">
      <img
        className="confirmation-image"
        src={FoodImage}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="reserve-header-text">
        {id === 'reservation' ? <h4>Table has been reserved</h4> : <h4>Order has been placed</h4>}
        <h4>A confirmation message has been sent to your email.</h4>
        {id === 'checkout' ? <h4>Thanks for ordering!</h4>: <h4>Thanks for dining with us!</h4>}
      </section>

      <section className="redirect-buttons">
        <a
          className="redirect-button"
          href={require("../../assets/menu.webp")}
          target="_blank"
          rel="noreferrer"
        >
          Browse Menu
        </a>
        <Link className="redirect-button" to="/order">
          Order Online
        </Link>
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
      </section>
    </header>
  );
}
