import React from "react";
import "./testimonial.css";
import av1 from "../../assets/avatar1.jpg";
import av2 from "../../assets/avatar2.jpg";
import av3 from "../../assets/avatar3.jpg";
import av4 from "../../assets/avatar4.jpg";

const testimonials = [
  {
    id:1,
    avatar: av1,
    name: "Angella",
    review: "Bayajid is awesome talented developer,pleasure to work with him.will work again."
  },
  {
    id:2,
    avatar: av2,
    name: "Ron",
    review: "Bayajid is awesome talented developer,pleasure to work with him.will work again."
  },
  {
    id:3,
    avatar: av3,
    name: "Muhammad",
    review: "Bayajid is awesome talented developer,pleasure to work with him.will work again."
  },
  {
    id:4,
    avatar: av4,
    name: "Lisa",
    review: "Bayajid is awesome talented developer,pleasure to work with him.will work again."
  }
]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        {
          testimonials.map(testimonial=>    
          <article key={testimonial.id} className="testimonial">
          <div className="client_avatar">
            <img src={testimonial.avatar} alt="avatar one" />
          </div>
          <h5>{testimonial.name}</h5>
          <small className="client_review">
            {testimonial.review}
          </small>
        </article>)
        }
      </div>
    </section>
  );
};

export default Testimonial;
