import { configureStore } from '@reduxjs/toolkit'
import counter from "./features/count.slice"
import wishlist from './features/wishlist.slice'
import cart from './features/cart.slice'

export const store = configureStore({
  reducer: {
    counter,
    wishlist,
    cart,
    // accessToken,
    // profile,
  },
})
