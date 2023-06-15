import React from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/user/usersSlice';
import Form from "../Common/Form";

function UserAdd() {
    const dispatch = useDispatch();

    const handleSubmit = (user) => {
        dispatch(addUser(user));
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} buttonText="Add User" title="Add User" buttonClass={'button button__create'} />
        </div>
    );
}

export default UserAdd;
