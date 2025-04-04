import { useState, ReactNode, FC } from "react";
import clsx from "clsx";
import BannerButton from "./BannerButton";
import BannerDropdown from "./BannerDropdown";

interface BannerProps {
    children: ReactNode;
    status: "success" | "warning" | "error" | "info";
    className?: string;
    title: string;
}

const Banner: FC<BannerProps> = ({ children, status, className, title, ...rest}) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(open => !open);
    }

    const bannerClassName = clsx(
        "banner",
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
                <BannerDropdown status={status}>{children}</BannerDropdown>
                : null
            }
        </div>
    )
}

export default Banner;