import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Header() {
    const [showNav, setShowNav] = useState(true);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const navRef = useRef<HTMLDivElement | null>(null);
    const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

    const handleShowNav = () => {
        setShowNav(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                showNav &&
                navRef.current &&
                !navRef.current.contains(event.target as Node) &&
                !toggleButtonRef.current?.contains(event.target as Node)
            ) {
                setShowNav(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showNav]);

    const navLinks = ["badges", "banners", "cards", "testimonials", "tooltips", "toasts"];

    return (
        <header>
            <Link className="logo" to="/">
                <i className="fa-solid fa-web-awesome"></i>
            </Link>

            <nav ref={navRef} className={clsx(showNav && "nav-active")}>
                {navLinks.map((link) => (
                    <NavLink
                        key={link}
                        to={link}
                        className={({ isActive }) =>
                            clsx(
                                `nav-link-${link}`,
                                isActive && "nav-link-active",
                                hoveredLink === link && isActive && "nav-link-hover"
                            )
                        }
                        onMouseEnter={() => setHoveredLink(link)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        {link.charAt(0).toUpperCase() + link.slice(1)}
                    </NavLink>
                ))}
            </nav>

            <button
                ref={toggleButtonRef}
                className={`nav-toggle ${showNav && "nav-toggle-active"}`}
                onClick={handleShowNav}
            >
                <i className="fa-solid fa-bars"></i>
            </button>
        </header>
    );
}