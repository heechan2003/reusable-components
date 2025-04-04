import { FC } from "react"

interface BannerButtonProps {
    status: "success" | "warning" | "error" | "info";
    isOpen: boolean;
    toggle: () => void;
    title: string;
}

const BannerButton:FC<BannerButtonProps> = ({ status, isOpen, toggle, title}) => {
    const openStyle = {
        borderRadius: "5px 5px 0 0"
    }

    return (
        <button
            className={`banner-button banner-button-${status}`}
            aria-expanded={isOpen}
            onClick={toggle}
            style={isOpen ? openStyle : undefined}
        >
            {status === "error" && <i className="fa-solid fa-circle-xmark"></i>}
            {status === "warning" && <i className="fa-solid fa-circle-exclamation"></i>}
            {status === "success" && <i className="fa-solid fa-circle-check"></i>}
            {status === "info" && <i className="fa-solid fa-circle-info"></i>}
            <p className="title">{title}</p>
        </button>
    )
}

export default BannerButton