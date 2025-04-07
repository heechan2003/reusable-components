import { useState } from "react";

type ToastMap = Record<string, boolean>;

export default function useToasts(initialState: ToastMap = {}) {
    const [toasts, setToasts] = useState(initialState);
    const isOpen = (id: string) => toasts[id];

    const areAllClosed = () => {
        return Object.values(toasts).every(open => !open);
    };

    const toggle = (id: string) => {
        setToasts(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const show = (id: string) => {
        setToasts(prev => ({
            ...prev,
            [id]: true,
        }));
    };

    const hide = (id: string) => {
        setToasts(prev => ({
            ...prev,
            [id]: false,
        }));
    };

    const showAll = () => {
        setToasts(prev => {
            const updated: ToastMap = {};
            for (const key in prev) {
                updated[key] = true;
            }
            return updated;
        });
    };

    const hideAll = () => {
        setToasts(prev => {
            const updated: ToastMap = {};
            for (const key in prev) {
                updated[key] = false;
            }
            return updated;
        });
    };

    return { isOpen, areAllClosed, toggle, show, hide, showAll, hideAll };
}