import {
  Building2,
  Eye,
  Hammer,
  Landmark,
  MapPin,
  Mountain,
} from "lucide-react";
import { attractions } from "../../data/attractions";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Landmark,
  Hammer,
  Building2,
  Mountain,
  Eye,
};

export function AttractionsSection() {
  return (
    <section className="section-padding" aria-labelledby="attractions-title">
      <div className="container">
        <div className="section-centered">
          <span
            className="badge badge-gold"
          >
            <MapPin size={12} />
            Lugares Imperdibles
          </span>
          <h2 id="attractions-title" className="section-title">
            Atractivos Turisticos
          </h2>
          <p className="section-subtitle">
            Descubra los tesoros que hacen de Zaruma un destino unico en el
            corazon de El Oro.
          </p>
        </div>

        <div className="attractions-grid">
          {attractions.map((attraction, index) => {
            const IconComponent = iconMap[attraction.icon];

            return (
              <article
                key={attraction.id}
                className="attraction-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {attraction.image ? (
                  <div className="attraction-card-image-container">
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="attraction-card-image"
                      loading="lazy"
                    />
                    {IconComponent && (
                      <div className="attraction-card-icon-overlay">
                        <IconComponent size={20} />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="attraction-card-image-placeholder">
                    {IconComponent && <IconComponent size={48} />}
                  </div>
                )}
                <div className="attraction-card-body">
                  <h3 className="card-title">{attraction.title}</h3>
                  <p className="card-text">{attraction.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
