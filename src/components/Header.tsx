import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const activeStyles = {
        color: "white"
    };

    const hoverStyles = {
        borderBottom: "4px solid white"
    };

    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    return (
        <header>
            <Link className="logo" to="/"><i className="fa-solid fa-web-awesome"></i></Link>
            <nav>
                <NavLink
                    to="badges"
                    style={({ isActive }) => {
                        if (isActive && hoveredLink === "badges") {
                            return { ...activeStyles, ...hoverStyles };
                        }
                        if (isActive) {
                            return activeStyles;
                        }
                        return undefined;
                    }}
                    onMouseEnter={() => setHoveredLink("badges")}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    Badges
                </NavLink>

                <NavLink
                    to="banners"
                    style={({ isActive }) => {
                        if (isActive && hoveredLink === "banners") {
                            return { ...activeStyles, ...hoverStyles };
                        }
                        if (isActive) {
                            return activeStyles;
                        }
                        return undefined;
                    }}
                    onMouseEnter={() => setHoveredLink("banners")}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    Banners
                </NavLink>

                <NavLink
                    to="cards"
                    style={({ isActive }) => {
                        if (isActive && hoveredLink === "cards") {
                            return { ...activeStyles, ...hoverStyles };
                        }
                        if (isActive) {
                            return activeStyles;
                        }
                        return undefined;
                    }}
                    onMouseEnter={() => setHoveredLink("cards")}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    Cards
                </NavLink>

                <NavLink
                    to="testimonials"
                    style={({ isActive }) => {
                        if (isActive && hoveredLink === "testimonials") {
                            return { ...activeStyles, ...hoverStyles };
                        }
                        if (isActive) {
                            return activeStyles;
                        }
                        return undefined;
                    }}
                    onMouseEnter={() => setHoveredLink("testimonials")}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    Testimonials
                </NavLink>

                <NavLink
                    to="tooltips"
                    style={({ isActive }) => {
                        if (isActive && hoveredLink === "tooltips") {
                            return { ...activeStyles, ...hoverStyles };
                        }
                        if (isActive) {
                            return activeStyles;
                        }
                        return undefined;
                    }}
                    onMouseEnter={() => setHoveredLink("tooltips")}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    Tooltips
                </NavLink>

                <NavLink
                    to="toasts"
                    style={({ isActive }) => {
                        if (isActive && hoveredLink === "toasts") {
                            return { ...activeStyles, ...hoverStyles };
                        }
                        if (isActive) {
                            return activeStyles;
                        }
                        return undefined;
                    }}
                    onMouseEnter={() => setHoveredLink("toasts")}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    Toasts
                </NavLink>
            </nav>
        </header>
    );
}
