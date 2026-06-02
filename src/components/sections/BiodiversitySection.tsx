import { Bird, CloudSun, Leaf, Map, Thermometer } from "lucide-react";
import { useState } from "react";
import { biodiversityContent } from "../../data/biodiversity";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Thermometer,
  CloudSun,
  Map,
  Leaf,
  Bird,
};

export function BiodiversitySection() {
  const [activeTab, setActiveTab] = useState<"flora" | "fauna">("flora");

  return (
    <section className="section-padding biodiversity-section" aria-labelledby="biodiversity-title">
      <div className="container">
        <div className="section-centered">
          <span className="badge badge-green">
            <Leaf size={12} />
            {biodiversityContent.badgeText}
          </span>
          <h2 id="biodiversity-title" className="section-title">
            {biodiversityContent.title}
          </h2>
          <p className="section-subtitle">
            {biodiversityContent.subtitle}
          </p>
        </div>

        <div className="biodiversity-grid">
          <div className="biodiversity-info">
            <h3 className="biodiversity-subtitle">{biodiversityContent.introTitle}</h3>
            <p>{biodiversityContent.introText}</p>

            <div className="biodiversity-cards">
              {biodiversityContent.features.map((feature, index) => {
                const IconComp = iconMap[feature.icon] || Map;
                return (
                  <div key={index} className="bio-card">
                    <div className="bio-card-icon">
                      <IconComp size={20} />
                    </div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="biodiversity-explorer">
            <div className="explorer-tabs">
              <button
                type="button"
                className={`explorer-tab ${activeTab === "flora" ? "active" : ""}`}
                onClick={() => setActiveTab("flora")}
              >
                <Leaf size={18} />
                {biodiversityContent.flora.title}
              </button>
              <button
                type="button"
                className={`explorer-tab ${activeTab === "fauna" ? "active" : ""}`}
                onClick={() => setActiveTab("fauna")}
              >
                <Bird size={18} />
                {biodiversityContent.fauna.title}
              </button>
            </div>

            <div className="explorer-content">
              {activeTab === "flora" ? (
                <div className="flora-content animate-fade-in">
                  <p className="explorer-description">
                    {biodiversityContent.flora.desc}
                  </p>
                  <div className="species-list">
                    {biodiversityContent.flora.items.map((item, index) => (
                      <div key={index} className="species-item">
                        <span className="species-dot"></span>
                        <div>
                          <strong>{item.name}:</strong> {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="fauna-content animate-fade-in">
                  <p className="explorer-description">
                    {biodiversityContent.fauna.desc}
                  </p>
                  <div className="species-list">
                    {biodiversityContent.fauna.items.map((item, index) => (
                      <div key={index} className="species-item">
                        <span className="species-dot bg-red"></span>
                        <div>
                          <strong>{item.name}:</strong> {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
