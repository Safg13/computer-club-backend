import { useState } from "react";
import { root } from '.';
import { useEffect } from "react";
import CreateUsersPage from "./components/CreateUsersPage";
import UserEditorWindow from "./components/UI/modals/UserEditorWindow.jsx";
import { TEST_URL } from './MAIN.js';
import { GET_USERS_URL } from './MAIN.js';
import { DELETE_USERS_URL } from './MAIN.js';

function Users() {
    const [errors, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [GettedUsers, setGettedUsers] = useState([]);

    const [userItems, setUserItems] = useState([])
    const [editorWindowActive, setEditorWindowActive] = useState(false)
    const [currentItem, setCurrentItem] = useState({})

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const currentItemParameters = {
        id: id,
        name: name,
        email: email,
        phone: phone,
        password: password,
        setId: setId,
        setName: setName,
        setEmail: setEmail,
        setPhone: setPhone,
        setPassword: setPassword,
    };

    const GetUsers = () => {

        fetch(GET_USERS_URL)
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUserItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log(errors);
                    console.log(isLoaded);
                }
            )

    };
    useEffect((GetUsers), []);

    const deleteUser = (item) => {
        fetch((DELETE_USERS_URL + item.id), {
            method: 'DELETE'
        });

        setUserItems(userItems.filter(i => i.id !== item.id))
    };

    const editUser = (item) => {
        setEditorWindowActive(true);
        setCurrentItem(item);
    };

    return (
        <CreateUsersPage
            editUser={editUser}
            deleteUser={deleteUser}
            userItems={userItems}
            editorWindowActive={editorWindowActive}
            setEditorWindowActive={setEditorWindowActive}
            currentItem={currentItem}
            GetUsers={GetUsers}
            currentItemParameters={currentItemParameters}
        />
    );
};

export default Users;