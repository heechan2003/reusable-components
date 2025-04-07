import useTooltips from "../reusables/Tooltip/useTooltip"
import Tooltip from "../reusables/Tooltip/Tooltip"
import TooltipText from "../reusables/Tooltip/TooltipText"
import TooltipCloseButton from "../reusables/Tooltip/TooltipCloseButton"

export default function Tooltips() {
    const tooltips = [
        { id: "t1", theme: "bold" },
        { id: "t2", theme: "light" },
        { id: "t3", theme: "light", color: "blue" },
        { id: "t4", theme: "bold", color: "blue" },
        { id: "t5", theme: "light", color: "pink" },
        { id: "t6", theme: "bold", color: "pink" },
        { id: "t7", theme: "light", color: "green" },
        { id: "t8", theme: "bold", color: "green" }
    ]

    const initialState = tooltips.reduce((acc, { id }) => {
        acc[id] = true;
        return acc;
    }, {} as Record<string, boolean>);

    const { isOpen, areAllClosed, toggle, showAll } = useTooltips(initialState);

    return (
        <div className="page-wrap tooltip-page">
            <h2>Tooltips</h2>
            <div className="component-wrap tooltips-wrap">
                {areAllClosed() && (
                    <button 
                        className="tooltip-show"
                        onClick={showAll}
                    >
                        <u>Show All</u>
                    </button>
                )}
                {tooltips.map(({id, theme, color}) => (
                    <Tooltip
                        key={id}
                        className={id}
                        theme={theme}
                        color={color}
                        isOpen={isOpen(id)}
                    >
                        <TooltipText 
                            title="Title"
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, commodi!"
                        />
                        <TooltipCloseButton
                            isOpen={isOpen(id)}
                            toggle={() => toggle(id)}
                        />
                    </Tooltip>
                ))}
            </div>
        </div>
    )
}