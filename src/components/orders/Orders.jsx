import React, { useState, useRef, useEffect } from "react";
import './orders.css';

export default function Orders () {
    const [selectedView, setSelectedView] = useState(1);

    const handleClickView = (view) => {
        setSelectedView(view)
    }

    return (
        <div className="orders">
            <div className="modalOrder">
                
            </div>
            <div className="viewOrders">
                <button className="viewBtnOrders" onClick={() => handleClickView(1)} style={{backgroundColor: selectedView === 1 ? '#506365' : '#7A9E9F'}}>Регистрация водителей</button>
                <button className="viewBtnOrders" onClick={() => handleClickView(2)} style={{backgroundColor: selectedView === 2 ? '#506365' : '#7A9E9F'}}>Регистрация партнёров</button>
            </div>
            <div className="tableContainer">
                <table className="tableOrder">
                    <thead>
                        <tr className="rowTitle">
                            <th className="titleFullName">ФИО</th>
                            <th>Telegram</th>
                            <th>Номер</th>
                            <th>Дата</th>
                            <th className="titleUrlJump">Jump</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="rowData">
                            <td className="fullName">Хомутов Вкитор Андреевич</td>
                            <td>@WYJBro</td>
                            <td>+79066642548</td>
                            <td>16.11.2024</td>
                            <td className="urlJump">htts://jump.taxi.orders/id=3212343522</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="historyOrders">

            </div>
        </div>
    )
}