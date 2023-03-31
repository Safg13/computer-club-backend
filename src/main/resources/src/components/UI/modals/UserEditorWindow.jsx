import React from 'react'
import { useState } from 'react'
import classes from './UserEditorWindow.module.css'
import { PUT_USERS_URL } from '../../../MAIN'
import { useEffect } from 'react'

const UserEditorWindow = ({ currentItemParameters, active, setActive, currentItem, GetUsers }) => {

    const confirmUpdate = async () => {

        const user = {
            id: currentItemParameters.id,
            name: currentItemParameters.name,
            email: currentItemParameters.email,
            phone: currentItemParameters.phone,
            password: currentItemParameters.password
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }

        if (JSON.stringify(currentItem) !== JSON.stringify(user)) {
            console.log('не равны');

            await fetch(PUT_USERS_URL + currentItem.id, requestOptions);
            GetUsers();
            setActive(false);

        } else {
            console.log('равны');
            setActive(false);
        }
    }

    return (
        <div className={
            active ? ([classes.editor_window, classes.editor_window_active].join(' ')) : (classes.editor_window)
        }>
            <div className={classes.editor_window_content}>
                <a className="editor_window_close" tabIndex="1" onClick={() => setActive(false)}>
                    <svg width="25px" height="25px" viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" />
                    </svg></a>
                <h2 className="editor_window_title">Редактирование</h2>
                <div className="editor_window_place_div">
                    <div>
                        <span className="editor_window_label">id</span>
                        <input type="text" id="id" value={currentItemParameters.id} className="form_place editor_window_place--non-active" readOnly></input>
                    </div>
                    <div>
                        <span className="editor_window_label">name</span>
                        <input
                            type="text"
                            id="name"
                            value={currentItemParameters.name}
                            onChange={e => currentItemParameters.setName(e.target.value)}
                            className="form_place editor_window_place"
                        ></input>
                    </div>
                    <div>
                        <span className="editor_window_label">email</span>
                        <input
                            type="text"
                            id="email"
                            value={currentItemParameters.email}
                            onChange={e => currentItemParameters.setEmail(e.target.value)}
                            className="form_place editor_window_place"
                        ></input>
                    </div>
                    <div>
                        <span className="editor_window_label">phone</span>
                        <input
                            type="text"
                            id="phone"
                            value={currentItemParameters.phone}
                            onChange={e => currentItemParameters.setPhone(e.target.value)}
                            className="form_place editor_window_place"
                        ></input>
                    </div>
                    <div>
                        <span className="editor_window_label">password</span>
                        <input
                            type="text"
                            id="password"
                            value={currentItemParameters.password}
                            onChange={e => currentItemParameters.setPassword(e.target.value)}
                            className="form_place editor_window_place"
                        ></input>
                    </div>
                </div>
                <button onClick={confirmUpdate} className="editor_window_submit">Принять</button>
            </div>
        </div>
    )



}

export default UserEditorWindow;

