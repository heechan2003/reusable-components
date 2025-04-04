import { FC, ReactNode, CSSProperties } from "react";
import styles from "./Card.module.css"

interface CardIconProps {
    icon?: ReactNode;
    color?: string;
    backgroundColor?: string;
}

const CardIcon:FC<CardIconProps> = ({icon, color, backgroundColor}) => {
    const iconStyles: CSSProperties = {
        color: color || "white",
        backgroundColor: backgroundColor || "#3F75FE",
    };

    return (
        <div className={styles.cardIcon} style={iconStyles}>
            {icon ? icon : <i className={`fa-solid fa-cloud-arrow-down ${styles.defaultIcon}`}></i>}
        </div>
    )
}

export default CardIcon