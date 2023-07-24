import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isConnected: false
}

const connectWallet = createSlice({
    name: 'connectWallet',
    initialState,
    reducers: {
        updateWalletStatus: (state, action) => {
            console.log('wallet status', action.payload)
            state.isConnected = true
        },

    },
})

export const { updateWalletStatus } = connectWallet.actions

export default connectWallet.reducer