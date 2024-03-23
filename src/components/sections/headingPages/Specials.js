import CarouselPage from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/greek_salaad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon_dessert.jpg';
import SpecialCard from './CardInfo/SpecialCard';

const specialCardsData = [
    {
      id: "GreekSalad",
      image: GreekSalad,
      name: "Greek Salad",
      price: "$12.99",
      description: "Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil."
    },
    {
      id: "Bruschetta",
      image: Bruschetta,
      name: "Bruschetta",
      price: "$16.99",
      description: "Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil."
    },
    {
      id: "LemonDessert",
      image: LemonDessert,
      name: "Lemon Dessert",
      price: "$8.50",
      description: "Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest."
    }
  ];

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                {specialCardsData.map(special => <SpecialCard key={special.id} id={special.id} name={special.name} image={special.image} price={special.price} description={special.description} />)}
            </section>

            <section className="carousel-container">
                <CarouselPage />
            </section>
        </section>
    );
}