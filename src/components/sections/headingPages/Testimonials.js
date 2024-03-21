import TestimonialsCarousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
import user1 from "../../../assets/testimonials/user1.jpeg";
import user2 from "../../../assets/testimonials/user2.jpeg";
import user3 from "../../../assets/testimonials/user3.jpeg";
import user4 from "../../../assets/testimonials/user4.jpeg";
import user5 from "../../../assets/testimonials/user5.jpeg";
import user6 from "../../../assets/testimonials/user6.jpeg";
import user7 from "../../../assets/testimonials/user7.jpeg";
import user8 from "../../../assets/testimonials/user8.jpeg";


const testimonials = [
    { name: "Micheal Caldwell", description: "This is the best Mediterranean food that I've ever had!", url: user1 },
    { name: "Alan Chen", description: "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.", url: user2 },
    { name: "Casey Langer", description: "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.", url: user3 },
    { name: "Alan Christiana", description: "Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.", url: user4 },
    { name: "Devon Maxy", description: "The food here really refreshed me after a late night shift at the local supply depot.", url: user5 },
    { name: "Brianna Dean", description: "I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.", url: user6 },
    { name: "Tyler Tohmine", description: "The food here was fire!! Everyone should try this place out at least once if they live in Chicago.", url: user7 },
    { name: "Jack Hu", description: "This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!", url: user8 }
  ];
  

export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                {testimonials.map((testimonial,index) =>
                    <TestimonialCard key={index} name={testimonial.name} description={testimonial.description} url={testimonial.url} />
                )}
            </section>

            <section className="carousel-container">
                <TestimonialsCarousel />
            </section>
        </section>
    );
}