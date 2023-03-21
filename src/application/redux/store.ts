import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducers';

const store = configureStore({
	reducer: rootReducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export type AppState = ReturnType<typeof store.getState>;

export default store;
