import { useContext } from "react";
import { ItemContext } from "../../context";
import OrderItem from "./OrderItem";


export default function Heading() {
  const {items} = useContext(ItemContext);
  return (
    <header className="order-container">
      <div>
        <h1>Order Online</h1>
      </div>
      <div>
        {items.map(item => <OrderItem key={item.id} image={item.img} name={item.name} price={item.price}/>)}
      </div>
    </header>
  );
}
