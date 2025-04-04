import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Badge.module.css"

interface BadgeProps extends HTMLAttributes<HTMLButtonElement> {
    shape?: "round" | "square";
    color?: "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink";
    className?: string;
}

const Badge: FC<BadgeProps> = ({ children, shape, color, className, ...rest }) => {
    const badgeClassName = clsx(
        styles.badge,
        shape && styles[shape],
        color && styles[color],
        className
    );

    return (
        <button className={badgeClassName} {...rest}>
            {children}
        </button>
    );
}

export default Badge;
