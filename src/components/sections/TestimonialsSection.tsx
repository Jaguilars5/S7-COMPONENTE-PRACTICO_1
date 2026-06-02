import { MessageCircle, Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";

export function TestimonialsSection() {
  return (
    <section
      className="section-padding section-cream"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <div className="section-centered">
          <span
            className="badge badge-gold"
          >
            <MessageCircle size={12} />
            Testimonios
          </span>
          <h2 id="testimonials-title" className="section-title">
            Lo Que Dicen Nuestros Visitantes
          </h2>
          <p className="section-subtitle">
            Conozca las experiencias de quienes ya han descubierto la magia de
            Zaruma.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="rating-stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                    opacity={i < testimonial.rating ? 1 : 0.3}
                  />
                ))}
              </div>
              <p className="testimonial-author">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
