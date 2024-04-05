import { configureStore } from '@reduxjs/toolkit';
import yearReducer from './slices/yearSlice';
import raceReducer from './slices/raceSlice';
import pageReducer from './slices/pageSlice';
import modalReducer from './slices/modalSlice';
import circuitReducer from './slices/circuitSlice';
import constructorReducer from './slices/constructorSlice'
import driverReducer from './slices/driverSlice'
// Import your reducers here
// import someReducer from './features/someFeature/someReducer';

export const store = configureStore({
  reducer: {
    year: yearReducer,
    race: raceReducer,
    page: pageReducer,
    modal: modalReducer,
    circuit: circuitReducer,
    constructors: constructorReducer,
    driver: driverReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(yourMiddleware),
  // You can add more middleware here
  // devTools: process.env.NODE_ENV !== 'production',
  // This enables Redux DevTools in non-production environments
});

// If you're using TypeScript, you might also want to define the RootState and AppDispatch types
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
