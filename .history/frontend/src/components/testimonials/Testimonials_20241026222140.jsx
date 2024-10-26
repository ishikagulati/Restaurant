
import './testimonials.css';

const testimonials = [
    {
        id: 1,
        image: './review1.png',
        description: 'Morbi nulla nec dui lacus, in. Libero in pretium metus massa. Sodales dignissim vitae mauris varius faucibus. Eleifend dui, non laoreet ac luctus facilisis diam. Enim scelerisque vel at id viverra tellus.',
        rating: 4,
        userName: 'Jane Cooper'
    },
    {
        id: 2,
        image: './review2.png',
        description: 'Tortor vel nunc netus pharetra enim, enim dolor mauris in. Sit nam fringilla in egestas. Libero condimentum quis in vulputate adipiscing venenatis augue. Venenatis faucibus.',
        rating: 4.5,
        userName: 'Esther Howard'
    },
    {
        id: 3,
        image: './review.png',
        description: 'Tortor vel nunc netus pharetra enim, enim dolor mauris in. Sit nam fringilla in egestas. Libero condimentum quis in vulputate adipiscing venenatis augue. Venenatis faucibus.',
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
