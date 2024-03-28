import FoodImage from "../../assets/food/food4.jpeg";
import About from "../sections/headingPages/About";

export default function Heading() {
  return (
    <>
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={FoodImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>About us</h1>
      </div>
    </header>
    <About/>
    </>
  );
}
