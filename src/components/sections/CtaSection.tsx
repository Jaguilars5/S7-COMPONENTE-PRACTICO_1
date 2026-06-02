import { ArrowRight, Heart, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { ctaContent } from "../../data/cta";

const iconMap: Record<string, React.ComponentType<{ size?: number; fill?: string }>> = {
  Shield,
  Heart,
  Star,
};

export function CtaSection() {
  return (
    <section
      className="cta-section section-dark"
      aria-label="Reserva tu visita guiada"
    >
      <div className="container">
        <div className="cta-content">
          <div
            className="hero-badge"
          >
            <Star size={14} fill="currentColor" />
            {ctaContent.badgeText}
          </div>
          <h2 className="cta-title">
            {ctaContent.title}
          </h2>
          <p className="cta-description">
            {ctaContent.description}
          </p>
          <div className="cta-benefits">
            {ctaContent.benefits.map((benefit, index) => {
              const IconComp = iconMap[benefit.icon] || Star;
              return (
                <div
                  key={index}
                  className="cta-benefit-item"
                >
                  <IconComp size={14} fill={benefit.icon === "Star" ? "currentColor" : "none"} />
                  {benefit.text}
                </div>
              );
            })}
          </div>
          <Link to="/reservar" className="btn btn-primary btn-lg">
            {ctaContent.buttonText}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
