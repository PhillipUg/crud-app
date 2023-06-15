import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './user/usersSlice';

const rootReducer = combineReducers({
    users: usersReducer
});

export default rootReducer;