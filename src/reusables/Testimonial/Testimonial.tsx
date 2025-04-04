import { FC, ReactNode } from "react"
import clsx from "clsx"
import styles from "./Testimonial.module.css"
import TestimonialText from "./TestimonialText"

interface TestimonialProps {
    children?: ReactNode;
    className?: string;
    imageUrl?: string;
    description: string;
    personName?: string;
    personTitle?: string;
}

const Testimonial:FC<TestimonialProps> = ({children, className, imageUrl, description, personName, personTitle, ...rest}) => {
    const testimonialClassName = clsx(
        className,
        imageUrl ? styles.hasImage : styles.noImage,
    )

    return (
        <div className={testimonialClassName} {...rest}>
            {imageUrl ? 
                <img className="testimoial-image" src={imageUrl} alt="image"/> 
                : <i className="fas fa-home"></i>
            }
            <TestimonialText 
                hasImage={imageUrl ? true : false}
                description={description}
                personName={personName}
                personTitle={personTitle}
            />
            {children}
        </div>
    )
}

export default Testimonial
