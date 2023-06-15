import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteUser} from '../../redux/user/usersSlice';
import Button from "../Common/Button";

function UserDelete({userId}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteUser(userId));
    };

    return <Button
        onClick={handleDelete}
        className={'button button__delete'}
        text="Delete"
    />;
}

export default UserDelete;
