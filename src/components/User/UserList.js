import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers, selectUsers, selectUsersLoading} from '../../redux/user/usersSlice';
import UserUpdate from './UserUpdate';
import UserDelete from './UserDelete';
import Loader from "../Common/Loader";
import Button from "../Common/Button";
import '../../styles/User/UserList.css';

function UserList() {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const loading = useSelector(selectUsersLoading);
    const [selectedUserId, setSelectedUserId] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleUpdateClick = (id) => {
        setSelectedUserId(id);
    };

    if (loading) return <Loader/>;


    return (
        <div className={'list'}>
            {users.map(user => (
                <div key={user.id} className={'list__item'}>
                    <div>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                    {selectedUserId === user.id ? (
                        <>
                            <UserUpdate user={user}/>
                            <Button
                                onClick={() => setSelectedUserId(null)}
                                text={'Cancel'}
                                className={'button button__cancel'}
                            />
                        </>
                    ) : (
                        <>
                            <Button
                                onClick={() => handleUpdateClick(user.id)}
                                text={'Update'}
                                className={'button button__update'}
                            />
                            <UserDelete userId={user.id}/>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default UserList;
