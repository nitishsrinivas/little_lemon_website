import React from 'react'
import "./order.css";

export default function OrderItem(props) {
  return (
    <div className="container">
    <div className="item">
        <img src={props.image} alt="Item"/>
        <div className="item-info">
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
        <div className="counter">
            <button onclick="decrement()">-</button>
            <span id="quantity">1</span>
            <button onclick="increment()">+</button>
        </div>
    </div>
</div>
  )
}
