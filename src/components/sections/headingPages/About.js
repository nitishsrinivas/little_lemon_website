export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
                <p>Experience authentic Mediterranean cuisine at Little Lemon, a cherished Chicago gem. Immerse yourself in the flavors of their hometown, lovingly crafted and preserved for nearly three decades.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/double2.jpg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/double.avif')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}