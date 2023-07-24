import { configureStore } from '@reduxjs/toolkit'
import connectWallet from './walletSlice'
import userAuth from './userAuth'
export const store = configureStore({
    reducer: {
        connectWallet: connectWallet,
        userAuth: userAuth
    },
})