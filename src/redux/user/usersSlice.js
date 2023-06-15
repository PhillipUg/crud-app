import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersApi from '../../api/usersApi';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await usersApi.get('/users');
        return response.data;
    }
);

export const addUser = createAsyncThunk(
    'users/addUser',
    async (user) => {
        const response = await usersApi.post('/users', user);
        return response.data;
    }
);

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async ({ id, user }) => {
        const response = await usersApi.put(`/users/${id}`, user);
        return response.data;
    }
);

export const deleteUser = createAsyncThunk(
    'users/deleteUser',
    async (id) => {
        await usersApi.delete(`/users/${id}`);
        return id;
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: { entities: [], loading: false },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.entities = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(addUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.loading = false;
            state.entities.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.entities.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.entities[index] = action.payload;
            }
        });
        builder.addCase(updateUser.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.entities.findIndex(user => user.id === action.payload);
            if (index !== -1) {
                state.entities.splice(index, 1);
            }
        });
        builder.addCase(deleteUser.rejected, (state) => {
            state.loading = false;
        });
    },
});

export default usersSlice.reducer;

export const selectUsers = state => state.users.entities;
export const selectUsersLoading = state => state.users.loading;