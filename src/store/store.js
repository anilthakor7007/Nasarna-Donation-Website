import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { causeApi } from '../services/causeApi'

export const store = configureStore({
  reducer: {
    [causeApi.reducerPath]: causeApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(causeApi.middleware),
})

setupListeners(store.dispatch)