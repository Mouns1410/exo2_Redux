import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        get : (state, action) => {
            state.value.push(action.payload)
        },
    } 
})

export const { get } = userSlice.actions
export default userSlice.reducer