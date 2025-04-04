import { FC } from "react";
import styles from "./Card.module.css"

interface CardTextProps {
    title: string;
    description: string;
}

const CardText:FC<CardTextProps> = ({title, description}) => {
    return (
        <div className={styles.cardText}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default CardText