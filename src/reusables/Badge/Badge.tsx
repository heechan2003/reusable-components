import { ReactNode, FC, HTMLAttributes } from "react";
import clsx from "clsx";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    shape?: string;
    color?: string;
    className?: string;
}

const Badge: FC<BadgeProps> = ({ children, className, shape, color, ...rest }) => {
    const badgeClassName = clsx(
        className,
        shape && `badge-${shape}`,
        color && `badge-${color}`
    );

    return (
        <div className={badgeClassName} {...rest}>
            {children}
        </div>
    );
}

export default Badge;
