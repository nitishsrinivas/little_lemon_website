
export default function TestimonialCard(props) {
    return (
        <article className="testimonial-card">
            <img className="testimonial-image" src={props.url} alt="tesimonial-images"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}