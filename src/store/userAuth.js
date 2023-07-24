import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isUser: false
}

const userAuth = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        updateUserStatus: (state, action) => {

            state.isUser = true
        },

    },
})

export const { updateUserStatus } = userAuth.actions

export default userAuth.reducer