import { createSlice } from "@reduxjs/toolkit";


export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const userSlice = createSlice({
    name: 'user',
    initialState:{
        data: [],
        counter: 0,
        status: STATUSES.IDLE
    },
    reducers:{
        setUsers(state, action){
            state.data = action.payload
        },
        setCounter(state){
            state.counter = state.counter + 1
        }
    }


})

export const { setUsers, setCounter } = userSlice.actions;
export default userSlice.reducer;