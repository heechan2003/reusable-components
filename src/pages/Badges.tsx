import { useState } from "react"
import Badge from "../reusables/Badge/Badge"

export default function Badges() {
    const [clickBadgeColor, setClickBadgeColor] = useState("#F3F4F6");
    function handleOnClick() {
        setClickBadgeColor(prev => prev === "#F3F4F6" ? "#ff758c" : "#F3F4F6")
    }

    return (
        <div className="page-wrap badge-page">
            <h2>Badges</h2>
            <div className="component-wrap badges-wrap">
                <Badge className="badge one">
                    Default
                </Badge>
                <Badge className="badge two" color="red">Red</Badge>
                <Badge className="badge three" color="yellow">Yellow</Badge>
                <Badge className="badge four" color="green" shape="round">Green</Badge>
                <Badge className="badge five" color="blue" shape="round">Blue</Badge>
                <Badge className="badge six" color="indigo" shape="round">Indigo</Badge>
                <Badge className="badge seven" color="purple" shape="round">Purple</Badge>
                <Badge 
                    className="badge eight"
                    onClick={handleOnClick}
                    style={{backgroundColor: `${clickBadgeColor}`, cursor: "pointer"}}
                >
                    Clickable
                </Badge>
            </div>
        </div>
    )
}