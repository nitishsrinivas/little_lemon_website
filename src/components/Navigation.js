import { Link } from "react-router-dom";
import { ItemContext } from "../context";
import { useContext } from "react";

export default function Navigation(props) {
  const {items} = useContext(ItemContext);
  const count = items.length > 0 ? items.length :null;
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <Link to="/">
          <img
            src={require("../assets/nav-logo.png")}
            alt="Little Lemon logo"
            className="nav-image"
          ></img>
        </Link>
      )}
      <Link className="hover-effect" to="/">
        <h1>Home</h1>
      </Link>
      <Link className="hover-effect" to="/about">
        <h1>About</h1>
      </Link>
      <a
        className="hover-effect"
        href={require("../assets/rest_menu.jpeg")}
        target="_blank"
        rel="noreferrer"
      >
        <h1>Menu</h1>
      </a>
      <Link className="hover-effect" to="/reservations">
        <h1>Reservations</h1>
      </Link>
      <Link className="hover-effect" to="/order">
        <h1>Order {items.length > 0 ? <span style={{fontSize:'25px', color:'green',padding:'13px',backgroundColor:'lightgrey',borderRadius:'50%'}}>{count}</span>:null}</h1>
      </Link>
      <Link className="hover-effect" to="/login">
        <h1>Login</h1>
      </Link>
    </menu>
  );
}
