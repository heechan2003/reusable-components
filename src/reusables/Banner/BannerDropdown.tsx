import { ReactNode, FC } from "react"
import styles from "./Banner.module.css"

interface BannerDropdownProps {
    children: ReactNode;
    status: "success" | "warning" | "error" | "info";
}

const BannerDropdown:FC<BannerDropdownProps> = ({ children, status }) => {
    return (
        <div 
            className={`${styles.bannerDropdown} ${styles[status]}`}
        >
            {children}
        </div>
    )
}

export default BannerDropdown