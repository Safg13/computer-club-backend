const url = 'https://jsonplaceholder.typicode.com/posts'; //testURL
const htmlBody = document.querySelector('.users_body');
const htmlContainer = document.querySelector('.users_conteiner');

const usersContainer = ReactDOM.createRoot(
    document.querySelector('.users_conteiner')
)

const pageEventsDiv = ReactDOM.createRoot(
    document.querySelector('.page_events')
)

const pageEventsDiv2 = ReactDOM.createRoot(
    document.querySelector('.page_events2')
)

class UserItemCreator extends React.Component {
    constructor(props) {
        super(props);
        this.pageBlockerOn = this.pageBlockerOn.bind(this);
        this.pageBlockerOff = this.pageBlockerOff.bind(this);
        this.openUpdateWindow = this.openUpdateWindow.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.closeUpdateWindow = this.closeUpdateWindow.bind(this);
        this.confirmUpdate = this.confirmUpdate.bind(this);

        this.state = { pageBlockerState: false };
    }

    pageBlockerOn() {
        this.setState({ pageBlockerState: true })
        const pageBlock = <div className="page_blocker"></div>;
        pageEventsDiv2.render(pageBlock);
    };

    pageBlockerOff() {
        this.setState({ pageBlockerState: false });
        pageEventsDiv2.render(null);

    };

    confirmUpdate() {
        user = {
            id: this.props.id,
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            password: document.getElementById("password").value
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }

        fetch(PUTUserUrl + this.props.id, requestOptions);

        this.closeUpdateWindow();
    }

    closeUpdateWindow() {
        this.pageBlockerOff();
        pageEventsDiv.render(null);
    };

    openUpdateWindow() {
        this.pageBlockerOn();

        const editorWindow = <div className="editor_window flex">
            <a className="editor_window_close" onClick={this.closeUpdateWindow} tabIndex="1"><svg width="25px" height="25px" viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" />
            </svg></a>
            <h2 className="editor_window_title">Редактирование</h2>
            <div className="editor_window_place_div">
                <div>
                    <span className="editor_window_label">id</span>
                    <input type="text" id="id" value={this.props.id} className="form_place editor_window_place--non-active" readOnly></input>
                </div>
                <div>
                    <span className="editor_window_label">name</span>
                    <input type="text" id="name" defaultValue={this.props.name} className="form_place editor_window_place"></input>
                </div>
                <div>
                    <span className="editor_window_label">email</span>
                    <input type="text" id="email" defaultValue={this.props.email} className="form_place editor_window_place"></input>
                </div>
                <div>
                    <span className="editor_window_label">phone</span>
                    <input type="text" id="phone" defaultValue={this.props.phone} className="form_place editor_window_place"></input>
                </div>
                <div>
                    <span className="editor_window_label">password</span>
                    <input type="text" id="password" defaultValue={this.props.password} className="form_place editor_window_place"></input>
                </div>
            </div>
            <button onClick={this.confirmUpdate} className="editor_window_submit">Принять</button>
        </div>

        pageEventsDiv.render(editorWindow);

    };

    deleteUser() {
        fetch((DELETEUserUrl + this.props.id), {
            method: 'DELETE'
        });
        document.querySelector('.users_conteiner').removeChild(document.querySelector('.user_item'));
    };

    render() {
        return <div className="user_item flex" userid={this.props.id}>
            <div className="user_item_info flex">
                <div className="item_info_userId"><mark>id: </mark>{this.props.id}</div>
                <div className="item_info_userId"><mark>name: </mark>{this.props.name}</div>
                <div className="item_info_userId"><mark>email: </mark>{this.props.email}</div>
                <div className="item_info_userId"><mark>phone: </mark>{this.props.phone}</div>
                <div className="item_info_userId"><mark>password: </mark>{this.props.password}</div>
            </div>
            <div className="user_item_buttons flex">
                <button className="user_item_btn" onClick={this.openUpdateWindow}>Редактировать</button>
                <button className="user_item_btn user_item_delete_btn" onClick={this.deleteUser}>Удалить</button>
            </div>
        </div>;
    }
}

function getUsers() {
    fetch(GETusersUrl)
        .then(response => response.json())
        .then(data => {
            const userItems = data.map(user => (
                <UserItemCreator
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    password={user.password}
                />
            ));

            usersContainer.render(
                <React.StrictMode>
                    <div>{userItems}</div>
                </React.StrictMode>
            );
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

getUsers();






