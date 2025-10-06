import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/counter/counterSlice'
import colorReducer from '../Features/counter/colorSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    color: colorReducer
  },
})