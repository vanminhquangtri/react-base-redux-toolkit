import { createSlice } from '@reduxjs/toolkit';

const Reducer = createSlice({
    name: 'Number',
    initialState: { count: 0 },
    reducers: {
        increaseNumber: (state) => ({
            ...state,
            count: state.count + 1
        }),
        decreaseNumber: (state) => ({
            ...state,
            count: state.count - 1
        }),
        assignNumber: (state, action) => ({
            ...state,
            count: action.payload
        })
    }
})

export const { increaseNumber, decreaseNumber, assignNumber } = Reducer.actions

export default Reducer.reducer