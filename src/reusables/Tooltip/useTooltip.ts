import { useState } from "react";

type TooltipMap = Record<string, boolean>;

export default function useTooltips(initialState: TooltipMap = {}) {
    const [tooltips, setTooltips] = useState<TooltipMap>(initialState);

    const isOpen = (id: string) => tooltips[id];

    const areAllClosed = () => {
        return Object.values(tooltips).every(open => !open);
    };

    const toggle = (id: string) => {
        setTooltips(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const show = (id: string) => {
        setTooltips(prev => ({
            ...prev,
            [id]: true,
        }));
    };

    const hide = (id: string) => {
        setTooltips(prev => ({
            ...prev,
            [id]: false,
        }));
    };

    const showAll = () => {
        setTooltips(prev => {
            const updated: TooltipMap = {};
            for (const key in prev) {
                updated[key] = true;
            }
            return updated;
        });
    };

    const hideAll = () => {
        setTooltips(prev => {
            const updated: TooltipMap = {};
            for (const key in prev) {
                updated[key] = false;
            }
            return updated;
        });
    };

    return { isOpen, areAllClosed, toggle, show, hide, showAll, hideAll };
}