import { useState, ReactNode, FC } from "react";
import clsx from "clsx";
import styles from "./Banner.module.css"
import BannerButton from "./BannerButton";
import BannerDropdown from "./BannerDropdown";

interface BannerProps {
    children?: ReactNode;
    status: "success" | "warning" | "error" | "info";
    className?: string;
    title: string;
    description: string;
}

const Banner: FC<BannerProps> = ({ children, description, status, className, title, ...rest}) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(open => !open);
    }

    const bannerClassName = clsx(
        styles.banner,
        `banner-${status}`,
        className
    )

    return (
        <div className={bannerClassName} {...rest}>
            <BannerButton
                status={status}
                isOpen={isOpen}
                toggle={toggle}
                title={title}
            />
            {isOpen ? 
                <BannerDropdown status={status}>{description}</BannerDropdown>
                : null
            }
            {children}
        </div>
    )
}

export default Banner;