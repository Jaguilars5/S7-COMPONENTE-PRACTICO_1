import { Camera, Coffee, Hammer, Mountain, Sparkles } from "lucide-react";
import { activities } from "../../data/activities";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Mountain,
  Hammer,
  Coffee,
  Camera,
};

export function ActivitiesSection() {
  return (
    <section
      className="section-padding section-cream"
      aria-labelledby="activities-title"
    >
      <div className="container">
        <div className="section-centered">
          <span
            className="badge badge-green"
          >
            <Sparkles size={12} />
            Experiencias Unicas
          </span>
          <h2 id="activities-title" className="section-title">
            Actividades Disponibles
          </h2>
          <p className="section-subtitle">
            Vive experiencias unicas que conectan con la esencia de Zaruma y su
            entorno natural.
          </p>
        </div>

        <div className="activities-grid">
          {activities.map((activity, index) => {
            const IconComponent = iconMap[activity.icon];

            return (
              <article
                key={activity.id}
                className="activity-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="activity-icon">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <h3 className="card-title">{activity.title}</h3>
                <p className="card-text">{activity.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
