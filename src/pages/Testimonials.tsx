import Testimonial from "../reusables/Testimonial/Testimonial"

export default function Testimonials() {
    return (
        <div className="page-wrap testimonial-page">
            <h2>Testimonial</h2>
            <div className="component-wrap testimonials-wrap">
            <Testimonial
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa soluta 
                delectus eum quaerat dolore at perferendis inventore praesentium optio nam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa soluta 
                delectus eum quaerat dolore at perferendis inventore praesentium optio nam."
                personName="John Doe"
                personTitle="Head Manager"
            />
            <Testimonial
                imageUrl="https://pbs.twimg.com/profile_images/1752355537776267265/kLv5KrqC_400x400.jpg"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa soluta 
                delectus eum quaerat dolore at perferendis inventore praesentium optio nam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa soluta 
                delectus eum quaerat dolore at perferendis inventore praesentium optio nam."
                personName="Bob Ziroll"
                personTitle="Legend"
            />
            </div>
        </div>
    )
}