import React from "react";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-zinc-900 text-white p-4 rounded relative w-3/4 md:w-1/2">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-2xl text-white"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;

