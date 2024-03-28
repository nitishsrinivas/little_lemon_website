import { useContext } from "react";
import { ItemContext } from "../../context";
import OrderItem from "./OrderItem";
import "./order.css";


export default function Heading(props) {
  const {items} = useContext(ItemContext);
  const convertPrice = (priceString1) =>{
    // Remove the "$" sign and convert to a floating-point number
    const price1 = parseFloat(priceString1.replace('$', ''));

    return price1; // Output: "$n"
}
  
  const getTotalPrice = () => {
    const prices = items.map(item => convertPrice(item.price));
  
    return prices;
  }
  
  const convertPrice1 = (price) =>{
    const totalString = "$" + price.toFixed(2); // Convert to string with 2 decimal places
    return totalString;
}

  const addPrices = () => {
    const prices = getTotalPrice();
    // Use reduce to iterate over the array and accumulate the total price
    const totalPrice = prices.reduce((total, currentItem) => {
      // Add the price of the current item to the total
      return total+currentItem;
    }, 0); // Initialize the total to 0

    return totalPrice;
  }

  const displayTotal = items.length > 0 ? null: "display";


  return (
    <header className="order-container">
      <div>
        <h1>Order Online</h1>
      </div>
      <div>
        {items.map(item => <OrderItem key={item.id} id={item.id} itemPrice={item.itemPrice} count={item.counter} image={item.img} name={item.name} price={item.price}/>)}

      </div>
      <div className={`checkout-details ${displayTotal}`}>
        <p className="total">Total</p>
        <p className="total1">{convertPrice1(addPrices())}</p>
        <button className="checkout">Checkout</button>
    </div>
    </header>
  );
}
