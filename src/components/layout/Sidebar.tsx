import { NavLink } from "react-router-dom";

const sidebarLinks = [
  { to: "/", label: "Inicio" },
  { to: "/reservar", label: "Reservar Tour" },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {sidebarLinks.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to === "/"}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
