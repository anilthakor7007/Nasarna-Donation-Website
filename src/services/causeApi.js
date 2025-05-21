import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const causeApi = createApi ({
    reducerPath: 'causeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://nasarna-backend.onrender.com/api/',


    }),
    endpoints: (builder) => ({
        getCause : builder.query({
            query: () => `causes`,
            
        }),
        getCauseById: builder.query({
            query: (id) => `causes/${id}`,
 
        }),
    }),
})

export const { useGetCauseQuery } = causeApi;