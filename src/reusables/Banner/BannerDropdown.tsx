import { ReactNode, FC } from "react"

interface BannerDropdownProps {
    children: ReactNode;
    status: "success" | "warning" | "error" | "info";
}

const BannerDropdown:FC<BannerDropdownProps> = ({ children, status }) => {
    return (
        <div 
        className={`banner-dropdown banner-dropdown-${status}`}
        >
            {children}
        </div>
    )
}

export default BannerDropdown