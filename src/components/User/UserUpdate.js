import React from 'react';
import {useDispatch} from 'react-redux';
import {updateUser } from '../../redux/user/usersSlice';
import Form from '../Common/Form';
import '../../styles/User/UserUpdate.css';

function UserUpdate({ user }) {
    const dispatch = useDispatch();

    const handleSubmit = (updatedUser) => {
        dispatch(updateUser({id: user.id, user: updatedUser}));
    };

    return user && (
        <div className={'list__update'}>
            <Form onSubmit={handleSubmit} initialData={user} buttonText="Save" buttonClass={'button button__update'} formClass={'form__update'} />
        </div>
    );
}

export default UserUpdate;
