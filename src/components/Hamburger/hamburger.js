import React from "react";
import './hamburger.css'
export default function Hamburger({ isOpen }) {
    return (
        <>
            <div className="hamburger">
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
            </div>

            <style jsx="true">{`

                .burger1 {
                    transform: ${isOpen ? 'rotate(45deg) translateY(4px) translateX(4px)' : 'rotate(0)'};
                }
                .burger2 {
                    opacity:${ isOpen ? '0' : '1' };
                    transform:${ isOpen ? 'translateX(100%)' : 'translateX(0)' };
                }
                .burger3 {
                    transform:${ isOpen ? 'rotate(-45deg)' : 'rotate(0)' };
                }
            `}</style>
        </>
    );
}
