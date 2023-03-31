import React from "react";
import { UsersButton } from "./UI/button/UsersButton";
import { UsersDeleteButton } from "./UI/button/UsersButton";

const CreateUsersItems = (props) => {

    const editUserEvent = () => {        
        props.currentItemParameters.setId(props.item.id);
        props.currentItemParameters.setName(props.item.name);
        props.currentItemParameters.setEmail(props.item.email);
        props.currentItemParameters.setPhone(props.item.phone);
        props.currentItemParameters.setPassword(props.item.password);

        props.editUser(props.item);
    }

    return <div className="user_item flex" userid={props.item.id}>
        <div className="user_item_info flex">
            <div className="item_info_userId"><mark>id: </mark>{props.item.id}</div>
            <div className="item_info_userId"><mark>name: </mark>{props.item.name}</div>
            <div className="item_info_userId"><mark>email: </mark>{props.item.email}</div>
            <div className="item_info_userId"><mark>phone: </mark>{props.item.phone}</div>
            <div className="item_info_userId"><mark>password: </mark>{props.item.password}</div>
        </div>
        <div className="user_item_buttons flex">
            <UsersButton onClick={editUserEvent}>Редактировать</UsersButton>
            <UsersDeleteButton onClick={() => props.deleteUser(props.item)}>Удалить</UsersDeleteButton>
        </div>
    </div>;
}

export default CreateUsersItems;