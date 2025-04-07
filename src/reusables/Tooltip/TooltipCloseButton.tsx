import { FC } from "react"
import styles from "./Tooltip.module.css"

interface TooltipCloseButtonProps {
    isOpen: boolean;
    toggle: () => void;
}

const TooltipCloseButton:FC<TooltipCloseButtonProps> = ({ isOpen, toggle }) => {
    return (
        <button
            className={styles.closeButton}
            aria-expanded={isOpen}
            onClick={toggle}
        >
            <i className="fa-solid fa-xmark"></i>
        </button>
    )
}

export default TooltipCloseButton