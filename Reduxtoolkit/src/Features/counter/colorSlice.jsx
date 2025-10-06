import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}
export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
      colorchange: (state) => {
      state.value += 10
    },
    colordecrement: (state) => {
      state.value -= 5
    },
    colorincrementByAmount: (state, action) => {
      console.log(action,"edwsfgred")
      state.value += Number(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { colorchange, colordecrement, colorincrementByAmount} = colorSlice.actions
export default colorSlice.reducer