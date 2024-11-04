import { cardReducer } from "./slices/cardSlice"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {
    items: cardReducer,
  },
})

export default store
