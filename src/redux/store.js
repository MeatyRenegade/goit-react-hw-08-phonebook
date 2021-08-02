import { configureStore } from '@reduxjs/toolkit';
// import { persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import contactsReducer from './contacts/contacts-reducers';
import authReducers from './auth/auth-reducers';

const store = configureStore({
  reducer: {
    auth: authReducers,
    contacts: contactsReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),

  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);

export default store;
