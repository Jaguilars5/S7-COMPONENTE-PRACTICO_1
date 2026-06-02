import { Mail, MapPin, Mountain, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/navigation";
import { hotels } from "../../data/hotels";
import { footerContent } from "../../data/footer";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-title">
            <Mountain size={24} />
            {footerContent.brandName}
          </div>
          <p className="footer-brand-description">
            {footerContent.brandDescription}
          </p>
        </div>

        <div>
          <h3 className="footer-column-title">Enlaces</h3>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-column-title">Hoteles</h3>
          <ul className="footer-links">
            {hotels.map((hotel) => (
              <li key={hotel.id}>
                <Link to={`/reservar?hotel=${hotel.id}`}>{hotel.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-social">
          <h3 className="footer-column-title">Contacto</h3>
          <div className="footer-links">
            <a href={`mailto:${footerContent.contact.email}`}>
              <Mail size={14} /> {footerContent.contact.email}
            </a>
            <a href={`tel:${footerContent.contact.phone.replace(/\s+/g, "")}`}>
              <Phone size={14} /> {footerContent.contact.phone}
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Plaza+de+la+Independencia+Zaruma" target="_blank" rel="noopener noreferrer">
              <MapPin size={14} /> {footerContent.contact.address}
            </a>
          </div>
          <p
            className="footer-brand-description meta-info"
          >
            {footerContent.contact.cantonizationInfo}
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {footerContent.brandName}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
