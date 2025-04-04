import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

interface BadgeProps extends HTMLAttributes<HTMLButtonElement> {
    shape?: string;
    color?: "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink";
    className?: string;
}

const Badge: FC<BadgeProps> = ({ children, className, shape, color, ...rest }) => {
    const badgeClassName = clsx(
        "badge",
        shape && `badge-${shape}`,
        color && `badge-${color}`,
        className
    );

    return (
        <button className={badgeClassName} {...rest}>
            {children}
        </button>
    );
}

export default Badge;
