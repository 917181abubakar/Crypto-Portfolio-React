import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../Server/cryptoApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    
  },
});