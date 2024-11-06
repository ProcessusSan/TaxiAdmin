import React from "react";
import './authorization.css'

export default function Authorization() {
    return (
            <form className="form">
                <div className="form_group_login">
                    <label className="form_label_login">Логин</label>
                    <input className="form_input_login"></input>
                </div>
                <div className="form_group_pass">
                    <label className="form_label_pass">Пароль</label>
                    <input className="form_input_pass"></input >
                </div>
                <div>
                    <button className="form_button"></button>
                </div>
            </form>
    )
}
