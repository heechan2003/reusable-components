import { FC } from "react";
import clsx from "clsx";
import styles from "./Tooltip.module.css"

interface TooltipTextProps {
    title: string;
    description: string;
}

const TooltipText: FC<TooltipTextProps> = ({ title, description }) => {
    const tooltipTextClassName = clsx(
        styles.tooltipText,
    )

    return (
        <div className={tooltipTextClassName}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default TooltipText