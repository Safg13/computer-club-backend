import React from 'react';
import { root } from '.';
import Users from './users';


function App() {
  function UsersPage() {
    root.render(
      <Users />
    )
  }

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
      <main className="main">
        <div className="container home_page_container">
          <ul className="home_page_buttons_list flex">
            <li className="home_page_buttons_item flex">

            </li>
            <li className="home_page_buttons_item flex">
              <a onClick={UsersPage} className="home_page_link flex">
                <span>Просмотр пользователей</span>
              </a>
            </li>
            <li className="home_page_buttons_item flex">
              <a href="aboutUs.html" className="home_page_link flex">
                <span>О нас</span>
              </a>
            </li>

          </ul>
        </div>
      </main>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
