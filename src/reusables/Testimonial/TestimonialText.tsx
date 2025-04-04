import { FC } from "react";
import styles from "./Testimonial.module.css"

interface TestimonialTextProps {
    hasImage: boolean;
    description: string;
    personName?: string;
    personTitle?: string;
}

const TestimonialText: FC<TestimonialTextProps> = ({ hasImage, description, personName, personTitle }) => {
    return (
        <div className={hasImage ? styles.hasImageText : styles.noImageText}>
            {hasImage && <span className={styles.doubleQuote}>"</span>}
            <p className={styles.description}>{description}</p>
            <br />
            <span className={styles.personName}>{personName}</span>
            {hasImage ? <br /> : <span className={styles.slash}>/</span>}
            <span className={styles.personTitle}>{personTitle}</span>
        </div>
    );
};

export default TestimonialText