import { FC } from "react";
import styles from "./Testimonial.module.css"
import doubleQuote from "./assets/doubleQuote.png"

interface TestimonialTextProps {
    hasImage: boolean;
    description: string;
    personName?: string;
    personTitle?: string;
}

const TestimonialText: FC<TestimonialTextProps> = ({ hasImage, description, personName, personTitle }) => {
    return (
        <div className={`${styles.testimonialText} ${hasImage ? styles.hasImageText : styles.noImageText}`}>
            {hasImage && <img src={doubleQuote} alt="double quote"/>}
            <p className={styles.description}>"{description}"</p>
            <br />
            <span className={styles.personName}>{personName}</span>
            {hasImage ? <br />
                : personName && personTitle && 
                <span className={styles.slash}> / </span>
            }
            <span className={styles.personTitle}>{personTitle}</span>
        </div>
    );
};

export default TestimonialText