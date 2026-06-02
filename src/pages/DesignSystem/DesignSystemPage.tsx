import { Check, MapPin, Mountain, Star } from "lucide-react";
import { Button } from "../../components/buttons/Button";
import { Card } from "../../components/cards/Card";
import { FormInput } from "../../components/forms/FormInput";
import { FormSelect } from "../../components/forms/FormSelect";
import { FormTextarea } from "../../components/forms/FormTextarea";

const colors = [
  { name: "Gold 500", hex: "#c59b27", class: "bg-gold", style: { backgroundColor: "var(--color-gold-500)" } },
  { name: "Gold 100", hex: "#f3e9cc", class: "bg-gold-light", style: { backgroundColor: "var(--color-gold-100)" } },
  { name: "Gold 700", hex: "#896a16", class: "text-gold-dark", style: { backgroundColor: "var(--color-gold-700)" } },
  { name: "Green 600", hex: "#388e3c", class: "bg-green", style: { backgroundColor: "var(--color-green-600)" } },
  { name: "Green 50", hex: "#e8f5e9", class: "bg-green-light", style: { backgroundColor: "var(--color-green-50)" } },
  { name: "Cream", hex: "#fffdf5", class: "bg-cream", style: { backgroundColor: "var(--color-cream)" } },
  { name: "Warm Black", hex: "#1a1410", class: "bg-dark", style: { backgroundColor: "var(--color-warm-black)" } },
  { name: "Warm Gray 100", hex: "#ebe8e4", class: "bg-cream-dark", style: { backgroundColor: "var(--color-warm-gray-100)" } },
  { name: "Warm Gray 600", hex: "#5e5750", class: "text-secondary", style: { backgroundColor: "var(--color-warm-gray-600)" } },
];

const typography = [
  {
    name: "Display 7xl",
    class: "",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-7xl)",
      fontWeight: 700,
    },
  },
  {
    name: "Display 5xl",
    class: "",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-5xl)",
      fontWeight: 700,
    },
  },
  {
    name: "Display 4xl",
    class: "",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-4xl)",
      fontWeight: 700,
    },
  },
  {
    name: "Display 3xl",
    class: "",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-3xl)",
      fontWeight: 600,
    },
  },
  {
    name: "Display xl",
    class: "",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xl)",
      fontWeight: 600,
    },
  },
  {
    name: "Body lg",
    class: "",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lg)",
      fontWeight: 400,
    },
  },
  {
    name: "Body base",
    class: "",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      fontWeight: 400,
    },
  },
  {
    name: "Body sm",
    class: "",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: 400,
    },
  },
  {
    name: "Body xs",
    class: "",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: 500,
    },
  },
];

const spaceTokens = [
  { token: "--space-xs", value: "0.25rem" },
  { token: "--space-sm", value: "0.5rem" },
  { token: "--space-md", value: "1rem" },
  { token: "--space-lg", value: "1.5rem" },
  { token: "--space-xl", value: "2rem" },
  { token: "--space-2xl", value: "3rem" },
  { token: "--space-3xl", value: "4rem" },
  { token: "--space-4xl", value: "6rem" },
  { token: "--space-5xl", value: "8rem" },
  { token: "--space-6xl", value: "12rem" },
];

const radiusTokens = [
  { token: "--radius-sm", value: "4px" },
  { token: "--radius-md", value: "8px" },
  { token: "--radius-lg", value: "12px" },
  { token: "--radius-xl", value: "16px" },
  { token: "--radius-full", value: "9999px" },
];

const shadowTokens = [
  { token: "--shadow-sm", value: "0 1px 2px rgba(26, 20, 16, 0.05)" },
  { token: "--shadow-md", value: "0 4px 6px rgba(26, 20, 16, 0.07)" },
  { token: "--shadow-lg", value: "0 10px 25px rgba(26, 20, 16, 0.1)" },
  { token: "--shadow-xl", value: "0 20px 50px rgba(26, 20, 16, 0.12)" },
  { token: "--shadow-2xl", value: "0 25px 60px rgba(26, 20, 16, 0.2)" },
  { token: "--shadow-gold", value: "0 4px 20px rgba(255, 193, 7, 0.3)" },
  { token: "--shadow-gold-lg", value: "0 8px 35px rgba(255, 193, 7, 0.35)" },
];

