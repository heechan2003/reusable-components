import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const activeStyles = { color: "white" };
    const hoverStyles = { borderBottom: "4px solid white" };
    
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const navLinks = ["badges", "banners", "cards", "testimonials", "tooltips", "toasts"];

    return (
        <header>
            <Link className="logo" to="/"><i className="fa-solid fa-web-awesome"></i></Link>
            <nav>
                {navLinks.map((link) => (
                    <NavLink
                        key={link}
                        to={link}
                        style={({ isActive }) => 
                            isActive 
                                ? hoveredLink === link 
                                    ? { ...activeStyles, ...hoverStyles }
                                    : activeStyles
                                : undefined
                        }
                        onMouseEnter={() => setHoveredLink(link)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        {link.charAt(0).toUpperCase() + link.slice(1)}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}
