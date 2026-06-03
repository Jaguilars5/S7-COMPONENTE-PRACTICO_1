import { MapPin, Star } from "lucide-react";
import { heroContent } from "../../data/hero";

export function HeroSection() {
  return (
    <section className="hero" aria-label="Bienvenida a Zaruma">
      <div className="hero-bg">
        <img
          src={heroContent.bgImage}
          alt="Santuario de la Virgen del Carmen"
        />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <MapPin size={14} />
          {heroContent.badgeText}
        </div>

        <h1 className="hero-title">
          <span className="hero-title-highlight">
            {heroContent.titleParts[0]}
          </span>
          {heroContent.titleParts[1]}
        </h1>

        <p className="hero-description">{heroContent.description}</p>

        <div className="hero-stats">
          {heroContent.stats.map((stat, idx) => (
            <div key={idx} className="hero-stat-item">
              <div className="hero-stat-value">
                {stat.hasStar && <Star size={20} fill="currentColor" />}
                {stat.value}
              </div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
