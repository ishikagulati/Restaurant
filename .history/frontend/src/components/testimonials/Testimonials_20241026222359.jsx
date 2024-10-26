
import './testimonials.css';

const testimonials = [
    {
        id: 1,
        image: './review_1.png',
        description: 'Absolutely fantastic experience! The food was fresh, flavorful, and beautifully presented. The staff was incredibly attentive, and the ambiance made for a perfect evening. I will definitely be coming back with friends and family!',
        rating: 4,
        userName: 'Jane Cooper'
    },
    {
        id: 2,
        image: './review_2.png',
        description: '',
        rating: 4.5,
        userName: 'Esther Howard'
    },
    {
        id: 3,
        image: './review_3.png',
        description: '',
        rating: 5,
        userName: 'Guy Hawkins'
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h2 className="testimonials-title">What Our Customers Say</h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-card">
                        <img src={testimonial.image} alt={testimonial.userName} className="testimonial-image" />
                        <p className="testimonial-description">{testimonial.description}</p>
                        <div className="testimonial-rating">Rating: {testimonial.rating} ★</div>
                        <h3 className="testimonial-username">{testimonial.userName}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
