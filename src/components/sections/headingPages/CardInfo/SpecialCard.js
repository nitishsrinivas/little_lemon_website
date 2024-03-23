import {Link} from 'react-router-dom';
import "./specials.css";

export default function SpecialCard(props) {
    return (
        <article className="menu-card">
            <img src={props.image} alt="Special Menu"></img>
            <section className="menu-card-content">
                <div className="header">
                    <h1>{props.name}</h1>
                    <div className="counter">
                        <button className="decrement">-</button>
                        <span className="count">0</span>
                        <button className="increment">+</button>
                    </div>

                </div>
                <h3>{props.price}</h3>
                <p className="description">{props.description}</p>
                <Link className="special-button" to="/order">Order for Delivery</Link>
            </section>
        </article>
    );
}