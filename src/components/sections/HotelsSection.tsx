import { Building, MapPin, Phone, Star, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { hotels } from "../../data/hotels";
import fallbackHotelImg from "../../assets/img/CASAS-PATRIMONIALES-1.jpg";

export function HotelsSection() {
  return (
    <section className="section-padding bg-cream-dark hotels-section" aria-labelledby="hotels-title">
      <div className="container">
        <div className="section-centered">
          <span className="badge badge-gold">
            <Building size={12} />
            Estadía & Confort
          </span>
          <h2 id="hotels-title" className="section-title">
            Hospedaje Colonial
          </h2>
          <p className="section-subtitle">
            Descubra el encanto y la hospitalidad zarumeña en alojamientos que conservan el estilo republicano y vistas espectaculares de la cordillera.
          </p>
        </div>

        <div className="hotels-grid">
          {hotels.map((hotel) => (
            <article key={hotel.id} className={`hotel-card ${hotel.featured ? "hotel-card-featured" : ""}`}>
              {hotel.featured && (
                <div className="hotel-featured-badge">
                  <Star size={12} fill="currentColor" />
                  Recomendado
                </div>
              )}

              <div className="hotel-card-image-container">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="hotel-card-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null; 
                    e.currentTarget.src = fallbackHotelImg;
                  }}
                />
              </div>
              
              <div className="hotel-card-body">
                <div className="hotel-header">
                  <span className="hotel-style-tag">
                    <Tag size={12} />
                    {hotel.style}
                  </span>
                  <span className="hotel-price">{hotel.priceRange.split("(")[0].trim()}</span>
                </div>

                <h3 className="hotel-name">{hotel.name}</h3>

                <div className="hotel-info-list">
                  <div className="hotel-info-item">
                    <MapPin size={16} className="text-gold" />
                    {hotel.mapsUrl ? (
                      <a
                        href={hotel.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hotel-maps-link"
                        title="Ver ubicación en Google Maps"
                      >
                        {hotel.address}
                      </a>
                    ) : (
                      <span>{hotel.address}</span>
                    )}
                  </div>

                  {hotel.phone && (
                    <div className="hotel-info-item">
                      <Phone size={16} className="text-gold" />
                      <a href={`tel:${hotel.phone.split("/")[0].trim()}`} className="hotel-phone-link">
                        {hotel.phone}
                      </a>
                    </div>
                  )}
                </div>

                <div className="hotel-actions">
                  <Link
                    to={`/reservar?hotel=${hotel.id}`}
                    className={`btn ${hotel.featured ? "btn-primary" : "btn-secondary"} btn-full`}
                  >
                    Contactar Hotel
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hotels-footer-note">
          <p>
            * Los precios estimados corresponden a tarifas estándar por noche y pueden variar según la temporada (especialmente durante las fiestas patronales de la Virgen del Carmen del 14 al 22 de julio). Se recomienda reservar con anticipación.
          </p>
        </div>
      </div>
    </section>
  );
}
