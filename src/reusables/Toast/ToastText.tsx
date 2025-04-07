import { FC } from "react";
import styles from "./Toast.module.css"

interface ToastTextProps {
    title: string;
    description: string;
}

const ToastText: FC<ToastTextProps> = ({ title, description }) => {
    return (
        <div className={styles.toastText}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default ToastText