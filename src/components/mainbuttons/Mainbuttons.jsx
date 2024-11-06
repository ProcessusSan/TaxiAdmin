import React from "react";
import './mainbuttons.css'

export default function Mainbuttons() {
    return (
        <>
            <div className="bb">
                <nav className="Buttons">
                    <button className="navMenuBtn">
                        <span className="navMenuText">Заявки</span>
                    </button>
                    <button className="navMenuBtn">
                        <span className="navMenuText">Управление акциями</span>
                    </button>
                    <button className="navMenuBtn">
                        <span className="navMenuText">Реферальные ключи</span>
                    </button>
                    <button className="navMenuBtn">
                        <span className="navMenuText">Коммуникации</span>
                    </button>
                    <button className="navMenuBtn">
                        <span className="navMenuText">Заявки и обращение</span>
                    </button>
                    <button className="navMenuBtn">
                        <span className="navMenuText">Отчеты</span>
                    </button> 
                </nav>
            </div>
            <div className="line"></div>
        </>
    )
}