import { Coffee, Flame, Landmark, Utensils } from "lucide-react";
import { gastronomyContent } from "../../data/gastronomy";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Coffee,
  Flame,
  Landmark,
  Utensils,
};

export function GastronomySection() {
  const HighlightIcon = iconMap[gastronomyContent.highlightCard.icon] || Flame;
  const CoffeeIcon = iconMap[gastronomyContent.coffeeCard.icon] || Coffee;

  return (
    <section className="section-padding gastronomy-section" aria-labelledby="gastronomy-title">
      <div className="container">
        <div className="section-centered">
          <span className="badge badge-gold">
            <Utensils size={12} />
            {gastronomyContent.badgeText}
          </span>
          <h2 id="gastronomy-title" className="section-title">
            {gastronomyContent.title}
          </h2>
          <p className="section-subtitle">
            {gastronomyContent.subtitle}
          </p>
        </div>

        <div className="gastronomy-grid">
          <div className="gastronomy-image-container">
            <img
              src={gastronomyContent.mainImage}
              alt={gastronomyContent.imageAlt}
              className="gastronomy-image"
              loading="lazy"
            />
            <div className="gastronomy-floating-card">
              <Landmark size={20} className="text-gold" />
              <div>
                <h4>{gastronomyContent.heritageTitle}</h4>
                <p>{gastronomyContent.heritageDesc}</p>
              </div>
            </div>
          </div>

          <div className="gastronomy-details">
            <div className="gastronomy-highlight-card">
              <div className="highlight-icon">
                <HighlightIcon size={24} />
              </div>
              <div className="highlight-content">
                <h3>{gastronomyContent.highlightCard.title}</h3>
                <p>{gastronomyContent.highlightCard.description}</p>
              </div>
            </div>

            <div className="gastronomy-history">
              <h4>{gastronomyContent.historyTitle}</h4>
              {gastronomyContent.historyParagraphs.map((para, index) => (
                <p key={index}>
                  {para.startsWith("El nombre \"Tigrillo\"") ? (
                    <>
                      <strong>¿Sabías que...?</strong> {para}
                    </>
                  ) : (
                    para
                  )}
                </p>
              ))}
            </div>

            <div className="gastronomy-coffee">
              <div className="coffee-icon">
                <CoffeeIcon size={24} />
              </div>
              <div>
                <h5>{gastronomyContent.coffeeCard.title}</h5>
                <p>{gastronomyContent.coffeeCard.description}</p>
              </div>
            </div>

            <div className="gastronomy-menu-small">
              <h4>{gastronomyContent.otherDelicaciesTitle}</h4>
              <div className="menu-tags">
                {gastronomyContent.otherDelicacies.map((tag, index) => (
                  <span key={index} className="menu-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
