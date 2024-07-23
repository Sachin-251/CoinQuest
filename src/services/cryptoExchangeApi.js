import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoExchangeHeaders = {
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.REACT_APP_EXCHANGE_RAPIDAPI_HOST
  };

const baseUrl = process.env.REACT_APP_EXCHANGE_API_URL;

const createRequest = (url) => ({url, headers: cryptoExchangeHeaders});

export const cryptoExchangeApi = createApi({
    reducerPath: 'cryptoExchangeApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoExchange: builder.query({
            query: () => createRequest(`/exchanges`),
        })
    })
})

export const { useGetCryptoExchangeQuery } = cryptoExchangeApi;