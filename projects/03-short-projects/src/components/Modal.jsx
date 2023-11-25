
import { createPortal } from "react-dom"

export default function Modal ({ children }) {
    return createPortal(
        <div className="bg-white-10 fixed top-1/3 left-1/3 p-4 rounded-lg">
            { children }
        </div>,
        document.getElementById('modal')
    )
}