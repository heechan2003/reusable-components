import { FC, ReactNode } from "react"
import clsx from "clsx"
import styles from "./Card.module.css"
import CardIcon from "./CardIcon"
import CardText from "./CardText"

interface CardProps {
    children?: ReactNode;
    className?: string;
    title: string;
    description: string;
    icon?: ReactNode;
    color?: string;
    backgroundColor?: string;
}

const Card:FC<CardProps> = ({children, className, title, description, icon, color, backgroundColor, ...rest}) => {
    const cardClassName = clsx(
        styles.card,
        className
    )

    return (
        <div className={cardClassName} {...rest}>
            <CardIcon 
                icon={icon} 
                color={color}
                backgroundColor={backgroundColor}
            />
            <CardText 
                title={title}
                description={description}
            />
            {children}
        </div>
    )
}

export default Card