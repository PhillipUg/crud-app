import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserList from './components/User/UserList';
import UserAdd from './components/User/UserAdd';

function App() {
    return (
        <Provider store={store}>
            <div>
                <UserAdd />
                <UserList />
            </div>
        </Provider>
    );
}

export default App;
