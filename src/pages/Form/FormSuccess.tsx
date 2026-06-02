import { CheckCircle2, Send } from "lucide-react";
import { Link } from "react-router-dom";

interface FormSuccessProps {
  selectedHotelName: string;
  contactType: string;
  redirectUrl: string;
  onReset: () => void;
}

export function FormSuccess({
  selectedHotelName,
  contactType,
  redirectUrl,
  onReset,
}: FormSuccessProps) {
  return (
    <div className="form-page">
      <div className="container">
        <div className="form-section">
          <div className="form-success">
            <div className="form-success-icon">
              <CheckCircle2 size={36} />
            </div>
            <h1 className="form-success-title">Mensaje Preparado</h1>
            <p className="form-success-text">
              Se ha generado un mensaje preescrito para{" "}
              <strong>{selectedHotelName}</strong> exitosamente y se ha
              intentado abrir a través de{" "}
              <strong>
                {contactType === "whatsapp" ? "WhatsApp" : "Correo Electrónico"}
              </strong>
              .
            </p>

            <div className="form-redirect-box">
              <p>
                ¿La aplicación no se abrió automáticamente? Haz clic en el
                botón inferior para abrirla manualmente:
              </p>
              <a
                href={redirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Send size={16} />
                {contactType === "whatsapp"
                  ? "Enviar por WhatsApp"
                  : "Enviar por Correo"}
              </a>
            </div>

            <div className="form-success-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onReset}
              >
                Nueva Consulta
              </button>
              <Link to="/" className="btn btn-ghost">
                Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
