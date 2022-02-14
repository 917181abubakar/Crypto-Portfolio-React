import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
    
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'ad4e73d845msh17f3e688733f9acp1d94e9jsnb0cf1b594fe3'
     
};


const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl:'https://coinranking1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins'),
    })
})
});

export const {
    useGetCryptosQuery,
    // useGetCryptoDetailsQuery,
    // useGetExchangesQuery,
    // useGetCryptoHistoryQuery,
  } = cryptoApi;