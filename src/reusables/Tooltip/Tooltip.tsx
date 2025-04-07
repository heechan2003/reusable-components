import { FC, ReactNode } from "react"
import clsx from "clsx"
import styles from "./Tooltip.module.css"

interface TooltipProps {
    children?: ReactNode;
    className?: string;
    isOpen: boolean;
    theme?: string
    color?: string;
}

const Tooltip:FC<TooltipProps> = ({children, className, theme, color, isOpen, ...rest}) => {
    const tooltipClassName = clsx(
        className,
        styles.tooltip,
        theme && styles[theme],
        color && styles[color]
    )
    
    const tooltipPointerClassName = clsx(
        styles.tooltipPointer,
        theme && styles[`pointer-${theme}`],
        color && styles[`pointer-${color}`]
    )

    return (
        isOpen &&
        <div className={tooltipClassName} {...rest}>
            <i className="fa-solid fa-box"></i>
            {children}
            <div className={tooltipPointerClassName} />
        </div>
    )
}

export default Tooltip
