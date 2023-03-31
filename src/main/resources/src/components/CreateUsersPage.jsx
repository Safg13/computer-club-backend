import React from 'react'
import CreateUsersItems from './CreateUsersItems';
import UserEditorWindow from './UI/modals/UserEditorWindow';

const CreateUsersPage = (props) => {
    return (
        <div className="App">
            <header className="header flex">
                <div className="conteiner header_conteiner flex">
                    <div className="header_mem_text">
                        <h1>Logo</h1>
                    </div>
                    <div className="authentication flex">
                        <a href="login.html" className="home_page_link header_link flex">
                            <span>Вход</span>
                        </a>
                        <a href="registration.html" className="home_page_link header_link flex">
                            <span>Регистрация</span>
                        </a>
                    </div>
                </div>
            </header>
            <div className="back_btn">
                <a href="index.html" className="back_btn_link">Назад</a>
            </div>
            <main className="main">
                <UserEditorWindow
                    active={props.editorWindowActive}
                    setActive={props.setEditorWindowActive}
                    currentItem={props.currentItem}
                    GetUsers={props.GetUsers}
                    currentItemParameters={props.currentItemParameters}
                />
                <div className="container home_page_container">
                    {props.userItems.map(item =>
                        <CreateUsersItems
                            editUser={props.editUser}
                            deleteUser={props.deleteUser}
                            item={item}
                            key={item.id}
                            currentItemParameters={props.currentItemParameters}

                        />)}
                </div>
            </main>
            <footer className="footer"></footer>
        </div>
    )
}

export default CreateUsersPage;