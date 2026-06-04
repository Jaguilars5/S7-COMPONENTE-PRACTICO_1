import { ArrowLeft, Building2, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FormInput } from "../../components/forms/FormInput";
import { FormSelect } from "../../components/forms/FormSelect";
import { FormTextarea } from "../../components/forms/FormTextarea";
import { hotels } from "../../data/hotels";
import { useForm } from "../../hooks/useForm";
import type { FormValues, ValidationRules } from "../../types/form";
import { FormSuccess } from "./FormSuccess";

const hotelOptions = hotels.map((hotel) => ({
  value: hotel.id,
  label: `${hotel.name} (${hotel.style})`,
}));

const contactMethodOptions = [
  { value: "whatsapp", label: "WhatsApp (Mensaje instantáneo)" },
  { value: "email", label: "Correo Electrónico (Mensaje preescrito)" },
];

const validationRules: ValidationRules = {
  fullName: { required: true, minLength: 3, maxLength: 100 },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  peopleCount: {
    required: true,
    pattern: /^[1-9]\d*$/,
    custom: (value: string) => {
      const num = parseInt(value, 10);
      if (num < 1) return "Debe ser al menos 1 persona";
      if (num > 50) return "Máximo 50 personas";
      return undefined;
    },
  },
  visitDate: {
    required: true,
    custom: (value: string) => {
      if (!value) return undefined;
      const [year, month, day] = value.split("-").map(Number);
      const date = new Date(year, month - 1, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (date < today) return "La fecha debe ser hoy o futura";
      return undefined;
    },
  },
  hotelId: { required: true },
  contactMethod: { required: true },
  message: { required: false, maxLength: 500 },
};

export function FormPage() {
  const [searchParams] = useSearchParams();
  const preselectedHotelId = searchParams.get("hotel") || "";

  const [submitted, setSubmitted] = useState(false);
  const [selectedHotelName, setSelectedHotelName] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");
  const [contactType, setContactType] = useState("");

  const [componentInitialValues] = useState<FormValues>(() => ({
    fullName: "",
    email: "",
    peopleCount: "",
    visitDate: "",
    hotelId: preselectedHotelId,
    contactMethod: "whatsapp",
    message: "",
  }));

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useForm(componentInitialValues, validationRules);

  const onSubmit = (formValues: FormValues) => {
    const hotel = hotels.find((h) => h.id === formValues.hotelId);
    if (!hotel) return;

    setSelectedHotelName(hotel.name);
    setContactType(formValues.contactMethod);

    const textMsg = `¡Hola, ${hotel.name}! 

Me pongo en contacto a través del Portal de Zaruma Turismo para realizar una consulta de hospedaje.

Aquí están mis datos:
 Nombre: ${formValues.fullName}
 Correo: ${formValues.email}
 Cantidad de huéspedes: ${formValues.peopleCount}
 Fecha planeada de visita: ${formValues.visitDate}

 Mensaje / Consulta adicional:
"${formValues.message || "Deseo consultar sobre disponibilidad de habitaciones y tarifas vigentes para la fecha especificada."}"

¡Muchas gracias por su atención y espero su amable respuesta!`;

    let url = "";
    if (formValues.contactMethod === "whatsapp") {
      if (!hotel.whatsapp) {
        alert(
          `${hotel.name} no tiene un número de WhatsApp disponible para contacto. Por favor, elija otro método de envío.`,
        );
        return;
      }

      const phoneWithCountry = "593" + hotel.whatsapp.slice(1);

      url = `https://api.whatsapp.com/send?phone=${phoneWithCountry}&text=${encodeURIComponent(textMsg)}`;
    } else {
      const emailRecipient = "info@zarumaturismo.ec";
      url = `mailto:${emailRecipient}?subject=${encodeURIComponent("Consulta de Hospedaje - " + hotel.name)}&body=${encodeURIComponent(textMsg)}`;
    }

    setRedirectUrl(url);
    setSubmitted(true);

    window.open(url, "_blank");
  };

  if (submitted) {
    return (
      <FormSuccess
        selectedHotelName={selectedHotelName}
        contactType={contactType}
        redirectUrl={redirectUrl}
        onReset={() => {
          resetForm();
          setSubmitted(false);
        }}
      />
    );
  }

  return (
    <div className="form-page">
      <div className="container">
        <div className="form-section">
          <div className="form-header">
            <div className="form-header-icon">
              <Building2 size={24} className="text-gold" />
            </div>
            <h1 className="section-title">Contactar Alojamientos</h1>
            <p className="section-subtitle">
              Complete el formulario con los detalles de su estadía para
              redactar un mensaje directo a su hotel elegido por WhatsApp o
              Correo electrónico.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-grid">
              <div className="form-grid-full">
                <FormInput
                  label="Nombre Completo"
                  name="fullName"
                  type="text"
                  placeholder="Ingrese su nombre y apellido"
                  value={values.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  onBlur={() => handleBlur("fullName")}
                  error={errors.fullName}
                  touched={touched.fullName}
                />
              </div>

              <div className="form-grid-full">
                <FormInput
                  label="Correo Electrónico"
                  name="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                />
              </div>

              <FormInput
                label="Cantidad de Huéspedes"
                name="peopleCount"
                type="number"
                placeholder="Ej: 2"
                min="1"
                max="50"
                value={values.peopleCount}
                onChange={(e) => handleChange("peopleCount", e.target.value)}
                onBlur={() => handleBlur("peopleCount")}
                error={errors.peopleCount}
                touched={touched.peopleCount}
              />

              <FormInput
                label="Fecha de Estadía"
                name="visitDate"
                type="date"
                value={values.visitDate}
                onChange={(e) => handleChange("visitDate", e.target.value)}
                onBlur={() => handleBlur("visitDate")}
                error={errors.visitDate}
                touched={touched.visitDate}
              />

              <div className="form-grid-full">
                <FormSelect
                  label="Seleccione el Hotel de Interés"
                  name="hotelId"
                  options={hotelOptions}
                  placeholder="Seleccione un hotel de Zaruma..."
                  value={values.hotelId}
                  onChange={(e) => handleChange("hotelId", e.target.value)}
                  onBlur={() => handleBlur("hotelId")}
                  error={errors.hotelId}
                  touched={touched.hotelId}
                />
              </div>

              <div className="form-grid-full">
                <FormSelect
                  label="Canal de Contacto Preferido"
                  name="contactMethod"
                  options={contactMethodOptions}
                  placeholder="Seleccione método de envío..."
                  value={values.contactMethod}
                  onChange={(e) =>
                    handleChange("contactMethod", e.target.value)
                  }
                  onBlur={() => handleBlur("contactMethod")}
                  error={errors.contactMethod}
                  touched={touched.contactMethod}
                />
              </div>

              <div className="form-grid-full">
                <FormTextarea
                  label="Mensaje o Solicitud Adicional (Opcional)"
                  name="message"
                  placeholder="Ej: Deseo consultar si disponen de parqueadero, aire acondicionado o si el desayuno está incluido..."
                  rows={4}
                  value={values.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  error={errors.message}
                  touched={touched.message}
                />
              </div>
            </div>

            <div className="form-actions">
              <Link to="/" className="btn btn-ghost">
                <ArrowLeft size={16} />
                Cancelar
              </Link>
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={isSubmitting}
              >
                <MessageSquare size={18} />
                {isSubmitting ? "Abriendo canal..." : "Generar Mensaje"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
