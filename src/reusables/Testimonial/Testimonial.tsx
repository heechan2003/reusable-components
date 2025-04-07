import { FC, ReactNode } from "react"
import clsx from "clsx"
import logo from "./assets/Logo.png"
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
        styles.testimonial,
        imageUrl ? styles.hasImage : styles.noImage,
    )

    return (
        <div className={testimonialClassName} {...rest}>
            {imageUrl ? 
                <img src={imageUrl} alt="image"/> 
                : <img src={logo} alt="logo" />
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
