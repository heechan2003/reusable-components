import Card from "../reusables/Card/Card"
import { FaHeart } from "react-icons/fa";

export default function Cards() {
    return (
        <div className="page-wrap card-page">
            <h2>Cards</h2>
            <div className="component-wrap cards-wrap">
                <Card 
                    title="Easy Deployment"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit."
                />
                <Card
                    icon={<FaHeart />}
                    title="Easy Deployment"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit."
                    backgroundColor=" #ffb07c"
                />
            </div>
        </div>
    )
}