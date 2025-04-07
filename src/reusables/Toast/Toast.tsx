import { FC, ReactNode } from "react"
import clsx from "clsx";
import styles from "./Toast.module.css"
import ToastText from "./ToastText";

interface ToastProps {
    children?: ReactNode;
    className?: string;
    isOpen: boolean;
    toggle: () => void;
    status: "success" | "error" | "warning" | "info";
    title: string;
    description: string;
}

const Toast:FC<ToastProps> = ({children, className, isOpen, toggle, status, title, description}) => {
    const toastClassName = clsx(
        className,
        styles.toast,
        styles[status]
    )

    return (
        isOpen &&
        <button 
            className={toastClassName}
            onClick={toggle}
        >
            {status === "error" && <i className="fa-solid fa-circle-xmark"></i>}
            {status === "warning" && <i className="fa-solid fa-circle-exclamation"></i>}
            {status === "success" && <i className="fa-solid fa-circle-check"></i>}
            {status === "info" && <i className="fa-solid fa-circle-info"></i>}
            <ToastText 
                title={title}
                description={description}
            />
            {children}
        </button>
    )
}

export default Toast;