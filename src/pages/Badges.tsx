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
                <Badge className="one">
                    Default
                </Badge>
                <Badge className="two" color="red">Red</Badge>
                <Badge className="three" color="yellow">Yellow</Badge>
                <Badge className="four" color="green">Green</Badge>
                <Badge className="five" color="blue" shape="round">Blue</Badge>
                <Badge className="six" color="indigo" shape="round">Indigo</Badge>
                <Badge className="seven" color="purple" shape="round">Purple</Badge>
                <Badge className="eight" color="pink" shape="round">Pink</Badge>
                <Badge 
                    className="nine"
                    onClick={handleOnClick}
                    style={{backgroundColor: `${clickBadgeColor}`, cursor: "pointer"}}
                >
                    Clickable
                </Badge>
            </div>
        </div>
    )
}