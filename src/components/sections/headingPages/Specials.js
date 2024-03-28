import CarouselPage from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/greek_salaad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon_dessert.jpg';
import SpecialCard from './CardInfo/SpecialCard';
import { useContext } from 'react';

import { ItemContext } from '../../../../src/context';


const specialCardsData = [
    {
      id: 0,
      image: GreekSalad,
      name: "Greek Salad",
      price: "$10.50",
      description: "Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil."
    },
    {
      id: 1,
      image: Bruschetta,
      name: "Bruschetta",
      price: "$14.99",
      description: "Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil."
    },
    {
      id: 2,
      image: LemonDessert,
      name: "Lemon Dessert",
      price: "$9.50",
      description: "Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest."
    }
  ];

export default function Specials() {
    const {items} = useContext(ItemContext)

    const count = id => {
      if(items.length > 0){
        const item = items.findIndex(item => item.id === id);
        
        if(item !== -1){
          return items[item].counter;
        }
        else{
          return 0;
        }
      }
      else {
        return 0;
      }
  }
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                {specialCardsData.map(special => <SpecialCard key={special.id} id={special.id} name={special.name} image={special.image} price={special.price} description={special.description} count={count(special.id)} />)}
            </section>

            <section className="carousel-container">
                <CarouselPage />
            </section>
        </section>
    );
}