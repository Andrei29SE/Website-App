import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  itemAmount: {},
}

const cardSlice = createSlice({
  name: "itemAmount",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.itemAmount.push(action.payload)
    },
  },
})

// Reducers
export const { addToCart } = cardSlice.actions
// Subscription(selectors)
export const selectItems = (state) => state.itemAmount.itemAmount

export default cardSlice.reducer