export function DesignSystemPage() {
  return (
    <div className="design-system-page">
      <div className="ds-container">
        <div
          className="section-centered ds-title-centered"
        >
          <div
            className="ds-header-logo"
          >
            <Mountain size={28} className="text-gold" />
          </div>
          <h1 className="section-title">Sistema de Diseno</h1>
          <p className="section-subtitle">
            Documentacion visual completa de tokens, componentes y patrones de
            la interfaz de Zaruma Turismo.
          </p>
        </div>

        <div className="ds-section">
          <h2 className="ds-section-title">Paleta de Colores</h2>
          <div className="ds-grid">
            {colors.map((color) => (
              <div key={color.name} className="ds-color-swatch">
                <div
                  className="ds-color-visual"
                  style={color.style || undefined}
                >
                  {!color.style && (
                    <div
                      className={color.class}
                    />
                  )}
                </div>
                <div className="ds-color-info">
                  <div className="ds-color-name">{color.name}</div>
                  <div className="ds-color-hex">{color.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ds-section">
          <h2 className="ds-section-title">Tipografia</h2>
          <div className="ds-subsection-title">
            Playfair Display (Titulos) + Inter (Cuerpo)
          </div>
          {typography.map((type) => (
            <div key={type.name} className="ds-typography-sample">
              <div
                className="ds-typography-info"
              >
                <span style={type.style as React.CSSProperties}>
                  {type.name}
                </span>
                <span
                  className="ds-typography-meta"
                >
                  {type.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="ds-section">
          <h2 className="ds-section-title">Sistema de Espaciado</h2>
          <div
            className="ds-grid ds-space-tokens"
          >
            {spaceTokens.map((space) => (
              <div key={space.token} className="ds-token-row">
                <span className="ds-token-name">{space.token}</span>
                <span className="ds-token-value">{space.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ds-section">
          <h2 className="ds-section-title">Border Radius</h2>
          <div
            className="ds-grid ds-radius-tokens"
          >
            {radiusTokens.map((radius) => (
              <div key={radius.token} className="ds-token-row">
                <span className="ds-token-name">{radius.token}</span>
                <span className="ds-token-value">{radius.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ds-section">
          <h2 className="ds-section-title">Sombras</h2>
          <div
            className="ds-grid ds-shadow-tokens"
          >
            {shadowTokens.map((shadow) => (
              <div key={shadow.token} className="ds-token-row">
                <span className="ds-token-name">{shadow.token}</span>
                <span
                  className="ds-token-value ds-token-shadow-value"
                >
                  {shadow.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="ds-section">
          <h2 className="ds-section-title">Botones</h2>
          <div className="ds-subsection-title">Variantes</div>
          <div className="ds-component-row">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="green">Green</Button>
          </div>

          <div className="ds-subsection-title">Tamanos</div>
          <div className="ds-component-row">
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="md">
              Medium
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>

          <div className="ds-subsection-title">Estados</div>
          <div className="ds-states-grid">
            <div className="ds-state-card">
              <Button variant="primary">Default</Button>
              <div className="ds-state-label">Estado normal</div>
            </div>
            <div className="ds-state-card">
              <Button variant="primary" disabled>
                Disabled
              </Button>
              <div className="ds-state-label">Estado deshabilitado</div>
            </div>
            <div
              className="ds-state-card hover-test"
            >
              <Button variant="secondary">Hover</Button>
              <div className="ds-state-label">Hover (pase el mouse)</div>
            </div>
            <div className="ds-state-card">
              <div
                className="ds-state-card-focus-wrapper"
              >
                <Button variant="primary">Focus</Button>
                <small>
                  Presione Tab para ver el focus
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="ds-section">
          <h2 className="ds-section-title">Cards</h2>
          <div className="ds-subsection-title">Variantes</div>
          <div
            className="ds-cards-demo-grid"
          >
            <Card variant="default">
              <div className="card-icon">
                <MapPin size={20} />
              </div>
              <h3 className="card-title">Default</h3>
              <p className="card-text">Card con borde simple y fondo blanco.</p>
            </Card>
            <Card variant="elevated">
              <div className="card-icon">
                <MapPin size={20} />
              </div>
              <h3 className="card-title">Elevated</h3>
              <p className="card-text">
                Card con sombra para destacar contenido.
              </p>
            </Card>
            <Card variant="accent">
              <div className="card-icon">
                <MapPin size={20} />
              </div>
              <h3 className="card-title">Accent</h3>
              <p className="card-text">Card con borde superior dorado.</p>
            </Card>
            <Card variant="green">
              <div className="card-icon card-icon-green">
                <Check size={20} />
              </div>
              <h3 className="card-title">Green</h3>
              <p className="card-text">Card con borde superior verde.</p>
            </Card>
          </div>
        </div>

        <div className="ds-section">
          <h2 className="ds-section-title">Formularios</h2>
          <div className="ds-subsection-title">Inputs</div>
          <div
            className="ds-forms-demo-col"
          >
            <FormInput
              label="Input Default"
              name="demo-default"
              type="text"
              placeholder="Escriba algo..."
            />
            <FormInput
              label="Input con Error"
              name="demo-error"
              type="text"
              placeholder="Campo invalido"
              value="mal"
              error="Este campo no es valido"
              touched
            />
            <FormInput
              label="Input Disabled"
              name="demo-disabled"
              type="text"
              placeholder="Campo deshabilitado"
              disabled
            />
          </div>

          <div
            className="ds-subsection-title"
          >
            Select
          </div>
          <div className="ds-form-demo-field-wrapper">
            <FormSelect
              label="Seleccione un tour"
              name="demo-select"
              options={[
                { value: "1", label: "Tour Historico" },
                { value: "2", label: "Tour Gastronomico" },
              ]}
            />
          </div>

          <div
            className="ds-subsection-title"
          >
            Textarea
          </div>
          <div className="ds-form-demo-field-wrapper">
            <FormTextarea
              label="Mensaje"
              name="demo-textarea"
              placeholder="Escriba su mensaje..."
              rows={3}
            />
          </div>

          <div
            className="ds-subsection-title"
          >
            Estados
          </div>
          <div className="ds-states-grid">
            <div className="ds-state-card">
              <div className="ds-form-demo-field-full">
                <FormInput
                  label="Default"
                  name="s-default"
                  type="text"
                  placeholder="Default"
                />
              </div>
            </div>
            <div className="ds-state-card">
              <div className="ds-form-demo-field-full">
                <div className="input-wrapper ds-input-wrapper-relative">
                  <label className="input-label">Focus</label>
                  <input
                    className="input-field ds-input-focus-demo"
                    placeholder="Focus"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="ds-state-card">
              <div className="ds-form-demo-field-full">
                <FormInput
                  label="Error"
                  name="s-error"
                  type="text"
                  placeholder="Error"
                  value="invalido"
                  error="Campo invalido"
                  touched
                />
              </div>
            </div>
            <div className="ds-state-card">
              <div className="ds-form-demo-field-full">
                <FormInput
                  label="Disabled"
                  name="s-disabled"
                  type="text"
                  placeholder="Disabled"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        <div className="ds-section">
          <h2 className="ds-section-title">Badges</h2>
          <div className="ds-component-row">
            <span className="badge badge-gold">Dorado</span>
            <span className="badge badge-green">Verde</span>
            <span className="badge badge-gray">Gris</span>
          </div>
        </div>

        <div className="ds-section">
          <h2 className="ds-section-title">Dividers</h2>
          <hr className="divider" />
          <p className="card-text ds-card-text-center">
            Divider simple con color --color-border-light
          </p>
          <hr className="divider" />
        </div>

        <div className="ds-section">
          <h2 className="ds-section-title">Rating Stars</h2>
          <div className="ds-component-row">
            <div className="rating-stars">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={i < 4 ? "currentColor" : "none"}
                  opacity={i < 4 ? 1 : 0.3}
                />
              ))}
            </div>
            <span className="card-text">4 de 5 estrellas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
