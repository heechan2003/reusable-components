import { createPortal } from "react-dom";
import Toast from "../reusables/Toast/Toast"
import useToasts from "../reusables/Toast/useToasts"

type ToastStatus = "success" | "error" | "warning" | "info";

interface ToastConfig {
    id: string;
    status: ToastStatus;
}

export default function Toasts() {
    const toasts:ToastConfig[] = [
        { id: "t1", status: "success"  },
        { id: "t2", status: "error"  },
        { id: "t3", status: "warning"  },
        { id: "t4", status: "info"  }
    ];

    const initialState = toasts.reduce((acc, { id }) => {
            acc[id] = false;
            return acc;
        }, {} as Record<string, boolean>);
    
    const { isOpen, toggle } = useToasts(initialState);

    const activeStyles = { color: "white" };

    return (
        <div className="page-wrap toast-page">
            <h2>Toasts</h2>
            <div className="component-wrap toasts-wrap">
                    <div className="toggles-wrap">
                    {toasts.map(({id, status}) => (
                        <button
                            key={id}
                            className={`toast-toggle toggle-${status}`}
                            onClick={() => toggle(id)}
                            style={
                                isOpen(id)
                                    ? activeStyles
                                    : undefined
                            }
                        >
                            {`${status.charAt(0).toUpperCase()}${status.slice(1)}`}
                        </button>
                    ))}
                    </div>
                {toasts.map(({ id, status }) => {
                    const portalTarget = document.getElementById("modal-root");
                    if (!portalTarget) return null;
                    return createPortal(
                        <Toast
                            key={id}
                            className={id}
                            isOpen={isOpen(id)}
                            toggle={() => toggle(id)}
                            status={status}
                            title={`${status.charAt(0).toUpperCase()}${status.slice(1)}`}
                            description="Lorem ipsum, dolor sit amet"
                        />,
                        portalTarget
                    );
                })}
            </div>
        </div>
    )
}